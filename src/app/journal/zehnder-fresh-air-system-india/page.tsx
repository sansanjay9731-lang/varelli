import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import Breadcrumb from "@/components/layout/Breadcrumb";
import FAQSection from "@/components/sections/service/FAQSection";
import ServiceCTA from "@/components/sections/service/ServiceCTA";
import Link from "next/link";

export const metadata: Metadata = generatePageMetadata({
  title: "VaaYoo Fresh Air System India 2026 — PRO1 & COOL Pricing & Installation | VARELLI",
  description:
    "Complete guide to VaaYoo smart fresh air purification for Indian homes. PRO1 app-connected system and COOL with DX cooling — pricing, installation, CO₂ reduction, and comparison vs air purifiers for Bangalore, Mumbai villas.",
  path: "/journal/zehnder-fresh-air-system-india",
  keywords: [
    "VaaYoo India",
    "VaaYoo PRO1 India",
    "VaaYoo COOL India",
    "fresh air purification India",
    "fresh air ventilation home India",
    "indoor air quality Bangalore",
    "smart fresh air system India",
    "CO2 reduction home India",
    "mechanical ventilation India",
    "ERV India",
  ],
});

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "VaaYoo Fresh Air Purification for Indian Homes — Complete 2026 Guide",
  description:
    "Complete guide to VaaYoo PRO1 and COOL smart fresh air systems for Indian homes — pricing, installation, CO₂ reduction, and comparison vs air purifiers.",
  author: { "@type": "Organization", name: "VARELLI" },
  publisher: { "@type": "Organization", name: "VARELLI", url: "https://varelli.co.in" },
  datePublished: "2026-08-01",
  dateModified: "2026-10-21",
  url: "https://varelli.co.in/journal/zehnder-fresh-air-system-india",
};

const faqs = [
  {
    question: "What is the price of a VaaYoo fresh air system in India?",
    answer:
      "VaaYoo PRO1 installations start from approximately ₹2.8L and VaaYoo COOL systems from ₹5.5L, depending on number of units and home size. VARELLI provides transparent project estimates — contact us at +91 99649 84695.",
  },
  {
    question: "Is VaaYoo available in Bangalore and Mumbai?",
    answer:
      "Yes. VARELLI supplies and installs VaaYoo PRO1 and COOL across Bangalore, Mumbai, Delhi NCR, Hyderabad, Chennai, and Pune. We handle site assessment, installation by trained professionals, and ongoing servicing.",
  },
  {
    question: "What is the difference between VaaYoo PRO1 and VaaYoo COOL?",
    answer:
      "VaaYoo PRO1 is a smart, compact, app-connected fresh air purifier (up to 1,000 m³/h) with Wi-Fi scheduling and no ducting required. VaaYoo COOL adds a DX cooling coil that cools the supply air, plus 10 speed levels and built-in gas filtration — ideal for homes wanting both fresh air and supplemental cooling.",
  },
  {
    question: "How is VaaYoo different from an air purifier?",
    answer:
      "An air purifier only recirculates and cleans existing indoor air — it does not bring in fresh outdoor air, so indoor CO₂ keeps rising. VaaYoo brings in continuous fresh outdoor air that is filtered through 4 stages (pre-filter, HEPA, gas filter, HEPA), actually replacing stale CO₂-rich air with clean, filtered outdoor air.",
  },
  {
    question: "Does VaaYoo require indoor ducting?",
    answer:
      "VaaYoo PRO1 requires no indoor ducting — it is a multi-mount unit installed on walls or ceilings with a single 10\" or dual 6\" spigot. VaaYoo COOL is a ducted unit installed outside the living area (1050×700×420 mm), so nothing appears on your indoor floor or walls.",
  },
  {
    question: "What CO₂ level is safe indoors?",
    answer:
      "WHO recommends keeping indoor CO₂ below 1,000 ppm. Outdoor air is around 420 ppm. In sealed Indian homes with split ACs and closed windows, CO₂ routinely reaches 1,500–2,000+ ppm in bedrooms overnight — causing poor sleep, morning fatigue, and reduced cognitive performance. VaaYoo dilutes this by continuously supplying fresh filtered outdoor air.",
  },
  {
    question: "Can VaaYoo be installed in a completed apartment in India?",
    answer:
      "Yes. VaaYoo PRO1 is specifically designed for rapid installation — no indoor ducting, no major civil work. It can be installed in completed apartments, offices, and homes. VaaYoo COOL requires a penetration through an external wall for the outdoor unit, which is also feasible in completed buildings with minimal disruption.",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-4xl mx-auto px-6 pt-32 pb-20">
        <Breadcrumb
          items={[
            { name: "Journal", href: "/journal" },
            { name: "VaaYoo Fresh Air India 2026", href: "/journal/zehnder-fresh-air-system-india" },
          ]}
        />

        {/* Hero */}
        <div className="mb-10">
          <p className="text-xs font-mono uppercase tracking-widest text-[#C5A880] mb-3">
            Fresh Air Ventilation · India Guide 2026
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            VaaYoo Fresh Air Purification for Indian Homes — Complete 2026 Guide
          </h1>
          <p className="text-lg text-[#C2C2C8]">
            How VaaYoo PRO1 and COOL smart fresh air systems solve India's indoor CO₂ and PM2.5 crisis — with pricing, installation details, and a comparison vs standard air purifiers.
          </p>
        </div>

        {/* Executive Summary AEO block */}
        <div className="bg-[#121216] border-l-2 border-[#C5A880] px-6 py-5 mb-10 rounded-sm">
          <p className="text-xs font-mono uppercase tracking-widest text-[#C5A880] mb-2">Quick Answer</p>
          <p className="text-[#C2C2C8] text-sm leading-relaxed">
            VaaYoo is VARELLI's fresh air partner in India. The <strong className="text-white">VaaYoo PRO1</strong> is a smart, app-connected fresh air purifier (up to 1,000 m³/h, 4-stage HEPA, no ducting required) starting from ₹2.8L installed. The <strong className="text-white">VaaYoo COOL</strong> adds a DX cooling coil and built-in gas filtration (765 m³/h, 1–10 speeds) from ₹5.5L. Both units cover up to 1,500 sq ft and continuously replace stale indoor air with filtered outdoor fresh air — solving CO₂ buildup that recirculating air purifiers cannot address.
          </p>
        </div>

        {/* Section 1 */}
        <div className="mb-12">
          <h2 className="font-display text-2xl font-bold text-white mb-4">
            Why Indian Homes Need Fresh Air Ventilation
          </h2>
          <p className="text-[#C2C2C8] mb-4">
            Modern luxury homes in India are built to be sealed — double-glazed windows, weatherstripped doors, and split ACs running year-round. This is excellent for energy efficiency and noise reduction, but it creates a serious indoor air quality problem:
          </p>
          <ul className="list-none space-y-3 mb-6">
            {[
              ["CO₂ buildup", "With windows closed and people breathing indoors, CO₂ rises from outdoor levels of ~420 ppm to 1,500–2,000+ ppm within hours. Above 1,000 ppm, cognitive performance drops measurably. Above 1,500 ppm, sleep quality degrades."],
              ["PM2.5 infiltration", "Air leaks through gaps around doors and windows bring in unfiltered urban PM2.5. In Bangalore, Mumbai, and Delhi, outdoor PM2.5 frequently exceeds 60–150 μg/m³ — 2–5× WHO safe limits."],
              ["TVOC accumulation", "Formaldehyde from furniture, VOCs from paint, cooking fumes — all accumulate in sealed homes. Gas filtration removes a broad spectrum of these harmful airborne chemicals."],
              ["Recirculating ACs don't help", "Split ACs and air purifiers only filter and recirculate existing indoor air. They clean PM2.5 but cannot reduce CO₂ — because they don't bring in any fresh outdoor air."],
            ].map(([title, desc]) => (
              <li key={title} className="bg-[#121216] border border-[#2A2A35] rounded-sm p-4">
                <strong className="text-[#C5A880]">{title}:</strong>{" "}
                <span className="text-[#C2C2C8]">{desc}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Section 2 — VaaYoo PRO1 */}
        <div className="mb-12">
          <h2 className="font-display text-2xl font-bold text-white mb-4">
            VaaYoo PRO1 — Smart Connected Fresh Air
          </h2>
          <p className="text-[#C2C2C8] mb-6">
            The VaaYoo PRO1 is designed for rapid, no-fuss installation in any home — apartment, villa, or office. No floor space, no indoor ducting. A trained professional installs it in hours using a single 10" or dual 6" spigot.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
            {[
              { val: "1,000 m³/h", label: "Max airflow" },
              { val: "1,500 sq ft", label: "Coverage" },
              { val: "1–7 speeds", label: "Fan control" },
              { val: "170 W", label: "Power" },
            ].map((s) => (
              <div key={s.label} className="bg-[#121216] border border-[#2A2A35] rounded-sm p-4 text-center">
                <div className="font-display text-lg font-bold text-[#C5A880]">{s.val}</div>
                <div className="text-xs text-[#C2C2C8] mt-1">{s.label}</div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              ["4-stage filtration", "Pre-filter → HEPA → gas filter (add-on) → HEPA — removes PM2.5, pollen, dust, and VOCs"],
              ["App control", "Wi-Fi & Bluetooth app for iOS and Android — scheduling, real-time air quality insights, multi-user access"],
              ["No ducting", "Multi-mount wall or ceiling installation — no floor space used, no indoor duct runs"],
              ["Whisper-quiet", "43–58 dB(A) at 1.5 m — quieter than a conversation at lowest speeds"],
            ].map(([title, desc]) => (
              <div key={title} className="bg-[#121216] border border-[#2A2A35] rounded-sm p-4">
                <div className="text-sm font-semibold text-[#C5A880] mb-1">{title}</div>
                <div className="text-sm text-[#C2C2C8]">{desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3 — VaaYoo COOL */}
        <div className="mb-12">
          <h2 className="font-display text-2xl font-bold text-white mb-4">
            VaaYoo COOL — Fresh Air with DX Cooling & Gas Filtration
          </h2>
          <p className="text-[#C2C2C8] mb-4">
            VaaYoo COOL takes fresh air purification further — a DX cooling coil cools the supply air before it enters the room, while granular activated-carbon gas filtration removes a broad spectrum of toxic gases and VOCs. The entire unit installs outside the living area — nothing on your floor or walls indoors.
          </p>
          <p className="text-[#C2C2C8] italic mb-6 text-sm">
            Free unlimited filter replacement included in the first year.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
            {[
              { val: "765 m³/h", label: "Airflow" },
              { val: "1,500 sq ft", label: "Coverage" },
              { val: "1–10 speeds", label: "Fan control" },
              { val: "52 dB(A)", label: "Noise at desk" },
            ].map((s) => (
              <div key={s.label} className="bg-[#121216] border border-[#2A2A35] rounded-sm p-4 text-center">
                <div className="font-display text-lg font-bold text-[#C5A880]">{s.val}</div>
                <div className="text-xs text-[#C2C2C8] mt-1">{s.label}</div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              ["Cooling of ambient air", "DX cooling coil on fan mode — supply air arrives cooler into the room"],
              ["PM2.5 & CO₂ reduction", "Removes PM, PM2.5, PM10; reduces CO₂ and TVOCs in a single unit"],
              ["Gas filtration", "Granular activated-carbon media for toxic gases and VOCs — rare in consumer IAQ"],
              ["Zero indoor space", "1050×700×420 mm unit installed outside — nothing inside your living area"],
              ["10 speed levels", "Fine-grained airflow control to suit the room, time of day, and occupancy"],
              ["Easy maintenance", "Washable pre-filter, replaceable HEPA and gas filters — no ozone or harmful by-products"],
            ].map(([title, desc]) => (
              <div key={title} className="bg-[#121216] border border-[#2A2A35] rounded-sm p-4">
                <div className="text-sm font-semibold text-[#C5A880] mb-1">{title}</div>
                <div className="text-sm text-[#C2C2C8]">{desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison table */}
        <div className="mb-12">
          <h2 className="font-display text-2xl font-bold text-white mb-6">PRO1 vs COOL vs Air Purifier</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1A1A22]">
                  <th className="text-left p-3 text-[#C5A880] font-mono uppercase text-xs tracking-widest border border-[#2A2A35]"></th>
                  <th className="text-left p-3 text-[#C5A880] font-mono uppercase text-xs tracking-widest border border-[#2A2A35]">VaaYoo PRO1</th>
                  <th className="text-left p-3 text-[#C5A880] font-mono uppercase text-xs tracking-widest border border-[#2A2A35]">VaaYoo COOL</th>
                  <th className="text-left p-3 text-[#C5A880] font-mono uppercase text-xs tracking-widest border border-[#2A2A35]">Air Purifier</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Brings in fresh outdoor air", "✓", "✓", "✗"],
                  ["Reduces indoor CO₂", "✓", "✓", "✗"],
                  ["HEPA PM2.5 filtration", "✓", "✓", "✓"],
                  ["Gas / TVOC filtration", "Add-on", "✓ included", "Some models"],
                  ["Cooling of supply air", "✗", "✓ (DX coil)", "✗"],
                  ["App / smart scheduling", "✓ (Wi-Fi + BT)", "Timer / filter monitor", "Some models"],
                  ["No floor space needed", "✓", "✓ (outdoor install)", "✗ (floor unit)"],
                  ["Coverage per unit", "1,500 sq ft", "1,500 sq ft", "300–800 sq ft"],
                ].map(([feature, pro1, cool, purifier], i) => (
                  <tr key={feature} className={i % 2 === 0 ? "bg-[#08080A]" : "bg-[#0E0E12]"}>
                    <td className="p-3 text-[#F2F2F5] font-medium border border-[#2A2A35]">{feature}</td>
                    <td className="p-3 text-[#C2C2C8] border border-[#2A2A35]">{pro1}</td>
                    <td className="p-3 text-[#C2C2C8] border border-[#2A2A35]">{cool}</td>
                    <td className="p-3 text-[#C2C2C8] border border-[#2A2A35]">{purifier}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pricing */}
        <div className="mb-12">
          <h2 className="font-display text-2xl font-bold text-white mb-6">
            VaaYoo Pricing in India — 2026 Guide
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1A1A22]">
                  {["Property Type", "Recommended System", "No. of Units", "Installed Price Range"].map((h) => (
                    <th key={h} className="text-left p-3 text-[#C5A880] font-mono uppercase text-xs tracking-widest border border-[#2A2A35]">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["2–3 BHK Apartment (1,000–1,500 sq ft)", "VaaYoo PRO1 ×1", "1", "₹2.8L – ₹3.5L"],
                  ["3–4 BHK Apartment / Row House (1,500–2,500 sq ft)", "VaaYoo PRO1 ×2", "2", "₹4.5L – ₹6.5L"],
                  ["Villa / Independent House (2,500–4,000 sq ft)", "VaaYoo COOL ×1 + PRO1 ×1", "2", "₹7.0L – ₹10.5L"],
                  ["Large Villa (4,000–6,000 sq ft)", "VaaYoo COOL ×2", "2", "₹10.0L – ₹14.0L"],
                  ["Estate / Penthouse (6,000+ sq ft)", "VaaYoo COOL ×3 + PRO1 as needed", "3+", "₹15.0L – ₹22.0L+"],
                ].map(([type, system, units, price], i) => (
                  <tr key={type} className={i % 2 === 0 ? "bg-[#08080A]" : "bg-[#0E0E12]"}>
                    <td className="p-3 text-[#F2F2F5] border border-[#2A2A35]">{type}</td>
                    <td className="p-3 text-[#C2C2C8] border border-[#2A2A35]">{system}</td>
                    <td className="p-3 text-[#C2C2C8] border border-[#2A2A35] text-center">{units}</td>
                    <td className="p-3 font-semibold text-[#C5A880] border border-[#2A2A35]">{price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#C2C2C8] mt-3 italic">Prices are indicative installed cost inclusive of equipment, installation by trained professionals, and commissioning. Site assessment required for exact quote.</p>
        </div>

        {/* Related Links */}
        <div className="pt-8 border-t border-[#2A2A35] mb-12">
          <p className="text-xs font-mono uppercase tracking-widest text-[#C5A880] mb-4">Related VARELLI Guides</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: "/fresh-air-ventilation", label: "Service Hub", title: "Fresh Air Ventilation by VARELLI →", desc: "VaaYoo PRO1 & COOL packages for Indian homes." },
              { href: "/home-automation/bangalore", label: "Bangalore Hub", title: "Home Automation in Bangalore →", desc: "KNX home automation + VaaYoo fresh air for luxury villas." },
              { href: "/journal/best-home-automation-company-bangalore", label: "Comparison Guide", title: "Best Home Automation Companies Bangalore →", desc: "Honest 2026 ranking of Bangalore's top smart home integrators." },
              { href: "/brands", label: "Brand Ecosystem", title: "European & Global Brand Partners →", desc: "Basalte, Ekinex, Sonus Faber, Drainvac, and more." },
            ].map(({ href, label, title, desc }) => (
              <Link key={href} href={href} className="p-4 bg-[#121216] border border-[#2A2A35] hover:border-[#C5A880] transition-colors rounded-lg group">
                <span className="text-xs text-[#C5A880] font-mono">{label}</span>
                <h4 className="font-display text-sm font-semibold text-[#F2F2F5] group-hover:text-[#C5A880] transition-colors mt-1">{title}</h4>
                <p className="text-xs text-[#C2C2C8] mt-1">{desc}</p>
              </Link>
            ))}
          </div>
        </div>

        <FAQSection faqs={faqs} title="VaaYoo Fresh Air India — Frequently Asked Questions" />
      </div>

      <ServiceCTA serviceName="Fresh Air Ventilation" />
    </article>
  );
}
