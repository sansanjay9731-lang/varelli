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

const service = getServiceBySlug("private-cinema")!;

export const metadata: Metadata = generatePageMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  path: "/private-cinema",
  keywords: service.keywords,
});

const relatedServices = [
  { name: "Home Theatre", href: "/home-theatre" },
  { name: "Home Automation", href: "/home-automation" },
  { name: "Private Cinema Bangalore", href: "/private-cinema/bangalore" },
  { name: "AI Residence Studio", href: "/studio" },
];

export default function Page() {
  const schema = buildServiceSchema({
    name: service.name,
    description: service.description,
    url: "https://varelli.in/private-cinema",
  });

  const packages = SERVICE_PACKAGES["private-cinema"] || [];

  return (
    <>
      <SchemaOrg schema={schema} />
      <ServiceHero
        title={service.headline}
        subheadline={service.subheadline}
        image={service.image}
        imageAlt={service.imageAlt}
        badge={service.name}
        breadcrumbs={[{ name: service.name, href: "/private-cinema" }]}
      />
      <ServiceIntro
        description={service.description}
        relatedServices={relatedServices}
      />
      <CapabilityGrid capabilities={service.capabilities} />
      <SolutionPackageGrid
        serviceTitle="Private Cinema & Dolby Atmos"
        serviceCategory="Dedicated Private Cinema"
        subtitle="Experience studio-mastered acoustic performance with Sonus Faber reference speakers, Stewart MicroPerf screens, and Sony/Barco native 4K laser projection."
        packages={packages}
      />
      <ComparisonMatrix
        title="Why VARELLI Private Cinemas Outperform Commercial Multiplexes & Standard AV Shops"
        subtitle="Patented 3D acoustic room calibration, micro-perforated projection, and room-in-room acoustic decoupling."
      />
      <FAQSection faqs={service.faqs} />
      <ServiceCTA serviceName={service.name} />
    </>
  );
}
