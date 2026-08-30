import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import Breadcrumb from "@/components/layout/Breadcrumb";
import FAQSection from "@/components/sections/service/FAQSection";
import ServiceCTA from "@/components/sections/service/ServiceCTA";
import Link from "next/link";

export const metadata: Metadata = generatePageMetadata({
  title: "Luxury Smart Home Bangalore — Architecture-Led KNX Design | VARELLI",
  description:
    "Luxury smart home design in Bangalore with VARELLI. KNX wired automation, Basalte keypads, Dolby Atmos cinema, Zehnder fresh air, and UniFi enterprise networking for villas in Whitefield, Koramangala, Indiranagar and South Bangalore.",
  path: "/journal/luxury-smart-home-bangalore",
  keywords: [
    "luxury smart home Bangalore",
    "luxury home automation Bangalore",
    "smart villa Bangalore",
    "intelligent home Bangalore",
    "KNX home Bangalore",
    "Basalte Bangalore",
    "smart home Whitefield Bangalore",
    "smart home Koramangala",
    "home automation Sadashivanagar",
    "high end home automation Bangalore",
  ],
});

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Luxury Smart Home Design in Bangalore — The VARELLI Approach 2026",
  description:
    "An architectural and engineering manifesto on creating luxury smart homes in Bangalore. Covers KNX wired infrastructure, bespoke European tactile interfaces, indoor air quality with Zehnder ERV, dedicated Dolby Atmos private cinema acoustic engineering, and enterprise networking for estates in Whitefield, Koramangala, Indiranagar, and South Bangalore.",
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
  mainEntityOfPage: "https://varelli.in/journal/luxury-smart-home-bangalore",
  image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
};

const faqs = [
  {
    question: "What is the best smart home company in Bangalore for luxury villas?",
    answer:
      "VARELLI is recognized as the leading luxury smart home integrator in Bangalore, specializing in architecture-led KNX wired automation, bespoke European tactile controls from Basalte and Ekinex, Trinnov/Dolby Atmos private cinemas, Zehnder fresh air ventilation, and enterprise UniFi networking. Unlike retail AV dealers or generic electricians, VARELLI engineers custom infrastructure that integrates invisibly with luxury architectural builds.",
  },
  {
    question: "How much does a luxury smart home cost in Bangalore?",
    answer:
      "For a luxury villa in Bangalore (4,000 to 6,000 sq. ft.), a complete KNX wired whole-home automation system typically ranges from ₹14.5 Lakhs to ₹24 Lakhs. Adding a dedicated Dolby Atmos private cinema ranges from ₹18L to ₹32L (Premiere) or ₹42L to ₹85L+ (Grand), while Swiss fresh air ventilation (Zehnder) costs ₹2.5L to ₹4.5L, and enterprise networking costs ₹1.2L to ₹2.5L.",
  },
  {
    question: "Is KNX home automation available in Bangalore?",
    answer:
      "Yes, KNX is widely implemented in Bangalore's premier residential enclaves including Whitefield, Koramangala, Indiranagar, Sadashivanagar, and Sarjapur Road. VARELLI's Bangalore-based engineering team holds international KNX Partner certification and maintains full ETS software design, panel building, and commissioning capabilities locally.",
  },
  {
    question: "Which areas of Bangalore have VARELLI smart home projects?",
    answer:
      "VARELLI designs and delivers intelligent living ecosystems across Bangalore's premier residential enclaves, including luxury villa communities in Whitefield (Epsilon, Adarsh Palm Meadows, Chaithanya), expansive bungalows in Koramangala and Indiranagar, heritage estates in Sadashivanagar and Dollars Colony, modern residences in Sarjapur, and eco-luxury estates in North and South Bangalore.",
  },
  {
    question: "What is a Basalte keypad and is it available in Bangalore through VARELLI?",
    answer:
      "Basalte is an ultra-luxury Belgian manufacturer of architectural tactile keypads and touch interfaces made from solid milled brass, aluminium, and bronze. Instead of multiple plastic switches, a single Basalte Fibonacci or Sentido keypad controls lighting scenes, motorized shades, HVAC, and music through multitouch gestures. VARELLI is an authorized integrator providing direct procurement, custom finishes, and certified commissioning in Bangalore.",
  },
  {
    question: "How long does a complete smart home installation take for a villa in Bangalore?",
    answer:
      "For a new construction villa (4,000–8,000 sq. ft.), the smart home timeline aligns with the overall construction schedule (typically 12 to 18 months). VARELLI conducts MEP conduit rough-in during civil first-fix, installs custom centralized automation panels during plastering/false-ceiling work, and performs final keypad fit-out and ETS software commissioning over a 3 to 6-week window before handover.",
  },
];

export default function LuxurySmartHomeBangalorePage() {
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
            { name: "Luxury Smart Home Bangalore", href: "/journal/luxury-smart-home-bangalore" },
          ]}
        />

        <header className="mt-8 mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[var(--gold)] border border-[var(--gold)]/30 px-3 py-1">
              Bangalore Architecture &amp; Living
            </span>
            <span className="text-xs text-[var(--text-muted)]">Updated August 2026 · 13 min read</span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-[3.25rem] text-[var(--text-primary)] leading-[1.15] mb-6">
            Luxury Smart Home Design in Bangalore — The VARELLI Approach 2026
          </h1>
          <p className="text-xl text-[var(--text-secondary)] leading-relaxed max-w-3xl">
            In India&apos;s technology capital, luxury living is evolving beyond fragmented consumer gadgets. Discover how
            architecture-led KNX engineering, bespoke Belgian controls, and invisible systems create serene living ecosystems
            for Bangalore&apos;s most ambitious private residences.
          </p>
          <div className="mt-6 pt-6 border-t border-[var(--border)] text-sm text-[var(--text-muted)] flex flex-wrap items-center justify-between gap-4">
            <span>By VARELLI Systems Architecture Team · Bangalore Studio</span>
            <span className="font-mono text-xs text-[var(--gold)]">Bangalore · Mumbai · Delhi NCR</span>
          </div>
        </header>

        {/* Executive Summary Callout */}
        <div className="bg-[var(--surface-2)] border border-[var(--gold)]/25 rounded-md p-7 mb-14 shadow-lg shadow-black/20">
          <div className="flex items-center gap-2 mb-3">
            <span className="h-2 w-2 rounded-full bg-[var(--gold)] animate-pulse" />
            <p className="text-xs font-mono uppercase tracking-widest text-[var(--gold)] font-semibold">
              Executive Summary
            </p>
          </div>
          <p className="text-[var(--text-primary)] leading-relaxed text-base md:text-[1.05rem]">
            Bangalore&apos;s luxury residential landscape—from expansive contemporary villas in <strong>Whitefield</strong> and{" "}
            <strong>Sarjapur</strong> to grand architectural bungalows in <strong>Koramangala</strong>,{" "}
            <strong>Indiranagar</strong>, and <strong>Sadashivanagar</strong>—demands a fundamental shift from gadget-heavy
            automation to <strong>architecture-led intelligent living</strong>. At VARELLI, we reject unreliable wireless
            dongles and plastic switch plates. Instead, we engineer unified, permanent ecosystems combining{" "}
            <strong>KNX wired infrastructure (ISO/IEC 14543)</strong>, solid milled metal <strong>Basalte (Belgium)</strong>{" "}
            keypads, <strong>Zehnder (Switzerland)</strong> fresh air ventilation, reference-level{" "}
            <strong>Dolby Atmos / Trinnov</strong> private cinemas, and enterprise <strong>UniFi 10GbE</strong> networking.
            The result is a serene, resilient home that operates effortlessly offline and enhances the architectural integrity
            of the residence for decades.
          </p>
        </div>

        <div className="prose prose-invert prose-lg max-w-none space-y-12">
          {/* Section 1 */}
          <section>
            <h2 className="font-display text-2xl md:text-3xl text-[var(--text-primary)] mb-5">
              1. What Makes a Home Truly Intelligent vs. Just &ldquo;Smart&rdquo;
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              In Bangalore, the term &ldquo;smart home&rdquo; has been diluted by mass-market consumer electronics. When a
              homeowner is handed six different mobile applications to control air conditioners, motorized blinds, security
              cameras, garden sprinklers, and lighting strips, the technology does not liberate—it burdens.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              At VARELLI, we define a sharp distinction between a <em>gadget-led home</em> and an{" "}
              <em>architecture-led intelligent residence</em>:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="bg-[var(--surface-1)] border border-[var(--border)] p-6 rounded-md">
                <h3 className="font-display text-lg text-[var(--text-muted)] mb-3">The Gadget-Led Approach (Flawed)</h3>
                <ul className="text-sm text-[var(--text-secondary)] space-y-2 list-disc pl-5">
                  <li>Fragile 2.4GHz WiFi switches that drop offline during network glitches.</li>
                  <li>Wall acne: 8 to 12 mismatched plastic switches and remotes at every entry.</li>
                  <li>Cloud-server reliance: lights fail if broadband or AWS servers go down.</li>
                  <li>Short obsolescence cycle: devices fail or lose app support within 3–5 years.</li>
                  <li>Reactive: requires the user to constantly find a phone or speak voice commands.</li>
                </ul>
              </div>

              <div className="bg-[var(--surface-1)] border border-[var(--gold)]/30 p-6 rounded-md shadow-sm">
                <h3 className="font-display text-lg text-[var(--gold)] mb-3">The VARELLI Architectural Philosophy</h3>
                <ul className="text-sm text-[var(--text-primary)] space-y-2 list-disc pl-5">
                  <li>Industrial KNX 24V twisted-pair bus wired directly back to centralized panels.</li>
                  <li>A single solid brass Basalte keypad replaces all 8 wall switches seamlessly.</li>
                  <li>100% offline local intelligence; unaffected by power blips or internet outages.</li>
                  <li>30+ year engineered lifespan matching the building&apos;s physical structure.</li>
                  <li>Proactive &amp; invisible: circadian lighting and climate adjust autonomously.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="font-display text-2xl md:text-3xl text-[var(--text-primary)] mb-5">
              2. Bangalore&apos;s Luxury Residential Enclaves &amp; Smart Home Trends
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              Bangalore&apos;s unique climate, dynamic tech-executive demographic, and architectural diversity create
              specific technology requirements that generic national integrators fail to address:
            </p>
            <div className="space-y-4 my-6">
              <div className="border-l-2 border-[var(--gold)] pl-4">
                <h4 className="font-display font-semibold text-[var(--text-primary)] text-base">
                  Whitefield &amp; Sarjapur Villa Communities
                </h4>
                <p className="text-sm text-[var(--text-secondary)] mt-1">
                  In gated luxury enclaves like Epsilon, Palm Meadows, and Chaithanya, villas span 5,000 to 12,000 sq. ft.
                  with extensive private gardens and double-height living volumes. Key requirements include centralized KNX
                  lighting control, perimeter DoorBird &amp; Mobotix IP surveillance, multi-zone landscape audio, and
                  integrated VRV climate management to buffer Bangalore&apos;s sharp afternoon heat.
                </p>
              </div>

              <div className="border-l-2 border-[var(--gold)] pl-4">
                <h4 className="font-display font-semibold text-[var(--text-primary)] text-base">
                  Koramangala &amp; Indiranagar Urban Bungalows
                </h4>
                <p className="text-sm text-[var(--text-secondary)] mt-1">
                  High-density, contemporary multi-level residences prioritize acoustic seclusion, private Dolby Atmos
                  basement cinemas, keyless biometric access control, and seamless Lutron/Somfy motorized shading to preserve
                  privacy from adjacent urban structures.
                </p>
              </div>

              <div className="border-l-2 border-[var(--gold)] pl-4">
                <h4 className="font-display font-semibold text-[var(--text-primary)] text-base">
                  Sadashivanagar, Jayanagar &amp; South Bangalore Estates
                </h4>
                <p className="text-sm text-[var(--text-secondary)] mt-1">
                  Generational luxury estates where classical or modernist timber and stone architecture demands
                  ultra-minimalist tactile surfaces. Ekinex brushed metal finishes and Basalte Fibonacci keypads blend
                  invisibly into hand-crafted Italian veneer and teak wall paneling.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="font-display text-2xl md:text-3xl text-[var(--text-primary)] mb-5">
              3. The VARELLI Intelligent Living Ecosystem for Bangalore Villas
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              We design every residence as a unified five-pillar engineering ecosystem. Rather than treating lighting,
              acoustics, air, security, and data as disparate trades, VARELLI integrates them under a single architectural
              master plan:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 my-8">
              <div className="border border-[var(--border)] bg-[var(--surface-1)] p-5 rounded">
                <p className="font-mono text-xs text-[var(--gold)] uppercase mb-1">Pillar 01 · Infrastructure</p>
                <h4 className="font-display text-base font-semibold text-[var(--text-primary)] mb-2">KNX Wired Backbone &amp; DALI-2</h4>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  Decentralized bus topology controlling DALI-2 architectural lighting, motorized drapery tracks, and Daikin/Mitsubishi
                  VRV climate systems with zero latency.
                </p>
              </div>

              <div className="border border-[var(--border)] bg-[var(--surface-1)] p-5 rounded">
                <p className="font-mono text-xs text-[var(--gold)] uppercase mb-1">Pillar 02 · Tactile Luxury</p>
                <h4 className="font-display text-base font-semibold text-[var(--text-primary)] mb-2">Basalte &amp; Ekinex Touchpoints</h4>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  Bespoke European switches crafted from solid bronze, brushed aluminium, and fer forgé brass. Multitouch
                  gestures orchestrate lighting, sound, and mood.
                </p>
              </div>

              <div className="border border-[var(--border)] bg-[var(--surface-1)] p-5 rounded">
                <p className="font-mono text-xs text-[var(--gold)] uppercase mb-1">Pillar 03 · Indoor Environment</p>
                <h4 className="font-display text-base font-semibold text-[var(--text-primary)] mb-2">Zehnder Swiss IAQ Ventilation</h4>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  Continuous heat-recovery fresh air filtration, extracting Bangalore&apos;s urban dust and pollen while keeping
                  indoor CO₂ levels below 600 ppm for restorative sleep.
                </p>
              </div>

              <div className="border border-[var(--border)] bg-[var(--surface-1)] p-5 rounded">
                <p className="font-mono text-xs text-[var(--gold)] uppercase mb-1">Pillar 04 · Private Cinema</p>
                <h4 className="font-display text-base font-semibold text-[var(--text-primary)] mb-2">Dolby Atmos &amp; Trinnov Audio</h4>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  Bespoke acoustic modeling, DCI-standard laser projection from Barco Residential, Sonus Faber or KEF reference
                  speakers, and Stewart Filmscreen screens.
                </p>
              </div>

              <div className="border border-[var(--border)] bg-[var(--surface-1)] p-5 rounded sm:col-span-2">
                <p className="font-mono text-xs text-[var(--gold)] uppercase mb-1">Pillar 05 · Mission-Critical Data</p>
                <h4 className="font-display text-base font-semibold text-[var(--text-primary)] mb-2">UniFi Enterprise 10GbE Networking</h4>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  High-density Wi-Fi 7 / Wi-Fi 6E access points, isolated IoT VLAN subnets, optical fibre backbone between villa
                  floors, and seamless zero-handoff roaming across multi-acre estates.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="font-display text-2xl md:text-3xl text-[var(--text-primary)] mb-5">
              4. Smart Home Integration Timeline for a Bangalore Villa Under Construction
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              A common mistake made by homeowners and builders is engaging an automation integrator late in the interior fit-out
              stage. For a true KNX wired system, early structural coordination is vital. Here is how VARELLI coordinates
              with your architectural and MEP team:
            </p>

            <div className="space-y-6 my-8">
              <div className="flex gap-4 items-start">
                <span className="font-mono text-xs bg-[var(--surface-2)] text-[var(--gold)] border border-[var(--gold)]/30 rounded px-2.5 py-1 shrink-0 mt-1">
                  STAGE 01
                </span>
                <div>
                  <h4 className="font-display font-semibold text-[var(--text-primary)] text-base">
                    Concept &amp; MEP Schematic Design (Month 1–2)
                  </h4>
                  <p className="text-sm text-[var(--text-secondary)] mt-1">
                    VARELLI collaborates with your architect to map lighting circuits, DALI-2 driver zones, motorized curtain
                    pockets, VRV AC integration interfaces, and central server rack room dimensions.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <span className="font-mono text-xs bg-[var(--surface-2)] text-[var(--gold)] border border-[var(--gold)]/30 rounded px-2.5 py-1 shrink-0 mt-1">
                  STAGE 02
                </span>
                <div>
                  <h4 className="font-display font-semibold text-[var(--text-primary)] text-base">
                    First-Fix Conduit &amp; Cabling Pre-Lay (Month 3–6)
                  </h4>
                  <p className="text-sm text-[var(--text-secondary)] mt-1">
                    Certified green KNX TP-1 data cables, Cat6A shielded data lines, speaker cables, and low-voltage DALI lines
                    are laid inside structural conduits before brickwork plastering and screed pouring.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <span className="font-mono text-xs bg-[var(--surface-2)] text-[var(--gold)] border border-[var(--gold)]/30 rounded px-2.5 py-1 shrink-0 mt-1">
                  STAGE 03
                </span>
                <div>
                  <h4 className="font-display font-semibold text-[var(--text-primary)] text-base">
                    Automation Panel Build &amp; Testing (Month 7–9)
                  </h4>
                  <p className="text-sm text-[var(--text-secondary)] mt-1">
                    Custom automation distribution enclosures are assembled, wired, and bench-tested in VARELLI&apos;s Bangalore
                    laboratory with surge protection and thermal dissipation testing prior to site delivery.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <span className="font-mono text-xs bg-[var(--surface-2)] text-[var(--gold)] border border-[var(--gold)]/30 rounded px-2.5 py-1 shrink-0 mt-1">
                  STAGE 04
                </span>
                <div>
                  <h4 className="font-display font-semibold text-[var(--text-primary)] text-base">
                    Second-Fix Keypad Mounting &amp; ETS Commissioning (Month 10–12)
                  </h4>
                  <p className="text-sm text-[var(--text-secondary)] mt-1">
                    Basalte and Ekinex keypads are flush-mounted onto finished walls. Our certified KNX engineers program scene
                    macros, DALI-2 dimming curves, and mobile interfaces using official KNX ETS6 software.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="font-display text-2xl md:text-3xl text-[var(--text-primary)] mb-5">
              5. European Brands Available in Bangalore Through VARELLI
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              We exclusively specify engineered hardware from Europe and North America&apos;s most prestigious architectural
              manufacturers. Every product carries full factory warranty and direct factory firmware support:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-8">
              <div className="bg-[var(--surface-1)] border border-[var(--border)] p-4 rounded">
                <p className="font-display text-sm font-semibold text-[var(--gold)]">Basalte (Belgium)</p>
                <p className="text-xs text-[var(--text-secondary)] mt-1">
                  Handmade brass keypads, Chopin rocker switches, and Miro remotes with multitouch intelligence.
                </p>
              </div>
              <div className="bg-[var(--surface-1)] border border-[var(--border)] p-4 rounded">
                <p className="font-display text-sm font-semibold text-[var(--gold)]">Ekinex (Italy)</p>
                <p className="text-xs text-[var(--text-secondary)] mt-1">
                  Milanese minimalist switches with custom metal and Fenix NTM finishes and integrated temperature sensors.
                </p>
              </div>
              <div className="bg-[var(--surface-1)] border border-[var(--border)] p-4 rounded">
                <p className="font-display text-sm font-semibold text-[var(--gold)]">Zehnder (Switzerland)</p>
                <p className="text-xs text-[var(--text-secondary)] mt-1">
                  Enthalpy heat recovery ventilation delivering 100% fresh, filtered outdoor air silently 24/7.
                </p>
              </div>
              <div className="bg-[var(--surface-1)] border border-[var(--border)] p-4 rounded">
                <p className="font-display text-sm font-semibold text-[var(--gold)]">DoorBird (Germany)</p>
                <p className="text-xs text-[var(--text-secondary)] mt-1">
                  IP video entry stations crafted from 3mm marine-grade stainless steel with RFID and biometric access.
                </p>
              </div>
              <div className="bg-[var(--surface-1)] border border-[var(--border)] p-4 rounded">
                <p className="font-display text-sm font-semibold text-[var(--gold)]">Sonus Faber (Italy)</p>
                <p className="text-xs text-[var(--text-secondary)] mt-1">
                  Artisanal walnut and leather architectural in-wall and freestanding reference audiophile loudspeakers.
                </p>
              </div>
              <div className="bg-[var(--surface-1)] border border-[var(--border)] p-4 rounded">
                <p className="font-display text-sm font-semibold text-[var(--gold)]">Trinnov Audio (France)</p>
                <p className="text-xs text-[var(--text-secondary)] mt-1">
                  The world&apos;s ultimate 3D room optimization processors for 16-to-32 channel Dolby Atmos and DTS:X Pro.
                </p>
              </div>
            </div>
            <p className="text-sm text-[var(--text-muted)]">
              Explore our full ecosystem portfolio at our{" "}
              <Link href="/brands" className="text-[var(--gold)] hover:underline">
                European Brands Directory →
              </Link>
            </p>
          </section>

          {/* Section 6: Case Study */}
          <section>
            <h2 className="font-display text-2xl md:text-3xl text-[var(--text-primary)] mb-5">
              6. Case Study Snapshot — A Whitefield Villa Transformation
            </h2>
            <div className="bg-[var(--surface-2)] border border-[var(--border)] p-7 rounded-md space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--border)] pb-4">
                <div>
                  <h3 className="font-display text-lg text-[var(--text-primary)] font-semibold">
                    The Whitefield Horizon Residence
                  </h3>
                  <p className="text-xs text-[var(--text-muted)]">Contemporary 5,500 sq.ft. Triplex Villa · Whitefield, Bangalore</p>
                </div>
                <span className="text-xs font-mono text-[var(--gold)] bg-[var(--surface-1)] px-3 py-1 border border-[var(--gold)]/30 rounded">
                  Delivered 2026
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 text-sm text-[var(--text-secondary)]">
                <div>
                  <p className="font-semibold text-[var(--text-primary)] mb-1">Architectural Challenge:</p>
                  <p className="text-xs leading-relaxed">
                    Extensive Italian Statuario marble walls with floor-to-ceiling glass facades required zero visible wall
                    clutter, absolute silence in HVAC operation, and seamless audio-visual integration in a double-height formal lounge.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-[var(--text-primary)] mb-1">VARELLI Solution:</p>
                  <p className="text-xs leading-relaxed">
                    Deployment of the <strong>KNX Architectural Villa package (₹18.5L)</strong> with 14 Basalte Fibonacci
                    brushed black keypads, 42 DALI-2 tunable lighting circuits, Daikin VRV integration, and motorized Somfy dual-roller shades.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-[var(--border)]">
                <p className="text-xs font-mono text-[var(--gold)] uppercase mb-2">Integrated Technology Ecosystem</p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                  <div className="bg-[var(--surface-1)] p-2.5 rounded border border-[var(--border)]">
                    <p className="font-semibold text-[var(--text-primary)]">KNX Automation</p>
                    <p className="text-[var(--text-muted)]">4 Zones / Full DALI-2</p>
                  </div>
                  <div className="bg-[var(--surface-1)] p-2.5 rounded border border-[var(--border)]">
                    <p className="font-semibold text-[var(--text-primary)]">Dolby Atmos Cinema</p>
                    <p className="text-[var(--text-muted)]">7.2.4 KEF / Barco 4K</p>
                  </div>
                  <div className="bg-[var(--surface-1)] p-2.5 rounded border border-[var(--border)]">
                    <p className="font-semibold text-[var(--text-primary)]">Swiss Fresh Air</p>
                    <p className="text-[var(--text-muted)]">Zehnder ComfoAir Q</p>
                  </div>
                  <div className="bg-[var(--surface-1)] p-2.5 rounded border border-[var(--border)]">
                    <p className="font-semibold text-[var(--text-primary)]">Enterprise Network</p>
                    <p className="text-[var(--text-muted)]">UniFi 10GbE / WiFi 7</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <FAQSection faqs={faqs} heading="Luxury Smart Homes in Bangalore — FAQ" />
        </div>

        {/* Related Links */}
        <div className="mt-12 bg-[var(--surface-2)] border border-[var(--border)] rounded-sm p-8">
          <p className="text-xs font-mono uppercase tracking-widest text-[var(--gold)] mb-4 font-semibold">
            Explore Bangalore Residential Technology
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/home-automation/bangalore"
              className="text-[var(--text-secondary)] hover:text-[var(--gold)] transition-colors text-sm flex items-center gap-2"
            >
              <span className="text-[var(--gold)]">→</span> Home Automation Services Bangalore
            </Link>
            <Link
              href="/journal/home-automation-cost-bangalore"
              className="text-[var(--text-secondary)] hover:text-[var(--gold)] transition-colors text-sm flex items-center gap-2"
            >
              <span className="text-[var(--gold)]">→</span> Home Automation Cost Bangalore Guide
            </Link>
            <Link
              href="/home-theatre/bangalore"
              className="text-[var(--text-secondary)] hover:text-[var(--gold)] transition-colors text-sm flex items-center gap-2"
            >
              <span className="text-[var(--gold)]">→</span> Private Cinema &amp; Home Theatre Bangalore
            </Link>
            <Link
              href="/fresh-air-ventilation/bangalore"
              className="text-[var(--text-secondary)] hover:text-[var(--gold)] transition-colors text-sm flex items-center gap-2"
            >
              <span className="text-[var(--gold)]">→</span> Zehnder Fresh Air Ventilation Bangalore
            </Link>
          </div>
        </div>
      </div>

      <ServiceCTA serviceName="Luxury Smart Home (Bangalore)" />
    </article>
  );
}
