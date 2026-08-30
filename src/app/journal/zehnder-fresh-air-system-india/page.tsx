import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import Breadcrumb from "@/components/layout/Breadcrumb";
import FAQSection from "@/components/sections/service/FAQSection";
import ServiceCTA from "@/components/sections/service/ServiceCTA";
import Link from "next/link";

export const metadata: Metadata = generatePageMetadata({
  title: "Zehnder Fresh Air Ventilation System India — ERV Guide 2026 | VARELLI",
  description:
    "Complete guide to Zehnder ERV/HRV fresh air systems for Indian homes. ComfoAir Q pricing, installation, CO2 reduction, and comparison vs air purifiers for Bangalore, Mumbai villas.",
  path: "/journal/zehnder-fresh-air-system-india",
  keywords: [
    "Zehnder India",
    "Zehnder fresh air system India",
    "ERV system India",
    "HRV system India",
    "fresh air ventilation home India",
    "Zehnder ComfoAir India",
    "mechanical ventilation India",
    "indoor air quality Bangalore Mumbai",
    "CO2 reduction home India",
  ],
});

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Zehnder Fresh Air Ventilation for Indian Homes — Complete 2026 Guide",
  description:
    "A comprehensive engineering guide to Zehnder Energy Recovery Ventilation (ERV) systems for luxury Indian residences. Covers ComfoAir Q models, pricing in ₹ Lakhs, installation ductwork, CO2 control, and KNX smart home integration.",
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
  mainEntityOfPage: "https://varelli.in/journal/zehnder-fresh-air-system-india",
};

const faqs = [
  {
    question: "What is the price of a Zehnder ERV system in India?",
    answer:
      "A complete turnkey Zehnder fresh air ventilation system in India typically costs between ₹2.5 Lakhs and ₹3.2 Lakhs for a ComfoAir Q350 unit (suitable for a 2BHK–3BHK luxury apartment), ₹3.8 Lakhs to ₹4.5 Lakhs for a ComfoAir Q600 unit (for a 4,000–6,000 sq.ft. villa), and ₹4.5 Lakhs to ₹5.5 Lakhs when integrated with KNX automation, ComfoSense C controllers, and demand-controlled CO2/VOC sensors. This includes the Swiss ERV unit, anti-microbial ComfoTube distribution ducting, grilles, and commissioning.",
  },
  {
    question: "Is Zehnder available in Bangalore and Mumbai?",
    answer:
      "Yes. Zehnder (Switzerland) is available and fully supported across Bangalore, Mumbai, Delhi NCR, Hyderabad, and Pune through authorized architectural integration partners like VARELLI. VARELLI handles factory direct imports, MEP engineering design, hygienic ducting installation, filter replacement logistics, and KNX bus integration.",
  },
  {
    question: "What is the difference between ERV and HRV?",
    answer:
      "An HRV (Heat Recovery Ventilator) recovers only sensible thermal energy (temperature) between exhaust and incoming air. An ERV (Energy Recovery Ventilator) features a patented enthalpy exchanger that recovers both thermal heat and latent moisture (humidity). In India's varied climates — from humid monsoons in Mumbai to dry winters in North India and moderate Bangalore weather — an ERV is essential because it prevents indoor air from becoming overly dry while rejecting excess humidity during humid months.",
  },
  {
    question: "Does Zehnder work with KNX home automation?",
    answer:
      "Yes. Zehnder ComfoAir Q systems integrate seamlessly with KNX through the Zehnder KNX gateway or ComfoConnect KNX module. This allows your home automation system to monitor indoor CO2, VOC, and humidity levels in real time and automatically modulate ventilation airflow rates (Demand-Controlled Ventilation) without any manual intervention.",
  },
  {
    question: "How is Zehnder different from an air purifier?",
    answer:
      "A standalone air purifier only recirculates and filters the existing, trapped air inside a closed room. It removes particulate matter (PM2.5) but CANNOT reduce Carbon Dioxide (CO2), indoor humidity, or radon. Zehnder is a whole-home mechanical ventilation system that continuously extracts stale, CO2-heavy indoor air and replaces it with 100% fresh, oxygen-rich outdoor air that is pre-filtered through F7/F9/ePM1 filters and tempered to your indoor room temperature.",
  },
  {
    question: "What CO2 level is safe indoors?",
    answer:
      "Outdoor fresh air has a natural CO2 baseline of approximately 415 to 425 ppm. Indoors, levels below 800 ppm are optimal for cognitive clarity, deep restorative sleep, and concentration. At 1,000 to 1,500 ppm, occupants experience reduced cognitive function, lethargy, and mild headaches. In sealed bedrooms without mechanical ventilation, CO2 frequently exceeds 2,500 ppm by morning. Zehnder systems keep indoor CO2 consistently below 700–800 ppm 24 hours a day.",
  },
  {
    question: "Can Zehnder be installed in a completed apartment?",
    answer:
      "While Zehnder ducted systems (ComfoTube) are ideally planned during false ceiling construction in new builds or full renovations, decentralized Zehnder units (such as the Zehnder ComfoAir 70 or ComfoSpot 50) can be retrofitted through an exterior wall core cut in completed luxury apartments without requiring extensive ceiling ductwork.",
  },
  {
    question: "How often do Zehnder filters need replacement in Indian cities?",
    answer:
      "Given the elevated outdoor particulate levels (PM2.5 and PM10) in Indian metropolitan cities, Zehnder intake filters (G4 pre-filter and F7/ePM1 fine dust filter) are typically replaced every 6 to 9 months. The ComfoAir Q unit features integrated pressure sensors that automatically notify you on your KNX touchscreen or smartphone when filter replacement is due.",
  },
];

export default function ZehnderFreshAirSystemIndiaPage() {
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
              name: "Zehnder Fresh Air Ventilation India",
              href: "/journal/zehnder-fresh-air-system-india",
            },
          ]}
        />

        <header className="mt-8 mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[var(--gold)] border border-[var(--gold)]/30 px-3 py-1">
              Swiss Environmental Technology
            </span>
            <span className="text-xs text-[var(--text-muted)]">August 2026 · 11 min read</span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl text-[var(--text-primary)] leading-tight mb-6">
            Zehnder Fresh Air Ventilation for Indian Homes — Complete 2026 Guide
          </h1>
          <p className="text-xl text-[var(--text-secondary)] leading-relaxed max-w-3xl">
            Why sealed luxury residences in Bangalore, Mumbai, and Delhi NCR suffer from silent CO2 toxicity — and how
            Switzerland&apos;s reference Energy Recovery Ventilator (ERV) maintains continuous mountain-fresh air indoors.
          </p>
          <div className="mt-6 pt-6 border-t border-[var(--border)] flex flex-wrap items-center justify-between gap-4 text-sm text-[var(--text-muted)]">
            <span>By VARELLI Environmental Systems Team · Swiss Certified</span>
            <span className="font-mono text-xs">Bangalore · Mumbai · Delhi NCR · Hyderabad</span>
          </div>
        </header>

        {/* Executive Summary Box */}
        <div className="bg-[var(--surface-2)] border border-[var(--gold)]/30 rounded-lg p-6 md:p-8 mb-12 shadow-lg">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-2.5 h-2.5 rounded-full bg-[var(--gold)]" />
            <p className="text-xs font-mono uppercase tracking-widest text-[var(--gold)]">
              Executive Summary · The Swiss Fresh Air Standard
            </p>
          </div>
          <p className="text-[var(--text-primary)] leading-relaxed font-body text-base md:text-lg mb-4">
            The <strong>Zehnder ComfoAir Q</strong> is Switzerland&apos;s benchmark Energy Recovery Ventilator (ERV). It
            continuously replaces stale, CO2-laden indoor air with 100% filtered, oxygen-rich outdoor air while recovering up
            to <strong>95% of thermal energy</strong> and balancing humidity.
          </p>
          <p className="text-sm text-[var(--text-secondary)] font-body leading-relaxed">
            In modern Indian luxury villas with sealed double-glazed windows and split air-conditioning, a Zehnder ERV
            permanently solves bedroom CO2 accumulation, sleep fatigue, and indoor pollen/PM2.5 pollution without increasing
            your electricity bill or letting outside dust in.
          </p>
        </div>

        {/* Section 1 */}
        <div className="prose prose-invert prose-lg max-w-none mb-12">
          <h2>Why Indian Homes Need Mechanical Fresh Air Ventilation</h2>
          <p>
            In contemporary luxury architecture across Bangalore, Mumbai, Delhi NCR, and Hyderabad, homes are built to be
            airtight. Double-glazed thermal break windows (Schüco, Reynaers), acoustic seal doors, and continuous concrete
            structures prevent outdoor heat, noise, and urban dust from entering.
          </p>
          <p>
            However, this hermetic sealing creates an unintended environmental hazard: <strong>Sick Building Syndrome</strong>.
          </p>
          <p>
            Standard split air conditioners and VRV/VRF systems <em>do not introduce fresh air</em>. They simply cool and
            recirculate the exact same air inside the room. When family members breathe throughout the night in a sealed
            bedroom:
          </p>
          <ul>
            <li>
              <strong>Oxygen Depletion &amp; CO2 Buildup:</strong> Two adults in a sealed 250 sq.ft. bedroom exhale enough
              carbon dioxide to drive indoor CO2 from 450 ppm to over <strong>2,500 ppm in less than 4 hours</strong>.
            </li>
            <li>
              <strong>Trapped Off-Gassing &amp; VOCs:</strong> Formaldehydes and volatile organic compounds from Italian
              veneers, polishes, adhesives, and synthetic carpets remain permanently suspended in the living zone.
            </li>
            <li>
              <strong>Monsoon Humidity &amp; Mold:</strong> In coastal cities like Mumbai, trapped moisture inside closed
              wardrobes and air-conditioned rooms triggers microbial mold and dust mite proliferation.
            </li>
            <li>
              <strong>The Air Quality Paradox:</strong> Opening windows to ventilate is no longer viable in Indian cities
              due to traffic exhaust, PM2.5 smog, construction dust, and mosquitoes.
            </li>
          </ul>
        </div>

        {/* Section 2 */}
        <div className="prose prose-invert prose-lg max-w-none mb-12">
          <h2>What Is an ERV and How Does Zehnder Work?</h2>
          <p>
            An <strong>Energy Recovery Ventilator (ERV)</strong> is a centralized mechanical ventilation appliance that
            operates two simultaneous, counter-flowing air streams:
          </p>
          <ol>
            <li>
              <strong>Exhaust Stream:</strong> Warm, stale, CO2-rich air is continuously extracted from &ldquo;wet&rdquo; and
              high-pollutant zones (bathrooms, kitchens, walk-in closets, gymnasiums, and living rooms).
            </li>
            <li>
              <strong>Supply Stream:</strong> Fresh outdoor air is drawn in, passed through a medical-grade multi-stage filter
              cascade (G4 pre-filter + F7/F9/ePM1 fine particle filters), and delivered silently into bedrooms and living spaces.
            </li>
          </ol>
          <p>
            At the heart of the Zehnder ComfoAir Q lies a patented diamond-shaped <strong>Paul Enthalpy Exchanger</strong>.
            As the two air streams pass each other through micro-porous polymer membranes, thermal heat and water vapor are
            transferred between the airflows <em>without the air streams ever physically mixing</em>.
          </p>
          <p>
            In summer, the outgoing cool air pre-cools the hot incoming fresh air, recovering up to <strong>95% of your AC
            energy</strong> (certified to European EN 308 standard). In monsoon, excess outdoor humidity is rejected before it
            enters your home.
          </p>
        </div>

        {/* Section 3: Models and Pricing Table */}
        <div className="mb-12">
          <div className="prose prose-invert prose-lg max-w-none mb-6">
            <h2>Zehnder ComfoAir Q Series — Models and Pricing for India</h2>
            <p>
              VARELLI specifies and installs genuine Swiss-manufactured Zehnder ComfoAir Q units engineered for Indian
              voltage stability and high-particulate outdoor environments.
            </p>
          </div>

          <div className="overflow-x-auto rounded-lg border border-[var(--border)] bg-[var(--surface-1)]">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[var(--surface-2)]">
                  <th className="text-left p-4 border-b border-[var(--border)] text-[var(--gold)] font-mono text-xs uppercase">
                    Model
                  </th>
                  <th className="text-center p-4 border-b border-[var(--border)] text-[var(--text-primary)] font-semibold">
                    Airflow Capacity
                  </th>
                  <th className="text-center p-4 border-b border-[var(--border)] text-[var(--text-primary)] font-semibold">
                    Recommended Residence
                  </th>
                  <th className="text-center p-4 border-b border-[var(--border)] text-[var(--text-primary)] font-semibold">
                    Thermal Efficiency
                  </th>
                  <th className="text-center p-4 border-b border-[var(--border)] text-[var(--gold)] font-semibold">
                    Estimated Installed Cost
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--border)]">
                <tr>
                  <td className="p-4 font-semibold text-[var(--text-primary)]">
                    Zehnder ComfoAir Q350
                    <span className="block text-xs text-[var(--text-muted)] font-normal">Compact Luxury ERV</span>
                  </td>
                  <td className="p-4 text-center text-xs text-[var(--text-secondary)]">
                    Up to 350 m³/h
                  </td>
                  <td className="p-4 text-center text-xs text-[var(--text-secondary)]">
                    2BHK–3BHK Apartments &amp; Compact Villas (up to 3,500 sq.ft.)
                  </td>
                  <td className="p-4 text-center text-xs text-emerald-400 font-medium">
                    95% Heat / 82% Humidity
                  </td>
                  <td className="p-4 text-center font-semibold text-[var(--text-primary)]">
                    ₹2.5L – ₹3.2L
                  </td>
                </tr>
                <tr className="bg-[var(--gold)]/5">
                  <td className="p-4 font-semibold text-[var(--gold)]">
                    Zehnder ComfoAir Q600
                    <span className="block text-xs text-[var(--text-muted)] font-normal">Architectural Villa Standard</span>
                  </td>
                  <td className="p-4 text-center text-xs text-[var(--text-primary)]">
                    Up to 600 m³/h
                  </td>
                  <td className="p-4 text-center text-xs text-[var(--text-primary)]">
                    4BHK–5BHK Luxury Villas (4,000–7,500 sq.ft.)
                  </td>
                  <td className="p-4 text-center text-xs text-emerald-400 font-medium">
                    94% Heat / 80% Humidity
                  </td>
                  <td className="p-4 text-center font-bold text-[var(--gold)]">
                    ₹3.8L – ₹4.5L
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-[var(--text-primary)]">
                    Zehnder ComfoAir Q600 + KNX Integration
                    <span className="block text-xs text-[var(--text-muted)] font-normal">Intelligent Demand Ventilation</span>
                  </td>
                  <td className="p-4 text-center text-xs text-[var(--text-secondary)]">
                    Up to 600 m³/h (Demand Controlled)
                  </td>
                  <td className="p-4 text-center text-xs text-[var(--text-secondary)]">
                    Grand Estates &amp; Smart Villas with Basalte/KNX Ecosystems
                  </td>
                  <td className="p-4 text-center text-xs text-emerald-400 font-medium">
                    94% Heat / 80% Humidity
                  </td>
                  <td className="p-4 text-center font-semibold text-[var(--text-primary)]">
                    ₹4.5L – ₹5.5L
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[var(--text-muted)] mt-2 font-mono">
            * Turnkey pricing includes Zehnder ERV unit, anti-static ComfoTube distribution ducting, acoustic silencers,
            flow grilles, core drilling coordination, and commissioning. Excludes GST.
          </p>
        </div>

        {/* Section 4 */}
        <div className="prose prose-invert prose-lg max-w-none mb-12">
          <h2>CO2 and Your Health — Why 412 ppm Matters in a Sealed Bedroom</h2>
          <p>
            Fresh mountain air and pristine outdoor environments maintain an atmospheric carbon dioxide baseline of roughly
            <strong>412 to 425 ppm</strong>. While humans have evolved to thrive in oxygen-rich air, modern urban residences
            frequently subject occupants to dangerously elevated CO2 levels:
          </p>
          <div className="space-y-4 not-prose my-6">
            <div className="bg-[var(--surface-1)] border-l-2 border-emerald-500 p-4 rounded-r-lg">
              <h3 className="font-display text-sm font-semibold text-emerald-400 mb-1">400 – 600 ppm · Pristine Outdoor Air</h3>
              <p className="text-xs text-[var(--text-secondary)] font-body">Maximum cognitive acuity, optimal oxygenation, and restful deep-sleep cycles.</p>
            </div>
            <div className="bg-[var(--surface-1)] border-l-2 border-yellow-500 p-4 rounded-r-lg">
              <h3 className="font-display text-sm font-semibold text-yellow-400 mb-1">800 – 1,000 ppm · Acceptable Indoor Baseline</h3>
              <p className="text-xs text-[var(--text-secondary)] font-body">Complies with ASHRAE 62.1 and WHO guidelines. No noticeable fatigue.</p>
            </div>
            <div className="bg-[var(--surface-1)] border-l-2 border-amber-500 p-4 rounded-r-lg">
              <h3 className="font-display text-sm font-semibold text-amber-400 mb-1">1,200 – 1,800 ppm · Measurable Cognitive Decline</h3>
              <p className="text-xs text-[var(--text-secondary)] font-body">Harvard School of Public Health studies confirm a 15% to 50% drop in strategic thinking and decision-making ability.</p>
            </div>
            <div className="bg-[var(--surface-1)] border-l-2 border-red-500 p-4 rounded-r-lg">
              <h3 className="font-display text-sm font-semibold text-red-400 mb-1">2,000 – 3,500+ ppm · Severe Impairment (Common in Sealed Bedrooms)</h3>
              <p className="text-xs text-[var(--text-secondary)] font-body">Morning headaches, interrupted REM sleep, dry throat, grogginess, and long-term sleep apnea exacerbation.</p>
            </div>
          </div>
          <p>
            A Zehnder system continuously flushes out expired carbon dioxide and replaces it with freshly oxygenated outdoor
            air, maintaining bedroom CO2 levels <strong>strictly under 700 ppm all night long</strong>.
          </p>
        </div>

        {/* Section 5 */}
        <div className="prose prose-invert prose-lg max-w-none mb-12">
          <h2>Zehnder vs Air Purifier — Why Both Solve Different Problems</h2>
          <p>
            Homeowners often ask: <em>&ldquo;I already have a high-end Dyson or Philips HEPA air purifier in every bedroom.
            Why do I need a Zehnder fresh air system?&rdquo;</em>
          </p>
          <p>
            The fundamental distinction lies between <strong>filtering</strong> recirculated air and <strong>ventilating</strong>:
          </p>
          <ul>
            <li>
              <strong>Air Purifiers (Recirculation Only):</strong> An air purifier is a fan blowing room air through a HEPA
              filter. It captures dust and PM2.5. However, it cannot manufacture oxygen or eliminate carbon dioxide. If you
              seal a room with an air purifier running, the CO2 continues to rise uninterrupted, leading to stuffiness and
              morning brain fog.
            </li>
            <li>
              <strong>Zehnder ERV (Continuous Oxygenation &amp; Flushing):</strong> Zehnder continuously exhausts stale air
              while delivering filtered outdoor air into the room. It solves the CO2 problem, dilutes chemical VOCs, regulates
              humidity, and prevents positive/negative pressure imbalances.
            </li>
          </ul>
          <p>
            Read our complete comparative study on{" "}
            <Link href="/journal/fresh-air-ventilation-vs-air-purifier" className="text-[var(--gold)] hover:underline font-medium">
              Fresh Air Ventilation vs Air Purifiers →
            </Link>
          </p>
        </div>

        {/* Section 6 */}
        <div className="prose prose-invert prose-lg max-w-none mb-12">
          <h2>Installation Requirements for a Zehnder ERV in India</h2>
          <p>
            To achieve near-silent operation (under 20 dB(A) in bedrooms — quieter than a whisper), Zehnder utilizes a
            proprietary radial distribution system known as <strong>ComfoTube</strong>:
          </p>
          <ol>
            <li>
              <strong>Central Plant Location:</strong> The ComfoAir Q unit is typically mounted in a dedicated utility room,
              covered balcony, basement plant room, or false ceiling service zone.
            </li>
            <li>
              <strong>Radial Manifold Distribution:</strong> Rather than large, noisy rectangular sheet-metal trunk ducts that
              cross-talk between rooms, Zehnder runs flexible, food-grade, anti-static, anti-microbial ComfoTubes directly
              from a central silencer manifold to each individual room.
            </li>
            <li>
              <strong>Concealed Architectural Grilles:</strong> Fresh air supply and extract diffusers (such as Zehnder
              Bilbao or customized linear slots) integrate invisibly into plasterboard ceilings or shadow-gap architectural
              details.
            </li>
            <li>
              <strong>Construction Timing:</strong> The optimal time to install ComfoTube ductwork is during MEP first-fix,
              prior to false ceiling framing.
            </li>
          </ol>
        </div>

        {/* Section 7 */}
        <div className="prose prose-invert prose-lg max-w-none mb-12">
          <h2>Zehnder ComfoAir Q + KNX Integration — Full Smart Home Control</h2>
          <p>
            When integrated into VARELLI&apos;s KNX smart home ecosystem, your ventilation system transforms into an
            intelligent, autonomous indoor climate guardian:
          </p>
          <ul>
            <li>
              <strong>Demand-Controlled Ventilation (DCV):</strong> Discrete Basalte or Ekinex wall sensors continuously
              sample indoor CO2, VOCs, and relative humidity. If living room occupancy spikes during a dinner party, the
              Zehnder unit automatically ramps up fresh air delivery from 150 m³/h to 400 m³/h.
            </li>
            <li>
              <strong>Night-Time Hyper-Silent Mode:</strong> When your KNX keypad activates the &ldquo;Goodnight&rdquo; scene,
              the ventilation adjusts to silent low-velocity mode, delivering whisper-quiet fresh air without draft.
            </li>
            <li>
              <strong>AQI Geofenced Protection:</strong> If severe outdoor smog spikes in Delhi NCR or Mumbai, the system
              modulates intake speed while maximizing internal filtration efficiency.
            </li>
          </ul>
        </div>

        {/* Related Links */}
        <div className="pt-8 border-t border-[var(--border)] mb-12">
          <p className="text-xs font-mono uppercase tracking-widest text-[var(--gold)] mb-4">Explore Environmental Living</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/fresh-air-ventilation"
              className="p-4 bg-[var(--surface-1)] border border-[var(--border)] hover:border-[var(--gold)] transition-colors rounded-lg group"
            >
              <span className="text-xs text-[var(--gold)] font-mono">Service Hub</span>
              <h4 className="font-display text-sm font-semibold text-[var(--text-primary)] group-hover:text-[var(--gold)] transition-colors mt-1">
                VARELLI Fresh Air Ventilation →
              </h4>
              <p className="text-xs text-[var(--text-secondary)] mt-1">Explore our complete Swiss Zehnder residential IAQ engineering packages.</p>
            </Link>
            <Link
              href="/brands"
              className="p-4 bg-[var(--surface-1)] border border-[var(--border)] hover:border-[var(--gold)] transition-colors rounded-lg group"
            >
              <span className="text-xs text-[var(--gold)] font-mono">Brand Ecosystem</span>
              <h4 className="font-display text-sm font-semibold text-[var(--text-primary)] group-hover:text-[var(--gold)] transition-colors mt-1">
                European Brand Partners →
              </h4>
              <p className="text-xs text-[var(--text-secondary)] mt-1">Discover Basalte, Ekinex, Zehnder, Drainvac, and Sonus Faber.</p>
            </Link>
          </div>
        </div>

        {/* FAQs */}
        <FAQSection faqs={faqs} heading="Frequently Asked Questions on Zehnder ERV India" />
      </div>

      {/* Service CTA */}
      <ServiceCTA serviceName="Fresh Air Ventilation" />
    </article>
  );
}
