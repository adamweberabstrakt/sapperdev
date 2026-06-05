import Link from "next/link";
import { siteConfig } from "@/config/site.config";

export const metadata = {
  title: "Privacy Policy",
  description:
    "How Northbound collects, uses, and discloses your information when you use our website.",
};

const PRIVACY_EMAIL = "info@example.com";

const SECTIONS: { title: string; paras?: string[]; list?: string[] }[] = [
  {
    title: "Information We Collect",
    paras: ["We will collect and process the following personal information about you:"],
    list: ["Name", "Email", "Company Name and Phone Number"],
  },
  {
    title: "How We Use Your Information",
    paras: ["We will use the information that we collect about you for the following purposes:"],
    list: ["Marketing / Promotional", "Targeted advertising"],
  },
  {
    title: "How We Share Your Information",
    paras: [
      "We will not transfer your personal information to any third party without seeking your consent, except in limited circumstances as described below:",
    ],
    list: ["Ad service", "Marketing agencies", "Analytics", "Data collection & process"],
  },
  {
    title: "Retention Of Your Information",
    paras: [
      "We will retain your personal information with us for 180 days or for as long as we need it to fulfill the purposes for which it was collected as detailed in this Privacy Policy. We may need to retain certain information for longer periods such as record-keeping / reporting in accordance with applicable law or for other legitimate reasons like enforcement of legal rights, fraud prevention, etc. Residual anonymous information and aggregate information, neither of which identifies you (directly or indirectly), may be stored indefinitely.",
    ],
  },
  {
    title: "Your Rights",
    paras: [
      `Depending on the law that applies, you may have a right to access and rectify or erase your personal data or receive a copy of your personal data, restrict or object to the active processing of your data, ask us to share (port) your personal information to another entity, withdraw any consent you provided to us to process your data, a right to lodge a complaint with a statutory authority and such other rights as may be relevant under applicable laws. To exercise these rights, you can write to us at ${PRIVACY_EMAIL}. We will respond to your request in accordance with applicable law.`,
      `You may opt-out of direct marketing communications or the profiling we carry out for marketing purposes by writing to us at ${PRIVACY_EMAIL}.`,
      "Do note that if you do not allow us to collect or process the required personal information, or withdraw the consent to process the same for the required purposes, you may not be able to access or use the services for which your information was sought.",
    ],
  },
  {
    title: "Cookies",
    paras: [
      "We use cookies and similar tracking technologies to operate and improve the Service. To learn more about how we use these and your choices in relation to these tracking technologies, please refer to our Cookie Policy.",
    ],
  },
  {
    title: "Security",
    paras: [
      "The security of your information is important to us and we will use reasonable security measures to prevent the loss, misuse or unauthorized alteration of your information under our control. However, given the inherent risks, we cannot guarantee absolute security and consequently, we cannot ensure or warrant the security of any information you transmit to us and you do so at your own risk.",
    ],
  },
  {
    title: "Third Party Links & Use Of Your Information",
    paras: [
      "Our Service may contain links to other websites that are not operated by us. This Privacy Policy does not address the privacy policy and other practices of any third parties, including any third party operating any website or service that may be accessible via a link on the Service. We strongly advise you to review the privacy policy of every site you visit. We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.",
    ],
  },
  {
    title: "Grievance / Data Protection Officer",
    paras: [
      `If you have any queries or concerns about the processing of your information that is available with us, you may email our Grievance Officer at ${siteConfig.name}, ${siteConfig.location.full}, email: ${PRIVACY_EMAIL}. We will address your concerns in accordance with applicable law.`,
    ],
  },
];

export default function PrivacyPolicy() {
  const intro = `This Privacy Policy describes the policies of ${siteConfig.name}, ${siteConfig.location.full}, United States of America, email: ${PRIVACY_EMAIL}, phone: ${siteConfig.contact.phone}, on the collection, use and disclosure of your information that we collect when you use our website (the "Service"). By accessing or using the Service, you are consenting to the collection, use and disclosure of your information in accordance with this Privacy Policy. If you do not consent to the same, please do not access or use the Service.`;
  const modify =
    "We may modify this Privacy Policy at any time without any prior notice to you and will post the revised Privacy Policy on the Service. The revised Policy will be effective 180 days from when the revised Policy is posted in the Service and your continued access or use of the Service after such time will constitute your acceptance of the revised Privacy Policy. We therefore recommend that you periodically review this page.";

  return (
    <>
      <section className="relative overflow-hidden bg-ink text-bone">
        <div className="absolute inset-0 bg-tactical-grid" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/0 via-ink/30 to-ink" aria-hidden />
        <div className="relative mx-auto max-w-3xl px-4 pt-24 pb-10 sm:px-6 sm:pt-28 lg:px-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-steel">Legal / Privacy</p>
          <h1 className="mt-6 font-display text-5xl uppercase leading-[0.95] sm:text-6xl">Privacy Policy</h1>
          <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.16em] text-steel">
            Last updated Sep 8, 2025 · Effective Sep 8, 2025
          </p>
        </div>
      </section>

      <article className="bg-ink text-bone">
        <div className="mx-auto max-w-3xl space-y-5 px-4 py-12 sm:px-6 lg:px-8">
          <p className="text-[17px] leading-relaxed text-bone/75">{intro}</p>
          <p className="text-[17px] leading-relaxed text-bone/75">{modify}</p>

          {SECTIONS.map((s, i) => (
            <div key={s.title} className="pt-4">
              <h2 className="font-display text-2xl uppercase text-bone">
                <span className="text-acid">{i + 1}.</span> {s.title}
              </h2>
              {s.paras?.map((p, j) => (
                <p key={j} className="mt-4 text-[17px] leading-relaxed text-bone/75">{p}</p>
              ))}
              {s.list && (
                <ul className="mt-4 space-y-2">
                  {s.list.map((item) => (
                    <li key={item} className="flex gap-3 text-bone/75">
                      <span className="mt-1.5 font-mono text-acid">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          <p className="pt-6 text-sm text-bone/55">
            Questions about this policy? Reach us via the{" "}
            <Link href="/contact" className="text-acid hover:underline">contact page</Link>.
          </p>
        </div>
      </article>
    </>
  );
}
