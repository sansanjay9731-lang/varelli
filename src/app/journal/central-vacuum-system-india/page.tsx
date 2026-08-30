import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import Breadcrumb from "@/components/layout/Breadcrumb";
import FAQSection from "@/components/sections/service/FAQSection";
import ServiceCTA from "@/components/sections/service/ServiceCTA";
import Link from "next/link";

export const metadata: Metadata = generatePageMetadata({
  title: "Central Vacuum System India — Drainvac Pricing & Installation 2026 | VARELLI",
  description:
    "Complete guide to central vacuum systems for Indian homes. Drainvac Cyclonic pricing in India, installation requirements, comparison vs regular vacuums, and why luxury villas in Bangalore use built-in vacuum systems.",
  path: "/journal/central-vacuum-system-india",
  keywords: [
    "central vacuum system India",
    "central vacuum Bangalore",
    "built-in vacuum India",
    "central vacuum installation India",
    "Drainvac India",
    "central vacuum cost India",
    "whole home vacuum India",
    "wet and dry central vacuum India",
    "automatic dustpan India",
  ],
});

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Central Vacuum System for Indian Homes — Complete 2026 Guide",
  description:
    "The complete architectural and engineering guide to central vacuum systems in India. Covers Canadian Drainvac wet-and-dry cyclonic technology, wall inlet placement, piping infrastructure, acoustic benefits, and transparent pricing in ₹ Lakhs for luxury residences in Bangalore, Mumbai, and Delhi NCR.",
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
  datePublished: "2026-08-01",
  dateModified: "2026-08-30",
  mainEntityOfPage: "https://varelli.in/journal/central-vacuum-system-india",
  image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1600&q=80",
};

const faqs = [
  {
    question: "What is a central vacuum system?",
    answer:
      "A central vacuum system is a built-in architectural appliance consisting of a heavy-duty suction power unit located in a remote utility room, basement, or garage, connected to specialized antistatic PVC tubing routed inside the home's walls. Flush wall inlet valves are placed strategically throughout the residence. To clean, you simply plug a lightweight, crushproof 9-to-12 meter hose into any inlet—instantly activating the high-power central motor without dragging a heavy portable canister or breathing in recirculated exhaust dust.",
  },
  {
    question: "How much does a central vacuum system cost in India?",
    answer:
      "In India, a complete turnkey central vacuum installation with Canadian Drainvac hardware typically costs: ₹1.8 Lakhs to ₹2.4 Lakhs for a 2–3BHK luxury apartment (1,500–2,500 sq.ft.), ₹2.5 Lakhs to ₹3.5 Lakhs for a 3,000–5,000 sq.ft. independent villa, and ₹3.5 Lakhs to ₹5.0 Lakhs+ for grand estates exceeding 6,000–8,000 sq.ft. Pricing includes the power unit, inlet valves, antistatic piping, automatic toe-kick dustpans, hose sets, and certified installation.",
  },
  {
    question: "Is Drainvac available in India through VARELLI?",
    answer:
      "Yes. VARELLI is an authorized integrator for Drainvac (Canada) in India. We supply, design, pipe, and commission Drainvac's patented cyclonic wet-and-dry systems across Bangalore, Mumbai, Delhi NCR, Hyderabad, and Pune, providing genuine manufacturer warranties, replacement accessories, and ongoing engineering support.",
  },
  {
    question: "Can central vacuum be installed in a completed apartment or villa in India?",
    answer:
      "While central vacuum is easiest to install during civil construction or structural renovation (MEP first-fix), retrofitting is frequently executed in completed homes with false ceilings or accessible vertical service shafts. VARELLI engineers conduct non-invasive site feasibility surveys to determine optimal pipe routing with minimal disruption to finished interiors.",
  },
  {
    question: "What is the difference between a central vacuum and a regular vacuum cleaner?",
    answer:
      "Regular portable or robotic vacuums produce 3 to 5 times less suction power, recirculate microscopic PM2.5 allergens and odors back into your living room through their exhaust vents, create high acoustic noise (75–85 dB) right where you are cleaning, and have short 3–5 year lifespans. A central vacuum vents 100% of air and micro-allergens completely outside the home, operates silently in the living area, features commercial suction (600–900 Air Watts), and carries a 20 to 25-year structural design life.",
  },
  {
    question: "Does Drainvac work for wet spills and Indian kitchen messes?",
    answer:
      "Yes. Drainvac's patented Automatik and Wet & Dry series are the only central vacuum systems globally capable of vacuuming liquid spills directly—including water overflows, spilled sambar, wet floor washing residue, and clogged sink traps. The system is plumbed directly into the home's sanitary drainage line, automatically flushing liquids and debris out of the home without requiring messy bags or manual tank emptying.",
  },
  {
    question: "How long does central vacuum installation take?",
    answer:
      "The installation occurs in two clean phases: Phase 1 (Rough-in piping & low-voltage control wire) takes 3 to 5 days during civil MEP work. Phase 2 (Power unit mounting, inlet valve trim-out, and performance airflow testing) takes 1 to 2 days after interior painting is completed.",
  },
];

export default function CentralVacuumSystemIndiaPage() {
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
            { name: "Central Vacuum System India", href: "/journal/central-vacuum-system-india" },
          ]}
        />

        <header className="mt-8 mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[var(--gold)] border border-[var(--gold)]/30 px-3 py-1">
              Architectural Wellness
            </span>
            <span className="text-xs text-[var(--text-muted)]">Updated August 2026 · 12 min read</span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-[3.25rem] text-[var(--text-primary)] leading-[1.15] mb-6">
            Central Vacuum System for Indian Homes — Complete 2026 Guide
          </h1>
          <p className="text-xl text-[var(--text-secondary)] leading-relaxed max-w-3xl">
            Why portable vacuum cleaners are inadequate for luxury Indian residences — and how Canadian Drainvac cyclonic
            built-in suction eliminates indoor dust, tackles wet spills, and operates in absolute silence.
          </p>
          <div className="mt-6 pt-6 border-t border-[var(--border)] text-sm text-[var(--text-muted)] flex flex-wrap items-center justify-between gap-4">
            <span>By VARELLI Systems Architecture Team · Drainvac Integration Specialists</span>
            <span className="font-mono text-xs text-[var(--gold)]">Drainvac Canada Certified</span>
          </div>
        </header>

        {/* Executive Summary */}
        <div className="bg-[var(--surface-2)] border border-[var(--gold)]/25 rounded-md p-7 mb-14 shadow-lg shadow-black/20">
          <div className="flex items-center gap-2 mb-3">
            <span className="h-2 w-2 rounded-full bg-[var(--gold)] animate-pulse" />
            <p className="text-xs font-mono uppercase tracking-widest text-[var(--gold)] font-semibold">
              Executive Summary
            </p>
          </div>
          <p className="text-[var(--text-primary)] leading-relaxed text-base md:text-[1.05rem]">
            A <strong>central vacuum system permanently integrates suction infrastructure</strong> into the physical fabric of
            your residence. A single commercial-grade motor unit housed discreetly in a garage, basement, or utility balcony
            powers an internal network of 2-inch antistatic PVC tubing routed behind walls and false ceilings. Instead of
            hauling a 7-kilogram portable vacuum or inhaling fine PM2.5 dust exhausted back into your living room, you simply
            insert a featherweight hose into a flush architectural wall inlet. <strong>Drainvac (Canada)</strong> is the world&apos;s
            only cyclonic central vacuum engineered with <strong>direct drain liquid extraction capability</strong>, allowing you
            to vacuum wet spills, kitchen messes, and washed floors directly into your municipal plumbing with zero bags. In
            India, complete Drainvac systems range from <strong>₹1.8L to ₹2.4L</strong> for apartments and{" "}
            <strong>₹2.5L to ₹3.5L+</strong> for luxury villas.
          </p>
        </div>

        <div className="prose prose-invert prose-lg max-w-none space-y-12">
          {/* Section 1 */}
          <section>
            <h2 className="font-display text-2xl md:text-3xl text-[var(--text-primary)] mb-5">
              1. How a Central Vacuum System Works
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              In traditional cleaning, portable vacuums suffer from an inherent thermodynamic flaw: whatever air is sucked into
              the machine must be immediately blown back out into the room. Even with HEPA filters, fine micro-dust, allergen
              proteins, and warm motor odors are blasted into the ambient air, remaining airborne for hours before settling back
              onto Italian furniture and polished floors.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              A built-in central vacuum system operates on a radically different architectural principle:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
              <div className="bg-[var(--surface-1)] border border-[var(--border)] p-5 rounded">
                <h4 className="font-display text-base font-semibold text-[var(--gold)] mb-2">01 · The Central Power Unit</h4>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  Mounted in a remote zone (utility area, covered utility balcony, or basement). Equipped with industrial-grade
                  bypass motors generating 600 to 900+ Air Watts of continuous suction—up to 5× stronger than handhelds.
                </p>
              </div>

              <div className="bg-[var(--surface-1)] border border-[var(--border)] p-5 rounded">
                <h4 className="font-display text-base font-semibold text-[var(--gold)] mb-2">02 · Antistatic Rigid In-Wall Piping</h4>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  Specialized 2-inch low-friction PVC piping with sweeping elbows routed through wall chases and ceiling plenums,
                  preventing static charge buildup and eliminating clogs.
                </p>
              </div>

              <div className="bg-[var(--surface-1)] border border-[var(--border)] p-5 rounded">
                <h4 className="font-display text-base font-semibold text-[var(--gold)] mb-2">03 · Architectural Wall Inlets</h4>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  Sleek, low-profile wall plates with low-voltage contact pins. Inserting the hose handle automatically engages
                  the central unit motor instantly via a 24V control circuit.
                </p>
              </div>

              <div className="bg-[var(--surface-1)] border border-[var(--border)] p-5 rounded">
                <h4 className="font-display text-base font-semibold text-[var(--gold)] mb-2">04 · 100% Outdoor Air Exhaust</h4>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  All aspirated air, microbial dust, and allergens are exhausted entirely outside the residence, resulting in true
                  zero recirculated indoor air pollution.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="font-display text-2xl md:text-3xl text-[var(--text-primary)] mb-5">
              2. Drainvac — The World&apos;s Only Cyclonic Wet &amp; Dry Central Vacuum
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              While conventional central vacuum systems are limited strictly to dry dust, Canadian engineering pioneer{" "}
              <strong>Drainvac</strong> revolutionized the industry with patented cyclonic water-separator technology.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              Available in India exclusively through VARELLI, the <strong>Drainvac Automatik Series</strong> connects
              directly to your villa&apos;s cold water line and sanitary drain stack:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-[var(--text-secondary)]">
              <li>
                <strong>Wet &amp; Dry Versatility:</strong> Vacuum dry dust, wet kitchen spills, pet accidents, or flooded
                balconies with the same hose without flipping a switch or changing filters.
              </li>
              <li>
                <strong>Self-Emptying &amp; Bagless:</strong> Suctioned debris is atomized inside a cyclonic water vortex.
                When the unit powers off, it automatically discharges all waste directly into the drainage line and self-rinses
                its internal stainless steel chamber.
              </li>
              <li>
                <strong>Zero Filter Replacement Costs:</strong> With no disposable paper bags or clogged fabric cartridges,
                maintenance is practically eliminated for the life of the home.
              </li>
              <li>
                <strong>HEPA 99.97% Separation:</strong> Medical-grade cyclonic action captures particulates down to 0.3 microns,
                creating a sterile indoor environment for families with respiratory sensitivities or allergies.
              </li>
            </ul>
          </section>

          {/* Section 3: Cost Guide Table */}
          <section>
            <h2 className="font-display text-2xl md:text-3xl text-[var(--text-primary)] mb-5">
              3. Central Vacuum Cost in India — Honest 2026 Pricing Guide
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              The cost of implementing a Drainvac central vacuum system in India depends on the total square footage, number of
              levels, total inlet valve count, and whether wet-and-dry automated drainage is specified. Below is VARELLI&apos;s
              transparent pricing guide:
            </p>

            <div className="overflow-x-auto my-8 border border-[var(--border)] rounded-md">
              <table className="w-full text-sm border-collapse text-left">
                <thead>
                  <tr className="bg-[var(--surface-2)] text-[var(--gold)] font-mono text-xs uppercase">
                    <th className="p-4 border-b border-[var(--border)]">Residence Size &amp; Type</th>
                    <th className="p-4 border-b border-[var(--border)]">Inlet Count</th>
                    <th className="p-4 border-b border-[var(--border)]">Drainvac Model Series</th>
                    <th className="p-4 border-b border-[var(--border)]">Investment (₹ Lakhs)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--border)]">
                  <tr className="bg-[var(--surface-1)]">
                    <td className="p-4 font-semibold text-[var(--text-primary)]">
                      Luxury Apartment (1,500 – 2,500 sq.ft.)
                    </td>
                    <td className="p-4 text-[var(--text-secondary)]">2–3 Wall Inlets + 1 VacPan</td>
                    <td className="p-4 text-[var(--text-secondary)]">Drainvac Cyclonic Pro 1</td>
                    <td className="p-4 text-[var(--gold)] font-display font-semibold">₹1.8L – ₹2.4L</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-[var(--text-primary)]">
                      Independent Villa (3,000 – 5,000 sq.ft.)
                    </td>
                    <td className="p-4 text-[var(--text-secondary)]">4–6 Wall Inlets + 2 VacPans</td>
                    <td className="p-4 text-[var(--text-secondary)]">Drainvac Automatik Wet/Dry</td>
                    <td className="p-4 text-[var(--gold)] font-display font-semibold">₹2.5L – ₹3.5L</td>
                  </tr>
                  <tr className="bg-[var(--surface-1)]">
                    <td className="p-4 font-semibold text-[var(--text-primary)]">
                      Grand Estate (6,000 – 10,000+ sq.ft.)
                    </td>
                    <td className="p-4 text-[var(--text-secondary)]">8–12 Inlets + Hide-A-Hose</td>
                    <td className="p-4 text-[var(--text-secondary)]">Drainvac Dual-Motor Commercial</td>
                    <td className="p-4 text-[var(--gold)] font-display font-semibold">₹3.5L – ₹5.0L+</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-[var(--text-muted)]">
              * Investment figures include imported Drainvac power unit, antistatic ASTM piping, installation labour,
              inlet valves, premium hose accessories, and commissioning. Excludes GST.
            </p>
          </section>

          {/* Section 4: Comparison Table */}
          <section>
            <h2 className="font-display text-2xl md:text-3xl text-[var(--text-primary)] mb-5">
              4. Central Vacuum vs. Portable Vacuum — Why Luxury Homes Choose Built-In
            </h2>
            <div className="overflow-x-auto my-8 border border-[var(--border)] rounded-md">
              <table className="w-full text-sm border-collapse text-left">
                <thead>
                  <tr className="bg-[var(--surface-2)] text-[var(--gold)] font-mono text-xs uppercase">
                    <th className="p-4 border-b border-[var(--border)]">Feature</th>
                    <th className="p-4 border-b border-[var(--border)]">Built-In Central Vacuum (Drainvac)</th>
                    <th className="p-4 border-b border-[var(--border)]">Portable Handheld / Canister (Dyson/Miele)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--border)]">
                  <tr className="bg-[var(--surface-1)]">
                    <td className="p-4 font-semibold text-[var(--text-primary)]">Suction Power</td>
                    <td className="p-4 text-[var(--gold)] font-semibold">600 – 900+ Air Watts (Heavy Industrial)</td>
                    <td className="p-4 text-[var(--text-secondary)]">150 – 240 Air Watts (Battery / 230V limit)</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-[var(--text-primary)]">Indoor Air Quality</td>
                    <td className="p-4 text-[var(--gold)] font-semibold">100% exhausted outside; 0 dust blowback</td>
                    <td className="p-4 text-[var(--text-muted)]">Exhausts fine dust &amp; micro-allergens in room</td>
                  </tr>
                  <tr className="bg-[var(--surface-1)]">
                    <td className="p-4 font-semibold text-[var(--text-primary)]">Operational Noise</td>
                    <td className="p-4 text-[var(--gold)] font-semibold">Whisper quiet in living area (&lt;50 dB)</td>
                    <td className="p-4 text-[var(--text-muted)]">Loud motor noise right beside you (75–85 dB)</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-[var(--text-primary)]">Liquid / Wet Spills</td>
                    <td className="p-4 text-[var(--gold)] font-semibold">Direct drain liquid extraction (Automatik)</td>
                    <td className="p-4 text-[var(--text-muted)]">Dry only (liquids destroy motor instantly)</td>
                  </tr>
                  <tr className="bg-[var(--surface-1)]">
                    <td className="p-4 font-semibold text-[var(--text-primary)]">Equipment Lifespan</td>
                    <td className="p-4 text-[var(--text-primary)]">20–25+ Years (Permanent asset)</td>
                    <td className="p-4 text-[var(--text-muted)]">2–5 Years (Battery degradation)</td>
                  </tr>
                  <tr className="bg-[var(--surface-1)]">
                    <td className="p-4 font-semibold text-[var(--text-primary)]">Physical Weight Handled</td>
                    <td className="p-4 text-[var(--text-primary)]">Only lightweight hose (~1.2 kg)</td>
                    <td className="p-4 text-[var(--text-muted)]">Heavy 4–8 kg canister dragged across floors</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="font-display text-2xl md:text-3xl text-[var(--text-primary)] mb-5">
              5. Central Vacuum for Wet Spills — Drainvac&apos;s Unique Advantage in Indian Kitchens
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              Indian culinary traditions involve high-heat cooking, oil splatters, turmeric and spice pastes, gravies, and
              spilled liquids that turn routine floor maintenance into a labor-intensive chore. Conventional mops smear dirty
              water across grout lines, creating bacterial buildup and dulling polished marble.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              With Drainvac&apos;s wet extraction capability, cleaning an Indian kitchen is completely transformed:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-[var(--text-secondary)]">
              <li>
                <strong>Instant Spill Elimination:</strong> Spilled dal, milk, tea, or cooking oil is extracted directly in
                seconds with a squeegee floor tool, leaving the stone floor bone dry and slip-free immediately.
              </li>
              <li>
                <strong>Sanitary Auto-Flushing:</strong> All greasy liquids travel through the sealed antistatic pipes into the
                Drainvac separator, where motorized internal jets rinse the waste directly down the sanitary sewer.
              </li>
              <li>
                <strong>Deep Grout Scrubbing:</strong> Wet wash high-traffic kitchen and dining floors thoroughly, then extract
                all dirty wash water in a single pass without a single bucket or smelly mop.
              </li>
            </ul>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="font-display text-2xl md:text-3xl text-[var(--text-primary)] mb-5">
              6. Where Are Wall Inlets Placed? Layout Planning for Indian Floor Plans
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              A standard central vacuum hose spans <strong>9 to 12 meters (30 to 40 feet)</strong>. A single thoughtfully
              placed wall inlet valve can cover approximately 800 to 1,200 square feet of living space.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              VARELLI&apos;s systems architecture team calculates exact geometric radii on your architectural AutoCAD floor plans:
            </p>
            <div className="space-y-4 my-6">
              <div className="border-l-2 border-[var(--gold)] pl-4">
                <h4 className="font-display font-semibold text-[var(--text-primary)] text-base">
                  Central Hallway &amp; Foyer Placements
                </h4>
                <p className="text-sm text-[var(--text-secondary)] mt-1">
                  Inlets are positioned near central circulation corridors so that a single connection reaches the living room,
                  dining space, and powder room without stretching around acute corners.
                </p>
              </div>

              <div className="border-l-2 border-[var(--gold)] pl-4">
                <h4 className="font-display font-semibold text-[var(--text-primary)] text-base">
                  Automatic Toe-Kick Dustpans (VacPan™)
                </h4>
                <p className="text-sm text-[var(--text-secondary)] mt-1">
                  Installed flush underneath modular kitchen base cabinets and dressing island toe-kicks. Simply sweep crumbs
                  or hair toward the slot and tap the foot-lever with your toe—the suction activates instantly and devours the pile.
                </p>
              </div>

              <div className="border-l-2 border-[var(--gold)] pl-4">
                <h4 className="font-display font-semibold text-[var(--text-primary)] text-base">
                  Hide-A-Hose™ Retractable Inlets
                </h4>
                <p className="text-sm text-[var(--text-secondary)] mt-1">
                  For ultra-luxury estates, the hose stores itself directly inside the in-wall piping using the system&apos;s own
                  vacuum suction. Pull out the exact length needed, clean, and let the hose retract invisibly into the wall.
                </p>
              </div>
            </div>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="font-display text-2xl md:text-3xl text-[var(--text-primary)] mb-5">
              7. New Construction vs. Retrofit — Can It Be Installed in Completed Homes?
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              <strong>During New Construction / Civil Shell:</strong> The optimal time to install central vacuum piping is during
              MEP plumbing rough-in. Conduits and PVC tubing are installed before floor screed and wall plastering, resulting in
              zero visible pipes and minimal labor expenditure.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              <strong>In Completed Residences:</strong> Retrofitting is entirely feasible if the residence features false
              ceilings, accessible vertical utility shafts, or closet chases. VARELLI engineers conduct endoscopic inspections
              to map non-invasive pathways that require zero disruption to structural slabs or finished exterior facades.
            </p>
          </section>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <FAQSection faqs={faqs} heading="Central Vacuum Systems — Frequently Asked Questions" />
        </div>

        {/* Related Links */}
        <div className="mt-12 bg-[var(--surface-2)] border border-[var(--border)] rounded-sm p-8">
          <p className="text-xs font-mono uppercase tracking-widest text-[var(--gold)] mb-4 font-semibold">
            Explore Built-In Residential Wellness
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/central-vacuum/bangalore"
              className="text-[var(--text-secondary)] hover:text-[var(--gold)] transition-colors text-sm flex items-center gap-2"
            >
              <span className="text-[var(--gold)]">→</span> Central Vacuum Systems Bangalore
            </Link>
            <Link
              href="/central-vacuum"
              className="text-[var(--text-secondary)] hover:text-[var(--gold)] transition-colors text-sm flex items-center gap-2"
            >
              <span className="text-[var(--gold)]">→</span> Drainvac System Overview
            </Link>
            <Link
              href="/fresh-air-ventilation"
              className="text-[var(--text-secondary)] hover:text-[var(--gold)] transition-colors text-sm flex items-center gap-2"
            >
              <span className="text-[var(--gold)]">→</span> Zehnder Fresh Air Ventilation Systems
            </Link>
            <Link
              href="/home-automation"
              className="text-[var(--text-secondary)] hover:text-[var(--gold)] transition-colors text-sm flex items-center gap-2"
            >
              <span className="text-[var(--gold)]">→</span> KNX Home Automation Ecosystem
            </Link>
          </div>
        </div>
      </div>

      <ServiceCTA serviceName="Central Vacuum System" />
    </article>
  );
}
