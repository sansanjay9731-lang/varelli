import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import Breadcrumb from "@/components/layout/Breadcrumb";
import FAQSection from "@/components/sections/service/FAQSection";
import ServiceCTA from "@/components/sections/service/ServiceCTA";
import Link from "next/link";

export const metadata: Metadata = generatePageMetadata({
  title: "Fresh Air Ventilation vs Air Purifier — What Actually Works? | VARELLI",
  description:
    "ERV fresh air ventilation vs. air purifier: which actually improves indoor air quality? Technical comparison of CO2, PM2.5, VOC removal, and real IAQ data for Indian homes.",
  path: "/journal/fresh-air-ventilation-vs-air-purifier",
  keywords: [
    "fresh air ventilation vs air purifier India",
    "ERV vs air purifier",
    "HRV vs air purifier India",
    "indoor air quality India",
    "Zehnder fresh air ventilation India",
    "best indoor air quality solution India",
    "home ventilation India",
    "CO2 levels home India",
    "PM2.5 indoor air India",
  ],
});

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Fresh Air Ventilation (ERV) vs Air Purifier — What Actually Improves Your Indoor Air Quality?",
  description:
    "A technical comparison of Energy Recovery Ventilators (ERV) and air purifiers for indoor air quality in Indian homes. Covers CO2, PM2.5, VOC, and humidity control with real performance data.",
  author: {
    "@type": "Organization",
    name: "VARELLI Environmental Systems Team",
    url: "https://varelli.in",
  },
  publisher: {
    "@type": "Organization",
    name: "VARELLI",
    logo: { "@type": "ImageObject", url: "https://varelli.in/images/varelli-logo.png" },
  },
  datePublished: "2025-08-01",
  dateModified: "2025-08-28",
  mainEntityOfPage: "https://varelli.in/journal/fresh-air-ventilation-vs-air-purifier",
};

const faqs = [
  {
    question: "What is an Energy Recovery Ventilator (ERV) and how does it work?",
    answer:
      "An Energy Recovery Ventilator (ERV) is a mechanical fresh air system that continuously exchanges stale indoor air with fresh outdoor air while recovering 75–95% of the thermal energy in the outgoing air. Indoor air is exhausted through one duct while fresh outdoor air enters through another. A heat exchanger transfers heat (and in ERVs, moisture) between these two airstreams without mixing them. The result: your home is continuously supplied with fresh outdoor air at near-indoor-temperature, without the energy penalty of opening windows. Zehnder ComfoAir Q ERVs achieve 95% thermal efficiency per EN 308 standard.",
  },
  {
    question: "What is the difference between an ERV and an HRV?",
    answer:
      "An HRV (Heat Recovery Ventilator) recovers only thermal energy from exhaust air. An ERV (Energy Recovery Ventilator) recovers both thermal energy and moisture. In India's climate — which alternates between dry winter conditions and humid monsoon — an ERV is typically preferable because it can recover moisture in winter (preventing excessive drying of indoor air) and reject excess moisture in monsoon (helping maintain comfortable humidity). VARELLI specifies Zehnder ComfoAir Q ERVs for all Indian luxury residences.",
  },
  {
    question: "What is an air purifier and what does it actually filter?",
    answer:
      "An air purifier is a standalone appliance that filters indoor air through a sequence of filters — typically a pre-filter (dust, hair), a HEPA H13 or H14 filter (particles above 0.3 microns, PM2.5, pollen), and an activated carbon filter (VOCs, odours). Air purifiers are effective at reducing PM2.5 and allergen levels in the air within the room where they are placed, but they do not address CO2 accumulation or introduce fresh outdoor air.",
  },
  {
    question: "Does an air purifier reduce CO2 levels at home?",
    answer:
      "No. Air purifiers do not reduce CO2. CO2 (carbon dioxide) is a gas produced by human breathing and combustion. Air purifiers only filter particles (PM2.5, pollen, dust) and some gaseous VOCs through activated carbon. CO2 can only be reduced by introducing fresh outdoor air — which requires ventilation (opening windows or installing an ERV/HRV system). Indoor CO2 levels above 1,000 ppm cause measurable cognitive impairment; above 2,000 ppm causes fatigue and headaches. A sealed, occupied bedroom without ventilation can reach 2,000+ ppm within 3–4 hours.",
  },
  {
    question: "What is PM2.5 and why does it matter for Indian homes?",
    answer:
      "PM2.5 refers to particulate matter with a diameter of 2.5 micrometres or smaller — fine dust, smoke, combustion particles, and vehicle emissions. PM2.5 penetrates deep into the lungs and enters the bloodstream, causing long-term cardiovascular and respiratory damage. The WHO safe limit is 15 μg/m³ annual average. Most major Indian cities regularly exceed 100–300 μg/m³ during winter months. Both ERV systems (with HEPA filters on the intake) and air purifiers can reduce indoor PM2.5 effectively — but only the ERV addresses CO2 and continuously refreshes the air supply.",
  },
  {
    question: "Do I need both an ERV and an air purifier?",
    answer:
      "In most Indian luxury villa installations, a properly designed ERV system with HEPA-filtered intake makes a separate air purifier redundant for PM2.5 and particle control. VARELLI's Zehnder ComfoAir Q installations include G4 + F7 + F9 filter stages on the outdoor air intake, removing PM2.5, pollen, and allergens before they enter the home. An additional air purifier may be beneficial in rooms with specific VOC sources (new furniture, paint, carpets) during off-gassing periods.",
  },
  {
    question: "How much does fresh air ventilation (ERV) cost in India?",
    answer:
      "A Zehnder ComfoAir Q ERV installation for a 4-bedroom luxury villa (covering all bedrooms and living areas) costs approximately ₹2.5–₹4.5 Lakhs including the Zehnder unit, ducting, insulation, diffusers, CO2 sensors, and commissioning. Smaller 2–3 bedroom apartments typically range from ₹1.8–₹2.8 Lakhs. The Zehnder unit itself has a 10-year manufacturer warranty and filter replacement costs approximately ₹8,000–₹12,000 per year.",
  },
];

export default function FreshAirVentilationVsAirPurifierPage() {
  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <div className="pt-32 pb-16 px-6 max-w-4xl mx-auto">
        <Breadcrumb
          items={[
            { name: "Journal", href: "/journal" },
            { name: "ERV vs Air Purifier", href: "" },
          ]}
        />

        <header className="mt-8 mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[var(--gold)] border border-[var(--gold)]/30 px-3 py-1">
              Health & Air Quality
            </span>
            <span className="text-xs text-[var(--text-muted)]">August 2025 · 10 min read</span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl text-[var(--text-primary)] leading-tight mb-6">
            Fresh Air Ventilation vs. Air Purifier
          </h1>
          <p className="text-xl text-[var(--text-secondary)] leading-relaxed max-w-2xl">
            Most Indian homes have air purifiers. Few have fresh air ventilation. Here is the technical truth about what
            each actually does — and what you really need to breathe well.
          </p>
          <div className="mt-6 pt-6 border-t border-[var(--border)] text-sm text-[var(--text-muted)]">
            Reviewed by the VARELLI Environmental Systems Team · Updated August 2025
          </div>
        </header>

        <div className="bg-[var(--surface-2)] border border-[var(--gold)]/20 rounded-sm p-6 mb-12">
          <p className="text-xs font-mono uppercase tracking-widest text-[var(--gold)] mb-3">The Key Difference</p>
          <p className="text-[var(--text-primary)] leading-relaxed">
            <strong>An air purifier filters the same air inside your home.</strong> A fresh air ventilation system (ERV)
            replaces that stale air with fresh outdoor air — while recovering 95% of the heating/cooling energy. Only an
            ERV reduces CO2. Air purifiers cannot.
          </p>
        </div>

        {/* IAQ pollutant table */}
        <div className="prose prose-invert prose-lg max-w-none mb-6">
          <h2>What Does Each System Actually Remove?</h2>
        </div>

        <div className="overflow-x-auto mb-12">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[var(--surface-2)]">
                <th className="text-left p-4 border border-[var(--border)] text-[var(--gold)] font-mono text-xs uppercase">Pollutant</th>
                <th className="text-center p-4 border border-[var(--border)] text-[var(--text-primary)]">ERV / HRV System</th>
                <th className="text-center p-4 border border-[var(--border)] text-[var(--text-secondary)]">Air Purifier (HEPA)</th>
                <th className="text-left p-4 border border-[var(--border)] text-[var(--text-muted)]">Health Impact</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["CO2 (Carbon Dioxide)", "✅ Eliminated (dilution)", "❌ Not removed", "Fatigue, poor sleep, cognitive impairment above 1,000 ppm"],
                ["PM2.5 (fine particulates)", "✅ With HEPA intake filter", "✅ Highly effective (H13/H14 HEPA)", "Lung and cardiovascular damage"],
                ["PM10 (dust, pollen)", "✅ With G4/F7 filter", "✅ Effective", "Allergies, respiratory irritation"],
                ["VOCs (from furniture, paints)", "⚠️ Partial — dilution helps", "⚠️ Partially (carbon filter)", "Headaches, nausea, long-term organ damage"],
                ["Odours", "✅ Continuous dilution", "⚠️ Partially (carbon filter)", "Comfort and wellbeing"],
                ["Humidity (excess)", "✅ ERV transfers moisture", "❌ Not controlled", "Mold growth, discomfort above 70% RH"],
                ["Humidity (deficiency)", "✅ ERV retains moisture", "❌ Not addressed", "Dry skin, irritated mucous membranes"],
                ["Radon", "✅ Dilution reduces levels", "❌ Not removed", "Leading cause of lung cancer after smoking"],
                ["Bacteria / Viruses", "⚠️ Partial (UV add-on helps)", "⚠️ Partial (H14 HEPA)", "Airborne disease transmission"],
              ].map(([pol, erv, ap, impact], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-[var(--surface-1)]" : ""}>
                  <td className="p-4 border border-[var(--border)] text-[var(--text-secondary)] font-medium">{pol}</td>
                  <td className="p-4 border border-[var(--border)] text-center">{erv}</td>
                  <td className="p-4 border border-[var(--border)] text-center">{ap}</td>
                  <td className="p-4 border border-[var(--border)] text-xs text-[var(--text-muted)]">{impact}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="prose prose-invert prose-lg max-w-none">
          <h2>Why CO2 Is the Hidden IAQ Crisis in Indian Homes</h2>
          <p>
            India's rapidly urbanizing housing stock — sealed double-glazed windows, split AC systems, and concrete
            construction — is producing an indoor CO2 crisis that most homeowners are completely unaware of.
          </p>
          <p>
            In a typical sealed bedroom with two sleeping adults:
          </p>
          <ul>
            <li>CO2 reaches <strong>1,200–1,500 ppm within 2 hours</strong> (outdoor: 420 ppm)</li>
            <li>By morning: <strong>2,000–3,000+ ppm</strong> in a fully sealed room</li>
            <li>WHO research links CO2 above 1,000 ppm to <strong>measurable cognitive impairment</strong></li>
            <li>CO2 above 2,000 ppm is associated with <strong>poor sleep quality</strong> and morning fatigue</li>
          </ul>
          <p>
            Air purifiers — regardless of price or HEPA rating — <strong>cannot reduce CO2</strong>. This is a physical
            impossibility, not a product limitation. Only introducing fresh outdoor air (through a window or an ERV
            system) can dilute and remove CO2.
          </p>

          <h2>The Zehnder ERV Advantage for Indian Homes</h2>
          <p>
            VARELLI specifies <strong>Zehnder ComfoAir Q</strong> ERVs from Switzerland for all fresh air ventilation
            installations. Key performance data:
          </p>
          <ul>
            <li><strong>95% thermal efficiency</strong> (EN 308 standard) — recovers 19 of every 20 degrees of indoor conditioned air</li>
            <li><strong>G4 + F7 + F9 filter cascade</strong> — removes PM10, PM2.5, and sub-micron particles</li>
            <li><strong>Moisture transfer membrane</strong> — retains indoor humidity in dry conditions, removes excess in monsoon</li>
            <li><strong>CO2 sensor integration</strong> — automatically increases fresh air flow when CO2 rises above 800 ppm</li>
            <li><strong>Near-silent operation</strong> — 19 dB(A) at 50% speed; quieter than a whisper</li>
            <li><strong>10-year warranty</strong> — longest warranty of any ERV available in India</li>
          </ul>
          <p>
            Explore our{" "}
            <Link href="/fresh-air-ventilation" className="text-[var(--gold)] hover:underline">
              Fresh Air Ventilation service page →
            </Link>{" "}
            for package pricing and technical specifications.
          </p>
        </div>

        <FAQSection faqs={faqs} />
      </div>

      <ServiceCTA serviceName="Fresh Air Ventilation" />
    </article>
  );
}
