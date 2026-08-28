export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "VARELLI",
  url: "https://varelli.in",
  logo: "https://varelli.in/images/varelli-logo.png",
  description:
    "VARELLI designs and engineers intelligent residential environments for luxury villas, estates and private residences across India. Home automation, private cinema, fresh air ventilation, central vacuum, and smart security.",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    areaServed: "IN",
    availableLanguage: ["English", "Hindi"],
  },
  sameAs: [
    "https://instagram.com/varelliindia",
    "https://linkedin.com/company/varelli",
  ],
  areaServed: {
    "@type": "Country",
    name: "India",
  },
};
