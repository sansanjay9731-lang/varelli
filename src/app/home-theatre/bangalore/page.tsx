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

const service = getServiceBySlug("home-theatre")!;
const city = getCityBySlug("bangalore")!;

export const metadata: Metadata = generatePageMetadata({
  title: "Home Theatre Installation Bangalore — Luxury Living Room Audio | VARELLI",
  description: "VARELLI designs luxury living room home theatres with architectural in-wall speakers, 4K laser displays, and Dolby Atmos calibration across Bangalore.",
  path: "/home-theatre/bangalore",
  keywords: [
    "home theatre Bangalore",
    "home theatre installation Bangalore",
    "home theatre dealers in Bangalore",
    "home theatre cost Bangalore",
    "best home theatre in Bangalore",
    "Dolby Atmos home theatre Bangalore",
    "architectural speakers Bangalore",
    "home theatre Whitefield Bangalore",
    "home theatre Koramangala",
    "home theatre Indiranagar",
    "home theatre soundproofing Bangalore",
  ],
});

export default function BangaloreServicePage() {
  const lbSchema = buildLocalBusinessSchema({
    city: "Bangalore",
    url: "https://varelli.in/home-theatre/bangalore",
    description: "VARELLI designs " + service.name.toLowerCase() + " systems for luxury residences in Bangalore."
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
              { name: service.name, href: "/home-theatre" },
              { name: "Bangalore", href: "/home-theatre/bangalore" },
            ]}
          />
          <div className="mt-6 max-w-3xl">
            <span className="badge-mono block mb-5">{service.name} · Bangalore</span>
            <h1 className="font-display text-[clamp(2.2rem,5vw,4rem)] font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text-primary)] mb-5">
              {city.headline}
            </h1>
            <p className="text-[var(--text-secondary)] text-lg leading-relaxed font-body">{city.description}</p>
          </div>
        </div>
      </section>

      <section className="section-padding border-b border-[var(--border)]">
        <div className="container-varelli">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <p className="badge-mono mb-5">{service.name} in Bangalore</p>
              <h2 className="font-display text-3xl font-bold tracking-[-0.02em] text-[var(--text-primary)] mb-5">
                Intelligent living for
                <br />
                <span className="text-[var(--text-secondary)]">Bangalore's finest residences.</span>
              </h2>
              <p className="text-[var(--text-secondary)] leading-relaxed font-body mb-4">
                Bangalore's luxury residential market — from Whitefield villa estates to Koramangala penthouses and Sadashivanagar bungalows — demands systems of the highest calibre. VARELLI engineers bespoke solutions specifically for each residence.
              </p>
              <p className="text-[var(--text-secondary)] leading-relaxed font-body">
                Our Bangalore projects span lighting and climate control, motorized shading, private cinema, security, and fresh air ventilation — all integrated into a single, unified ecosystem.
              </p>
            </div>
            <div>
              <p className="badge-mono mb-5">Areas We Serve in Bangalore</p>
              <div className="flex flex-wrap gap-2">
                {city.localities?.map((area) => (
                  <span
                    key={area}
                    className="px-3 py-1.5 border border-[var(--border)] rounded text-xs text-[var(--text-secondary)] font-body"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding border-b border-[var(--border)]">
        <div className="container-varelli">
          <p className="badge-mono mb-6">Related Services in Bangalore</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { name: "Home Automation Bangalore", href: "/home-automation/bangalore" },
              { name: "Private Cinema Bangalore", href: "/private-cinema/bangalore" },
              { name: "Home Theatre Bangalore", href: "/home-theatre/bangalore" },
              { name: "Fresh Air Ventilation Bangalore", href: "/fresh-air-ventilation/bangalore" },
              { name: "Central Vacuum Bangalore", href: "/central-vacuum/bangalore" },
            ].filter(item => item.href !== "/home-theatre/bangalore").slice(0, 4).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="glass-card p-4 text-sm font-body text-[var(--text-secondary)] hover:text-[var(--gold)] hover:border-[var(--border-hover)] transition-all duration-200"
              >
                {item.name} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FAQSection faqs={city.faqs} heading={"Common Questions — " + service.name + " in Bangalore"} />
      <ServiceCTA serviceName={service.name + " in Bangalore"} />
    </>
  );
}
