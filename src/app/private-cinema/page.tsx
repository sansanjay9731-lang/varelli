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

import Image from "next/image";
import { Sparkles, Check, Volume2 } from "@/components/ui/icons";

const relatedServices = [
  { name: "Living Room Media Rooms", href: "/home-theatre" },
  { name: "Home Automation", href: "/home-automation" },
  { name: "Home Theatre Bangalore", href: "/private-cinema/bangalore" },
  { name: "Residence Design Studio", href: "/studio" },
];

export default function Page() {
  const schema = buildServiceSchema({
    name: "Home Theatre & Private Cinema",
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
        badge="Bespoke Home Theatre"
        breadcrumbs={[{ name: "Home Theatre", href: "/private-cinema" }]}
      />
      <ServiceIntro
        description={service.description}
        relatedServices={relatedServices}
      />

      {/* Featured Star Ceiling & Bespoke Daybed Showcase */}
      <section className="section-padding bg-[var(--surface-1)] border-y border-[var(--border)] overflow-hidden">
        <div className="container-varelli">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 relative group">
              <div className="relative aspect-[3/4] max-h-[640px] w-full rounded-2xl overflow-hidden border border-[var(--border)] shadow-2xl">
                <Image
                  src="/images/home-theatre-star-ceiling.png"
                  alt="VARELLI Bespoke Home Theatre with fiber-optic star ceiling, velvet daybeds, and geometric acoustic wall panelling"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08080A]/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#08080A]/80 backdrop-blur-md border border-[var(--gold)]/20">
                  <div className="flex items-center justify-between text-xs font-mono text-[var(--gold)] mb-1">
                    <span>DOLBY ATMOS 9.4.6 REFERENCE</span>
                    <span>STUDIO ACOUSTICS</span>
                  </div>
                  <p className="text-sm text-[var(--text-primary)] font-display font-semibold">
                    Fiber-Optic Star Ceiling · Custom Velvet Lounger Daybed · Tiered Recliners
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <span className="badge-mono mb-4 block">Architectural Design Language</span>
              <h2 className="font-display text-3xl md:text-5xl font-bold tracking-[-0.02em] text-[var(--text-primary)] mb-6 leading-tight">
                Designed for Absolute Immersion & Ultimate Luxury.
              </h2>
              <p className="text-[var(--text-secondary)] leading-relaxed font-body text-base md:text-lg mb-8">
                Every VARELLI home theatre is an architectural masterpiece crafted from the studs up. We combine
                computational room acoustic isolation (STC 65) with custom geometric wall finishes, concealed Sonus
                Faber reference architectural speakers, motorized 4K laser projection, and hand-woven fiber-optic star
                ceilings.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  {
                    title: "Fiber-Optic Constellation Ceilings",
                    desc: "Micro-optic starlight points programmed with twinkling effects, shooting stars, and circadian dimming scenes.",
                  },
                  {
                    title: "Custom Front-Row Daybed Loungers",
                    desc: "Deep ribbed velvet daybeds and tiered Italian leather motorized cinema recliners designed for long-duration comfort.",
                  },
                  {
                    title: "Studio-Grade Acoustic Geometry",
                    desc: "Concealed bass traps, high-frequency diffusers, and tuned resonance absorbers hidden behind bespoke fabric and fluted timber panels.",
                  },
                  {
                    title: "Single-Touch Cinema Automation",
                    desc: "One touch dims ambient sconces, activates the star ceiling, lowers the 150-inch Cinemascope screen, and fires up 4K laser projection.",
                  },
                ].map((feature, i) => (
                  <div key={i} className="flex items-start gap-3 p-3.5 rounded-lg bg-[var(--surface-2)] border border-[var(--border)]">
                    <Check className="w-4 h-4 text-[var(--gold)] mt-1 shrink-0" />
                    <div>
                      <h3 className="text-sm font-semibold text-[var(--text-primary)]">{feature.title}</h3>
                      <p className="text-xs text-[var(--text-secondary)] leading-relaxed mt-0.5">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <a
                  href="https://wa.me/919900000000?text=Hello%20VARELLI,%20I'd%20like%20to%20design%20a%20bespoke%20Home%20Theatre%20with%20star%20ceiling%20for%20my%20residence."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold px-8 py-3.5 text-sm font-semibold rounded-full font-body inline-flex items-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Design Your Home Theatre</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CapabilityGrid capabilities={service.capabilities} />
      <SolutionPackageGrid
        serviceTitle="Home Theatre & Dolby Atmos"
        serviceCategory="Dedicated Home Theatre"
        subtitle="Experience studio-mastered acoustic performance with Sonus Faber reference speakers, Stewart MicroPerf screens, and Sony/Barco native 4K laser projection."
        packages={packages}
      />
      <ComparisonMatrix
        title="Why VARELLI Home Theatres Outperform Commercial Multiplexes & Standard AV Shops"
        subtitle="Patented 3D acoustic room calibration, micro-perforated projection, and room-in-room acoustic decoupling."
      />
      <FAQSection faqs={service.faqs} />
      <ServiceCTA serviceName="Home Theatre" />
    </>
  );
}
