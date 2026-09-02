import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import SchemaOrg from "@/components/seo/SchemaOrg";
import { buildFAQSchema } from "@/components/seo/schemas/faqPage";
import { buildArticleSchema } from "@/components/seo/schemas/article";
import Breadcrumb from "@/components/layout/Breadcrumb";
import FAQSection from "@/components/sections/service/FAQSection";
import ServiceCTA from "@/components/sections/service/ServiceCTA";
import Link from "next/link";

export const metadata: Metadata = generatePageMetadata({
  title: "What is DALI-2 Lighting Control? Architect Guide 2026 | VARELLI",
  description: "Complete guide to DALI-2 digital lighting control for luxury Indian residences. Learn how DALI-2 integrates with KNX, circadian human-centric dimming, Tunable White, and DALI vs 0-10V phase dimming.",
  path: "/journal/what-is-dali-2-lighting",
  keywords: [
    "what is DALI-2 lighting control",
    "DALI 2 lighting India",
    "DALI 2 vs KNX",
    "DALI 2 dimming India",
    "Tunable White lighting control India",
    "architectural lighting control India",
    "DALI 2 gateway KNX",
  ],
});

const faqs = [
  {
    question: "What is DALI-2 lighting control?",
    answer: "DALI-2 (Digital Addressable Lighting Interface - IEC 62386) is the international open standard for digital architectural lighting control. It allows individual fixture addressing, logarithmic 0.1% dimming, color temperature control (Tunable White), and real-time energy/fault reporting.",
  },
  {
    question: "Is DALI-2 better than 0-10V or phase-cut dimming?",
    answer: "Yes. Unlike analog 0-10V or phase-cut dimming which suffer from voltage drop, flicker, and group-only wiring, DALI-2 is 100% digital, immune to electrical noise, supports smooth 0.1% dimming curves, and allows software re-grouping without re-wiring.",
  },
  {
    question: "Does DALI-2 work with KNX home automation?",
    answer: "Natively. VARELLI uses KNX-to-DALI-2 gateways (such as Basalte, Ekinex, or ABB) to connect up to 128 DALI-2 ballasts/drivers per gateway directly into the KNX bus system.",
  },
  {
    question: "What is Tunable White and circadian lighting?",
    answer: "Tunable White allows lighting color temperature to adjust dynamically from 2200K (warm candlelight for evening) to 6500K (crisp morning daylight), syncing indoor illumination with human circadian rhythms.",
  },
  {
    question: "How much does a DALI-2 system cost in India?",
    answer: "DALI-2 gateways and drivers add approximately ₹1.5L to ₹4.5L to a luxury villa KNX installation, but save up to 40% on copper cabling by using a single 2-wire topology.",
  },
];

export default function Dali2LightingPage() {
  const articleSchema = buildArticleSchema({
    headline: "What is DALI-2 Lighting Control? The Definitive 2026 Architect's Guide",
    description: "Complete guide to DALI-2 digital lighting control for luxury Indian residences.",
    url: "https://varelli.co.in/journal/what-is-dali-2-lighting",
    datePublished: "2026-08-01",
    dateModified: "2026-08-30",
  });
  const faqSchema = buildFAQSchema(faqs);

  return (
    <>
      <SchemaOrg schema={articleSchema} />
      <SchemaOrg schema={faqSchema} />
      
      <article className="min-h-screen bg-[var(--bg)] text-[var(--text-primary)] pt-32 pb-20">
        <div className="container-varelli max-w-4xl">
          <Breadcrumb
            items={[
              { name: "Journal", href: "/journal" },
              { name: "What is DALI-2 Lighting Control?", href: "/journal/what-is-dali-2-lighting" },
            ]}
          />
          
          <header className="mt-8 mb-12">
            <span className="badge-mono mb-4">Architectural Lighting · Standards</span>
            <h1 className="font-display text-3xl md:text-5xl font-bold tracking-[-0.03em] leading-tight mb-6 text-white">
              What is DALI-2 Lighting Control? The Definitive 2026 Architect's Guide
            </h1>
            <div className="p-6 rounded-2xl bg-[var(--surface-1)] border border-[var(--border)] text-sm text-[var(--text-secondary)] leading-relaxed font-body">
              <strong className="text-white font-mono uppercase tracking-wider block mb-2">Executive Summary</strong>
              DALI-2 (Digital Addressable Lighting Interface - IEC 62386) is the global reference standard for digital architectural lighting control. It replaces legacy analog 0-10V and phase-cut dimming with a 2-wire digital bus capable of controlling individual fixtures down to 0.1% brightness, adjusting Kelvin color temperatures (Tunable White), and integrating natively into KNX smart home systems.
            </div>
          </header>

          <div className="prose prose-invert max-w-none text-[var(--text-secondary)] space-y-8 text-lg leading-relaxed font-body">
            <section>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">
                What is DALI-2 and How Does It Work?
              </h2>
              <p>
                DALI-2 is an open, international standard managed by the Digital Illumination Interface Alliance (DiiA). Unlike traditional lighting where dimmers control power circuits physically, DALI-2 sends digital command packets over a 2-wire control bus operating at 16V. Each DALI-2 driver/ballast receives an individual digital address (0 to 63 per channel).
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">
                DALI-2 vs. 0-10V vs. Phase-Cut Dimming
              </h2>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-left text-sm border border-[var(--border)] rounded-xl">
                  <thead className="bg-[var(--surface-2)] text-white font-mono text-xs uppercase">
                    <tr>
                      <th className="p-3 border-b border-[var(--border)]">Feature</th>
                      <th className="p-3 border-b border-[var(--border)]">DALI-2 Digital</th>
                      <th className="p-3 border-b border-[var(--border)]">0-10V Analog</th>
                      <th className="p-3 border-b border-[var(--border)]">Phase-Cut (Triac)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[var(--border)]">
                    <tr>
                      <td className="p-3 font-semibold text-white">Dimming Range</td>
                      <td className="p-3 text-emerald-400">0.1% to 100% Logarithmic</td>
                      <td className="p-3">10% to 100% Linear</td>
                      <td className="p-3 text-amber-400">15% to 100% (Flicker risk)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-white">Addressing</td>
                      <td className="p-3 text-emerald-400">Individual per fixture</td>
                      <td className="p-3">Per circuit run only</td>
                      <td className="p-3">Per dimmer module only</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-white">Tunable White (Dt8)</td>
                      <td className="p-3 text-emerald-400">Native (1 address)</td>
                      <td className="p-3">Requires 2 channels</td>
                      <td className="p-3 text-red-400">Not supported</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">
                Native KNX + DALI-2 Integration
              </h2>
              <p>
                In a VARELLI luxury residence, DALI-2 handles the high-density architectural fixture control, while KNX acts as the master backbone linking Basalte keypads, touch screens, motorized curtains, Zehnder ventilation, and security into a single harmonious interface.
              </p>
            </section>
          </div>

          <FAQSection faqs={faqs} title="DALI-2 Lighting — Frequently Asked Questions" />
          <ServiceCTA serviceName="KNX Home Automation" />
        </div>
      </article>
    </>
  );
}
