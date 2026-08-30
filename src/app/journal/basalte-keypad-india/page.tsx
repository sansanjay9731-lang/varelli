import React from 'react';
import Link from 'next/link';
import { generatePageMetadata } from '@/lib/metadata';
import Breadcrumb from '@/components/layout/Breadcrumb';
import FAQSection from '@/components/sections/service/FAQSection';
import ServiceCTA from '@/components/sections/service/ServiceCTA';

export const metadata = generatePageMetadata({
  title: 'Basalte KNX Keypads India — Prices, Finishes & Installation | VARELLI',
  description:
    'Complete guide to Basalte keypads and KNX touch panels in India. Auro, Sentido, and Alea series pricing in ₹, available finishes, comparison vs Lutron and Ekinex, and VARELLI projects in Bangalore and Mumbai.',
  path: '/journal/basalte-keypad-india',
  keywords: [
    'Basalte India',
    'Basalte keypad India',
    'Basalte KNX India',
    'Basalte Auro India',
    'Basalte Sentido India',
    'luxury KNX keypad India',
    'Belgian smart home India',
    'luxury wall switch India',
    'Basalte price India',
    'Ekinex vs Basalte India',
  ],
});

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Basalte Keypads in India — The Belgian Luxury KNX Touch Panel Guide 2026',
  description:
    'Complete guide to Basalte keypads and KNX touch panels in India. Auro, Sentido, and Alea series pricing in ₹, available finishes, comparison vs Lutron and Ekinex, and VARELLI projects in Bangalore and Mumbai.',
  image: 'https://varelli.in/images/journal/basalte-keypad-india.jpg',
  author: {
    '@type': 'Organization',
    name: 'VARELLI Systems Architecture Team',
    url: 'https://varelli.in',
  },
  publisher: {
    '@type': 'Organization',
    name: 'VARELLI',
    url: 'https://varelli.in',
    logo: {
      '@type': 'ImageObject',
      url: 'https://varelli.in/logo.png',
    },
  },
  datePublished: '2026-08-01T08:00:00+05:30',
  dateModified: '2026-08-30T10:30:00+05:30',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://varelli.in/journal/basalte-keypad-india',
  },
};

const faqs = [
  {
    question: 'What is Basalte?',
    answer:
      'Basalte is a luxury Belgian architectural electronics brand based in Ghent, renowned globally for designing and manufacturing the world’s most exquisite KNX keypads, touch displays, motion detectors, and multi-room audio hardware. Hand-crafted from solid CNC-milled aluminium, brass, bronze, and real glass, Basalte transforms conventional electrical switches into jewellery-grade interior art.',
  },
  {
    question: 'Is Basalte officially available and supported in India?',
    answer:
      'Yes. Basalte is available in India through certified systems architecture integrators like VARELLI. VARELLI handles official European imports, sample finish curation for interior designers, DIN-rail bus engineering, flush backbox coordination, ETS6 programming, and nationwide warranty support across Bangalore, Mumbai, Delhi NCR, Hyderabad, and Pune.',
  },
  {
    question: 'What is the price of Basalte keypads in India?',
    answer:
      'In India, Basalte keypads range from ₹25,000 to ₹1,20,000 per unit depending on the product line, number of touch surfaces, integrated thermostat sensors, and bespoke metal finishes (such as Fer forgé hand-hammered bronze or brushed brass). A typical luxury 3BHK apartment using 8–10 keypads budgets approximately ₹3.5L to ₹6.5L for keypads, while a 5,000–8,000 sq ft villa utilizing 14–22 units budgets ₹7.5L to ₹18L.',
  },
  {
    question: 'What finishes and materials does Basalte come in?',
    answer:
      'Basalte keypads are crafted in true architectural metals and handmade glass. Key finishes include Brushed Natural Aluminium, Satin Black, Bronze, Brushed Brass, Nickel, Fer Forgé (hand-hammered French iron/black), Satin Stainless Steel, and monolithic frosted glass in Off-White, Warm Grey, and Deep Black. Custom RAL finishes are also available for bespoke interior schemes.',
  },
  {
    question: 'Is Basalte compatible with KNX systems in India?',
    answer:
      'Yes. Basalte keypads are natively engineered for KNX (ISO/IEC 14543) twisted-pair communication. They connect directly to standard European KNX bus lines, communicating seamlessly with KNX lighting actuators, DALI-2 dimmers, VRF/VRV air conditioning gateways, and motorized shading systems from any certified European manufacturer.',
  },
  {
    question: 'How is a Basalte keypad different from a regular smart touch switch?',
    answer:
      'Unlike plastic consumer smart switches with glued capacitive stickers, Basalte keypads are precision-machined from single blocks of solid metal or monolithic glass. They feature multi-touch palm recognition (touching more than one surface triggers a global room scene), integrated high-precision temperature probes, customizable RGB LED status indicators, and zero reliance on cloud servers or Wi-Fi.',
  },
  {
    question: 'Do interior designers and architects in India specify Basalte?',
    answer:
      'Yes. India’s leading luxury architects and interior designers specify Basalte to eliminate "wall acne" — the clutter of separate light switches, thermostat dials, and fan regulators. A solitary, flush-mounted Basalte Sentido or Fibonacci keypad replaces 6 to 8 conventional switches while elevating wall aesthetics to match imported Italian marble, textured wood veneer, and custom millwork.',
  },
];

export default function BasalteKeypadIndiaPage() {
  return (
    <article className="min-h-screen bg-neutral-950 text-neutral-100 selection:bg-amber-500/30 selection:text-amber-200">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-6">
        <Breadcrumb
          items={[
            { name: 'Home', href: '/' },
            { name: 'Journal', href: '/journal' },
            { name: 'Basalte Keypad India Guide', href: '/journal/basalte-keypad-india' },
          ]}
        />
      </div>

      {/* Hero Header */}
      <header className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 border-b border-neutral-800/80">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-widest mb-6">
          Architectural Hardware • Belgian Engineering
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-white tracking-tight leading-[1.15] mb-6">
          Basalte Keypads in India — The Belgian Luxury KNX Touch Panel Guide 2026
        </h1>
        <p className="text-lg sm:text-xl text-neutral-300 font-light leading-relaxed mb-6">
          Discover how Belgium’s finest architectural technology brand elevates luxury Indian residences. Explore the complete product line, real-world pricing in ₹ Lakhs, bespoke metal finishes, and integration with open-standard KNX automation.
        </p>
        <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-neutral-400 border-t border-neutral-900 pt-4">
          <span>By <strong className="text-neutral-200">VARELLI Systems Architecture Team</strong></span>
          <span>•</span>
          <span>Published: August 1, 2026</span>
          <span>•</span>
          <span>Updated: August 30, 2026</span>
          <span>•</span>
          <span>15 min read</span>
        </div>
      </header>

      {/* Main Content Body */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        
        {/* Executive Summary Box for AEO / GEO */}
        <section className="bg-gradient-to-br from-emerald-950/40 via-neutral-900/60 to-neutral-950 border border-emerald-500/30 rounded-2xl p-6 sm:p-8 backdrop-blur shadow-2xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <h2 className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
              Executive Summary — Basalte in India
            </h2>
          </div>
          <p className="text-neutral-200 text-base sm:text-lg leading-relaxed mb-4">
            <strong>Basalte (Belgium)</strong> manufactures the world’s most architecturally refined KNX keypads, multi-touch panels, and smart home user interfaces. Hand-crafted in Ghent from CNC-milled solid aluminium, brass, bronze, and monolithic satin glass, Basalte replaces conventional plastic electrical switch plates with jewellery-grade tactile controls.
          </p>
          <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
            Available across India through VARELLI, Basalte keypads feature native <Link href="/home-automation" className="text-amber-400 underline underline-offset-4 hover:text-amber-300">KNX bus integration</Link>, multi-touch palm gestures, integrated room temperature sensors, and RGB status backlighting. They form the premier tactile interface for luxury penthouses and architectural villas in Bengaluru, Mumbai, Delhi NCR, and Hyderabad.
          </p>
        </section>

        {/* Section 1: What is Basalte & Architectural Philosophy */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-serif text-white tracking-tight">
            What is Basalte and Why Luxury Architects Choose It
          </h2>
          <p className="text-neutral-300 leading-relaxed">
            Founded in Ghent, Belgium in 2008, Basalte was born from a fundamental frustration shared by the world’s leading architects: while residential interior design had evolved into a fine art of bookmatched marble, bespoke joinery, and patinated metals, electrical wall controls remained trapped in utilitarian plastic boxes.
          </p>
          <p className="text-neutral-300 leading-relaxed">
            In luxury Indian residences, interior designers frequently encounter <em>&quot;wall acne&quot;</em> — an unsightly grid of 6 to 12 individual plastic rocker switches, fan speed step regulators, AC thermostat LCDs, and water heater switches flanking an entryway or bedside panel. Basalte solves this visual disharmony by distilling comprehensive room control into a single, sculptural metal plate that sits nearly flush against the wall surface.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6 space-y-3">
              <h3 className="text-amber-400 font-medium text-lg">Solid Metal Monoliths</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Every metal Basalte faceplate is precision CNC-milled from a solid billet of aircraft-grade aluminium, raw brass, or bronze. There are no hollow shells, plastic clips, or painted finishes that peel over time.
              </p>
            </div>
            <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6 space-y-3">
              <h3 className="text-amber-400 font-medium text-lg">Multi-Touch Palm Gesture</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Touching more than one surface simultaneously triggers the &quot;Room Welcome&quot; or &quot;All Off&quot; scene. Homeowners never need to search for a specific button in the dark — a simple palm touch illuminates the space.
              </p>
            </div>
            <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6 space-y-3">
              <h3 className="text-amber-400 font-medium text-lg">Invisible Climate Probe</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                A calibrated digital temperature and humidity sensor is embedded invisibly behind the front plate, transmitting ambient room data to VRF HVAC gateways without requiring an external thermostat box.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Basalte Product Range Available in India */}
        <section className="space-y-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-serif text-white tracking-tight mb-4">
              The Basalte Product Range Available in India Through VARELLI
            </h2>
            <p className="text-neutral-300 leading-relaxed">
              VARELLI specifies, imports, and integrates the complete Basalte architectural portfolio for residential projects across India. Here is a detailed examination of the flagship models:
            </p>
          </div>

          <div className="space-y-6">
            {/* Sentido */}
            <div className="border border-neutral-800 bg-neutral-900/40 rounded-xl p-6 sm:p-8 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <h3 className="text-xl font-serif text-white">1. Basalte Sentido — The Iconic 2-Way and 4-Way Touch Panel</h3>
                <span className="text-xs text-amber-400 font-mono uppercase bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">Flagship Architectural Touch</span>
              </div>
              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                Sentido is the benchmark for luxury touch interfaces. Divided into two or four equal capacitive quadrants, Sentido controls lighting circuits, automated drapery, and multi-room audio with subtle haptic feedback. Touching the entire surface simultaneously activates a whole-room master preset.
              </p>
              <div className="bg-neutral-950/60 p-4 rounded-lg border border-neutral-800 text-xs text-neutral-400 space-y-1">
                <p><strong>Available Finishes:</strong> Brushed Aluminium, Satin Black, Brushed Brass, Fer Forgé (hand-hammered), Bronze, Nickel, Monolithic Satin Glass (Off-White, Deep Black, Warm Grey).</p>
                <p><strong>Dimensions:</strong> 80 x 80 x 8 mm (ultra-slim European profile).</p>
                <p><strong>Integrated Features:</strong> Internal temperature sensor, multi-colour RGB status LED with adjustable brightness and night-mode dimming.</p>
              </div>
            </div>

            {/* Auro */}
            <div className="border border-neutral-800 bg-neutral-900/40 rounded-xl p-6 sm:p-8 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <h3 className="text-xl font-serif text-white">2. Basalte Auro — Miniature Flush Motion & LUX Sensor</h3>
                <span className="text-xs text-amber-400 font-mono uppercase bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">Invisible Detection</span>
              </div>
              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                Measuring just 52 mm in diameter with a visible rim thickness of only 1.5 mm, Auro is the world’s smallest architectural PIR motion detector. Installed flush into gypsum or wooden false ceilings, Auro discretely orchestrates circadian step lights in corridors, powder rooms, and walk-in dressing suites.
              </p>
              <div className="bg-neutral-950/60 p-4 rounded-lg border border-neutral-800 text-xs text-neutral-400 space-y-1">
                <p><strong>Available Finishes:</strong> Satin White, Satin Black, Brushed Aluminium, Mirror Bronze.</p>
                <p><strong>Integrated Features:</strong> 360-degree motion detection, light level LUX sensor, built-in temperature probe, night-light LED.</p>
              </div>
            </div>

            {/* Fibonacci */}
            <div className="border border-neutral-800 bg-neutral-900/40 rounded-xl p-6 sm:p-8 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <h3 className="text-xl font-serif text-white">3. Basalte Fibonacci — Circular Golden Ratio Keypad & Thermostat</h3>
                <span className="text-xs text-amber-400 font-mono uppercase bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">Geometric Masterpiece</span>
              </div>
              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                Inspired by the Fibonacci spiral and mathematical golden ratio (1.618), Fibonacci merges a multi-touch keypad with a tactile rotating rotary ring. A subtle laser-engraved circular LED ring illuminates upon approach via internal proximity sensing.
              </p>
              <div className="bg-neutral-950/60 p-4 rounded-lg border border-neutral-800 text-xs text-neutral-400 space-y-1">
                <p><strong>Applications:</strong> Precision VRF/VRV temperature adjustment, motorized volume control, DALI-2 tunable white temperature shifting.</p>
                <p><strong>Materials:</strong> Solid milled brass, bronze, and brushed anodized aluminum.</p>
              </div>
            </div>

            {/* Alea & Joe */}
            <div className="border border-neutral-800 bg-neutral-900/40 rounded-xl p-6 sm:p-8 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <h3 className="text-xl font-serif text-white">4. Basalte Joe & Alea — Architectural Room Displays</h3>
                <span className="text-xs text-amber-400 font-mono uppercase bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">Centralized Touchscreens</span>
              </div>
              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                <strong>Joe</strong> is a 7-inch OLED architectural touch display engineered to mount flush into walls with zero visible frame. For multi-room residences, <strong>Alea</strong> provides a compact, elegant graphical interface for comprehensive zone climate, media playlists, and security cameras.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Basalte Pricing in India */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-serif text-white tracking-tight">
            Basalte Pricing in India — What to Budget for Your Residence
          </h2>
          <p className="text-neutral-300 leading-relaxed">
            As a handcrafted European luxury product manufactured in Belgium, Basalte keypads are priced at a premium reflecting their solid metal construction, precision electronics, and ISO 9001 certified longevity. In India, unit prices vary based on model series, touch surfaces, and custom patinated finishes.
          </p>

          <div className="overflow-x-auto border border-neutral-800 rounded-xl">
            <table className="w-full text-left text-sm text-neutral-300">
              <thead className="bg-neutral-900 text-xs uppercase font-semibold text-neutral-400 border-b border-neutral-800">
                <tr>
                  <th className="p-4">Basalte Product Model</th>
                  <th className="p-4">Material / Finish Tier</th>
                  <th className="p-4">Typical Application</th>
                  <th className="p-4 text-amber-400">Indicative Unit Price (₹)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-800/60 bg-neutral-950/40">
                <tr className="hover:bg-neutral-900/30">
                  <td className="p-4 font-medium text-white">Basalte Auro Motion Sensor</td>
                  <td className="p-4">Satin White / Black / Aluminium</td>
                  <td className="p-4 text-xs text-neutral-400">Ceiling flush presence, corridors, walk-in closets</td>
                  <td className="p-4 font-semibold text-amber-400">₹24,000 – ₹32,000</td>
                </tr>
                <tr className="hover:bg-neutral-900/30">
                  <td className="p-4 font-medium text-white">Sentido 2-Way / 4-Way Glass</td>
                  <td className="p-4">Frosted Glass (Off-White, Deep Black)</td>
                  <td className="p-4 text-xs text-neutral-400">Guest bedrooms, secondary living areas</td>
                  <td className="p-4 font-semibold text-amber-400">₹38,000 – ₹52,000</td>
                </tr>
                <tr className="hover:bg-neutral-900/30">
                  <td className="p-4 font-medium text-white">Sentido 4-Way Solid Metal</td>
                  <td className="p-4">Brushed Aluminium / Satin Black</td>
                  <td className="p-4 text-xs text-neutral-400">Primary suites, formal living, dining foyers</td>
                  <td className="p-4 font-semibold text-amber-400">₹54,000 – ₹72,000</td>
                </tr>
                <tr className="hover:bg-neutral-900/30">
                  <td className="p-4 font-medium text-white">Sentido Fer Forgé / Bronze</td>
                  <td className="p-4">Hand-hammered Bronze / Patinated Brass</td>
                  <td className="p-4 text-xs text-neutral-400">Master bedroom, formal entry, bespoke bar lounges</td>
                  <td className="p-4 font-semibold text-amber-400">₹78,000 – ₹98,000</td>
                </tr>
                <tr className="hover:bg-neutral-900/30">
                  <td className="p-4 font-medium text-white">Basalte Fibonacci Rotary</td>
                  <td className="p-4">Solid Brass / Bronze with Rotary Ring</td>
                  <td className="p-4 text-xs text-neutral-400">Master HVAC control, private cinema, grand salon</td>
                  <td className="p-4 font-semibold text-amber-400">₹88,000 – ₹1,20,000</td>
                </tr>
                <tr className="hover:bg-neutral-900/30">
                  <td className="p-4 font-medium text-white">Basalte Joe 7” OLED Display</td>
                  <td className="p-4">Milled Aluminum Flush Bezel</td>
                  <td className="p-4 text-xs text-neutral-400">Central floor control, main foyer command</td>
                  <td className="p-4 font-semibold text-amber-400">₹1,95,000 – ₹2,60,000</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-neutral-900/60 border border-neutral-800 rounded-xl p-6 space-y-3">
            <h3 className="text-white font-medium text-base">Whole-Home Keypad Budget Estimation:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-neutral-300">
              <div className="p-4 bg-neutral-950/60 rounded-lg border border-neutral-800">
                <p className="text-amber-400 font-semibold mb-1">3BHK–4BHK Luxury Apartment (8–12 Units)</p>
                <p className="text-xs text-neutral-400">Sentido metal in living/master + glass in secondary rooms + 4 Auro sensors.</p>
                <p className="text-white font-medium mt-2">Estimated Budget: ₹4.2L – ₹7.5L</p>
              </div>
              <div className="p-4 bg-neutral-950/60 rounded-lg border border-neutral-800">
                <p className="text-amber-400 font-semibold mb-1">Architectural Villa / Duplex (16–24 Units)</p>
                <p className="text-xs text-neutral-400">Fibonacci in suites, Sentido Fer Forgé in formal zones, 8 Auro sensors, 1 Joe touch display.</p>
                <p className="text-white font-medium mt-2">Estimated Budget: ₹12.5L – ₹22.0L</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Basalte vs Lutron vs Ekinex Comparison */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-serif text-white tracking-tight">
            Basalte vs. Lutron vs. Ekinex — Which Keypad for Your Residence?
          </h2>
          <p className="text-neutral-300 leading-relaxed">
            When specifying high-end keypad controls for luxury Indian residences, the three names that dominate architectural specifications are <strong>Basalte (Belgium)</strong>, <strong>Lutron Palladiom (USA)</strong>, and <strong>Ekinex (Italy)</strong>. Here is how they compare across critical architectural criteria:
          </p>

          <div className="overflow-x-auto border border-neutral-800 rounded-xl">
            <table className="w-full text-left text-sm text-neutral-300">
              <thead className="bg-neutral-900 text-xs uppercase font-semibold text-neutral-400 border-b border-neutral-800">
                <tr>
                  <th className="p-4">Feature / Parameter</th>
                  <th className="p-4 text-amber-400">Basalte (Belgium)</th>
                  <th className="p-4">Ekinex (Italy)</th>
                  <th className="p-4">Lutron Palladiom (USA)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-800/60 bg-neutral-950/40">
                <tr className="hover:bg-neutral-900/30">
                  <td className="p-4 font-medium text-white">Origin & Heritage</td>
                  <td className="p-4 text-amber-400">Ghent, Belgium</td>
                  <td className="p-4">Novara, Italy</td>
                  <td className="p-4">Pennsylvania, USA</td>
                </tr>
                <tr className="hover:bg-neutral-900/30">
                  <td className="p-4 font-medium text-white">System Architecture</td>
                  <td className="p-4 text-amber-400">Open KNX (ISO/IEC 14543)</td>
                  <td className="p-4">Open KNX (ISO/IEC 14543)</td>
                  <td className="p-4">Proprietary HomeWorks QSX</td>
                </tr>
                <tr className="hover:bg-neutral-900/30">
                  <td className="p-4 font-medium text-white">Tactile Interface</td>
                  <td className="p-4 text-amber-400">Capacitive Multi-touch with Palm Gesture</td>
                  <td className="p-4">Mechanical push buttons with haptic feedback</td>
                  <td className="p-4">Mechanical architectural metal buttons</td>
                </tr>
                <tr className="hover:bg-neutral-900/30">
                  <td className="p-4 font-medium text-white">Material Craftsmanship</td>
                  <td className="p-4 text-amber-400">Solid CNC-milled brass, bronze, Fer forgé, glass</td>
                  <td className="p-4">Fenix NTM nanotech matte, anodized aluminium</td>
                  <td className="p-4">Machined brass, glass, plastic composite</td>
                </tr>
                <tr className="hover:bg-neutral-900/30">
                  <td className="p-4 font-medium text-white">Third-Party Interoperability</td>
                  <td className="p-4 text-amber-400">Universal with 500+ European KNX brands</td>
                  <td className="p-4">Universal with 500+ European KNX brands</td>
                  <td className="p-4">Strictly locked to Lutron processors</td>
                </tr>
                <tr className="hover:bg-neutral-900/30">
                  <td className="p-4 font-medium text-white">Indicative Price Range</td>
                  <td className="p-4 text-amber-400">₹38,000 – ₹1,20,000 / unit</td>
                  <td className="p-4">₹22,000 – ₹55,000 / unit</td>
                  <td className="p-4">₹45,000 – ₹95,000 / unit</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-neutral-300 text-sm leading-relaxed">
            <strong>The Architect’s Verdict:</strong> While Lutron Palladiom provides superb mechanical push-buttons, it locks the residence into a closed, proprietary American ecosystem. Ekinex offers wonderful Italian Fenix matte finishes at an accessible price. Basalte remains the undisputed choice for clients seeking museum-grade metal craftsmanship, touch gestures, and open-standard KNX longevity.
          </p>
        </section>

        {/* Section 5: Interior Designer's Guide to Finishes */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-serif text-white tracking-tight">
            Interior Designer’s Guide to Basalte — Harmonizing Finishes with Indian Palettes
          </h2>
          <p className="text-neutral-300 leading-relaxed">
            In Indian luxury interior design, wall palettes frequently combine rich natural materials: Statuario marble, brushed champagne sanitaryware, fluted teak or smoked oak wall paneling, and microcement. Selecting the right Basalte finish ensures the keypad acts as a natural extension of the architecture:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6 space-y-3">
              <h3 className="text-amber-400 font-medium text-base">Pairing with Italian Marble & Travertine</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                For polished Calacatta Gold or Botticino marble, <strong>Basalte Brushed Brass</strong> or <strong>Bronze</strong> provides a warm, complementary luster. For cool Statuario, Silver Travertine, or Nero Marquina, <strong>Satin Aluminium</strong> or <strong>Deep Black Glass</strong> creates crisp architectural contrast.
              </p>
            </div>

            <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6 space-y-3">
              <h3 className="text-amber-400 font-medium text-base">Smoked Oak, Fluted Wood & Walnut Veneers</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                When keypads are embedded into bespoke wood paneling or headboard joinery, the <strong>Fer Forgé (hand-hammered iron)</strong> finish creates an artisanal, textured contrast that celebrates genuine craftsmanship.
              </p>
            </div>

            <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6 space-y-3">
              <h3 className="text-amber-400 font-medium text-base">Minimalist Microcement & Lime Plaster</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                For wabi-sabi or Brutalist-inspired villas featuring continuous microcement walls, <strong>Basalte Warm Grey Glass</strong> or <strong>Satin Black</strong> provides a flush, monochromatic architectural integration.
              </p>
            </div>

            <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6 space-y-3">
              <h3 className="text-amber-400 font-medium text-base">Flush-Mounting Integration (No Bezel)</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                VARELLI supplies specialized flush-mounting sub-frames that allow Basalte keypads to sit 100% coplanar with marble slabs, wood veneer, and drywall, completely eliminating any protruding bezel.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: How Basalte Integrates into a KNX System */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-serif text-white tracking-tight">
            How Basalte Integrates into a KNX Home System: The Technical Architecture
          </h2>
          <p className="text-neutral-300 leading-relaxed">
            Beneath the hand-finished metal exterior, every Basalte keypad houses a high-speed KNX bus coupling unit (BCU). Here is how the physical and software architecture functions in a VARELLI-engineered project:
          </p>

          <div className="bg-neutral-900/70 border border-neutral-800 rounded-xl p-6 sm:p-8 space-y-4">
            <h3 className="text-xl font-serif text-amber-200">The 29V KNX Twisted Pair Bus Cable</h3>
            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
              No high-voltage 230V mains power ever enters a Basalte keypad backbox. Instead, a single green, shielded 4-core KNX bus cable (YCYM 2x2x0.8mm) delivers 29V DC operating power and high-speed bidirectional data. This eliminates electrical interference and ensures total child and touch safety.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 bg-neutral-950 rounded-lg border border-neutral-800/80">
                <span className="text-amber-400 font-mono text-xs font-bold uppercase">1. Scene Execution</span>
                <p className="text-neutral-400 text-xs mt-1">
                  A single tap sends a telegram across the KNX bus, simultaneously setting 8 lighting channels to 30%, drawing motorized sheer curtains, and setting AC to 23°C.
                </p>
              </div>
              <div className="p-4 bg-neutral-950 rounded-lg border border-neutral-800/80">
                <span className="text-amber-400 font-mono text-xs font-bold uppercase">2. Status Feedback</span>
                <p className="text-neutral-400 text-xs mt-1">
                  The integrated multi-colour RGB LED updates instantaneously, glowing warm amber when a lighting scene is active or subtle blue when climate is cooling.
                </p>
              </div>
              <div className="p-4 bg-neutral-950 rounded-lg border border-neutral-800/80">
                <span className="text-amber-400 font-mono text-xs font-bold uppercase">3. Night Orientation</span>
                <p className="text-neutral-400 text-xs mt-1">
                  During night mode hours (11:00 PM – 6:00 AM), the status LED automatically dims to 5% brightness, providing gentle orientation without disturbing sleep.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: FAQs */}
        <section className="pt-8 border-t border-neutral-900">
          <FAQSection faqs={faqs} />
        </section>

      </main>

      {/* Service CTA Footer */}
      <ServiceCTA serviceName="Basalte KNX Keypad" />
    </article>
  );
}
