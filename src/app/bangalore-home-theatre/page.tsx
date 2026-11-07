import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import Link from "next/link";
import ServiceCTA from "@/components/sections/service/ServiceCTA";
import FAQSection from "@/components/sections/service/FAQSection";
import Breadcrumb from "@/components/layout/Breadcrumb";

export const metadata: Metadata = generatePageMetadata({
  title: "Turnkey Luxury Home Theatre Design & Installation in Bangalore | VARELLI",
  description:
    "VARELLI builds complete private cinemas in Bangalore. From acoustic design and silent AC integration to custom recliners and Dolby Atmos calibration. Single point of responsibility.",
  path: "/bangalore-home-theatre",
  keywords: [
    "home theatre installation bangalore",
    "turnkey home theatre bangalore",
    "private cinema bangalore",
    "dolby atmos home theatre bangalore",
    "home theatre design bangalore",
    "acoustic design bangalore",
    "luxury home cinema bangalore",
  ],
});

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Turnkey Home Theatre Installation",
  provider: {
    "@type": "LocalBusiness",
    name: "VARELLI",
    image: "https://varelli.co.in/logo.png",
    telephone: "+91 99649 84695",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bangalore",
      addressRegion: "Karnataka",
      addressCountry: "IN",
    },
  },
  areaServed: { "@type": "City", name: "Bangalore" },
};

const faqs = [
  {
    question: "How much does a turnkey home theatre cost in Bangalore?",
    answer:
      "A premium 5.1.2 Dolby Atmos setup starts around ₹15L, while a reference 9.4.6 private cinema ranges from ₹42L to ₹85L+, depending on room size, acoustic treatment, screen, and finishes. VARELLI provides transparent, itemised estimates.",
  },
  {
    question: "Does VARELLI handle AC and acoustics for the cinema room?",
    answer:
      "Yes. VARELLI provides complete turnkey execution including custom silent HVAC ducting (NC-25 or below), acoustic treatment design, fresh air via VaaYoo systems, bespoke seating installation, and post-installation Dolby Atmos calibration using Trinnov or Dirac.",
  },
  {
    question: "How long does a VARELLI private cinema project take?",
    answer:
      "A typical private cinema project takes 8–16 weeks from first-fix wiring to final Atmos calibration. Timing depends on room size, civil readiness, and equipment lead times. VARELLI coordinates all trades under a single project plan.",
  },
  {
    question: "Which Bangalore localities does VARELLI serve for home theatre?",
    answer:
      "VARELLI installs private cinemas across all Bangalore luxury enclaves — Whitefield, Koramangala, Sadashivanagar, Indiranagar, Hebbal, Sarjapur, Lavelle Road, HSR Layout, Jayanagar, and all villa developments including Brigade, Prestige, and Sobha properties.",
  },
  {
    question: "What projector does VARELLI use for home cinema?",
    answer:
      "VARELLI specifies Barco Loki and Loki Pro 4K laser projectors for reference private cinemas, paired with perforated acoustic screens. For mid-range projects, Sony VPL-XW5000 or VPL-XW7000 laser projectors are used. All come with professional calibration.",
  },
];

const pillars = [
  {
    title: "Acoustic Engineering",
    desc: "We calculate RT60 decay times, design custom bass traps, and install broadband absorbers and diffusers — ensuring the room sounds as good as it looks. Target: 0.3–0.4 seconds RT60.",
    icon: "◈",
  },
  {
    title: "Silent Climate Control",
    desc: "Custom HVAC ducting with acoustic liners and VaaYoo fresh air systems. NC-25 ambient noise or below. Perfect oxygen levels without hearing a whisper during quiet scenes.",
    icon: "◉",
  },
  {
    title: "Architectural Seating",
    desc: "Custom sightline geometry, row elevations calculated per screen height, and premium leather recliners positioned for perfect viewing angles across every seat.",
    icon: "◎",
  },
  {
    title: "Reference AV & Dolby Atmos",
    desc: "Barco 4K laser projection, Trinnov or Dirac Room Correction calibration, and reference-grade audio from Sonus Faber, KEF, or JBL Synthesis with full Dolby Atmos certification.",
    icon: "◐",
  },
  {
    title: "KNX Cinema Automation",
    desc: "One Basalte keypad controls the lights, the AC, the motorised screen, the curtains, and the projector. Scene-based: Cinema Mode, Intermission, Cleaning — all pre-programmed.",
    icon: "◑",
  },
];

export default function BangaloreHomeTheatre() {
  return (
    <main className="bg-[#08080A] min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <div className="max-w-6xl mx-auto px-6 pt-32 pb-20">
        <Breadcrumb
          items={[
            { name: "Private Cinema", href: "/private-cinema" },
            { name: "Home Theatre Bangalore", href: "/bangalore-home-theatre" },
          ]}
        />

        {/* Hero */}
        <section className="mb-16 max-w-4xl">
          <p className="text-xs font-mono uppercase tracking-widest text-[#C5A880] mb-4">
            Turnkey Private Cinema · Bangalore
          </p>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            The Ultimate Turnkey Private Cinema Experience in Bangalore
          </h1>
          <p className="text-lg text-[#C2C2C8] leading-relaxed max-w-3xl">
            Building a luxury private cinema in Bangalore requires more than buying AV equipment. It requires
            architectural integration, acoustic engineering, and climate control. VARELLI provides end-to-end
            turnkey execution — from acoustic design and silent HVAC integration to bespoke recliners and
            Dolby Atmos calibration. One vendor. One contract. One perfect room.
          </p>
        </section>

        {/* Why Bangalore */}
        <section className="mb-16 bg-[#121216] border border-[#2A2A35] rounded-sm p-8">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-5">
            Why Bangalore Villas Need a Different Approach
          </h2>
          <p className="text-[#C2C2C8] leading-relaxed mb-4">
            In Bangalore's premium residential enclaves — Whitefield, Koramangala, Sadashivanagar — standard home
            theatre setups fail. RCC slab construction causes severe standing waves, external traffic and generator
            noise bleeds into the room, and standard split ACs create ambient noise above NC-40 that destroys a
            film's dynamic range entirely.
          </p>
          <p className="text-[#C2C2C8] leading-relaxed">
            VARELLI solves this by acting as your single point of responsibility. We coordinate MEP drawings,
            acoustic treatments, silent AC ducting, seating sightlines, and final AV calibration. One contract.
            One perfect room.
          </p>
        </section>

        {/* 5 Pillars */}
        <section className="mb-16">
          <p className="text-xs font-mono uppercase tracking-widest text-[#C5A880] mb-3">What We Engineer</p>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-10">
            The 5 Pillars of a VARELLI Cinema
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="bg-[#121216] border border-[#2A2A35] hover:border-[#C5A880] transition-colors rounded-sm p-6"
              >
                <div className="text-[#C5A880] text-2xl mb-3">{pillar.icon}</div>
                <h3 className="font-display text-lg font-bold text-white mb-2">{pillar.title}</h3>
                <p className="text-[#C2C2C8] text-sm leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Comparison Table */}
        <section className="mb-16">
          <p className="text-xs font-mono uppercase tracking-widest text-[#C5A880] mb-3">Why VARELLI</p>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-8">
            The VARELLI Advantage
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1A1A22]">
                  <th className="text-left p-4 text-[#C5A880] font-mono uppercase text-xs tracking-widest border border-[#2A2A35]">
                    Feature
                  </th>
                  <th className="text-left p-4 text-[#C5A880] font-mono uppercase text-xs tracking-widest border border-[#2A2A35]">
                    Standard AV Dealer
                  </th>
                  <th className="text-left p-4 text-[#C5A880] font-mono uppercase text-xs tracking-widest border border-[#2A2A35]">
                    VARELLI Turnkey Cinema
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Acoustics", '"We\'ll hang some foam."', "Custom RT60 calculation, bass traps, broadband absorbers"],
                  ["AC / HVAC", "Client hires their own HVAC contractor", "Silent ducting (NC-25) + VaaYoo fresh air integrated"],
                  ["Seating", "Client buys online", "Custom sightline geometry & acoustic fabric recliners"],
                  ["Automation", "Basic IR remote", "Full KNX (lights, AC, screen, audio, curtains)"],
                  ["Calibration", "Quick setup, no measurement rig", "Trinnov / Dirac room correction + Dolby Atmos sign-off"],
                  ["Responsibility", '"Talk to your builder"', "Single point of contact — one contract"],
                ].map(([feature, dealer, varelli], i) => (
                  <tr key={feature} className={i % 2 === 0 ? "bg-[#08080A]" : "bg-[#0E0E12]"}>
                    <td className="p-4 font-semibold text-[#F2F2F5] border border-[#2A2A35]">{feature}</td>
                    <td className="p-4 text-[#C2C2C8] border border-[#2A2A35]">{dealer}</td>
                    <td className="p-4 text-[#C5A880] font-medium border border-[#2A2A35]">{varelli}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Pricing indicator */}
        <section className="mb-16 bg-[#121216] border border-[#2A2A35] rounded-sm p-8">
          <p className="text-xs font-mono uppercase tracking-widest text-[#C5A880] mb-4">Investment Range</p>
          <h2 className="font-display text-2xl font-bold text-white mb-6">Private Cinema Pricing in Bangalore</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { tier: "Signature Cinema", config: "5.1.2 Dolby Atmos", price: "₹15L – ₹28L", note: "120\" laser, 6 seats" },
              { tier: "Reference Cinema", config: "7.2.4 Dolby Atmos", price: "₹28L – ₹52L", note: "140\" laser, 8–10 seats" },
              { tier: "Grand Cinema", config: "9.4.6 Dolby Atmos", price: "₹52L – ₹85L+", note: "160\"+ Barco laser, 12+ seats" },
            ].map((p) => (
              <div key={p.tier} className="bg-[#08080A] border border-[#2A2A35] rounded-sm p-5">
                <div className="text-xs font-mono uppercase tracking-widest text-[#C5A880] mb-1">{p.tier}</div>
                <div className="text-sm text-[#C2C2C8] mb-2">{p.config}</div>
                <div className="font-display text-xl font-bold text-white mb-1">{p.price}</div>
                <div className="text-xs text-[#C2C2C8]">{p.note}</div>
              </div>
            ))}
          </div>
          <p className="text-xs text-[#C2C2C8] mt-4 italic">
            All prices are turnkey installed — acoustic treatment, equipment, programming, calibration, and 2-year support included. Excludes furniture and civil finishes.
          </p>
        </section>

        {/* Related links */}
        <section className="mb-16 pt-8 border-t border-[#2A2A35]">
          <p className="text-xs font-mono uppercase tracking-widest text-[#C5A880] mb-4">Related Guides</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: "/acoustic-design", label: "Acoustic Engineering", title: "Home Theatre Acoustic Design →", desc: "RT60, bass traps, broadband absorbers — the science behind a perfect cinema room." },
              { href: "/private-cinema/bangalore", label: "Private Cinema Bangalore", title: "Private Cinema in Bangalore →", desc: "Full guide to private cinema design and pricing for Bangalore villas." },
              { href: "/journal/best-home-theatre-companies-bangalore", label: "Comparison Guide", title: "Best Home Theatre Companies in Bangalore →", desc: "Honest 2026 ranking of Bangalore's top AV integrators." },
              { href: "/journal/home-theatre-cost-bangalore-2026", label: "Cost Guide", title: "Home Theatre Cost in Bangalore 2026 →", desc: "Transparent ₹ pricing breakdown for 5.1 to 9.4.6 Dolby Atmos systems." },
            ].map(({ href, label, title, desc }) => (
              <Link key={href} href={href} className="p-4 bg-[#121216] border border-[#2A2A35] hover:border-[#C5A880] transition-colors rounded-sm group">
                <span className="text-xs text-[#C5A880] font-mono">{label}</span>
                <h4 className="font-display text-sm font-semibold text-[#F2F2F5] group-hover:text-[#C5A880] transition-colors mt-1">{title}</h4>
                <p className="text-xs text-[#C2C2C8] mt-1">{desc}</p>
              </Link>
            ))}
          </div>
        </section>

        <FAQSection faqs={faqs} title="Private Cinema Bangalore — Frequently Asked Questions" />
      </div>

      <ServiceCTA serviceName="Private Cinema" />
    </main>
  );
}
