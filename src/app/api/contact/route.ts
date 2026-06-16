import { NextRequest, NextResponse } from "next/server";
import { siteConfig } from "@/config/site.config";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, company, phone, message } = body;

    // Validate required fields
    if (!name || !email || !company) {
      return NextResponse.json(
        { error: "Name, email, and company are required." },
        { status: 400 }
      );
    }

    // Send email via Resend (skip if no API key). Delivery failures here are
    // logged but never fail the request — the lead is still captured + booked
    // via the ChiliPiper router on the client.
    const resendKey = process.env.RESEND_API_KEY;
    if (resendKey) {
      try {
        const { Resend } = await import("resend");
        const resend = new Resend(resendKey);
        const from = `${siteConfig.mail.fromName} <${siteConfig.mail.fromAddress}>`;
        const firstName = name.split(" ")[0] || name;

        // 1) Internal lead notification to the Sapper inbox.
        await resend.emails.send({
          from,
          to: siteConfig.contact.email,
          subject: `New Contact: ${name} from ${company}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Company:</strong> ${company}</p>
            <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
            <p><strong>Message:</strong> ${message || "Not provided"}</p>
          `,
        });

        // 2) Confirmation to the person who submitted.
        await resend.emails.send({
          from,
          to: email,
          subject: `Thanks for reaching out to ${siteConfig.shortName}`,
          html: `
            <h2>Thanks, ${firstName}.</h2>
            <p>We got your message — a ${siteConfig.shortName} strategist will reach out shortly to talk through your pipeline and appointment goals.</p>
            <p>Need us sooner? Call <a href="${siteConfig.contact.phoneHref}">${siteConfig.contact.phone}</a>.</p>
            <p style="color:#475F7C;font-size:12px;margin-top:24px">${siteConfig.name} · ${siteConfig.location.full}</p>
          `,
        });
      } catch (err) {
        console.error("Resend delivery failed (lead still captured via ChiliPiper):", err);
      }
    } else {
      console.log("RESEND_API_KEY not set — skipping email. Form data:", {
        name,
        email,
        company,
        phone,
        message,
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}
