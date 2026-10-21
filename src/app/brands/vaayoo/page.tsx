import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import Breadcrumb from "@/components/layout/Breadcrumb";
import FAQSection from "@/components/sections/service/FAQSection";
import ServiceCTA from "@/components/sections/service/ServiceCTA";
import Link from "next/link";

export const metadata: Metadata = generatePageMetadata({
  title: "VaaYoo Fresh Air Systems India — PRO1 & COOL | VARELLI",
  description:
    "VaaYoo smart fresh air purification systems in India. PRO1 app-connected air purification and COOL fresh air with DX cooling — no ducting, rapid install, 4-stage HEPA filtration. Supplied and installed by VARELLI across Bangalore, Mumbai, Delhi NCR.",
  path: "/brands/vaayoo",
  keywords: [
    "VaaYoo India",
    "VaaYoo PRO1 India",
    "VaaYoo COOL India",
    "fresh air purification India",
    "smart fresh air system India",
    "indoor air quality Bangalore",
    "fresh air ventilation system India",
  ],
});

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "VaaYoo",
  description:
    "VaaYoo smart fresh air purification systems — PRO1 and COOL — delivering continuous HEPA-filtered outdoor air to homes and offices across India.",
  url: "https://varelli.co.in/brands/vaayoo",
};

const faqs = [
  {
    question: "Is VaaYoo available in India?",
    answer:
      "Yes. VaaYoo PRO1 and VaaYoo COOL fresh air systems are available in India through VARELLI. We supply and install them across Bangalore, Mumbai, Delhi NCR, Hyderabad, Chennai, and Pune. Contact us via WhatsApp at +91 99649 84695.",
  },
  {
    question: "What is the difference between VaaYoo PRO1 and VaaYoo COOL?",
    answer:
      "VaaYoo PRO1 is a smart app-connected fresh air purifier with up to 1,000 m³/h airflow, Wi-Fi & Bluetooth scheduling, and 4-stage HEPA filtration. VaaYoo COOL adds a DX cooling coil that also cools the supply air, plus built-in gas filtration for TVOCs and CO₂ reduction — ideal for sealed homes needing both fresh air and supplemental cooling.",
  },
  {
    question: "Does VaaYoo require indoor ducting?",
    answer:
      "No. The VaaYoo PRO1 is designed for no-floor-space, no-indoor-ducting installation — it multi-mounts on walls or ceilings with a single 10\" or dual 6\" spigot. The VaaYoo COOL is a ducted unit installed outside the living area, so nothing appears on your floor or walls indoors.",
  },
  {
    question: "What is the coverage area of each VaaYoo unit?",
    answer:
      "Both VaaYoo PRO1 (up to 1,000 m³/h) and VaaYoo COOL (765 m³/h) cover up to 1,500 sq ft per unit. For larger homes and villas, VARELLI installs multiple units with a coordinated zone plan.",
  },
  {
    question: "Does VaaYoo integrate with KNX home automation?",
    answer:
      "VaaYoo integrates with smart home systems via app scheduling and timer-based operation. For KNX-based VARELLI projects, we coordinate VaaYoo scheduling alongside lighting, climate, and security as part of a complete intelligent living ecosystem.",
  },
  {
    question: "What is the price of a VaaYoo system in India?",
    answer:
      "VaaYoo PRO1 installations start from approximately ₹2.8L and COOL systems from ₹5.5L, depending on the number of units, property size, and integration scope. VARELLI provides transparent project estimates — contact us for a precise quote.",
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
    <article className="bg-[#08080A] min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-4xl mx-auto px-6 pt-32 pb-20">
        <Breadcrumb
          items={[
            { name: "Brands", href: "/brands" },
            { name: "VaaYoo", href: "/brands/vaayoo" },
          ]}
        />

        {/* Hero */}
        <div className="mb-12">
          <p className="text-xs font-mono uppercase tracking-widest text-[#C5A880] mb-3">
            Fresh Air Partner · Smart IAQ
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            VaaYoo
          </h1>
          <p className="text-lg text-[#C2C2C8] max-w-2xl">
            Smart connected fresh air purification — no floor space, no indoor ducting, 4-stage HEPA + gas filtration with app control. VARELLI's exclusive fresh air partner for Indian luxury homes.
          </p>
        </div>

        {/* Why VaaYoo */}
        <div className="bg-[#121216] border border-[#2A2A35] rounded-sm p-8 mb-10">
          <p className="text-xs font-mono uppercase tracking-widest text-[#C5A880] mb-4">Why Fresh Air Matters</p>
          <p className="text-[#C2C2C8] mb-4">
            In sealed, air-conditioned Indian homes — double-glazed windows, split ACs running 24/7 — indoor CO₂ routinely spikes above 1,500 ppm. The result: lethargy, poor sleep, morning brain fog, and elevated PM2.5 from cooking and traffic infiltration.
          </p>
          <p className="text-[#C2C2C8]">
            VaaYoo solves this with a continuous supply of filtered outdoor air — PM2.5 removed, CO₂ diluted, TVOCs filtered — with smart scheduling so the system ramps up before you wake and goes silent when you sleep.
          </p>
        </div>

        {/* Product 1 */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#C5A880] bg-[#1A1A22] px-3 py-1 rounded-sm">Product 1</span>
            <h2 className="font-display text-2xl font-bold text-white">VaaYoo PRO1</h2>
          </div>
          <p className="text-[#C2C2C8] italic mb-6">
            Smart Connected Air Purification — No floor space · No indoor ducting · Low-noise · App control · Rapid installation
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
            {[
              { val: "1,000 m³/h", label: "Max airflow" },
              { val: "1,500 sq ft", label: "Coverage per unit" },
              { val: "1–7", label: "Speed levels" },
              { val: "43–58 dB(A)", label: "Noise at 1.5 m" },
            ].map((s) => (
              <div key={s.label} className="bg-[#121216] border border-[#2A2A35] rounded-sm p-4 text-center">
                <div className="font-display text-xl font-bold text-[#C5A880]">{s.val}</div>
                <div className="text-xs text-[#C2C2C8] mt-1">{s.label}</div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              ["4-stage filtration", "Pre-filter → HEPA → gas filter (add-on) → HEPA"],
              ["Smart control", "Wi-Fi & Bluetooth app — scheduling, insights, multi-user (iOS/Android)"],
              ["No ducting needed", "Multi-mount — single 10\" or dual 6\" spigot; wall or ceiling"],
              ["Power", "170 W — low energy for continuous 24/7 operation"],
              ["Best for", "Homes, apartments, offices wanting app control and quick installation"],
            ].map(([title, desc]) => (
              <div key={title} className="bg-[#121216] border border-[#2A2A35] rounded-sm p-4">
                <div className="text-sm font-semibold text-[#C5A880] mb-1">{title}</div>
                <div className="text-sm text-[#C2C2C8]">{desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Product 2 */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#C5A880] bg-[#1A1A22] px-3 py-1 rounded-sm">Product 2</span>
            <h2 className="font-display text-2xl font-bold text-white">VaaYoo COOL</h2>
          </div>
          <p className="text-[#C2C2C8] italic mb-4">
            Air purification system with gas filtration and DX cooling — <em>"Pollution Kavach"</em>
          </p>
          <p className="text-[#C2C2C8] mb-6">
            VaaYoo COOL marks a significant leap forward in air purification technology — engineered by a team with over 35 years of indoor air quality experience. It purifies the entire home with a single unit: brings in outside air, filters it through four stages, and cools it before it reaches the room. Free unlimited filter replacement in the first year.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
            {[
              { val: "765 m³/h", label: "Airflow" },
              { val: "1,500 sq ft", label: "Coverage" },
              { val: "1–10", label: "Speed levels" },
              { val: "52 dB(A)", label: "Noise at desk" },
            ].map((s) => (
              <div key={s.label} className="bg-[#121216] border border-[#2A2A35] rounded-sm p-4 text-center">
                <div className="font-display text-xl font-bold text-[#C5A880]">{s.val}</div>
                <div className="text-xs text-[#C2C2C8] mt-1">{s.label}</div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              ["Cooling of ambient air", "DX cooling coil cools supply air on fan mode before it enters the room"],
              ["PM2.5 & CO₂ reduction", "Removes PM, PM2.5, PM10, reduces CO₂ and TVOCs"],
              ["Gas filtration", "Granular activated-carbon for a wide spectrum of harmful gases and VOCs"],
              ["Zero indoor space", "Installed outside the living area — nothing on floor or walls"],
              ["Free filters Year 1", "Unlimited filter replacement in the first year included"],
              ["Easy maintenance", "Washable pre-filter, replaceable HEPA and gas filters; no ozone"],
              ["Best for", "Homes, offices, clinics, hotels wanting fresh, cooled, gas-filtered air"],
            ].map(([title, desc]) => (
              <div key={title} className="bg-[#121216] border border-[#2A2A35] rounded-sm p-4">
                <div className="text-sm font-semibold text-[#C5A880] mb-1">{title}</div>
                <div className="text-sm text-[#C2C2C8]">{desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison Table */}
        <div className="mb-12">
          <h2 className="font-display text-2xl font-bold text-white mb-6">PRO1 vs COOL — Which Is Right for You?</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1A1A22]">
                  <th className="text-left p-4 text-[#C5A880] font-mono uppercase text-xs tracking-widest border border-[#2A2A35]">Feature</th>
                  <th className="text-left p-4 text-[#C5A880] font-mono uppercase text-xs tracking-widest border border-[#2A2A35]">VaaYoo PRO1</th>
                  <th className="text-left p-4 text-[#C5A880] font-mono uppercase text-xs tracking-widest border border-[#2A2A35]">VaaYoo COOL</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Positioning", "Smart, compact, app-connected fresh-air purification", "Fresh-air purification with cooling of ambient air"],
                  ["Air volume", "Up to 1,000 m³/h", "765 m³/h"],
                  ["Coverage", "Up to 1,500 sq ft", "Up to 1,500 sq ft"],
                  ["Filtration", "4-stage: pre-filter, HEPA, gas filter (add-on), HEPA", "4-stage: pre-filter, HEPA, gas filter, HEPA"],
                  ["Cooling of supply air", "—", "Yes (DX coil, cooling on fan mode)"],
                  ["Fan speeds", "1–7", "1–10"],
                  ["Power", "170 W", "150 W (+ 2.88 kW DX unit)"],
                  ["Noise", "43–58 dB(A) at 1.5 m", "52 ±3 dB(A) at desk level"],
                  ["Smart control", "Wi-Fi & Bluetooth app (iOS/Android), scheduling, insights, multi-user", "Built-in filter-life monitoring and advanced timer"],
                  ["Mounting / ducting", "Multi-mount; single 10\" or dual 6\" spigot", "Ducted, with cooling coil; 1050×700×420 mm, 75 kg"],
                  ["Filters included", "2 pre + 2 HEPA (gas filter optional)", "2 pre + 2 HEPA + 1 gas filter"],
                  ["Special offer", "—", "Free unlimited filter replacement in 1st year"],
                  ["Best for", "Homes, apartments, offices wanting smart control and quick installation", "Homes, offices, clinics, hotels wanting fresh, cooled, gas-filtered air"],
                ].map(([feature, pro1, cool], i) => (
                  <tr key={feature} className={i % 2 === 0 ? "bg-[#08080A]" : "bg-[#0E0E12]"}>
                    <td className="p-4 text-[#F2F2F5] font-medium border border-[#2A2A35]">{feature}</td>
                    <td className="p-4 text-[#C2C2C8] border border-[#2A2A35]">{pro1}</td>
                    <td className="p-4 text-[#C2C2C8] border border-[#2A2A35]">{cool}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Quick selection guide */}
          <div className="mt-6 bg-[#121216] border border-[#2A2A35] rounded-sm p-6">
            <p className="text-xs font-mono uppercase tracking-widest text-[#C5A880] mb-4">Quick Selection Guide</p>
            <ul className="space-y-3 text-sm text-[#C2C2C8]">
              <li><strong className="text-[#F2F2F5]">Smart & flexible →</strong> Choose PRO1 if you want app control, scheduling, energy and air-quality insights, a compact multi-mount footprint and the highest airflow.</li>
              <li><strong className="text-[#F2F2F5]">Cool & complete →</strong> Choose COOL if you want fresh air that is also cooled, gas filtration included, 10 speed levels and first-year free filter replacement.</li>
              <li><strong className="text-[#F2F2F5]">Larger spaces →</strong> Both units cover up to 1,500 sq ft — for larger villas, VARELLI installs multiple coordinated units. Ask us for a site assessment.</li>
            </ul>
          </div>
        </div>

        {/* Related Links */}
        <div className="pt-8 border-t border-[#2A2A35] mb-12">
          <p className="text-xs font-mono uppercase tracking-widest text-[#C5A880] mb-4">Explore Fresh Air Living</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/fresh-air-ventilation"
              className="p-4 bg-[#121216] border border-[#2A2A35] hover:border-[#C5A880] transition-colors rounded-lg group"
            >
              <span className="text-xs text-[#C5A880] font-mono">Service Hub</span>
              <h4 className="font-display text-sm font-semibold text-[#F2F2F5] group-hover:text-[#C5A880] transition-colors mt-1">
                Fresh Air Ventilation by VARELLI →
              </h4>
              <p className="text-xs text-[#C2C2C8] mt-1">Explore our VaaYoo-powered fresh air packages for Indian homes.</p>
            </Link>
            <Link
              href="/home-automation/bangalore"
              className="p-4 bg-[#121216] border border-[#2A2A35] hover:border-[#C5A880] transition-colors rounded-lg group"
            >
              <span className="text-xs text-[#C5A880] font-mono">Bangalore Hub</span>
              <h4 className="font-display text-sm font-semibold text-[#F2F2F5] group-hover:text-[#C5A880] transition-colors mt-1">
                Smart Home in Bangalore →
              </h4>
              <p className="text-xs text-[#C2C2C8] mt-1">KNX home automation + VaaYoo fresh air for Bangalore luxury villas.</p>
            </Link>
            <Link
              href="/brands"
              className="p-4 bg-[#121216] border border-[#2A2A35] hover:border-[#C5A880] transition-colors rounded-lg group"
            >
              <span className="text-xs text-[#C5A880] font-mono">All Brands</span>
              <h4 className="font-display text-sm font-semibold text-[#F2F2F5] group-hover:text-[#C5A880] transition-colors mt-1">
                Our European & Global Brand Partners →
              </h4>
              <p className="text-xs text-[#C2C2C8] mt-1">Basalte, Ekinex, Sonus Faber, DoorBird, Drainvac, and more.</p>
            </Link>
          </div>
        </div>

        <FAQSection faqs={faqs} title="VaaYoo Fresh Air Systems — Frequently Asked Questions" />
      </div>

      <ServiceCTA serviceName="Fresh Air Ventilation" />
    </article>
  );
}
