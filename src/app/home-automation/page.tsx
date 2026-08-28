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

const service = getServiceBySlug("home-automation")!;

export const metadata: Metadata = generatePageMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  path: "/home-automation",
  keywords: service.keywords,
});

const relatedServices = [
  { name: "Private Cinema", href: "/private-cinema" },
  { name: "Fresh Air IAQ", href: "/fresh-air-ventilation" },
  { name: "Smart Security", href: "/home-security" },
  { name: "Home Networking", href: "/home-networking" },
  { name: "AI Residence Studio", href: "/studio" },
];

export default function Page() {
  const schema = buildServiceSchema({
    name: service.name,
    description: service.description,
    url: "https://varelli.in/home-automation",
  });

  const packages = SERVICE_PACKAGES["home-automation"] || [];

  return (
    <>
      <SchemaOrg schema={schema} />
      <ServiceHero
        title={service.headline}
        subheadline={service.subheadline}
        image={service.image}
        imageAlt={service.imageAlt}
        badge={service.name}
        breadcrumbs={[{ name: service.name, href: "/home-automation" }]}
      />
      <ServiceIntro
        description={service.description}
        relatedServices={relatedServices}
      />
      <CapabilityGrid capabilities={service.capabilities} />
      <SolutionPackageGrid
        serviceTitle="Home Automation & KNX"
        serviceCategory="Smart Home Automation"
        subtitle="Explore our transparent turnkey packages engineered with German KNX standards, Italian Basalte brass keypads, and DALI-2 circadian dimming."
        packages={packages}
      />
      <ComparisonMatrix
        title="Why Choose VARELLI KNX Automation Over Retail Smart Home Hubs"
        subtitle="Comparing open-protocol wired German KNX infrastructure with short-lived wireless smart switches."
      />
      <FAQSection faqs={service.faqs} />
      <ServiceCTA serviceName={service.name} />
    </>
  );
}
