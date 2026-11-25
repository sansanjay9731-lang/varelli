import type { Metadata } from "next";
import { Suspense } from "react";
import { generatePageMetadata } from "@/lib/metadata";
import Breadcrumb from "@/components/layout/Breadcrumb";
import FAQSection from "@/components/sections/service/FAQSection";
import SmartHomePlanner from "@/components/calculator/SmartHomePlanner";
import Link from "next/link";

export const metadata: Metadata = generatePageMetadata({
  title: "Plan Your Smart Home — Interactive Cost Calculator India 2026 | VARELLI",
  description:
    "Plug in your 1–4 BHK flat or villa, tap rooms on the floor plan, select lights, KNX switches, curtains, AC, locks & cameras, and get an instant ₹ Lakh cost estimate.",
  path: "/plan-your-smart-home",
  keywords: [
    "smart home cost calculator india",
    "home automation cost estimator bangalore",
    "knx cost calculator 3bhk",
    "plan your smart home",
    "home automation price 2bhk 3bhk 4bhk india",
    "smart home wiring cost calculator",
  ],
});

const faqs = [
  {
    question: "How accurate is this smart home cost calculator?",
    answer:
      "The estimator is calibrated against real VARELLI turnkey KNX installations in Bangalore, Mumbai, and Hyderabad — ranging from ₹8L–₹14L for an Essential 3BHK up to ₹65L+ for bespoke luxury villas. Final pricing depends on exact switch counts, curtain track lengths, and lighting circuit totals from your architectural drawings.",
  },
  {
    question: "What is included in the estimated package price?",
    answer:
      "Every estimate covers European KNX / DALI-2 hardware, distribution panel actuators, structured programming, commissioning, and post-handover support. Civil work and third-party AC/curtain fabrics are excluded.",
  },
  {
    question: "Can I use this if my flat or villa is already constructed?",
    answer:
      "Yes — select 'Renovation / Completed' in Step 2. We factor in non-invasive retrofit routing or wireless-KNX hybrid modules so you get a realistic budget before booking a site visit.",
  },
  {
    question: "What happens when I tap 'Send Full Plan to WhatsApp'?",
    answer:
      "Your room-by-room selection, home size, hardware tier, and estimated range are formatted into a single WhatsApp message to our Bangalore design studio (+91 99649 84695) so our engineers prepare your live demo around your exact requirements.",
  },
];

export default function PlanYourSmartHomePage() {
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
    <main className="bg-[#08080A] min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-20">
        <Breadcrumb
          items={[
            { name: "Home Automation", href: "/home-automation" },
            { name: "Plan Your Smart Home", href: "/plan-your-smart-home" },
          ]}
        />

        {/* Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-mono uppercase tracking-widest text-[#C5A880] mb-3">
            Interactive Estimator · Instant ₹ Range
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Plan Your Smart Home
          </h1>
          <p className="text-lg text-[#C2C2C8] leading-relaxed">
            Configure your entire residence — KNX Home Automation, Private Cinema (Dolby Atmos),
            VaaYoo Fresh Air, Drainvac Central Vacuum, or Smart Security &amp; WiFi 7. Tap rooms
            on the floor plan, see an instant turnkey estimate, and send your plan to WhatsApp.
          </p>
        </div>

        {/* Interactive Floor Plan Calculator */}
        <Suspense
          fallback={
            <div className="h-96 rounded-xl bg-[#121216] border border-[#2A2A35] flex items-center justify-center text-sm font-mono text-[#C5A880]">
              Loading Interactive Planner...
            </div>
          }
        >
          <SmartHomePlanner />
        </Suspense>

        {/* Cross-link to Cost Guides */}
        <div className="mt-16 pt-10 border-t border-[#2A2A35] grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link
            href="/journal/knx-home-automation-bangalore-cost-2026"
            className="p-5 bg-[#121216] border border-[#2A2A35] hover:border-[#C5A880] transition-colors rounded-xl group"
          >
            <span className="text-xs font-mono text-[#C5A880]">Detailed Guide</span>
            <h3 className="font-display text-base font-bold text-white group-hover:text-[#C5A880] mt-1">
              KNX Cost Breakdown in Bangalore →
            </h3>
            <p className="text-xs text-[#C2C2C8] mt-1">
              Read the full ₹8L to ₹65L+ tier-by-tier architecture breakdown.
            </p>
          </Link>

          <Link
            href="/journal/smart-home-wiring-renovation-cost-india"
            className="p-5 bg-[#121216] border border-[#2A2A35] hover:border-[#C5A880] transition-colors rounded-xl group"
          >
            <span className="text-xs font-mono text-[#C5A880]">Wiring &amp; Retrofit</span>
            <h3 className="font-display text-base font-bold text-white group-hover:text-[#C5A880] mt-1">
              Smart Home Wiring &amp; Renovation Cost →
            </h3>
            <p className="text-xs text-[#C2C2C8] mt-1">
              Compare first-fix KNX cabling vs completed-home retrofit costs.
            </p>
          </Link>

          <Link
            href="/studio"
            className="p-5 bg-[#121216] border border-[#2A2A35] hover:border-[#C5A880] transition-colors rounded-xl group"
          >
            <span className="text-xs font-mono text-[#C5A880]">Have Drawings?</span>
            <h3 className="font-display text-base font-bold text-white group-hover:text-[#C5A880] mt-1">
              Upload Your Floorplan in Studio →
            </h3>
            <p className="text-xs text-[#C2C2C8] mt-1">
              Already have CAD/PDF drawings? Upload them for a full 3D brand spec.
            </p>
          </Link>
        </div>

        {/* FAQs */}
        <div className="mt-16">
          <FAQSection
            faqs={faqs}
            title="Smart Home Cost Calculator — Frequently Asked Questions"
          />
        </div>
      </div>
    </main>
  );
}
