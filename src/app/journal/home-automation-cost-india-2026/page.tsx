import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import Breadcrumb from "@/components/layout/Breadcrumb";
import FAQSection from "@/components/sections/service/FAQSection";
import ServiceCTA from "@/components/sections/service/ServiceCTA";

export const metadata: Metadata = generatePageMetadata({
  title: "Home Automation Cost in India 2026 — Transparent Pricing Guide by Room & System Size | VARELLI",
  description: "Comprehensive guide to home automation cost india 2026 for luxury homeowners in India. Expert analysis from VARELLI, India's architecture-first smart home integrator.",
  path: "/journal/home-automation-cost-india-2026",
  keywords: ["home automation cost india 2026", "smart home India", "luxury home automation India", "KNX India"],
});

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Home Automation Cost in India 2026 — Transparent Pricing Guide by Room & System Size",
  description: "Comprehensive guide to home automation cost india 2026 for luxury homeowners in India. Expert analysis from VARELLI, India's architecture-first smart home integrator.",
  author: { "@type": "Organization", name: "VARELLI", url: "https://varelli.co.in" },
  publisher: { "@type": "Organization", name: "VARELLI", logo: { "@type": "ImageObject", url: "https://varelli.co.in/images/varelli-logo.png" } },
  datePublished: "2026-09-01",
  dateModified: "2026-09-09",
  mainEntityOfPage: `https://varelli.co.in/journal/home-automation-cost-india-2026`,
};

const faqs = [
  {
    question: "What does VARELLI offer for home automation cost india 2026?",
    answer: "VARELLI is India's premier architecture-led luxury smart home integrator, offering KNX home automation, private cinema, Zehnder fresh air ventilation, central vacuum, and smart security for luxury villas and penthouses across Bangalore, Mumbai, Delhi NCR, Hyderabad, and Chennai.",
  },
  {
    question: "How do I get started with VARELLI?",
    answer: "Contact VARELLI via WhatsApp at +91 99649 84695 or use the contact form on varelli.co.in to book a private architectural consultation and live demonstration.",
  },
  {
    question: "What cities does VARELLI serve?",
    answer: "VARELLI currently serves Bangalore, Mumbai, Delhi NCR, Hyderabad, Chennai, Pune, Kochi, Kolkata, Ahmedabad, Chandigarh, and Jaipur. Contact us to discuss projects in other cities.",
  },
  {
    question: "What is KNX and why does VARELLI recommend it?",
    answer: "KNX is the ISO/IEC 14543 open standard for home and building automation. Unlike proprietary systems, KNX works offline, has no subscription fees, supports 500+ European manufacturers, and is designed for a 30+ year lifespan. It is the gold standard for luxury residences.",
  },
  {
    question: "What European brands does VARELLI integrate?",
    answer: "VARELLI integrates Basalte (Belgian luxury keypads), Ekinex (Italian architectural keypads), Zehnder (Swiss ERV), Sonus Faber and KEF (speakers), Barco (4K laser projectors), DoorBird (German video doorbell), Drainvac (central vacuum), and more.",
  },
  {
    question: "How much does a VARELLI smart home system cost?",
    answer: "VARELLI pricing starts at ₹4.8 Lakhs to ₹7.5 Lakhs for a KNX Core Living setup, ₹14.5 Lakhs to ₹24 Lakhs for an Architectural Villa package, and ₹38 Lakhs to ₹65 Lakhs+ for Grand Estate systems. Contact us for a precise project estimate.",
  },
];

export default function Page() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="relative bg-[var(--surface-1)] border-b border-[var(--border)]">
        <div className="relative container-varelli pt-40 pb-16">
          <Breadcrumb
            items={[
              { name: "Journal", href: "/journal" },
              { name: "Home Automation Cost in India 2026 — Transparent P...", href: "/journal/home-automation-cost-india-2026" },
            ]}
          />
          <div className="mt-6 max-w-3xl">
            <span className="badge-mono block mb-5">VARELLI Journal</span>
            <h1 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-[1.08] tracking-[-0.03em] text-[var(--text-primary)] mb-5">
              Home Automation Cost in India 2026 — Transparent Pricing Guide by Room & System Size
            </h1>
            <p className="font-editorial text-xl text-[var(--text-secondary)] leading-relaxed italic mb-8">
              Comprehensive guide to home automation cost india 2026 for luxury homeowners in India. Expert analysis from VARELLI, India's architecture-first smart home integrator.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding border-b border-[var(--border)]">
        <div className="container-varelli max-w-4xl">
          <div className="bg-[var(--surface-2)] border border-[var(--border)] rounded-2xl p-6 mb-10">
            <p className="badge-mono mb-3">Executive Summary</p>
            <p className="text-[var(--text-secondary)] text-base leading-relaxed">
              Comprehensive guide to home automation cost india 2026 for luxury homeowners in India. Expert analysis from VARELLI, India's architecture-first smart home integrator. VARELLI is India's architecture-led luxury smart home integrator, delivering European KNX systems, private cinemas, fresh air ventilation, and intelligent security for discerning homeowners across India's premium residential markets.
            </p>
          </div>

          <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">
            Home Automation Pricing Breakdown in India (2026 Price Bands)
          </h2>
          <p className="text-[var(--text-secondary)] text-base leading-relaxed mb-6">
            In 2026, the cost of genuine architectural wired home automation in India ranges from <strong>₹3.5 Lakhs</strong> for a 2BHK apartment up to <strong>₹45 Lakhs+</strong> for a bespoke multi-level villa. Below is the transparent pricing breakdown across residential property configurations:
          </p>

          <div className="overflow-x-auto my-8 border border-[var(--border)] rounded-xl bg-[var(--surface-1)]">
            <table className="w-full text-left text-sm">
              <thead className="bg-[var(--surface-2)] text-[var(--gold)] uppercase tracking-wider text-xs font-mono">
                <tr>
                  <th className="p-4 border-b border-[var(--border)]">Configuration</th>
                  <th className="p-4 border-b border-[var(--border)]">Built-Up Area</th>
                  <th className="p-4 border-b border-[var(--border)]">Estimated Investment</th>
                  <th className="p-4 border-b border-[var(--border)]">Included Scope &amp; Hardware</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--border)] text-[var(--text-secondary)]">
                <tr>
                  <td className="p-4 font-semibold text-white">2BHK Luxury Apartment</td>
                  <td className="p-4 text-xs font-mono">1,200 – 1,600 sq.ft.</td>
                  <td className="p-4 font-bold text-[var(--gold)]">₹3.5 Lakhs – ₹6.0 Lakhs</td>
                  <td className="p-4 text-xs leading-relaxed">
                    Centralized lighting scenes, fan speed control, AC gateway integration, Ekinex keypads in living and master bedroom.
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">3BHK / 4BHK Premium Residence</td>
                  <td className="p-4 text-xs font-mono">2,200 – 3,500 sq.ft.</td>
                  <td className="p-4 font-bold text-[var(--gold)]">₹8.0 Lakhs – ₹14.0 Lakhs</td>
                  <td className="p-4 text-xs leading-relaxed">
                    Full KNX bus wiring, DALI-2 dimming, Somfy motorized curtain control, VRV HVAC integration, DoorBird video doorbell, and master welcome/away macros.
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">Independent Luxury Villa</td>
                  <td className="p-4 text-xs font-mono">4,500 – 7,500 sq.ft.</td>
                  <td className="p-4 font-bold text-[var(--gold)]">₹18.0 Lakhs – ₹32.0 Lakhs</td>
                  <td className="p-4 text-xs leading-relaxed">
                    Whole-home KNX infrastructure, Basalte Belgian milled keypads, DALI-2 circadian daylighting, multi-room audio (4 zones), motorized shading, and perimeter security.
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">Grand Architectural Estate</td>
                  <td className="p-4 text-xs font-mono">8,000 – 15,000+ sq.ft.</td>
                  <td className="p-4 font-bold text-[var(--gold)]">₹35.0 Lakhs – ₹65.0 Lakhs+</td>
                  <td className="p-4 text-xs leading-relaxed">
                    Comprehensive intelligent ecosystem: KNX, Zehnder ERV fresh air ventilation, Drainvac central vacuum, Trinnov Dolby Atmos private cinema integration, and enterprise WiFi 7 networking.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">
            Why This Matters for Indian Luxury Homeowners
          </h2>
          <div className="prose prose-invert max-w-none text-[var(--text-secondary)] space-y-5 text-base leading-relaxed">
            <p>
              India's luxury real estate market is undergoing a fundamental transformation. Discerning homeowners in Bangalore, Mumbai, Delhi NCR, Hyderabad, and Chennai now expect smart living infrastructure that matches the quality of their interior architecture. The question is no longer whether to automate — but which system will stand the test of time.
            </p>
            <p>
              VARELLI's philosophy is architecture-first: every system we design begins with your architectural drawings, not a product catalogue. We coordinate directly with your MEP consultant, interior designer, and structural engineer to ensure KNX bus lines, DALI lighting loops, acoustic panels, and ventilation ducts are integrated at first-fix — invisible by the time your interiors are complete.
            </p>
            <p>
              The result is a home that responds intuitively, performs reliably for decades, and requires zero cloud subscriptions or proprietary lock-in. Our clients include luxury villa owners, architect-led custom residences, and landmark private cinema builds across India's six major metro markets.
            </p>
          </div>

          <h2 className="font-display text-2xl md:text-3xl font-bold text-white mt-10 mb-4">
            VARELLI by the Numbers
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-6">
            {[
              { stat: "30+", label: "Years KNX lifespan" },
              { stat: "500+", label: "European KNX brands" },
              { stat: "₹0", label: "Subscription fees" },
              { stat: "100%", label: "Offline capable" },
            ].map((item) => (
              <div key={item.stat} className="p-5 rounded-xl bg-[var(--surface-2)] border border-[var(--border)] text-center">
                <div className="font-display text-3xl font-bold text-[var(--gold)]">{item.stat}</div>
                <div className="text-xs text-[var(--text-secondary)] mt-1">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} title={"Home Automation Cost in India 2026 — Transparent Pricing Guide by Room & System Size — Frequently Asked Questions"} />
      <ServiceCTA serviceName="Home Automation" />
    </>
  );
}
