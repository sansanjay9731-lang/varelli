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

import Link from "next/link";

export default function Page() {
  const schema = buildServiceSchema({
    name: service.name,
    description: service.description,
    url: "https://varelli.co.in/central-vacuum",
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

      {/* 2026 India Pricing Bands & Guide Link */}
      <section className="section-padding bg-[var(--surface-1)] border-t border-[var(--border)]">
        <div className="container-varelli max-w-4xl">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">
            Central Vacuum Cost in India (2026 Price Bands)
          </h2>
          <p className="text-[var(--text-secondary)] text-base leading-relaxed mb-6">
            Unlike portable vacuum cleaners that recirculate micro-dust back into living areas, a built-in central vacuum exhausts 100% of captured allergens outside the thermal envelope. Typical turnkey installations with Canadian Drainvac units and Hide-A-Hose retractable inlets range as follows:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
            <div className="p-6 bg-[var(--surface-2)] border border-[var(--border)] rounded-xl">
              <span className="text-[var(--gold)] font-mono text-xs uppercase tracking-wider">3BHK – 4BHK Penthouse</span>
              <div className="font-display text-2xl font-bold text-white mt-2 mb-2">₹2.8L – ₹4.5L</div>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                2 to 3 Hide-A-Hose retractable inlets, compact Drainvac power unit, silent utility room mounting.
              </p>
            </div>
            <div className="p-6 bg-[var(--surface-2)] border border-[var(--gold)]/30 rounded-xl">
              <span className="text-[var(--gold)] font-mono text-xs uppercase tracking-wider">Luxury Villa (4,500–7,500 sq.ft.)</span>
              <div className="font-display text-2xl font-bold text-[var(--gold)] mt-2 mb-2">₹5.5L – ₹9.5L</div>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                4 to 7 retractable hose inlets covering all levels, heavy-duty cyclonic Drainvac canister, garage utility kit.
              </p>
            </div>
            <div className="p-6 bg-[var(--surface-2)] border border-[var(--border)] rounded-xl">
              <span className="text-[var(--gold)] font-mono text-xs uppercase tracking-wider">Grand Private Estate (8,000+ sq.ft.)</span>
              <div className="font-display text-2xl font-bold text-white mt-2 mb-2">₹11L – ₹18L+</div>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                8 to 14 multi-level inlets, dual-motor Drainvac wet/dry extraction unit, automated drain flushing.
              </p>
            </div>
          </div>
          <div className="p-5 bg-white/5 border border-white/10 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="text-sm font-semibold text-white">Read the Complete Indian Pricing &amp; Specification Guide</div>
              <div className="text-xs text-[var(--text-secondary)]">Detailed piping schedules, rough-in PVC standards, and comparison with portable vacuums.</div>
            </div>
            <Link
              href="/journal/central-vacuum-cost-india-2026"
              className="text-xs font-mono uppercase tracking-wider text-[var(--gold)] border border-[var(--gold)]/30 px-4 py-2 rounded hover:bg-[var(--gold)]/10 transition shrink-0"
            >
              Read Pricing Guide →
            </Link>
          </div>
        </div>
      </section>

      <ComparisonMatrix
        title="Why Built-In Central Vacuum Outperforms Portable & Robot Vacuums"
        subtitle="3x to 5x higher air-watt suction power with 100% exterior dust exhausting."
      />
      <FAQSection faqs={service.faqs} />
      <ServiceCTA serviceName={service.name} />
    </>
  );
}
