import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import Breadcrumb from "@/components/layout/Breadcrumb";
import FAQSection from "@/components/sections/service/FAQSection";
import ServiceCTA from "@/components/sections/service/ServiceCTA";
import Link from "next/link";

export const metadata: Metadata = generatePageMetadata({
  title: "What is Home Automation? The Complete 2026 Architectural Guide | VARELLI",
  description:
    "An architectural guide to home automation: how wired KNX bus systems work, difference between smart gadgets vs integrated systems, wiring requirements, and 2026 cost in India.",
  path: "/journal/what-is-home-automation",
  keywords: [
    "what is home automation",
    "home automation systems India",
    "how does home automation work",
    "smart home automation guide",
    "KNX home automation explained",
    "home automation wiring guide India",
    "smart home vs home automation",
    "home automation cost in India",
  ],
});

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "What is Home Automation? The Complete Architectural Guide 2026",
  description:
    "An in-depth guide answering what home automation is, how wired KNX bus systems operate, why wireless gadgets fail in large luxury homes, and how to plan automation at the civil construction stage.",
  author: {
    "@type": "Organization",
    name: "VARELLI Systems Architecture Team",
    url: "https://varelli.co.in",
  },
  publisher: {
    "@type": "Organization",
    name: "VARELLI",
    logo: { "@type": "ImageObject", url: "https://varelli.co.in/images/varelli-logo.png" },
  },
  datePublished: "2026-08-15",
  dateModified: "2026-09-24",
  mainEntityOfPage: "https://varelli.co.in/journal/what-is-home-automation",
};

const faqs = [
  {
    question: "What is the true definition of home automation?",
    answer:
      "Home automation is the centralized, automated control of a building's electrical and mechanical subsystems — including lighting, climate, motorised window treatments, audio-video, access security, and energy management. Unlike consumer smart devices that require manual phone app clicks or voice commands, an authentic home automation system operates autonomously through calibrated sensors, programmatic schedules, and local bus-level logic.",
  },
  {
    question: "What is the difference between smart home gadgets and professional home automation?",
    answer:
      "Smart home gadgets (WiFi smart bulbs, plug-in adapters, voice pucks) operate over consumer 2.4 GHz WiFi, rely entirely on third-party cloud servers, and run on separate apps with no unified communication. Professional home automation (like KNX or Crestron) uses a dedicated twisted-pair communication bus wired directly to DIN-rail electrical panels. It operates 100% locally with zero internet dependency, sub-millisecond switching speeds, and 20+ year industrial hardware lifespans.",
  },
  {
    question: "At what stage of home construction should home automation be planned?",
    answer:
      "Home automation must be planned during the architectural drawing and civil rough-in stage (first-fix). All lighting circuits, fan loads, HVAC actuators, motorised curtain tracks, and sensor locations must have dedicated conduits routed directly back to centralized automation distribution boards (DBs) rather than traditional wall switchboxes.",
  },
  {
    question: "Does home automation still work when the internet goes down?",
    answer:
      "Yes — provided it is built on a professional decentralized protocol like KNX. In a KNX system, every keypad, sensor, and actuator contains its own local microprocessor. Scene recall, circadian lighting, motion sensing, and switch commands execute over the physical twisted-pair bus independently of any router, internet connection, or cloud server.",
  },
  {
    question: "How much does professional home automation cost in India in 2026?",
    answer:
      "In India, a professionally engineered wired KNX automation system typically ranges from ₹4 Lakhs to ₹9 Lakhs for a premium 3BHK apartment, ₹10 Lakhs to ₹18 Lakhs for a 4BHK luxury residence, and ₹20 Lakhs to ₹55 Lakhs+ for a bespoke 5,000–12,000 sq.ft. luxury villa encompassing lighting, DALI-2 dimming, climate integration, motorised shading, and multi-room audio.",
  },
  {
    question: "Which protocol is best for luxury villas: KNX, Crestron, Control4, or Zigbee?",
    answer:
      "For long-term reliability and architectural luxury, KNX is the global gold standard (ISO/IEC 14543). Because KNX is an open international standard supported by over 500 European manufacturers (such as Basalte, Ekinex, Jung, and Gira), your home is never locked to a single proprietary brand or vendor. Crestron and Control4 remain popular for custom AV switching, but rely on proprietary central processors that require replacement if the manufacturer alters their platform.",
  },
];

export default function WhatIsHomeAutomationPage() {
  return (
    <div className="bg-[#08080A] text-[#F2F2F5] min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <div className="max-w-4xl mx-auto px-6 pt-32 pb-20">
        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "Journal", href: "/journal" },
            { name: "What is Home Automation?", href: "/journal/what-is-home-automation" },
          ]}
        />

        <header className="mt-8 mb-12">
          <div className="flex items-center gap-3 text-xs tracking-widest text-[#8E8E93] uppercase font-mono mb-4">
            <span className="text-[#C5A880]">Architectural Primer</span>
            <span>•</span>
            <span>10 min read</span>
            <span>•</span>
            <span>Updated September 2026</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-light text-white tracking-tight leading-[1.15] mb-6">
            What is Home Automation? The Complete 2026 Architectural Guide
          </h1>
          <p className="text-lg md:text-xl text-[#A0A0A5] font-light leading-relaxed">
            Beyond gadgets and voice pucks: understanding how decentralized wired bus systems, centralized DIN panels, and architectural interfaces create effortless residential intelligence.
          </p>
        </header>

        {/* Quick Answer Summary Box for Featured Snippets */}
        <section className="bg-[#121216] border border-[#C5A880]/30 rounded-xl p-8 mb-16 shadow-2xl">
          <div className="text-xs uppercase tracking-widest font-mono text-[#C5A880] mb-2 font-semibold">
            Quick Definition
          </div>
          <p className="text-base md:text-lg text-white font-normal leading-relaxed mb-4">
            <strong>Home automation</strong> is the centralized, programmatic control of a residence&apos;s essential electrical, mechanical, and ambient systems — including architectural lighting, climate (HVAC and heat pumps), motorised shades, multi-room audio, security, and fresh air ventilation.
          </p>
          <p className="text-sm md:text-base text-[#C2C2C8] leading-relaxed">
            Unlike retail smart devices that depend on WiFi and separate smartphone apps, an authentic home automation system uses a dedicated, hardwired low-voltage bus cable (such as <Link href="/brands/basalte" className="text-[#C5A880] underline hover:text-[#d8ba91]">KNX</Link>) connected to a central distribution board. Commands execute instantaneously and locally, with complete reliability and zero cloud dependency.
          </p>
        </section>

        {/* Article Body */}
        <div className="prose prose-invert max-w-none space-y-12">
          <section>
            <h2 className="text-2xl md:text-3xl font-serif font-light text-white tracking-tight mb-6">
              Smart Home Gadgets vs. Professional Home Automation
            </h2>
            <p className="text-[#C2C2C8] leading-relaxed mb-6">
              In recent years, the phrase &ldquo;smart home&rdquo; has been diluted by consumer marketing. Retail marketplaces promote battery-powered smart plugs, WiFi light bulbs, and infrared blasters as home automation. While suitable for retrofitting a rented studio flat, this consumer-grade technology invariably collapses when deployed across a 5,000 to 15,000 sq.ft. luxury residence.
            </p>

            <div className="overflow-x-auto my-8 border border-white/10 rounded-lg">
              <table className="w-full text-left text-sm text-[#D1D1D6]">
                <thead className="bg-[#1A1A22] text-[#C5A880] uppercase tracking-wider text-xs font-mono">
                  <tr>
                    <th className="p-4 border-b border-white/10">Feature</th>
                    <th className="p-4 border-b border-white/10">Consumer &ldquo;Smart Home&rdquo;</th>
                    <th className="p-4 border-b border-white/10">Architectural Home Automation (KNX)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 bg-[#101015]">
                  <tr>
                    <td className="p-4 font-semibold text-white">Backbone Architecture</td>
                    <td className="p-4 text-[#8E8E93]">Wireless 2.4 GHz WiFi / Zigbee mesh</td>
                    <td className="p-4 text-[#C5A880]">Hardwired shielded twisted-pair bus (TP-1)</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-white">Internet Dependency</td>
                    <td className="p-4 text-[#8E8E93]">100% cloud dependent (fails when offline)</td>
                    <td className="p-4 text-[#C5A880]">100% local processing (zero cloud reliance)</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-white">Switching Latency</td>
                    <td className="p-4 text-[#8E8E93]">800ms – 3000ms delay</td>
                    <td className="p-4 text-[#C5A880]">&lt; 20ms instantaneous response</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-white">Wall Interfaces</td>
                    <td className="p-4 text-[#8E8E93]">Plastic retrofitted modules &amp; app screens</td>
                    <td className="p-4 text-[#C5A880]">Solid milled brass, aluminium &amp; leather keypads</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-white">Single Point of Failure</td>
                    <td className="p-4 text-[#8E8E93]">WiFi router or hub failure kills entire home</td>
                    <td className="p-4 text-[#C5A880]">Decentralized logic; no master brain can crash</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-white">Lifecycle Expectancy</td>
                    <td className="p-4 text-[#8E8E93]">2 – 4 years before obsolescence</td>
                    <td className="p-4 text-[#C5A880]">25+ years backward-compatible standard</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-serif font-light text-white tracking-tight mb-6">
              The 5 Core Layers of an Intelligent Home
            </h2>
            <p className="text-[#C2C2C8] leading-relaxed mb-6">
              A comprehensive residential automation design is not an afterthought of apps. It is engineered from five interlocking layers:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="p-6 bg-[#121216] border border-white/5 rounded-xl">
                <span className="text-[#C5A880] font-mono text-sm">01 / ARCHITECTURAL LIGHTING</span>
                <h3 className="text-xl font-medium text-white mt-2 mb-3">DALI-2 &amp; Phase Control</h3>
                <p className="text-sm text-[#A0A0A5] leading-relaxed">
                  Precision dimming down to 0.1% without flickering or stepped jumps. Automated circadian rhythm temperature shifts from crisp 4000K daylight to warm 2200K amber candlelight in the evening.
                </p>
              </div>

              <div className="p-6 bg-[#121216] border border-white/5 rounded-xl">
                <span className="text-[#C5A880] font-mono text-sm">02 / CLIMATE &amp; IAQ</span>
                <h3 className="text-xl font-medium text-white mt-2 mb-3">Integrated VRV &amp; Fresh Air</h3>
                <p className="text-sm text-[#A0A0A5] leading-relaxed">
                  Native KNX gateway communication directly to Daikin, Mitsubishi, or Toshiba VRV/VRF systems, paired with <Link href="/fresh-air-ventilation" className="text-[#C5A880] underline hover:text-[#d8ba91]">Zehnder ERV continuous fresh air ventilation</Link> keeping CO₂ under 600 ppm.
                </p>
              </div>

              <div className="p-6 bg-[#121216] border border-white/5 rounded-xl">
                <span className="text-[#C5A880] font-mono text-sm">03 / NATURAL LIGHT</span>
                <h3 className="text-xl font-medium text-white mt-2 mb-3">Motorised Shading &amp; Facades</h3>
                <p className="text-sm text-[#A0A0A5] leading-relaxed">
                  Silent Somfy or Lutron motors integrated with astronomical solar tracking. Drapes and Roman blinds adjust automatically based on exterior lux and thermal heat gain.
                </p>
              </div>

              <div className="p-6 bg-[#121216] border border-white/5 rounded-xl">
                <span className="text-[#C5A880] font-mono text-sm">04 / AUDIO-VIDEO</span>
                <h3 className="text-xl font-medium text-white mt-2 mb-3">High-Resolution Multi-Zone Audio</h3>
                <p className="text-sm text-[#A0A0A5] leading-relaxed">
                  Discrete in-wall architectural speakers (Sonus Faber, Sonance) streaming uncompressed lossless audio throughout the villa, synchronized with dedicated <Link href="/private-cinema" className="text-[#C5A880] underline hover:text-[#d8ba91]">private cinema</Link> zones.
                </p>
              </div>

              <div className="p-6 bg-[#121216] border border-white/5 rounded-xl md:col-span-2">
                <span className="text-[#C5A880] font-mono text-sm">05 / PHYSICAL ACCESS &amp; SECURITY</span>
                <h3 className="text-xl font-medium text-white mt-2 mb-3">Biometrics &amp; Perimeter Protection</h3>
                <p className="text-sm text-[#A0A0A5] leading-relaxed">
                  DoorBird IP video door intercoms, ekey biometric fingerprint entry, boundary perimeter infrared beams, and Hikvision AI analytics linked directly into master keypad panic scenes.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-serif font-light text-white tracking-tight mb-6">
              How Does Home Automation Actually Work? The Cabling Architecture
            </h2>
            <p className="text-[#C2C2C8] leading-relaxed mb-6">
              In a conventional Indian home, 230V mains power cables are run from the circuit breaker directly to switchboards on the wall in every room. The switch physically interrupts the 230V line.
            </p>
            <p className="text-[#C2C2C8] leading-relaxed mb-6">
              In a professional <strong>star-topology wired automation system</strong>, high-voltage power and control signals are physically separated:
            </p>
            <ul className="list-disc list-inside space-y-3 text-[#C2C2C8] mb-8">
              <li>
                <strong>All High-Voltage Wiring Stays in the Electrical Panel:</strong> The light fixtures, fan circuits, and power loads are wired directly to industrial relay/dimmer actuators inside a central DIN-rail Distribution Board (DB).
              </li>
              <li>
                <strong>Only Low-Voltage Bus Cables Go to the Walls:</strong> The sleek wall keypads (such as <Link href="/brands/basalte" className="text-[#C5A880] underline hover:text-[#d8ba91]">Basalte Sentido</Link> or <Link href="/brands/ekinex" className="text-[#C5A880] underline hover:text-[#d8ba91]">Ekinex 20VENTI</Link>) carry only a safe 29V DC low-voltage twisted pair cable. No 230V power is present at the switch.
              </li>
              <li>
                <strong>Programmable Logic:</strong> When you press a button, a telegram data packet is sent over the bus to the actuator in the central panel, executing the command in under 15 milliseconds. Any button on any keypad can control any light or macro scene across the entire residence.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-serif font-light text-white tracking-tight mb-6">
              Home Automation Cost in India (2026 Price Bands)
            </h2>
            <p className="text-[#C2C2C8] leading-relaxed mb-6">
              The investment required depends on residence scale, architectural finishes, and control depth. Below are realistic benchmark costs for genuine European wired automation in India:
            </p>

            <div className="overflow-x-auto my-8 border border-white/10 rounded-lg">
              <table className="w-full text-left text-sm text-[#D1D1D6]">
                <thead className="bg-[#1A1A22] text-[#C5A880] uppercase tracking-wider text-xs font-mono">
                  <tr>
                    <th className="p-4 border-b border-white/10">Property Type</th>
                    <th className="p-4 border-b border-white/10">Typical Size</th>
                    <th className="p-4 border-b border-white/10">Estimated Investment</th>
                    <th className="p-4 border-b border-white/10">Systems Included</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 bg-[#101015]">
                  <tr>
                    <td className="p-4 font-semibold text-white">Luxury 3BHK Apartment</td>
                    <td className="p-4 text-[#8E8E93]">2,000 – 2,800 sq.ft.</td>
                    <td className="p-4 text-[#C5A880]">₹4.5 Lakhs – ₹8.5 Lakhs</td>
                    <td className="p-4 text-[#A0A0A5]">Lighting scenes, AC control, DALI dimming, master keypads</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-white">Premium 4BHK Penthouse</td>
                    <td className="p-4 text-[#8E8E93]">3,500 – 5,000 sq.ft.</td>
                    <td className="p-4 text-[#C5A880]">₹10 Lakhs – ₹18 Lakhs</td>
                    <td className="p-4 text-[#A0A0A5]">Full KNX lighting, curtain motors, VRV HVAC, multi-room audio (2 zones)</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-white">Architectural Villa</td>
                    <td className="p-4 text-[#8E8E93]">5,500 – 8,500 sq.ft.</td>
                    <td className="p-4 text-[#C5A880]">₹22 Lakhs – ₹38 Lakhs</td>
                    <td className="p-4 text-[#A0A0A5]">Comprehensive KNX/DALI-2, Basalte keypads, Somfy shading, DoorBird intercom, 4-zone audio</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-white">Grand Luxury Estate</td>
                    <td className="p-4 text-[#8E8E93]">10,000+ sq.ft.</td>
                    <td className="p-4 text-[#C5A880]">₹40 Lakhs – ₹75 Lakhs+</td>
                    <td className="p-4 text-[#A0A0A5]">Full ecosystem: KNX, Zehnder ERV, Central Vacuum, Dolby Atmos cinema integration, enterprise network</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-[#8E8E93] italic">
              *Note: Figures exclude civil cabling conduit works and GST. For a detailed breakdown, read our <Link href="/journal/home-automation-cost-bangalore" className="text-[#C5A880] underline hover:text-[#d8ba91]">Bangalore Home Automation Pricing Guide</Link>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-serif font-light text-white tracking-tight mb-6">
              When to Start: The Architect&apos;s Checklist
            </h2>
            <p className="text-[#C2C2C8] leading-relaxed mb-6">
              Because true automation re-architects how electricity travels through a home, retrofitting after plastering or flooring is extraordinarily expensive. The ideal consultation milestone is when your architectural floor plans are finalized and electrical layouts are being drawn:
            </p>
            <ol className="list-decimal list-inside space-y-4 text-[#C2C2C8] mb-8">
              <li>
                <strong>Conduit Layout (First Fix):</strong> Ensure your electrical consultant designs a centralized conduit path running from every ceiling light back to designated automation panels in utility risers.
              </li>
              <li>
                <strong>Server &amp; Panel Rack Space:</strong> Allocate a ventilated closet or utility room for DIN-rail distribution panels, low-voltage power supplies, and network racks.
              </li>
              <li>
                <strong>Keypad Placement at Eye Level:</strong> Replace cluster switchboards (which traditionally ruin wall aesthetics with 8–10 plastic rockers) with a single, elegant 2-button or 4-button architectural keypad positioned consistently at 1200mm from finished floor level.
              </li>
              <li>
                <strong>Data Infrastructure:</strong> Run CAT6A or CAT7 shielded cable to all TV locations, access points, surveillance cameras, and video intercom stations.
              </li>
            </ol>
          </section>

          {/* Related Articles Navigation */}
          <section className="bg-[#121216] border border-white/10 rounded-xl p-8 my-12">
            <h3 className="text-xl font-serif font-light text-white mb-4">Recommended Next Reading</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <Link
                href="/journal/knx-vs-crestron-vs-control4"
                className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition group"
              >
                <div className="text-[#C5A880] font-mono text-xs mb-1">Comparison Guide</div>
                <div className="text-white font-medium group-hover:text-[#C5A880] transition">
                  KNX vs Crestron vs Control4: Which is Right for India? →
                </div>
              </Link>
              <Link
                href="/home-automation/bangalore"
                className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition group"
              >
                <div className="text-[#C5A880] font-mono text-xs mb-1">Local Engineering</div>
                <div className="text-white font-medium group-hover:text-[#C5A880] transition">
                  Home Automation in Bangalore — Villa Architecture &amp; Integration →
                </div>
              </Link>
            </div>
          </section>
        </div>

        <FAQSection faqs={faqs} />

        <ServiceCTA
          title="Plan Your Home Automation Architecture"
          description="Speak with our systems engineers in Indiranagar, Bangalore to review your architectural plans, specify KNX switch layouts, and receive an itemized schematic."
        />
      </div>
    </div>
  );
}
