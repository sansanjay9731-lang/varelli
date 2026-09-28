import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import Breadcrumb from '@/components/layout/Breadcrumb'
import FAQSection from '@/components/sections/service/FAQSection'
import ServiceCTA from '@/components/sections/service/ServiceCTA'
import Link from 'next/link'

export const metadata: Metadata = generatePageMetadata({
  path: "/journal/dali-2-lighting-cost-india-2026",
  title: "DALI-2 Lighting Control Cost in India 2026 — What Is DALI-2 & Transparent Pricing | VARELLI",
  description: "What is DALI-2? How does it integrate with KNX? Transparent ₹ Lakh pricing for circadian DALI-2 lighting control systems in India — per zone, per room, full villa.",
  keywords: ["dali 2", "dali-2", "dali 2 lighting control", "dali 2 automation", "dali-2 standard", "what is dali 2", "dali 2 protocol", "dali 2 india", "dali 2 cost india", "circadian lighting india", "knx dali 2 integration india"],
})

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "DALI-2 Lighting Control Cost in India 2026 — What Is DALI-2 & Transparent Pricing",
  description: "What is DALI-2? How does it integrate with KNX? Transparent ₹ Lakh pricing for circadian DALI-2 lighting control systems in India — per zone, per room, full villa.",
  author: { "@type": "Organization", name: "VARELLI", url: "https://varelli.co.in" },
  publisher: {
    "@type": "Organization",
    name: "VARELLI",
    logo: { "@type": "ImageObject", url: "https://varelli.co.in/images/varelli-logo.png" }
  },
  datePublished: "2026-08-01",
  dateModified: "2026-09-28",
  mainEntityOfPage: "https://varelli.co.in/journal/dali-2-lighting-cost-india-2026",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is DALI-2?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "DALI-2 (Digital Addressable Lighting Interface, Edition 2) is an international open protocol standard (IEC 62386) for controlling lighting systems. Unlike basic on/off or dimmer switches, DALI-2 gives each light driver or ballast a unique digital address, enabling individual dimming, scene programming, daylight harvesting, occupancy-based control, and tunable white (circadian) light schedules — all on a simple 2-wire bus. Edition 2 added mandatory interoperability testing, ensuring DALI-2 certified products from different manufacturers work seamlessly together."
      }
    },
    {
      "@type": "Question",
      name: "How does DALI-2 integrate with KNX home automation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "DALI-2 is the lighting bus; KNX is the full-home automation backbone. They communicate through a KNX-DALI gateway device. In a VARELLI KNX + DALI-2 system, Basalte or Ekinex keypads on the KNX bus send commands to DALI-2 gateways, which then address individual light drivers. This means your lighting scenes, circadian schedules, daylight sensors, and presence detectors are all under a single KNX umbrella — unified control from one app, one keypad, or voice assistant."
      }
    },
    {
      "@type": "Question",
      name: "What is the cost of DALI-2 lighting control in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "DALI-2 lighting control in India costs approximately ₹4,500–₹8,500 per lighting point (circuit) installed, depending on driver quality, gateway capacity, and integration complexity. A 3BHK flat with 40 lighting circuits typically costs ₹2.8L–₹4.5L for DALI-2 drivers and controllers. A luxury villa with 120+ circuits and full circadian tunable-white scheduling ranges from ₹9.5L–₹18L installed. Grand estate full-home systems with daylight harvesting, Helvar or Osram DALI drivers, and KNX integration can reach ₹22L–₹38L."
      }
    },
    {
      "@type": "Question",
      name: "What is the difference between DALI and DALI-2?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "DALI (Edition 1) established the core digital addressing protocol but had inconsistent interoperability between manufacturers. DALI-2 (Edition 2) introduced mandatory independent certification testing through the DiiA (Digital Illumination Interface Alliance), ensuring any certified device works with any other. DALI-2 also added application controllers (sensors, push buttons, and input devices on the DALI bus itself), eliminating the need for separate control wiring in many cases. For luxury residential installations, DALI-2 is the standard VARELLI specifies."
      }
    },
    {
      "@type": "Question",
      name: "Is DALI-2 better than DMX or standard 0-10V dimming for homes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, for luxury residential applications, DALI-2 is far superior. DMX is designed for theatrical/entertainment environments and requires more complex addressing and infrastructure. Standard 0-10V analogue dimming cannot individually address fixtures, lacks scene memory in the fixture itself, and provides no status feedback. DALI-2 provides bidirectional communication — your system knows if a driver has failed, the current dim level of every circuit, and lamp burn hours — enabling predictive maintenance and precise scene recall."
      }
    },
    {
      "@type": "Question",
      name: "What is circadian lighting and does it require DALI-2?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Circadian lighting (also called Human Centric Lighting or HCL) automatically adjusts the colour temperature and intensity of your lighting throughout the day to match your body's natural circadian rhythm — warm 2700K light in evenings to promote melatonin, bright 6500K daylight in mornings to promote alertness. While circadian lighting can be achieved with basic smart bulbs, DALI-2 with tunable white drivers is the architectural-grade standard for luxury residences, providing flicker-free smooth dimming curves, lamp-level accuracy, and no dependency on proprietary ecosystems."
      }
    },
  ]
}

const faqs = [
  {
    question: "What is DALI-2?",
    answer: "DALI-2 (Digital Addressable Lighting Interface, Edition 2) is an open international protocol (IEC 62386) for intelligent lighting control. It gives each light driver a unique digital address, enabling individual dimming, scene programming, circadian light schedules, occupancy control, and daylight harvesting. Edition 2 added mandatory interoperability certification, ensuring products from any brand work together reliably."
  },
  {
    question: "How does DALI-2 integrate with KNX home automation?",
    answer: "DALI-2 is the lighting bus; KNX is the full-home automation backbone. They communicate through a KNX-DALI gateway. Basalte or Ekinex keypads on the KNX bus send commands to DALI-2 gateways, which address individual light drivers — giving you unified control of all lighting, climate, curtains, and security from one interface."
  },
  {
    question: "What is the cost of DALI-2 lighting in India?",
    answer: "DALI-2 lighting control costs ₹4,500–₹8,500 per circuit installed. A 3BHK (40 circuits) costs ₹2.8L–₹4.5L. A luxury villa (120+ circuits) with full circadian scheduling ranges from ₹9.5L–₹18L installed. Grand estate systems with daylight harvesting and KNX integration can reach ₹22L–₹38L."
  },
  {
    question: "What is the difference between DALI and DALI-2?",
    answer: "DALI Edition 1 established digital addressing but had inconsistent interoperability. DALI-2 introduced mandatory independent certification testing (DiiA), added application controllers (sensors and push buttons on the DALI bus), and ensures any certified device works with any other regardless of brand."
  },
  {
    question: "Is DALI-2 better than DMX or 0-10V dimming for homes?",
    answer: "Yes. DMX is designed for theatrical use and requires complex infrastructure. 0-10V analogue dimming cannot individually address fixtures or report status. DALI-2 offers bidirectional communication — your system knows dim levels, lamp hours, and failures of every driver, enabling precise scene recall and predictive maintenance."
  },
  {
    question: "What is circadian lighting and does it require DALI-2?",
    answer: "Circadian lighting automatically adjusts colour temperature and brightness throughout the day — warm 2700K in evenings for melatonin, bright 6500K in mornings for alertness. DALI-2 with tunable-white drivers is the architectural-grade standard for this in luxury residences: flicker-free, lamp-level precision, no proprietary ecosystem dependency."
  },
]

export default function Page() {
  const breadcrumbItems = [
    { name: "Home", href: "/" },
    { name: "Journal", href: "/journal" },
    { name: "DALI-2 Lighting Control Cost India 2026", href: "/journal/dali-2-lighting-cost-india-2026" }
  ]

  return (
    <main className="flex min-h-screen flex-col bg-[#08080A]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Breadcrumb items={breadcrumbItems} />
      <article className="w-full pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">

          {/* Header */}
          <header className="mb-16">
            <div className="text-xs uppercase tracking-widest font-mono text-[#C5A880] mb-4">VARELLI Journal — Lighting Systems</div>
            <h1 className="text-4xl md:text-5xl font-display text-white font-bold leading-tight mb-6">
              DALI-2 Lighting Control in India 2026 — What It Is, How It Works & Transparent Pricing
            </h1>
            <p className="text-xl text-[#C2C2C8] leading-relaxed">
              Over 50 luxury home automation buyers per month in India search for information on DALI-2 — yet almost no Indian integrator explains it clearly. This guide covers exactly what DALI-2 is, how it connects to KNX, and what you should expect to pay in ₹ Lakhs.
            </p>
          </header>

          {/* Executive Summary */}
          <section className="bg-[#121216] border border-[#C5A880]/30 rounded-xl p-8 mb-16 shadow-2xl">
            <div className="text-xs uppercase tracking-widest font-mono text-[#C5A880] mb-2 font-semibold">Executive Summary</div>
            <p className="text-base md:text-lg text-white font-normal leading-relaxed mb-4">
              DALI-2 (IEC 62386) is the open, international standard for addressable, intelligent lighting control in luxury residences. It gives every light driver a unique digital address, enabling individual dimming, circadian tunable-white schedules, daylight harvesting, and scene programming — without proprietary lock-in. Integrated with KNX wired home automation, DALI-2 is the highest standard of architectural lighting control available for Indian villas and penthouses.
            </p>
            <ul className="list-none space-y-2">
              {[
                "Cost range: ₹4,500–₹8,500 per lighting circuit installed",
                "3BHK flat (40 circuits): ₹2.8L–₹4.5L total",
                "Luxury villa (120+ circuits + circadian): ₹9.5L–₹18L",
                "Grand estate with KNX + daylight harvesting: ₹22L–₹38L",
                "Open standard — no proprietary ecosystem, works with KNX, Basalte, Ekinex",
              ].map((pt, i) => (
                <li key={i} className="flex items-start gap-3 text-[#C2C2C8] text-sm">
                  <span className="text-[#C5A880] mt-0.5 shrink-0">—</span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* What Is DALI-2 */}
          <section className="mb-16">
            <h2 className="text-3xl font-display text-white font-semibold mb-6 border-b border-white/10 pb-4">What Is DALI-2? The Standard Explained</h2>
            <p className="text-[#C2C2C8] leading-relaxed mb-6">
              <strong className="text-white">DALI</strong> stands for <strong className="text-white">Digital Addressable Lighting Interface</strong>. It is an open international standard (IEC 62386) for controlling luminaires — light drivers, ballasts, and LED controllers — over a simple 2-wire bus at low voltage. Unlike traditional dimmer switches that control an entire circuit, DALI addresses every individual light driver on the bus independently.
            </p>
            <p className="text-[#C2C2C8] leading-relaxed mb-6">
              <strong className="text-white">DALI-2</strong> is Edition 2 of this standard, introduced to resolve interoperability issues in the original DALI specification. The key difference: DALI-2 mandates independent certification testing through the <strong className="text-white">DiiA (Digital Illumination Interface Alliance)</strong>, ensuring that any DALI-2 certified driver, controller, or sensor from any manufacturer works seamlessly with any other certified product.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {[
                { label: "Protocol Standard", value: "IEC 62386 (open, not proprietary)" },
                { label: "Bus Voltage", value: "9.5–22.5V DC, 2-wire" },
                { label: "Max Devices per Bus", value: "64 control gear + 64 input devices" },
                { label: "Dimming Curves", value: "Logarithmic (matches human perception)" },
                { label: "Colour Control", value: "Tunable White (Tc) + RGBWAF (Colour)" },
                { label: "KNX Integration", value: "Via KNX-DALI gateway (Theben, Schneider, etc.)" },
              ].map((item, i) => (
                <div key={i} className="bg-[#101015] rounded-lg p-4 border border-white/10">
                  <div className="text-[#C5A880] text-xs font-mono uppercase tracking-wider mb-1">{item.label}</div>
                  <div className="text-white text-sm font-medium">{item.value}</div>
                </div>
              ))}
            </div>
          </section>

          {/* DALI vs DALI-2 vs DMX */}
          <section className="mb-16">
            <h2 className="text-3xl font-display text-white font-semibold mb-6 border-b border-white/10 pb-4">DALI vs DALI-2 vs DMX vs 0-10V — Which Do You Need?</h2>
            <div className="overflow-x-auto rounded-xl border border-white/10">
              <table className="w-full text-left text-sm text-[#D1D1D6]">
                <thead className="bg-[#1A1A22] text-[#C5A880] uppercase tracking-wider text-xs font-mono">
                  <tr>
                    <th className="p-4 border-b border-white/10">Protocol</th>
                    <th className="p-4 border-b border-white/10">Use Case</th>
                    <th className="p-4 border-b border-white/10">Individual Address</th>
                    <th className="p-4 border-b border-white/10">Bidirectional</th>
                    <th className="p-4 border-b border-white/10">For Luxury Homes?</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["DALI (Ed.1)", "Legacy commercial", "Yes", "Yes", "Acceptable"],
                    ["DALI-2 (Ed.2)", "Luxury residential / commercial", "Yes", "Yes", "✓ Preferred"],
                    ["DMX", "Stage / theatrical lighting", "Yes (512/universe)", "No", "Not recommended"],
                    ["0-10V", "Basic dimming, one circuit", "No", "No", "✗ Too basic"],
                    ["Trailing Edge PWM", "Budget residential dimmers", "No", "No", "✗ Not architectural"],
                  ].map(([proto, use, addr, bidir, rec], i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-[#101015]" : "bg-[#0D0D11]"}>
                      <td className={`p-4 border-b border-white/5 font-semibold ${proto.includes("DALI-2") ? "text-[#C5A880]" : ""}`}>{proto}</td>
                      <td className="p-4 border-b border-white/5">{use}</td>
                      <td className="p-4 border-b border-white/5">{addr}</td>
                      <td className="p-4 border-b border-white/5">{bidir}</td>
                      <td className={`p-4 border-b border-white/5 font-semibold ${rec.includes("✓") ? "text-emerald-400" : rec.includes("✗") ? "text-red-400" : "text-[#C2C2C8]"}`}>{rec}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* DALI-2 + KNX Integration */}
          <section className="mb-16">
            <h2 className="text-3xl font-display text-white font-semibold mb-6 border-b border-white/10 pb-4">How DALI-2 + KNX Works in a Luxury Indian Villa</h2>
            <p className="text-[#C2C2C8] leading-relaxed mb-6">
              In a VARELLI installation, <strong className="text-white">KNX</strong> is the backbone of the entire smart home — it controls lighting scenes, HVAC, motorised curtains, security zones, and access control via a single decentralised wired bus. <strong className="text-white">DALI-2</strong> handles the lighting sub-system, with each LED driver individually addressable for precise dimming and tunable white control.
            </p>
            <div className="space-y-4 mb-6">
              {[
                { step: "01", title: "KNX Bus (Backbone)", desc: "Basalte or Ekinex keypad pressed → KNX telegram sent across TP1 twisted-pair bus to KNX-DALI gateway." },
                { step: "02", title: "KNX-DALI Gateway", desc: "Theben or Schneider gateway converts KNX command to DALI-2 protocol — addresses specific driver groups or individual addresses." },
                { step: "03", title: "DALI-2 Bus (Lighting Layer)", desc: "DALI-2 drivers receive commands, dim smoothly on logarithmic curve, and report back status (dim level, lamp hours, failure alerts) to the KNX bus." },
                { step: "04", title: "Feedback & Scenes", desc: "KNX visualisation panel (Basalte app / wall panel) shows real-time status of every lighting circuit — controllable by scene, schedule, or circadian daylight profile." },
              ].map((item, i) => (
                <div key={i} className="flex gap-5 bg-[#121216] rounded-lg p-5 border border-white/10">
                  <span className="text-3xl font-mono text-[#C5A880]/40 shrink-0 font-bold">{item.step}</span>
                  <div>
                    <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                    <p className="text-[#C2C2C8] text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-[#C2C2C8] text-sm">
              For full KNX wired home automation details, see our{" "}
              <Link href="/journal/knx-home-automation-bangalore-cost-2026" className="text-[#C5A880] hover:underline">KNX home automation cost guide for Bangalore</Link>{" "}
              and{" "}
              <Link href="/journal/knx-vs-crestron-vs-control4" className="text-[#C5A880] hover:underline">KNX vs Crestron vs Control4 comparison</Link>.
            </p>
          </section>

          {/* Circadian Lighting */}
          <section className="mb-16">
            <h2 className="text-3xl font-display text-white font-semibold mb-6 border-b border-white/10 pb-4">Circadian Lighting With DALI-2 — Human Centric Lighting for Indian Homes</h2>
            <p className="text-[#C2C2C8] leading-relaxed mb-6">
              Circadian lighting (Human Centric Lighting / HCL) is the programming of your home's lights to follow your body's natural 24-hour rhythm. With DALI-2 tunable-white drivers installed in a VARELLI system, your entire home transitions automatically:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {[
                { time: "6:00 – 9:00 AM", kelvin: "5500–6500K", label: "Energising Dawn White", desc: "Daylight white light suppresses melatonin, increases cortisol, promotes alertness for morning routines." },
                { time: "10:00 AM – 4:00 PM", kelvin: "4000–5000K", label: "Productive Neutral White", desc: "Neutral white maintains focus and productivity through working or study hours." },
                { time: "6:00 – 10:00 PM", kelvin: "2700–3000K", label: "Relaxing Warm White", desc: "Warm amber light stimulates melatonin production, preparing the body for sleep." },
              ].map((slot, i) => (
                <div key={i} className="bg-[#121216] rounded-xl p-5 border border-white/10">
                  <div className="text-[#C5A880] text-xs font-mono mb-2">{slot.time}</div>
                  <div className="text-white font-semibold mb-1">{slot.kelvin} — {slot.label}</div>
                  <p className="text-[#C2C2C8] text-xs leading-relaxed">{slot.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing */}
          <section className="mb-16">
            <h2 className="text-3xl font-display text-white font-semibold mb-6 border-b border-white/10 pb-4">DALI-2 Lighting Control Cost in India — Transparent ₹ Pricing</h2>
            <p className="text-[#C2C2C8] leading-relaxed mb-6">
              All pricing below is inclusive of DALI-2 certified LED drivers, KNX-DALI gateways, DALI-2 push-button input devices, commissioning, and programming. Luminaire procurement (light fittings) is separate and is typically coordinated through your interior designer or architect.
            </p>
            <div className="overflow-x-auto rounded-xl border border-white/10 mb-6">
              <table className="w-full text-left text-sm text-[#D1D1D6]">
                <thead className="bg-[#1A1A22] text-[#C5A880] uppercase tracking-wider text-xs font-mono">
                  <tr>
                    <th className="p-4 border-b border-white/10">System Tier</th>
                    <th className="p-4 border-b border-white/10">Property Type</th>
                    <th className="p-4 border-b border-white/10">Circuits</th>
                    <th className="p-4 border-b border-white/10">Installed Cost (₹)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Essential DALI-2", "3BHK apartment or villa floor", "20–40 circuits", "₹2.8L – ₹4.5L"],
                    ["Architectural Dimming", "4–5BHK luxury villa (full floor)", "60–90 circuits", "₹5.5L – ₹9.5L"],
                    ["Circadian + Tunable White", "Villa with HCL scheduling", "80–120 circuits", "₹9.5L – ₹18L"],
                    ["Grand Estate (KNX + DALI-2)", "Multi-floor estate, daylight harvesting", "150+ circuits", "₹22L – ₹38L"],
                    ["Per Circuit (any tier)", "Add-on / partial scope", "Per point", "₹4,500 – ₹8,500"],
                  ].map(([tier, prop, circuits, cost], i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-[#101015]" : "bg-[#0D0D11]"}>
                      <td className="p-4 border-b border-white/5 font-semibold text-white">{tier}</td>
                      <td className="p-4 border-b border-white/5">{prop}</td>
                      <td className="p-4 border-b border-white/5">{circuits}</td>
                      <td className="p-4 border-b border-white/5 text-[#C5A880] font-semibold">{cost}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-[#C2C2C8] text-sm italic">
              Prices above are VARELLI 2026 benchmarks for Bangalore. Mumbai and Delhi NCR pricing is approximately 12–18% higher due to logistics. All figures are exclusive of GST.
            </p>
          </section>

          {/* What Drives Cost */}
          <section className="mb-16">
            <h2 className="text-3xl font-display text-white font-semibold mb-6 border-b border-white/10 pb-4">What Drives DALI-2 Cost Up or Down?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { factor: "Driver Quality", detail: "Helvar, Osram Optotronic, Tridonic DALI-2 certified drivers cost 3–4× budget generic drivers but last 15+ years with flicker-free performance and full dimming range." },
                { factor: "Number of Circuits", detail: "Every independently controlled circuit (a pendant, downlight zone, strip light channel) adds a driver address. Detailed architectural lighting plans = higher circuit counts." },
                { factor: "Tunable White vs Single White", detail: "Circadian tunable white requires dual-channel DALI-2 Tc drivers — roughly 40–60% more per circuit than single-channel dimming only." },
                { factor: "KNX Gateway Capacity", detail: "A single KNX-DALI gateway handles 64 DALI devices. Large villas need multiple gateways, each adding ₹35,000–₹70,000 per gateway depending on brand." },
                { factor: "Commissioning Complexity", detail: "Programming individual scene setups, circadian schedules, daylight sensor calibration, and presence detector logic is billed as engineering time — typically 15–25% of hardware cost." },
                { factor: "New Build vs Retrofit", detail: "New construction allows DALI-2 bus wiring to be laid in conduit at slab stage (low cost). Retrofit means surface trunking or fishing wires through finished walls (30–50% higher labour cost)." },
              ].map((item, i) => (
                <div key={i} className="bg-[#121216] rounded-lg p-5 border border-white/10">
                  <h3 className="text-white font-semibold mb-2">{item.factor}</h3>
                  <p className="text-[#C2C2C8] text-sm leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Internal Links */}
          <section className="mb-16 bg-[#121216] border border-white/10 rounded-xl p-8">
            <h2 className="text-xl font-display text-white font-semibold mb-5">Related VARELLI Guides</h2>
            <ul className="space-y-3">
              {[
                { href: "/journal/knx-home-automation-bangalore-cost-2026", label: "KNX Home Automation Cost in Bangalore 2026 — Complete ₹ Guide" },
                { href: "/journal/knx-vs-crestron-vs-control4", label: "KNX vs Crestron vs Control4 — Which System Wins for Indian Villas?" },
                { href: "/journal/best-home-automation-company-bangalore", label: "Best Home Automation Companies in Bangalore — 2026 Honest Ranking" },
                { href: "/home-automation/bangalore", label: "VARELLI Home Automation in Bangalore — Service Overview" },
                { href: "/journal/dali-2-lighting-bangalore", label: "DALI-2 Circadian Lighting in Bangalore — Installation Guide" },
              ].map(({ href, label }, i) => (
                <li key={i}>
                  <Link href={href} className="text-[#C5A880] hover:underline text-sm">
                    → {label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

        </div>
      </article>

      <FAQSection title="DALI-2 Frequently Asked Questions" faqs={faqs} />
      <ServiceCTA
        serviceName="DALI-2 Lighting Control"
        title="Design Your DALI-2 Lighting System With VARELLI"
        description="Speak with a certified VARELLI lighting systems architect. We design, supply, and commission DALI-2 circadian lighting systems for luxury villas and penthouses across Bangalore, Mumbai, Delhi NCR, and Hyderabad."
      />
    </main>
  )
}
