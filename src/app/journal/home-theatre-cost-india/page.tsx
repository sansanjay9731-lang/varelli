import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import Breadcrumb from "@/components/layout/Breadcrumb";
import FAQSection from "@/components/sections/service/FAQSection";
import ServiceCTA from "@/components/sections/service/ServiceCTA";
import Link from "next/link";

export const metadata: Metadata = generatePageMetadata({
  title: "Home Theatre Cost in India 2026 — Full Pricing Guide | VARELLI",
  description:
    "Honest guide to home theatre cost in India 2026. Dolby Atmos 5.1 to 9.4.6, projectors, screens, acoustic treatment pricing in ₹ Lakhs. From Bangalore to Mumbai.",
  path: "/journal/home-theatre-cost-india",
  keywords: [
    "home theatre cost India",
    "home cinema cost Bangalore",
    "Dolby Atmos home theatre price India",
    "home theatre installation cost India",
    "home cinema room cost India 2026",
    "private cinema price India",
    "home theatre acoustic cost India",
    "luxury home cinema Bangalore Mumbai",
  ],
});

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Home Theatre Cost in India — 2026 Complete ₹ Guide",
  description:
    "A comprehensive pricing and engineering guide to dedicated home theatres and private cinemas in India. Covers Dolby Atmos 5.1 through 9.4.6 configurations, laser projectors, acoustic treatments, and room budget breakdowns.",
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
  mainEntityOfPage: "https://varelli.in/journal/home-theatre-cost-india",
};

const faqs = [
  {
    question: "What is the cost of a Dolby Atmos home theatre in India?",
    answer:
      "In India, a true dedicated Dolby Atmos home theatre starts from ₹18 Lakhs to ₹32 Lakhs for a reference 7.2.4 channel configuration in a 300–400 sq.ft. room. High-end private cinemas with 9.4.6 channel architectural speakers (Sonus Faber / KEF), multi-subwoofer bass management, and Trinnov Audio processing range from ₹42 Lakhs to ₹65 Lakhs. Ultra-luxury estate cinemas with DCI-grade Barco laser projection and bespoke fiber-optic starry ceilings range from ₹65 Lakhs to ₹85 Lakhs+.",
  },
  {
    question: "What is the minimum room size for a dedicated home cinema in India?",
    answer:
      "The minimum recommended room size for a dedicated private cinema is approximately 180 to 220 sq.ft. (e.g., 12 ft × 16 ft with a 10 ft ceiling height). This allows for a 110-inch to 130-inch acoustically transparent screen, proper 5.1.2 or 7.2.4 speaker placement outside the room boundary modes, and one row of 3–4 luxury recliners. For two-tier stepped seating with 7.2.4 or 9.4.6 Atmos audio, a room size of 350 to 550 sq.ft. is ideal.",
  },
  {
    question: "Is a projector or TV better for a home theatre?",
    answer:
      "For an authentic, immersive cinematic experience in a light-controlled room, a 4K HDR laser projector paired with an Acoustically Transparent (AT) woven screen is substantially superior. It allows the center, left, and right speakers to sit directly behind the screen at ear level — ensuring dialogue emanates directly from the actors' lips, exactly like a commercial cinema. 98-inch or 115-inch TVs are viable for multi-purpose media lounges, but suffer from high acoustic reflections and force the center speaker below the display.",
  },
  {
    question: "What is Dolby Atmos and how many speakers do I need?",
    answer:
      "Dolby Atmos is an object-based immersive audio format where sounds exist as individual 3D objects placed precisely in three-dimensional space rather than fixed audio channels. A reference private cinema typically features 7.2.4 channels: 7 ear-level bed speakers (Left, Center, Right, 2 Side Surrounds, 2 Rear Surrounds), 2 dedicated subwoofers for balanced low-frequency response, and 4 in-ceiling overhead height channels. Larger rooms benefit from 9.4.6 configurations with 6 ceiling speakers and 4 independent corner subwoofers.",
  },
  {
    question: "How long does a home theatre installation take?",
    answer:
      "A complete turnkey private cinema installation typically takes 6 to 12 weeks from acoustic shell construction to final calibration. This includes room isolation, bass-trap framing, fabric stretch wall systems, conduit wiring, lighting integration, equipment rack assembly, and multi-point Dirac Live or Trinnov Optimizer acoustic room calibration.",
  },
  {
    question: "Can I get a dedicated home cinema in a flat or apartment?",
    answer:
      "Yes. While standalone villas in Bangalore or Hyderabad have fewer noise transmission constraints, private cinemas can be built inside luxury penthouses and apartments in Mumbai or Bangalore using room-within-a-room acoustic decoupling. This employs floating acoustic sub-floors, resilient isolation clips, and damped drywall shells that prevent bass vibration from travelling to adjacent living spaces.",
  },
  {
    question: "How much does acoustic treatment cost for a home theatre in India?",
    answer:
      "Acoustic treatment typically represents 25% to 35% of your total cinema budget. In a 350 sq.ft. room, professional acoustic construction (including sound isolation, engineered Helmholtz resonators, low-frequency bass traps, 2D quadratic diffusers, and architectural stretch-fabric finishes) costs between ₹4.5 Lakhs and ₹9.5 Lakhs. Without proper acoustics, even ₹50 Lakhs worth of audio hardware will sound boomy, harsh, and muddy.",
  },
];

export default function HomeTheatreCostIndiaPage() {
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
            {
              name: "Home Theatre Cost in India 2026",
              href: "/journal/home-theatre-cost-india",
            },
          ]}
        />

        <header className="mt-8 mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[var(--gold)] border border-[var(--gold)]/30 px-3 py-1">
              Private Cinema Pricing Guide
            </span>
            <span className="text-xs text-[var(--text-muted)]">Updated August 2026 · 12 min read</span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl text-[var(--text-primary)] leading-tight mb-6">
            Home Theatre Cost in India — 2026 Complete ₹ Guide
          </h1>
          <p className="text-xl text-[var(--text-secondary)] leading-relaxed max-w-3xl">
            A comprehensive, transparent cost breakdown for dedicated private cinemas and Dolby Atmos screening rooms in
            India. From equipment selection to room isolation and acoustic calibration.
          </p>
          <div className="mt-6 pt-6 border-t border-[var(--border)] flex flex-wrap items-center justify-between gap-4 text-sm text-[var(--text-muted)]">
            <span>By VARELLI Private Cinema Design Team · CEDIA Certified</span>
            <span className="font-mono text-xs">Bangalore · Mumbai · Delhi NCR · Hyderabad</span>
          </div>
        </header>

        {/* Executive Summary Box */}
        <div className="bg-[var(--surface-2)] border border-[var(--gold)]/30 rounded-lg p-6 md:p-8 mb-12 shadow-lg">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-2.5 h-2.5 rounded-full bg-[var(--gold)]" />
            <p className="text-xs font-mono uppercase tracking-widest text-[var(--gold)]">
              Executive Summary · 2026 Budget Overview
            </p>
          </div>
          <p className="text-[var(--text-primary)] leading-relaxed font-body text-base md:text-lg mb-4">
            In 2026, building a dedicated home theatre in India ranges from <strong>₹8 Lakhs</strong> for an entry-level
            5.1 media room conversion to <strong>₹85 Lakhs+</strong> for a bespoke, DCI-grade private cinema featuring
            Barco laser projection, Trinnov processing, Sonus Faber acoustics, and fiber-optic starry ceilings.
          </p>
          <p className="text-sm text-[var(--text-secondary)] font-body leading-relaxed">
            For the majority of luxury villas (350–550 sq.ft. room), the benchmark sweet spot for a reference 7.2.4 or
            9.4.6 Dolby Atmos private cinema with full acoustic room treatment is <strong>₹18 Lakhs to ₹45 Lakhs</strong>.
          </p>
        </div>

        {/* Section 1 */}
        <div className="prose prose-invert prose-lg max-w-none mb-12">
          <h2>What Determines Home Theatre Cost in India?</h2>
          <p>
            Many luxury homeowners assume a home theatre is simply a collection of retail electronics: a projector, an
            AV receiver, and a bundle of surround speakers. In reality, a true private cinema is a precision-engineered
            acoustic room environment built to strict CEDIA (Custom Electronic Design &amp; Installation Association) and
            Dolby Laboratories standards.
          </p>
          <p>
            The final investment is determined by seven core architectural and technical elements:
          </p>
          <ol>
            <li>
              <strong>Room Dimensions &amp; Volumetric Space:</strong> Larger rooms require higher acoustic output (SPL),
              greater amplifier wattage, more powerful subwoofers to pressurize the air, and larger screen surfaces.
            </li>
            <li>
              <strong>Speaker Topology &amp; Driver Engineering:</strong> Moving from entry-level 5.1 surround sound to a
              7.2.4 or 9.4.6 Dolby Atmos architectural layout increases the channel count, processing requirements, and
              multi-channel power amplification.
            </li>
            <li>
              <strong>Display Technology:</strong> High-lumen solid-state laser projectors (Barco Residential, Sony SXRD,
              JVC D-ILA) paired with micro-perforated or woven Acoustically Transparent (AT) screens cost substantially more
              than consumer lamp projectors or large LED panels.
            </li>
            <li>
              <strong>Architectural Acoustic Construction:</strong> Sound isolation (decoupling walls, floating floors,
              drop seals) and internal acoustic optimization (bass traps, diffusers, absorption panels, fabric track
              systems) often represent 30% of the total budget.
            </li>
            <li>
              <strong>Audio Processing &amp; Room Calibration:</strong> Reference processors (such as Trinnov Audio Altitude
              or StormAudio) utilize 3D microphone arrays to perform active time-alignment, phase correction, and active bass
              management.
            </li>
            <li>
              <strong>Bespoke Cinema Seating &amp; Interior Architecture:</strong> Motorized Italian leather recliners with
              lumbar adjustment, tiered acoustic risers, concealed LED step lighting, and acoustic ceilings.
            </li>
            <li>
              <strong>KNX &amp; Smart Lighting Integration:</strong> Seamless single-touch &ldquo;Movie Time&rdquo; macros
              that smoothly ramp down DALI-2 architectural lighting, close blackout drapes, and power on the AV rack.
            </li>
          </ol>
        </div>

        {/* Section 2: Detailed Pricing Table */}
        <div className="mb-12">
          <div className="prose prose-invert prose-lg max-w-none mb-6">
            <h2>Home Theatre Pricing by Tier — Complete Breakdown</h2>
            <p>
              VARELLI categorizes private cinemas into four distinct performance tiers, engineered specifically for
              apartments, penthouses, and luxury villas across India.
            </p>
          </div>

          <div className="overflow-x-auto rounded-lg border border-[var(--border)] bg-[var(--surface-1)]">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[var(--surface-2)]">
                  <th className="text-left p-4 border-b border-[var(--border)] text-[var(--gold)] font-mono text-xs uppercase">
                    Tier &amp; Room Size
                  </th>
                  <th className="text-center p-4 border-b border-[var(--border)] text-[var(--text-primary)] font-semibold">
                    Audio Configuration
                  </th>
                  <th className="text-center p-4 border-b border-[var(--border)] text-[var(--text-primary)] font-semibold">
                    Visual &amp; Projection
                  </th>
                  <th className="text-center p-4 border-b border-[var(--border)] text-[var(--text-primary)] font-semibold">
                    Acoustics &amp; Interiors
                  </th>
                  <th className="text-center p-4 border-b border-[var(--border)] text-[var(--gold)] font-semibold">
                    Estimated Investment
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--border)]">
                <tr>
                  <td className="p-4 font-semibold text-[var(--text-primary)]">
                    Entry Living/Media Room
                    <span className="block text-xs text-[var(--text-muted)] font-normal">180–250 sq.ft. (Apartment)</span>
                  </td>
                  <td className="p-4 text-center text-xs text-[var(--text-secondary)]">
                    5.1 / 5.2.2 Dolby Atmos (KEF / Polk / Monitor Audio)
                  </td>
                  <td className="p-4 text-center text-xs text-[var(--text-secondary)]">
                    85&quot;–98&quot; 4K HDR TV or 4K Lamp Projector + Fixed Screen
                  </td>
                  <td className="p-4 text-center text-xs text-[var(--text-secondary)]">
                    Basic wall-mounted fabric panels &amp; blackout curtains
                  </td>
                  <td className="p-4 text-center font-semibold text-[var(--text-primary)]">
                    ₹8L – ₹12L
                  </td>
                </tr>
                <tr className="bg-[var(--gold)]/5">
                  <td className="p-4 font-semibold text-[var(--gold)]">
                    Premiere Private Cinema
                    <span className="block text-xs text-[var(--text-muted)] font-normal">300–450 sq.ft. (Dedicated Room)</span>
                  </td>
                  <td className="p-4 text-center text-xs text-[var(--text-primary)]">
                    7.2.4 Reference Dolby Atmos (KEF Ci-Series / B&amp;W / Sonus Faber)
                  </td>
                  <td className="p-4 text-center text-xs text-[var(--text-primary)]">
                    Native 4K Laser (Sony SXRD / JVC D-ILA) + 135&quot; Acoustically Transparent Woven Screen
                  </td>
                  <td className="p-4 text-center text-xs text-[var(--text-primary)]">
                    Full acoustic shell, tuned bass traps, fabric walls, 4 motorized recliners
                  </td>
                  <td className="p-4 text-center font-bold text-[var(--gold)]">
                    ₹18L – ₹32L
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-[var(--text-primary)]">
                    Grand Architectural Cinema
                    <span className="block text-xs text-[var(--text-muted)] font-normal">450–650 sq.ft. (Luxury Villa)</span>
                  </td>
                  <td className="p-4 text-center text-xs text-[var(--text-secondary)]">
                    9.4.6 Immersive Atmos with Trinnov Optimizer &amp; Sonus Faber Palladio
                  </td>
                  <td className="p-4 text-center text-xs text-[var(--text-secondary)]">
                    High-Lumen Laser Projector + Stewart Filmscreen 160&quot; 2.35:1 Anamorphic Screen
                  </td>
                  <td className="p-4 text-center text-xs text-[var(--text-secondary)]">
                    CEDIA Tier-1 acoustic isolation, 2-tier seating (6–8 recliners), KNX lighting
                  </td>
                  <td className="p-4 text-center font-semibold text-[var(--text-primary)]">
                    ₹42L – ₹65L
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-[var(--text-primary)]">
                    Estate Reference Screening Room
                    <span className="block text-xs text-[var(--text-muted)] font-normal">650+ sq.ft. (Grand Estate)</span>
                  </td>
                  <td className="p-4 text-center text-xs text-[var(--text-secondary)]">
                    Trinnov Altitude32 + JBL Synthesis / Sonus Faber + 4 active subwoofers
                  </td>
                  <td className="p-4 text-center text-xs text-[var(--text-secondary)]">
                    Barco Residential DCI Cinema Laser Projector + 200&quot; Curved Micro-perf Screen
                  </td>
                  <td className="p-4 text-center text-xs text-[var(--text-secondary)]">
                    Fiber-optic acoustic starry ceiling, velvet daybeds, isolated projection booth
                  </td>
                  <td className="p-4 text-center font-semibold text-[var(--text-primary)]">
                    ₹65L – ₹85L+
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[var(--text-muted)] mt-2 font-mono">
            * All figures represent comprehensive turnkey project costs including acoustic construction, audio-video
            hardware, seating, cabling, and calibration in India. Excludes applicable taxes.
          </p>
        </div>

        {/* Section 3 */}
        <div className="prose prose-invert prose-lg max-w-none mb-12">
          <h2>Projector vs TV — Which is Better for a Dedicated Home Cinema?</h2>
          <p>
            With the arrival of 98-inch and 115-inch consumer 4K LED and Mini-LED TVs in India, many homeowners ask if
            projectors are still relevant. While large TVs are suitable for well-lit multi-purpose living rooms, a
            true dedicated cinema requires a <strong>laser projector and an Acoustically Transparent (AT) screen</strong> for
            three fundamental reasons:
          </p>
          <ul>
            <li>
              <strong>Acoustically Transparent Center Channel Alignment:</strong> Over 70% of a movie&apos;s audio
              (all dialogue, foley, and front soundstage cues) originates from the center speaker. With a TV, the center
              speaker must be mounted below or above the display, pulling dialogue downward toward the floor. An AT screen
              (woven from specialized acoustic fibers) allows the center speaker to sit directly behind the center of the
              image at exact eye level.
            </li>
            <li>
              <strong>Cinemascope Aspect Ratios (2.35:1 / 2.40:1):</strong> Most Hollywood and Indian blockbuster films are
              shot in wide Cinemascope aspect ratios. On a 16:9 TV, you are left with intrusive black letterbox bars at the
              top and bottom. A projector paired with a motorized masking screen or anamorphic lens expands to fill the
              entire horizontal wall, providing true immersion.
            </li>
            <li>
              <strong>Zero Acoustic Glare &amp; Specular Reflections:</strong> Giant glass TV panels act as massive acoustic
              mirrors, reflecting high frequencies from the front speakers and causing harsh flutter echoes. A projection
              screen fabric absorbs and diffuses sound naturally.
            </li>
          </ul>
          <p>
            Explore our deep dive into room geometry and screen ratios in our{" "}
            <Link href="/journal/dolby-atmos-room-design-guide" className="text-[var(--gold)] hover:underline font-medium">
              Dolby Atmos Room Design Guide →
            </Link>
          </p>
        </div>

        {/* Section 4 */}
        <div className="prose prose-invert prose-lg max-w-none mb-12">
          <h2>Dolby Atmos 5.1 vs 7.2.4 vs 9.4.6 — What System Do You Need?</h2>
          <p>
            Understanding surround sound nomenclature is essential to budgeting your audio system effectively:
          </p>
          <div className="space-y-4 not-prose my-6">
            <div className="bg-[var(--surface-1)] border border-[var(--border)] p-5 rounded-lg">
              <h3 className="font-display text-base font-semibold text-[var(--gold)] mb-1">
                Dolby 5.1 / 5.2.2 (Entry Surround)
              </h3>
              <p className="text-sm text-[var(--text-secondary)] font-body">
                Comprises 3 front speakers (LCR), 2 surround speakers slightly behind the listener, 1 or 2 subwoofers, and
                2 optional height channels. Good for compact media rooms (under 250 sq.ft.), but lacks seamless rear-to-front
                panning overhead.
              </p>
            </div>
            <div className="bg-[var(--surface-1)] border border-[var(--gold)]/40 p-5 rounded-lg">
              <h3 className="font-display text-base font-semibold text-[var(--gold)] mb-1">
                Dolby Atmos 7.2.4 (The Luxury Villa Reference Standard)
              </h3>
              <p className="text-sm text-[var(--text-secondary)] font-body">
                Includes 3 front speakers, 2 side surrounds (at 90°–110°), 2 rear back surrounds (at 135°–150°), 2
                independent subwoofers to cancel room resonance modes, and 4 dedicated in-ceiling height channels. This
                creates a complete 360-degree acoustic sphere with seamless overhead tracking.
              </p>
            </div>
            <div className="bg-[var(--surface-1)] border border-[var(--border)] p-5 rounded-lg">
              <h3 className="font-display text-base font-semibold text-[var(--gold)] mb-1">
                Dolby Atmos 9.4.6 (The Grand Estate Standard)
              </h3>
              <p className="text-sm text-[var(--text-secondary)] font-body">
                Adds 2 &ldquo;wide&rdquo; front channels (bridging the acoustic gap between front LCR and side surrounds), 4
                discrete corner subwoofers managed via active waveforming, and 6 ceiling height channels (front, top, and
                rear overhead). Driven by processors like the Trinnov Altitude16 or Altitude32.
              </p>
            </div>
          </div>
        </div>

        {/* Section 5 */}
        <div className="prose prose-invert prose-lg max-w-none mb-12">
          <h2>Acoustic Treatment Cost — Why It&apos;s Non-Negotiable</h2>
          <p>
            The most common mistake luxury homeowners make in India is spending ₹25 Lakhs on high-end electronics while
            leaving the room with bare plastered brick walls, marble flooring, and glass sliding doors.
          </p>
          <p>
            In an untreated room, sound waves reflect hundreds of times per second off hard surfaces, causing:
          </p>
          <ul>
            <li><strong>Severe Bass Boominess &amp; Standing Waves:</strong> Bass notes linger for over 1.2 seconds, drowning out subtle film scores.</li>
            <li><strong>Muffled Dialogue:</strong> Speech intelligibility drops because direct sound is overwhelmed by early wall reflections.</li>
            <li><strong>Acoustic Fatigue:</strong> High-frequency flutter echoes cause ear strain after just 30 minutes of viewing.</li>
          </ul>
          <p>
            Professional acoustic design involves engineered wall layering:
          </p>
          <ol>
            <li><strong>Sound Isolation (Decoupling):</strong> Double-stud gypsum assemblies with Green Glue damping to isolate the cinema from the rest of the home.</li>
            <li><strong>Low-Frequency Bass Trapping:</strong> Custom corner membrane resonators that absorb energy between 30 Hz and 120 Hz.</li>
            <li><strong>Quadratic Residue Diffusion:</strong> Solid wood or engineered QRD diffusers on the rear wall to disperse surround sound evenly without deadening the room.</li>
            <li><strong>Architectural Fabric Finish:</strong> High-end acoustically transparent fabrics (such as Camira or Guilford of Maine) stretched across concealed tracks for a clean, seamless interior finish.</li>
          </ol>
        </div>

        {/* Section 6 */}
        <div className="prose prose-invert prose-lg max-w-none mb-12">
          <h2>Home Theatre Cost in Bangalore vs Mumbai vs Delhi NCR</h2>
          <p>
            While AV equipment hardware costs remain uniform across India, structural and civil installation costs vary
            by city:
          </p>
          <ul>
            <li>
              <strong>Bangalore:</strong> The majority of installations are in spacious standalone villas (Whitefield,
              Sadashivanagar, Yelahanka, Sarjapur). Room sizes typically range from 350 to 600 sq.ft. Basements or dedicated
              top-floor entertainment suites provide excellent isolation flexibility, with total project budgets averaging
              <strong>₹22L to ₹48L</strong>.
            </li>
            <li>
              <strong>Mumbai:</strong> Installations are predominantly in luxury high-rise apartments and penthouses (Worli,
              Bandra, Juhu, Lower Parel). Structural soundproofing is paramount to prevent bass transmission to neighboring
              apartments. Specialized floating acoustic sub-floors and decoupling increase acoustic fit-out costs by 15–20%,
              bringing average budgets to <strong>₹25L to ₹55L</strong>.
            </li>
            <li>
              <strong>Delhi NCR:</strong> Farmhouses in Chattarpur, Westend Greens, and grand bungalows in Lutyens or Golf
              Links feature large volumetric spaces exceeding 700 sq.ft., frequently demanding Estate-tier Barco projection
              and 9.4.6 channel topologies ranging from <strong>₹45L to ₹85L+</strong>.
            </li>
          </ul>
        </div>

        {/* Related Links */}
        <div className="pt-8 border-t border-[var(--border)] mb-12">
          <p className="text-xs font-mono uppercase tracking-widest text-[var(--gold)] mb-4">Explore Private Cinema Solutions</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/private-cinema"
              className="p-4 bg-[var(--surface-1)] border border-[var(--border)] hover:border-[var(--gold)] transition-colors rounded-lg group"
            >
              <span className="text-xs text-[var(--gold)] font-mono">Service Overview</span>
              <h4 className="font-display text-sm font-semibold text-[var(--text-primary)] group-hover:text-[var(--gold)] transition-colors mt-1">
                VARELLI Private Cinema Architecture →
              </h4>
              <p className="text-xs text-[var(--text-secondary)] mt-1">Discover our reference screening room designs and CEDIA engineering.</p>
            </Link>
            <Link
              href="/journal/private-cinema-vs-home-theatre"
              className="p-4 bg-[var(--surface-1)] border border-[var(--border)] hover:border-[var(--gold)] transition-colors rounded-lg group"
            >
              <span className="text-xs text-[var(--gold)] font-mono">Design Guide</span>
              <h4 className="font-display text-sm font-semibold text-[var(--text-primary)] group-hover:text-[var(--gold)] transition-colors mt-1">
                Private Cinema vs Home Theatre →
              </h4>
              <p className="text-xs text-[var(--text-secondary)] mt-1">Understand the difference between a media room and an authentic screening room.</p>
            </Link>
          </div>
        </div>

        {/* FAQs */}
        <FAQSection faqs={faqs} heading="Frequently Asked Questions on Home Theatre Costs" />
      </div>

      {/* Service CTA */}
      <ServiceCTA serviceName="Private Cinema" />
    </article>
  );
}
