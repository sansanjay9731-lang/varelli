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

const service = getServiceBySlug("home-networking")!;

export const metadata: Metadata = generatePageMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  path: "/home-networking",
  keywords: service.keywords,
});

const relatedServices = [
  { name: "Smart Security", href: "/home-security" },
  { name: "Home Automation", href: "/home-automation" },
  { name: "Residence Design Studio", href: "/studio" },
];

export default function Page() {
  const schema = buildServiceSchema({
    name: service.name,
    description: service.description,
    url: "https://varelli.in/home-networking",
  });

  const packages = SERVICE_PACKAGES["home-networking"] || [];

  return (
    <>
      <SchemaOrg schema={schema} />
      <ServiceHero
        title={service.headline}
        subheadline={service.subheadline}
        image={service.image}
        imageAlt={service.imageAlt}
        badge={service.name}
        breadcrumbs={[{ name: service.name, href: "/home-networking" }]}
      />
      <ServiceIntro
        description={service.description}
        relatedServices={relatedServices}
      />
      <CapabilityGrid capabilities={service.capabilities} />
      <SolutionPackageGrid
        serviceTitle="Enterprise Structured Networking & WiFi 7"
        serviceCategory="Residential Network Infrastructure"
        subtitle="Ubiquiti UniFi & Ruckus 10GbE fiber optic backbones, multi-gigabit PoE+ switching, and zero-dead-zone whole-estate WiFi 7 coverage."
        packages={packages}
      />
      <ComparisonMatrix
        title="Why Enterprise Managed Networking Outperforms ISP Routers & Consumer Mesh"
        subtitle="10GbE fiber multi-gigabit throughput with isolated IoT VLAN security."
      />
      <FAQSection faqs={service.faqs} />
      <ServiceCTA serviceName={service.name} />
    </>
  );
}
