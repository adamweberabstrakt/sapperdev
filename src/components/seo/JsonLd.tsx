import { siteConfig } from "@/config/site.config";

export default function JsonLd() {
  const base = siteConfig.url.replace(/\/$/, "");
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${base}/#organization`,
    name: siteConfig.name,
    url: base,
    logo: `${base}/images/sapper-logo-lime.png`,
    image: `${base}/images/sapper-logo-lime.png`,
    email: siteConfig.contact.email,
    telephone: siteConfig.contact.phoneHref.replace("tel:", ""),
    description:
      "B2B appointment setting and pipeline generation through coordinated multi-channel outbound — calling, email, LinkedIn, and direct mail.",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.location.street,
      addressLocality: siteConfig.location.city,
      addressRegion: siteConfig.location.stateAbbr,
      postalCode: siteConfig.location.zip,
      addressCountry: "US",
    },
    areaServed: "US",
    sameAs: [siteConfig.social.linkedin, siteConfig.social.facebook],
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}
