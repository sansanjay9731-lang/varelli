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

const service = getServiceBySlug("home-theatre")!;

export const metadata: Metadata = generatePageMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  path: "/home-theatre",
  keywords: service.keywords,
});

const relatedServices = [
  { name: "Private Cinema", href: "/private-cinema" },
  { name: "Home Automation", href: "/home-automation" },
  { name: "Home Theatre Bangalore", href: "/home-theatre/bangalore" },
  { name: "Residence Design Studio", href: "/studio" },
];

export default function Page() {
  const schema = buildServiceSchema({
    name: service.name,
    description: service.description,
    url: "https://varelli.in/home-theatre",
  });

  const packages = SERVICE_PACKAGES["home-theatre"] || [];

  return (
    <>
      <SchemaOrg schema={schema} />
      <ServiceHero
        title={service.headline}
        subheadline={service.subheadline}
        image={service.image}
        imageAlt={service.imageAlt}
        badge={service.name}
        breadcrumbs={[{ name: service.name, href: "/home-theatre" }]}
      />
      <ServiceIntro
        description={service.description}
        relatedServices={relatedServices}
      />
      <CapabilityGrid capabilities={service.capabilities} />
      <SolutionPackageGrid
        serviceTitle="Home Theatre & Media Salons"
        serviceCategory="Architectural Media Rooms"
        subtitle="Discrete architectural in-wall loudspeakers, motorized drop-down screens, and audiophile stereo systems seamlessly blended into luxury living spaces."
        packages={packages}
      />
      <ComparisonMatrix
        title="Why Architectural Custom Audio Outperforms Consumer Soundbars & AV Boxes"
        subtitle="Discrete acoustic enclosure design and custom equalization tailored to your living room acoustics."
      />
      <FAQSection faqs={service.faqs} />
      <ServiceCTA serviceName={service.name} />
    </>
  );
}
