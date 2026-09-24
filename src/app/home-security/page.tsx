import type { Metadata } from "next";
import { getServiceBySlug } from "@/lib/data/services";
import { generatePageMetadata } from "@/lib/metadata";
import { buildServiceSchema } from "@/components/seo/schemas/service";
import SchemaOrg from "@/components/seo/SchemaOrg";
import ServiceHero from "@/components/sections/service/ServiceHero";
import ServiceIntro from "@/components/sections/service/ServiceIntro";
import CapabilityGrid from "@/components/sections/service/CapabilityGrid";
import SolutionPackageGrid from "@/components/sections/service/SolutionPackageGrid";
import ComparisonMatrix from "@/components/sections/service/ComparisonMatrix";
import FAQSection from "@/components/sections/service/FAQSection";
import ServiceCTA from "@/components/sections/service/ServiceCTA";
import { SERVICE_PACKAGES } from "@/lib/data/packages";

const service = getServiceBySlug("home-security")!;

export const metadata: Metadata = generatePageMetadata({
  title: "Smart Home Security & Access Control Bangalore | VARELLI",
  description: "Enterprise villa security in Bangalore. DoorBird German IP video intercoms, ekey biometric access, thermal perimeter AI surveillance & panic automation.",
  path: "/home-security",
  keywords: [
    ...service.keywords,
    "villa security Bangalore",
    "home security Bangalore",
    "biometric access control Bangalore",
    "DoorBird Bangalore",
    "smart security Bangalore",
  ],
});

const relatedServices = [
  { name: "Home Networking", href: "/home-networking" },
  { name: "Home Automation", href: "/home-automation" },
  { name: "Residence Design Studio", href: "/studio" },
];

export default function Page() {
  const schema = buildServiceSchema({
    name: service.name,
    description: service.description,
    url: "https://varelli.co.in/home-security",
  });

  const packages = SERVICE_PACKAGES["home-security"] || [];

  return (
    <>
      <SchemaOrg schema={schema} />
      <ServiceHero
        title={service.headline}
        subheadline={service.subheadline}
        image={service.image}
        imageAlt={service.imageAlt}
        badge={service.name}
        breadcrumbs={[{ name: service.name, href: "/home-security" }]}
      />
      <ServiceIntro
        description={service.description}
        relatedServices={relatedServices}
      />
      <CapabilityGrid capabilities={service.capabilities} />
      <SolutionPackageGrid
        serviceTitle="Smart Security & Biometric Access"
        serviceCategory="Architectural Security"
        subtitle="German DoorBird stainless steel video stations, Optical edge thermal perimeter tracking, and encrypted local biometric storage."
        packages={packages}
      />
      <ComparisonMatrix
        title="Why Enterprise Local-Encrypted Security Outperforms Retail Wireless DIY Cameras"
        subtitle="Zero cloud subscription vulnerability with instant local encrypted on-premise processing."
      />
      <FAQSection faqs={service.faqs} />
      <ServiceCTA serviceName={service.name} />
    </>
  );
}
