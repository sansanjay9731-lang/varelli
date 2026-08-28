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

const service = getServiceBySlug("central-vacuum")!;

export const metadata: Metadata = generatePageMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  path: "/central-vacuum",
  keywords: service.keywords,
});

const relatedServices = [
  { name: "Fresh Air IAQ", href: "/fresh-air-ventilation" },
  { name: "Home Automation", href: "/home-automation" },
  { name: "Central Vacuum Bangalore", href: "/central-vacuum/bangalore" },
  { name: "Residence Design Studio", href: "/studio" },
];

export default function Page() {
  const schema = buildServiceSchema({
    name: service.name,
    description: service.description,
    url: "https://varelli.in/central-vacuum",
  });

  const packages = SERVICE_PACKAGES["central-vacuum"] || [];

  return (
    <>
      <SchemaOrg schema={schema} />
      <ServiceHero
        title={service.headline}
        subheadline={service.subheadline}
        image={service.image}
        imageAlt={service.imageAlt}
        badge={service.name}
        breadcrumbs={[{ name: service.name, href: "/central-vacuum" }]}
      />
      <ServiceIntro
        description={service.description}
        relatedServices={relatedServices}
      />
      <CapabilityGrid capabilities={service.capabilities} />
      <SolutionPackageGrid
        serviceTitle="Central Vacuum & Retractable In-Wall Systems"
        serviceCategory="Silent Built-In Cleaning"
        subtitle="Canadian heavy-duty Drainvac suction units, retractable Hide-A-Hose in-wall systems, and zero-exhaust allergen elimination."
        packages={packages}
      />
      <ComparisonMatrix
        title="Why Built-In Central Vacuum Outperforms Portable & Robot Vacuums"
        subtitle="3x to 5x higher air-watt suction power with 100% exterior dust exhausting."
      />
      <FAQSection faqs={service.faqs} />
      <ServiceCTA serviceName={service.name} />
    </>
  );
}
