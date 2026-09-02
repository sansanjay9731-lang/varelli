import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { getServiceBySlug } from "@/lib/data/services";
import { getCityBySlug } from "@/lib/data/locations";
import { buildLocalBusinessSchema } from "@/components/seo/schemas/localBusiness";
import { buildFAQSchema } from "@/components/seo/schemas/faqPage";
import SchemaOrg from "@/components/seo/SchemaOrg";
import Breadcrumb from "@/components/layout/Breadcrumb";
import FAQSection from "@/components/sections/service/FAQSection";
import ServiceCTA from "@/components/sections/service/ServiceCTA";
import Link from "next/link";

const service = getServiceBySlug("private-cinema")!;
const city = getCityBySlug("pune")!;

export const metadata: Metadata = generatePageMetadata({
  title: "Luxury Private Cinema Pune - Dolby Atmos 9.4.6 & Custom Acoustics | VARELLI",
  description: "VARELLI designs luxury private cinema systems for villas, penthouses and private residences in Pune. Architectural integration, European brands & transparent pricing.",
  path: "/private-cinema/pune",
  keywords: [
    "private cinema Pune",
    "smart home Pune",
    "luxury private cinema Pune",
    "private cinema company Pune",
    "KNX certified integrator Pune",
    "villa automation Pune",
    "home theatre Pune",
    "Dolby Atmos Pune",
  ],
});

export default function PunePrivatecinemaPage() {
  const lbSchema = buildLocalBusinessSchema({
    city: "Pune",
    url: "https://varelli.co.in/private-cinema/pune",
    description: "VARELLI designs " + service.name.toLowerCase() + " systems for luxury residences in Pune."
  });
  const faqSchema = buildFAQSchema(city.faqs);

  return (
    <>
      <SchemaOrg schema={lbSchema} />
      <SchemaOrg schema={faqSchema} />
      <section className="relative bg-[var(--surface-1)] border-b border-[var(--border)]">
        <div className="relative container-varelli pt-40 pb-16">
          <Breadcrumb
            items={[
              { name: service.name, href: "/private-cinema" },
              { name: "Pune", href: "/private-cinema/pune" },
            ]}
          />
          <div className="mt-6 max-w-3xl">
            <span className="badge-mono block mb-5">{service.name} · Pune</span>
            <h1 className="font-display text-[clamp(2.2rem,5vw,4rem)] font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text-primary)] mb-5">
              {city.headline}
            </h1>
            <p className="font-editorial text-xl text-[var(--text-secondary)] leading-relaxed italic mb-8">
              {city.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="btn-gold px-8 py-3.5 text-xs font-semibold uppercase tracking-wider rounded-full"
              >
                Schedule Pune Consultation
              </Link>
              <Link
                href="/studio"
                className="btn-ghost px-8 py-3.5 text-xs font-semibold uppercase tracking-wider rounded-full"
              >
                Launch Design Studio
              </Link>
            </div>
          </div>
        </div>
      </section>

      {city.localities && (
        <section className="py-16 border-b border-[var(--border)] bg-[#08080A]">
          <div className="container-varelli">
            <p className="badge-mono mb-4">Prime Neighbourhoods</p>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-8">
              Serving Luxury Residences Across Pune
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {city.localities.map((loc) => (
                <div
                  key={loc}
                  className="p-4 rounded-xl bg-[var(--surface-1)] border border-[var(--border)] text-sm text-[var(--text-primary)] font-medium flex items-center justify-between"
                >
                  <span>{loc}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold)]"></span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section-padding border-b border-[var(--border)]">
        <div className="container-varelli max-w-4xl">
          <p className="badge-mono mb-4">Architecture & Engineering</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
            Why Discerning Pune Homeowners Choose VARELLI
          </h2>
          <div className="prose prose-invert max-w-none text-[var(--text-secondary)] space-y-5 text-base leading-relaxed">
            <p>
              Luxury residences in Pune require more than gadget installations - they demand permanent, architecture-led infrastructure. VARELLI integrates decentralized European KNX wired automation, DALI-2 circadian lighting control, Dolby Atmos reference cinema acoustics, and Swiss Zehnder ERV fresh air systems into a single invisible ecosystem.
            </p>
            <p>
              Whether you are constructing an independent villa, renovating a heritage penthouse, or fitting out a sea-facing luxury duplex, our team handles complete first-fix electrical CAD coordination, panel building, custom acoustics, and final system commissioning.
            </p>
          </div>
        </div>
      </section>

      <FAQSection faqs={city.faqs} title="Private Cinema in Pune — Frequently Asked Questions" />
      <ServiceCTA serviceName="Private Cinema" />
    </>
  );
}
