import Link from "next/link";
import { siteConfig } from "@/config/site.config";

export const metadata = {
  title: "Terms of Use",
  description:
    "The terms governing your access to and use of the Sapper Consulting website.",
};

// DRAFT: standard website Terms of Use template. Have legal counsel review and
// adjust before relying on this for production.
const CONTACT_EMAIL = "info@sapperconsulting.com";

const SECTIONS: { title: string; paras?: string[]; list?: string[] }[] = [
  {
    title: "Acceptance of Terms",
    paras: [
      `These Terms of Use ("Terms") govern your access to and use of the website operated by ${siteConfig.name} ("Company", "we", "us", or "our"). By accessing or using our website (the "Service"), you agree to be bound by these Terms and our Privacy Policy. If you do not agree, please do not access or use the Service.`,
    ],
  },
  {
    title: "Eligibility",
    paras: [
      "You must be at least 18 years of age and have the legal capacity to enter into a binding agreement to use the Service. By using the Service, you represent and warrant that you meet these requirements.",
    ],
  },
  {
    title: "Use of the Site",
    paras: ["You agree to use the Service only for lawful purposes. You agree not to:"],
    list: [
      "Violate any applicable federal, state, local, or international law or regulation;",
      "Infringe the intellectual property or other rights of any third party;",
      "Transmit any unlawful, harassing, defamatory, abusive, or otherwise harmful content;",
      "Attempt to gain unauthorized access to the Service, its servers, or related systems;",
      "Introduce viruses, malware, or other malicious or harmful code;",
      "Use automated means such as bots or scrapers to access or collect data without our prior written consent;",
      "Interfere with or disrupt the integrity or performance of the Service.",
    ],
  },
  {
    title: "Intellectual Property",
    paras: [
      `The Service and its original content, features, and functionality — including text, graphics, logos, images, and design — are owned by ${siteConfig.name} and are protected by United States and international copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, modify, publicly display, or create derivative works from any part of the Service without our prior written consent.`,
    ],
  },
  {
    title: "Third-Party Links and Services",
    paras: [
      "The Service may contain links to third-party websites or services that are not owned or controlled by us. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party sites or services. We encourage you to review the terms and policies of any third-party sites you visit.",
    ],
  },
  {
    title: "Disclaimer of Warranties",
    paras: [
      'The Service is provided on an "as is" and "as available" basis without warranties of any kind, whether express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, title, and non-infringement. We do not warrant that the Service will be uninterrupted, secure, or error-free, or that any content is accurate, complete, or current. Your use of the Service is at your own risk.',
    ],
  },
  {
    title: "Limitation of Liability",
    paras: [
      `To the fullest extent permitted by law, ${siteConfig.name} and its officers, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, arising out of or related to your use of, or inability to use, the Service, whether based on warranty, contract, tort, or any other legal theory, even if we have been advised of the possibility of such damages.`,
    ],
  },
  {
    title: "Indemnification",
    paras: [
      `You agree to defend, indemnify, and hold harmless ${siteConfig.name} and its affiliates from and against any claims, liabilities, damages, losses, and expenses, including reasonable legal fees, arising out of or in any way connected with your access to or use of the Service or your violation of these Terms.`,
    ],
  },
  {
    title: "Privacy",
    paras: [
      "Your use of the Service is also governed by our Privacy Policy, which is incorporated into these Terms by reference. Please review it to understand how we collect, use, and disclose your information.",
    ],
  },
  {
    title: "Changes to These Terms",
    paras: [
      "We may revise these Terms at any time in our sole discretion. Revised Terms will be effective when posted to the Service, and your continued use of the Service after such changes constitutes your acceptance of the revised Terms. We recommend that you periodically review this page.",
    ],
  },
  {
    title: "Governing Law",
    paras: [
      "These Terms are governed by and construed in accordance with the laws of the State of Missouri, without regard to its conflict of law provisions. You agree that any dispute arising out of or relating to these Terms or the Service shall be subject to the exclusive jurisdiction of the state and federal courts located in St. Louis, Missouri.",
    ],
  },
  {
    title: "Contact Us",
    paras: [
      `If you have any questions about these Terms, you may contact us at ${siteConfig.name}, ${siteConfig.location.full}, email: ${CONTACT_EMAIL}, phone: ${siteConfig.contact.phone}.`,
    ],
  },
];

export default function TermsOfUse() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink text-bone">
        <div className="absolute inset-0 bg-tactical-grid" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/0 via-ink/30 to-ink" aria-hidden />
        <div className="relative mx-auto max-w-3xl px-4 pt-24 pb-10 sm:px-6 sm:pt-28 lg:px-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-steel">Legal / Terms</p>
          <h1 className="mt-6 font-display text-5xl uppercase leading-[0.95] sm:text-6xl">Terms of Use</h1>
          <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.16em] text-steel">Last updated Jun 4, 2026</p>
        </div>
      </section>

      <article className="bg-ink text-bone">
        <div className="mx-auto max-w-3xl space-y-5 px-4 py-12 sm:px-6 lg:px-8">
          <p className="text-[17px] leading-relaxed text-bone/75">
            Please read these Terms of Use carefully before using the Service. By accessing or using the
            Service, you agree to be bound by these Terms.
          </p>

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
            Questions about these Terms? Reach us via the{" "}
            <Link href="/contact" className="text-acid hover:underline">contact page</Link>.
          </p>
        </div>
      </article>
    </>
  );
}
