import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import Breadcrumb from "@/components/layout/Breadcrumb";
import FAQSection from "@/components/sections/service/FAQSection";
import ServiceCTA from "@/components/sections/service/ServiceCTA";
import Link from "next/link";

export const metadata: Metadata = generatePageMetadata({
  title: "Home Automation Cost in India 2025 — Honest ₹ Price Guide | VARELLI",
  description:
    "Transparent home automation cost guide for India 2025. KNX, Control4, and WiFi system pricing in ₹ Lakhs. Covers lighting, curtains, climate, cinema, security — from apartments to luxury villas.",
  path: "/journal/home-automation-cost-india-2025",
  keywords: [
    "home automation cost India 2025",
    "home automation price India",
    "KNX home automation cost India",
    "smart home cost Bangalore",
    "home automation cost Bangalore",
    "home automation cost lakhs",
    "smart home investment India",
    "luxury home automation price India",
  ],
});

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Home Automation Cost in India 2025 — Honest ₹ Price Guide",
  description:
    "Transparent pricing guide for home automation in India covering KNX, Control4, and WiFi systems. Includes cost breakdown by system type, home size, and city for luxury residences.",
  author: {
    "@type": "Organization",
    name: "VARELLI Systems Architecture Team",
    url: "https://varelli.in",
  },
  publisher: {
    "@type": "Organization",
    name: "VARELLI",
    logo: { "@type": "ImageObject", url: "https://varelli.in/images/varelli-logo.png" },
  },
  datePublished: "2025-08-01",
  dateModified: "2025-08-28",
  mainEntityOfPage: "https://varelli.in/journal/home-automation-cost-india-2025",
};

const faqs = [
  {
    question: "What is the cost of home automation in India in 2025?",
    answer:
      "Home automation cost in India in 2025 ranges from ₹1.5 Lakhs for a basic WiFi smart home package in a 2BHK apartment, to ₹65 Lakhs+ for a comprehensive KNX wired automation system in a luxury villa above 8,000 sq. ft. A typical whole-home KNX system (lighting, curtains, HVAC, security, cinema integration) for a 4,000–5,000 sq. ft. villa costs ₹14–₹24 Lakhs with VARELLI.",
  },
  {
    question: "What is the cost of KNX home automation in India?",
    answer:
      "KNX home automation cost in India starts from approximately ₹4.8 Lakhs for a KNX lighting-only system in a 3BHK apartment. A complete KNX whole-home system covering lighting (DALI-2), motorized curtains, HVAC integration, security, and AV in a 4,000 sq. ft. villa typically costs ₹14–₹24 Lakhs. Grand estate projects above 8,000 sq. ft. may range from ₹38–₹65 Lakhs.",
  },
  {
    question: "How does home automation cost compare across cities in India?",
    answer:
      "Home automation costs are broadly consistent across Bangalore, Mumbai, Delhi NCR, and Hyderabad as the major cost drivers are hardware (typically European-sourced) and engineering time. Labour rates vary by up to 15%, with Delhi NCR typically slightly lower than Mumbai. VARELLI maintains consistent pricing across all four cities.",
  },
  {
    question: "What factors most affect home automation cost in India?",
    answer:
      "The five biggest cost factors are: (1) Protocol choice — KNX wired costs more upfront than WiFi but costs less over 20 years; (2) Home size — costs scale linearly with number of rooms and devices; (3) Scope of systems — lighting only vs. full ecosystem (lighting + curtains + HVAC + cinema + security); (4) Hardware tier — European brands (Basalte, Ekinex, Sonus Faber) vs. mass-market brands; (5) New construction vs. retrofit — KNX in new builds is significantly cheaper than retrofitting through existing walls.",
  },
  {
    question: "Is home automation a good investment for a luxury villa in India?",
    answer:
      "Yes. A well-engineered home automation system increases property value by 8–15% for luxury residences according to real estate developer surveys in India. Energy savings from automated HVAC, lighting, and curtain control typically return 12–18% of the automation investment annually. Additionally, luxury property buyers increasingly expect intelligent systems — a villa without automation is harder to sell in the ₹3 Cr+ segment.",
  },
  {
    question: "Can home automation be added to an existing completed home?",
    answer:
      "Yes. Retrofit automation is possible using wireless protocols (Zigbee, Z-Wave, WiFi) or hybrid approaches. VARELLI evaluates each completed residence individually — in some cases, partial rewiring during renovation can enable KNX in key areas. A site assessment is always recommended before specifying the protocol for a completed home.",
  },
  {
    question: "What is included in a ₹15 Lakh home automation package?",
    answer:
      "A ₹15 Lakh KNX whole-home automation package from VARELLI for a 4,000 sq. ft. villa typically includes: KNX wired infrastructure for all rooms, DALI-2 lighting control (25–35 circuits), motorized curtain control (6–8 tracks), AC integration, scene switches (Basalte keypads), video door phone, smart security (6 cameras, biometric lock), single-app control, and commissioning/handover.",
  },
  {
    question: "Does home automation include home theatre in the cost?",
    answer:
      "Home automation and home theatre are separate investments, though they are deeply integrated. A home automation system controls the theatre's lights, curtains, and equipment power. The home theatre hardware (projector, speakers, AV processor, screen, acoustic treatment) is priced separately. VARELLI's Architectural Villa package includes cinema integration starting at ₹14.5 Lakhs for automation, with home theatre from ₹8.5 Lakhs separately.",
  },
];

export default function HomeAutomationCostIndia2025Page() {
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
            { name: "Home Automation Cost India 2025", href: "" },
          ]}
        />

        <header className="mt-8 mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[var(--gold)] border border-[var(--gold)]/30 px-3 py-1">
              Cost Guide
            </span>
            <span className="text-xs text-[var(--text-muted)]">August 2025 · 10 min read</span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl text-[var(--text-primary)] leading-tight mb-6">
            Home Automation Cost in India — 2025 ₹ Guide
          </h1>
          <p className="text-xl text-[var(--text-secondary)] leading-relaxed max-w-2xl">
            Transparent, honest pricing for KNX, Control4, and WiFi home automation systems in India. What you should
            actually budget for a luxury villa — with no vague ranges.
          </p>
          <div className="mt-6 pt-6 border-t border-[var(--border)] text-sm text-[var(--text-muted)]">
            Reviewed by the VARELLI Systems Architecture Team · Updated August 2025
          </div>
        </header>

        {/* Quick Answer — extracted by AI */}
        <div className="bg-[var(--surface-2)] border border-[var(--gold)]/20 rounded-sm p-6 mb-12">
          <p className="text-xs font-mono uppercase tracking-widest text-[var(--gold)] mb-3">Quick Answer</p>
          <p className="text-[var(--text-primary)] leading-relaxed">
            Home automation cost in India in 2025 ranges from <strong>₹1.5 Lakhs</strong> (basic WiFi, 2BHK) to{" "}
            <strong>₹65 Lakhs+</strong> (full KNX ecosystem, 8,000+ sq. ft. villa). A typical KNX whole-home system for
            a 4,000–5,000 sq. ft. luxury villa costs <strong>₹14–₹24 Lakhs</strong>.
          </p>
        </div>

        <div className="prose prose-invert prose-lg max-w-none mb-12">
          <h2>Cost by Protocol — KNX vs Control4 vs WiFi</h2>
          <p>
            The single biggest cost variable in home automation is your choice of protocol. This determines the hardware
            ecosystem, installation complexity, and long-term ownership cost.
          </p>
        </div>

        {/* Protocol Cost Table */}
        <div className="overflow-x-auto mb-12">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[var(--surface-2)]">
                <th className="text-left p-4 border border-[var(--border)] text-[var(--gold)] font-mono text-xs uppercase">Protocol</th>
                <th className="text-center p-4 border border-[var(--border)] text-[var(--text-primary)]">2BHK Apartment</th>
                <th className="text-center p-4 border border-[var(--border)] text-[var(--text-primary)]">4BHK Villa (4,000 sq.ft.)</th>
                <th className="text-center p-4 border border-[var(--border)] text-[var(--text-primary)]">Grand Estate (8,000+ sq.ft.)</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["WiFi Smart Home (basic)", "₹1.5L – ₹3L", "₹4L – ₹8L", "₹8L – ₹16L"],
                ["KNX Wired (lighting only)", "₹4.8L – ₹7.5L", "₹8L – ₹14L", "₹18L – ₹28L"],
                ["KNX Whole-Home (full ecosystem)", "₹7.5L – ₹12L", "₹14L – ₹24L", "₹38L – ₹65L+"],
                ["Control4 (retrofit-friendly)", "₹5L – ₹9L", "₹12L – ₹22L", "₹28L – ₹50L"],
                ["Crestron (ultra-luxury)", "Not recommended", "₹30L – ₹55L", "₹60L – ₹1.2Cr+"],
              ].map(([proto, apt, villa, estate], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-[var(--surface-1)]" : ""}>
                  <td className="p-4 border border-[var(--border)] text-[var(--text-secondary)] font-medium">{proto}</td>
                  <td className="p-4 border border-[var(--border)] text-center text-[var(--text-primary)]">{apt}</td>
                  <td className="p-4 border border-[var(--border)] text-center text-[var(--text-primary)]">{villa}</td>
                  <td className="p-4 border border-[var(--border)] text-center text-[var(--text-primary)]">{estate}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-xs text-[var(--text-muted)] mt-2">
            * All prices are approximate project investment inclusive of hardware, installation, programming, and
            commissioning. Excludes GST. Based on VARELLI project data, August 2025.
          </p>
        </div>

        {/* System-by-System Cost Breakdown */}
        <div className="prose prose-invert prose-lg max-w-none mb-12">
          <h2>Cost Breakdown by System Type</h2>
          <p>
            Most home automation projects are not all-or-nothing. You can phase your investment by starting with the
            highest-impact systems and expanding over time — provided the wiring infrastructure is pre-laid during
            construction.
          </p>
        </div>

        <div className="overflow-x-auto mb-12">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[var(--surface-2)]">
                <th className="text-left p-4 border border-[var(--border)] text-[var(--gold)] font-mono text-xs uppercase">System</th>
                <th className="text-center p-4 border border-[var(--border)] text-[var(--text-primary)]">Per Room / Unit</th>
                <th className="text-center p-4 border border-[var(--border)] text-[var(--text-primary)]">4BHK Villa Total</th>
                <th className="text-left p-4 border border-[var(--border)] text-[var(--text-muted)]">What's Included</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["KNX Lighting Control (DALI-2)", "₹45,000–₹80,000", "₹3.5L–₹6L", "Dimmer actuators, DALI drivers, scene switches (Basalte)"],
                ["Motorized Curtains & Blinds", "₹35,000–₹65,000", "₹2.5L–₹4.5L", "KNX blind actuators, motorized tracks (Somfy/Becker)"],
                ["Climate & HVAC Integration", "₹25,000–₹45,000", "₹1.8L–₹3.5L", "AC integration, thermostat, occupancy sensors"],
                ["Video Door Phone & Access", "₹80,000–₹1.5L", "₹80K–₹1.5L", "DoorBird IP VDP, biometric lock, gate integration"],
                ["CCTV & Security", "₹18,000–₹35,000/camera", "₹1.5L–₹3L", "8 cameras, NVR, remote monitoring"],
                ["Cinema/AV Integration", "—", "₹1.5L–₹3L", "AV matrix, scene control, motorized screen"],
                ["Structured Networking", "—", "₹1.2L–₹2.5L", "UniFi WiFi 6, 10GbE backbone, VLAN security"],
                ["Fresh Air Ventilation (Zehnder)", "—", "₹2.5L–₹4.5L", "Zehnder ComfoAir Q, ducting, CO2 sensor"],
              ].map(([sys, per, total, incl], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-[var(--surface-1)]" : ""}>
                  <td className="p-4 border border-[var(--border)] text-[var(--text-secondary)] font-medium">{sys}</td>
                  <td className="p-4 border border-[var(--border)] text-center text-[var(--text-primary)]">{per}</td>
                  <td className="p-4 border border-[var(--border)] text-center text-[var(--text-primary)]">{total}</td>
                  <td className="p-4 border border-[var(--border)] text-[var(--text-muted)] text-xs">{incl}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="prose prose-invert prose-lg max-w-none">
          <h2>VARELLI Package Tiers — Transparent Pricing</h2>
          <p>
            VARELLI publishes transparent pricing tiers for all seven of our service categories. This is unusual in the
            Indian luxury AV market — most integrators (Qubix, ProFX, Decibel) require consultations before sharing any
            pricing. We believe transparency is a mark of confidence in what we deliver.
          </p>
          <p>
            Our three home automation tiers are:
          </p>
          <ul>
            <li>
              <strong>KNX Core Living</strong> — ₹4.8L–₹7.5L: Lighting, curtains, and AC integration with Basalte
              keypads for compact 2–3BHK homes.
            </li>
            <li>
              <strong>KNX Architectural Villa</strong> — ₹14.5L–₹24L: Full KNX ecosystem for 4,000–6,000 sq. ft. villas
              including security, cinema integration, and multi-zone audio.
            </li>
            <li>
              <strong>KNX Grand Estate</strong> — ₹38L–₹65L+: Complete intelligent living ecosystem for estates above
              8,000 sq. ft. with Swiss IAQ (Zehnder), central vacuum, and comprehensive AV.
            </li>
          </ul>
          <p>
            View full itemized inclusions on our{" "}
            <Link href="/home-automation" className="text-[var(--gold)] hover:underline">
              Home Automation service page →
            </Link>
          </p>
        </div>

        <FAQSection faqs={faqs} />
      </div>

      <ServiceCTA serviceName="Home Automation" />
    </article>
  );
}
