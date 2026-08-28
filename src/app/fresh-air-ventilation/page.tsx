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

const service = getServiceBySlug("fresh-air-ventilation")!;

export const metadata: Metadata = generatePageMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  path: "/fresh-air-ventilation",
  keywords: service.keywords,
});

const relatedServices = [
  { name: "Central Vacuum", href: "/central-vacuum" },
  { name: "Home Automation", href: "/home-automation" },
  { name: "Fresh Air Bangalore", href: "/fresh-air-ventilation/bangalore" },
  { name: "Residence Design Studio", href: "/studio" },
];

export default function Page() {
  const schema = buildServiceSchema({
    name: service.name,
    description: service.description,
    url: "https://varelli.in/fresh-air-ventilation",
  });

  const packages = SERVICE_PACKAGES["fresh-air-ventilation"] || [];

  return (
    <>
      <SchemaOrg schema={schema} />
      <ServiceHero
        title={service.headline}
        subheadline={service.subheadline}
        image={service.image}
        imageAlt={service.imageAlt}
        badge={service.name}
        breadcrumbs={[{ name: service.name, href: "/fresh-air-ventilation" }]}
      />
      <ServiceIntro
        description={service.description}
        relatedServices={relatedServices}
      />
      <CapabilityGrid capabilities={service.capabilities} />
      <SolutionPackageGrid
        serviceTitle="Fresh Air Ventilation & IAQ"
        serviceCategory="Swiss ERV & Indoor Air Quality"
        subtitle="Maintain pristine, hospital-grade indoor air quality with Swiss Zehnder Energy Recovery Ventilation, positive pressure, and True HEPA H13 filtration."
        packages={packages}
      />
      <ComparisonMatrix
        title="Why Standalone Air Purifiers Fail Compared to Centralized Swiss ERV"
        subtitle="Why continuous fresh outdoor air exchange and positive pressure are essential for true luxury living health."
      />
      <FAQSection faqs={service.faqs} />
      <ServiceCTA serviceName={service.name} />
    </>
  );
}
