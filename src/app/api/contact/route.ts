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

    // Send email via Resend (skip if no API key)
    const resendKey = process.env.RESEND_API_KEY;
    if (resendKey) {
      const { Resend } = await import("resend");
      const resend = new Resend(resendKey);

      await resend.emails.send({
        from: `${siteConfig.mail.fromName} <${siteConfig.mail.fromAddress}>`,
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
