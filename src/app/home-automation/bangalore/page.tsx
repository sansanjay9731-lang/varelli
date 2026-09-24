import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import Breadcrumb from '@/components/layout/Breadcrumb'
import FAQSection from '@/components/sections/service/FAQSection'
import ServiceCTA from '@/components/sections/service/ServiceCTA'
import Link from 'next/link'

export const metadata: Metadata = generatePageMetadata({
  title: "Home Automation in Bangalore — KNX Smart Home Integrator | VARELLI",
  description: "Bangalore's premier KNX home automation integrator for luxury villas & penthouses. Architectural lighting, DALI-2, VRV climate, shading & private cinema. Experience studio in Indiranagar.",
  path: "/home-automation/bangalore",
  keywords: [
    "home automation bangalore",
    "home automation companies in bangalore",
    "best home automation company bangalore",
    "KNX home automation bangalore",
    "luxury smart home bangalore",
    "smart home villa bangalore",
    "Basalte bangalore",
    "home automation installers bangalore",
  ],
})

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://varelli.co.in/#bangalore",
  "name": "VARELLI - Home Automation Bangalore",
  "image": "https://varelli.co.in/images/varelli-logo.png",
  "telephone": "+919964984695",
  "email": "studio@varelli.co.in",
  "url": "https://varelli.co.in/home-automation/bangalore",
  "priceRange": "₹₹₹₹",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Indiranagar",
    "addressLocality": "Bengaluru",
    "addressRegion": "Karnataka",
    "postalCode": "560038",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 12.9784,
    "longitude": 77.6408
  },
  "areaServed": [
    { "@type": "City", "name": "Bangalore" },
    { "@type": "City", "name": "Bengaluru" }
  ]
};

const faqs = [
  {
    question: "Which is the best home automation company in Bangalore for luxury villas?",
    answer: "VARELLI is widely recognized as Bangalore's leading architectural home automation specialist for ultra-luxury villas and penthouses. Unlike mass-market installers who push consumer wireless gadgets or proprietary locked ecosystems, VARELLI engineers decentralized, wired KNX open-standard systems (ISO/IEC 14543) using exclusively European hardware from Basalte (Belgium), Ekinex (Italy), Jung (Germany), and Gira (Germany).",
  },
  {
    question: "How much does home automation cost for a villa in Bangalore in 2026?",
    answer: "In Bangalore, professional wired KNX home automation typically ranges between ₹18 Lakhs to ₹32 Lakhs for a 4,500–6,500 sq.ft. villa covering architectural lighting, DALI-2 dimming, Somfy motorized shading, and VRV air conditioning integration. For expansive 8,000–15,000+ sq.ft. private estates in Whitefield, Sadashivanagar, or Prestige Golfshire, complete automation encompassing multi-room audio, Zehnder ERV ventilation, and biometric security ranges from ₹38 Lakhs to ₹75 Lakhs+.",
  },
  {
    question: "Why is wired KNX superior to wireless systems like Zigbee or Tuya for Bangalore homes?",
    answer: "Bangalore residences frequently feature reinforced concrete slabs (RCC), dense masonry walls, and expansive multi-level floor plates that degrade 2.4 GHz wireless radio signals. KNX communicates over a shielded, twisted-pair low-voltage copper bus cable directly into centralized DIN-rail distribution panels. It is immune to RF interference, requires zero battery replacements, operates 100% offline without cloud servers, and delivers sub-20ms instantaneous response times with a certified 30+ year lifespan.",
  },
  {
    question: "At what stage of villa construction should we engage VARELLI?",
    answer: "The ideal engagement milestone is during architectural schematic design and civil first-fix (before conduit chasing and brickwork plastering). VARELLI coordinates directly with your architect, interior designer, and MEP consultants to deliver comprehensive CAD single-line electrical schematics, conduit schedules, and centralized panel room layouts.",
  },
  {
    question: "Can I experience European KNX keypads before finalizing my home specification?",
    answer: "Yes. Clients and architects are welcome to schedule a private walkthrough at our Bangalore experience studio in Indiranagar, where you can interact with solid brass and aluminium Basalte keypads, touchscreens, architectural DALI-2 circadian lighting scenes, and motorized shading.",
  },
  {
    question: "Does VARELLI integrate with Daikin, Mitsubishi, or Toshiba VRV air conditioning?",
    answer: "Yes. We deploy native bi-directional KNX gateways for Daikin VRV, Mitsubishi Electric City Multi, Toshiba SMMS, and LG Multi V systems. This provides native setpoint modulation, fan speed management, and mode automation directly from your wall keypads without needing unsightly plastic AC remotes mounted on walls.",
  },
];

export default function HomeAutomationBangalorePage() {
  return (
    <div className="bg-[#08080A] text-[#F2F2F5] min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />

      {/* Hero Section */}
      <section className="relative bg-[#0C0C10] border-b border-white/10 pt-36 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <Breadcrumb
            items={[
              { name: "Home", href: "/" },
              { name: "Home Automation", href: "/home-automation" },
              { name: "Bangalore", href: "/home-automation/bangalore" },
            ]}
          />
          <div className="mt-8 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#C5A880]/10 border border-[#C5A880]/30 rounded-full text-xs font-mono tracking-widest text-[#C5A880] uppercase mb-6">
              Bangalore Engineering Studio • Indiranagar
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-light text-white tracking-tight leading-[1.1] mb-6">
              Home Automation in Bangalore — Engineered for Luxury Villas
            </h1>
            <p className="text-lg md:text-xl text-[#A0A0A5] font-light leading-relaxed">
              Decentralized wired KNX infrastructure, DALI-2 circadian lighting control, and seamless MEP integration for Bangalore&apos;s most distinguished private residences. Zero subscriptions. 30+ year industrial durability.
            </p>
          </div>
        </div>
      </section>

      {/* Answer-First Executive Summary for Search Snippets */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <section className="bg-[#121216] border border-[#C5A880]/30 rounded-xl p-8 shadow-2xl">
          <div className="text-xs uppercase tracking-widest font-mono text-[#C5A880] mb-2 font-semibold">
            At a Glance — Bangalore Home Automation
          </div>
          <p className="text-base md:text-lg text-white font-normal leading-relaxed mb-4">
            <strong>VARELLI</strong> is Bangalore&apos;s specialized architectural systems integrator designing certified <strong>KNX (ISO/IEC 14543)</strong> wired smart home systems for bespoke villas and luxury penthouses across Whitefield, Sadashivanagar, Koramangala, Indiranagar, and Sarjapur Road.
          </p>
          <p className="text-sm md:text-base text-[#C2C2C8] leading-relaxed">
            By eliminating consumer wireless gadgets and proprietary single-vendor hubs, our installations deliver sub-20ms instantaneous response, complete offline privacy, and exquisite wall interfaces milled from solid brass and aluminium by <Link href="/brands/basalte" className="text-[#C5A880] underline hover:text-[#d8ba91]">Basalte (Belgium)</Link> and <Link href="/brands/ekinex" className="text-[#C5A880] underline hover:text-[#d8ba91]">Ekinex (Italy)</Link>.
          </p>
        </section>

        {/* Why Architectural Wired Automation */}
        <section className="my-16">
          <h2 className="text-2xl md:text-4xl font-serif font-light text-white tracking-tight mb-6">
            Why Bangalore Villas Require Wired KNX Infrastructure
          </h2>
          <p className="text-[#C2C2C8] leading-relaxed mb-6">
            Contemporary luxury residences in Bangalore are built with dense RCC structures, extensive glazing, and sprawling floor plans spanning multiple levels. In such environments, retail wireless smart home devices (WiFi and Zigbee) suffer from radio frequency attenuation, dropped packets, continuous battery replacements, and fatal dependence on fluctuating internet connections.
          </p>
          <p className="text-[#C2C2C8] leading-relaxed mb-8">
            VARELLI deploys industrial-grade star-topology wiring: all high-voltage lighting, HVAC, and power circuits terminate inside central DIN-rail distribution panels located in dedicated utility risers. Slim, shielded low-voltage bus cables run to wall keypads, ensuring unmatched reliability and zero electromagnetic clutter in living spaces.
          </p>

          <div className="overflow-x-auto my-8 border border-white/10 rounded-lg">
            <table className="w-full text-left text-sm text-[#D1D1D6]">
              <thead className="bg-[#1A1A22] text-[#C5A880] uppercase tracking-wider text-xs font-mono">
                <tr>
                  <th className="p-4 border-b border-white/10">Criterion</th>
                  <th className="p-4 border-b border-white/10">VARELLI Architectural KNX</th>
                  <th className="p-4 border-b border-white/10">Consumer Wireless / Mass Installers</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 bg-[#101015]">
                <tr>
                  <td className="p-4 font-semibold text-white">Backbone Standard</td>
                  <td className="p-4 text-[#C5A880] font-medium">KNX Open Global Standard (ISO/IEC 14543)</td>
                  <td className="p-4 text-[#8E8E93]">Proprietary 2.4 GHz WiFi / Cloud App</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">Cloud Dependency</td>
                  <td className="p-4 text-[#C5A880] font-medium">100% Offline Local Processing</td>
                  <td className="p-4 text-[#8E8E93]">Cloud reliant (dead during outages)</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">Switching Speed</td>
                  <td className="p-4 text-[#C5A880] font-medium">&lt; 20 milliseconds (instant)</td>
                  <td className="p-4 text-[#8E8E93]">1 – 3 seconds lag</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">Wall Aesthetics</td>
                  <td className="p-4 text-[#C5A880] font-medium">Single architectural keypad in solid brass/bronze</td>
                  <td className="p-4 text-[#8E8E93]">Cluttered 6–8 gang plastic switchboards</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">Architectural Longevity</td>
                  <td className="p-4 text-[#C5A880] font-medium">30+ years guaranteed backward compatibility</td>
                  <td className="p-4 text-[#8E8E93]">3 – 5 years before hardware obsolescence</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">Ongoing Subscriptions</td>
                  <td className="p-4 text-[#C5A880] font-medium">Zero recurring fees forever</td>
                  <td className="p-4 text-[#8E8E93]">Recurring platform cloud fees</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Bangalore Villa Project Spotlights */}
        <section className="my-16">
          <div className="flex items-center gap-3 text-xs tracking-widest text-[#C5A880] uppercase font-mono mb-3">
            Real-World Integrations
          </div>
          <h2 className="text-2xl md:text-4xl font-serif font-light text-white tracking-tight mb-6">
            Architectural Integrations Across Bangalore Enclaves
          </h2>
          <p className="text-[#C2C2C8] leading-relaxed mb-8">
            From modern contemporary villas in Whitefield to heritage estates in Sadashivanagar, our engineering team collaborates seamlessly with Bangalore&apos;s leading architects and interior studios:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-[#121216] border border-white/5 rounded-xl">
              <span className="text-[#C5A880] font-mono text-xs uppercase tracking-wider">Whitefield Luxury Gated Community</span>
              <h3 className="text-xl font-medium text-white mt-2 mb-3">7,800 sq.ft. Triplex Villa</h3>
              <p className="text-sm text-[#A0A0A5] leading-relaxed mb-4">
                Full-scope KNX integration replacing 34 conventional switchboards with 14 Basalte Sentido brushed brass keypads. Multi-zone DALI-2 tunable white architectural lighting synchronized with solar azimuth.
              </p>
              <div className="text-xs text-[#8E8E93] font-mono">Systems: KNX • DALI-2 • Daikin VRV • Somfy Motorised Shading</div>
            </div>

            <div className="p-6 bg-[#121216] border border-white/5 rounded-xl">
              <span className="text-[#C5A880] font-mono text-xs uppercase tracking-wider">Koramangala 3rd Block</span>
              <h3 className="text-xl font-medium text-white mt-2 mb-3">9,500 sq.ft. Contemporary Residence</h3>
              <p className="text-sm text-[#A0A0A5] leading-relaxed mb-4">
                Complete MEP automation including VRV AC integration, <Link href="/fresh-air-ventilation" className="text-[#C5A880] underline hover:text-[#d8ba91]">Zehnder ComfoAir ERV ventilation</Link>, DoorBird IP video intercom, and high-fidelity Sonus Faber multi-room architectural audio.
              </p>
              <div className="text-xs text-[#8E8E93] font-mono">Systems: KNX • Zehnder ERV • DoorBird • Sonus Faber Audio</div>
            </div>

            <div className="p-6 bg-[#121216] border border-white/5 rounded-xl">
              <span className="text-[#C5A880] font-mono text-xs uppercase tracking-wider">Sadashivanagar</span>
              <h3 className="text-xl font-medium text-white mt-2 mb-3">12,000 sq.ft. Private Estate</h3>
              <p className="text-sm text-[#A0A0A5] leading-relaxed mb-4">
                Full villa automation paired with a reference 9.4.6 channel <Link href="/private-cinema" className="text-[#C5A880] underline hover:text-[#d8ba91]">Dolby Atmos Private Cinema</Link>, ekey biometric access control, perimeter security, and centralized Drainvac vacuum integration.
              </p>
              <div className="text-xs text-[#8E8E93] font-mono">Systems: KNX • Trinnov Cinema • Drainvac • Biometrics</div>
            </div>

            <div className="p-6 bg-[#121216] border border-white/5 rounded-xl">
              <span className="text-[#C5A880] font-mono text-xs uppercase tracking-wider">Sarjapur Road / Carmelaram</span>
              <h3 className="text-xl font-medium text-white mt-2 mb-3">6,200 sq.ft. Sustainable Green Villa</h3>
              <p className="text-sm text-[#A0A0A5] leading-relaxed mb-4">
                Integrated solar monitoring, motorized louvers for passive thermal management, circadian wellness lighting, and automated water management with leak mitigation shut-off valves.
              </p>
              <div className="text-xs text-[#8E8E93] font-mono">Systems: KNX • Solar Logic • Circadian Lighting • Smart Metering</div>
            </div>
          </div>
        </section>

        {/* Investment Benchmarks */}
        <section className="my-16">
          <h2 className="text-2xl md:text-4xl font-serif font-light text-white tracking-tight mb-6">
            Home Automation Cost in Bangalore (2026 Price Bands)
          </h2>
          <p className="text-[#C2C2C8] leading-relaxed mb-8">
            We operate with transparent architectural pricing. The investment required depends on floor plate size, keypad finishes, and the breadth of integrated mechanical services:
          </p>

          <div className="overflow-x-auto my-8 border border-white/10 rounded-lg">
            <table className="w-full text-left text-sm text-[#D1D1D6]">
              <thead className="bg-[#1A1A22] text-[#C5A880] uppercase tracking-wider text-xs font-mono">
                <tr>
                  <th className="p-4 border-b border-white/10">Villa Scale</th>
                  <th className="p-4 border-b border-white/10">Typical Built-Up</th>
                  <th className="p-4 border-b border-white/10">Typical Investment</th>
                  <th className="p-4 border-b border-white/10">Scope Included</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 bg-[#101015]">
                <tr>
                  <td className="p-4 font-semibold text-white">Executive Villa</td>
                  <td className="p-4 text-[#8E8E93]">3,500 – 4,800 sq.ft.</td>
                  <td className="p-4 text-[#C5A880] font-medium">₹16 Lakhs – ₹24 Lakhs</td>
                  <td className="p-4 text-[#A0A0A5]">Full KNX lighting &amp; dimming, AC gateways, motorized curtains, Ekinex keypads</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">Luxury Architectural Villa</td>
                  <td className="p-4 text-[#8E8E93]">5,000 – 8,000 sq.ft.</td>
                  <td className="p-4 text-[#C5A880] font-medium">₹26 Lakhs – ₹42 Lakhs</td>
                  <td className="p-4 text-[#A0A0A5]">Basalte premium keypads, DALI-2 circadian dimming, VRV AC integration, DoorBird video intercom, 4 audio zones</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">Grand Private Estate</td>
                  <td className="p-4 text-[#8E8E93]">10,000+ sq.ft.</td>
                  <td className="p-4 text-[#C5A880] font-medium">₹45 Lakhs – ₹80 Lakhs+</td>
                  <td className="p-4 text-[#A0A0A5]">Comprehensive intelligent ecosystem: KNX, Zehnder ERV, Central Vacuum, Private Cinema, perimeter CCTV, enterprise WiFi 7</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#8E8E93] italic">
            *Pricing excludes GST and site civil conduit works. For a granular line-item guide, see our detailed <Link href="/journal/home-automation-cost-bangalore" className="text-[#C5A880] underline hover:text-[#d8ba91]">Bangalore Villa Cost Analysis</Link>.
          </p>
        </section>

        {/* 5-Step Engineering Workflow */}
        <section className="my-16">
          <h2 className="text-2xl md:text-4xl font-serif font-light text-white tracking-tight mb-8">
            Our 5-Stage Engineering Methodology
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="p-5 bg-[#121216] border border-white/5 rounded-xl">
              <div className="text-2xl font-serif text-[#C5A880] mb-2">01</div>
              <h4 className="text-base font-medium text-white mb-2">Architectural Audit</h4>
              <p className="text-xs text-[#A0A0A5] leading-relaxed">
                Reviewing CAD layouts, lighting designs, and MEP loads to specify precise keypad counts and panel dimensions.
              </p>
            </div>
            <div className="p-5 bg-[#121216] border border-white/5 rounded-xl">
              <div className="text-2xl font-serif text-[#C5A880] mb-2">02</div>
              <h4 className="text-base font-medium text-white mb-2">Schematic Drawings</h4>
              <p className="text-xs text-[#A0A0A5] leading-relaxed">
                Producing comprehensive AutoCAD single-line diagrams and conduit schedules for electrical contractors.
              </p>
            </div>
            <div className="p-5 bg-[#121216] border border-white/5 rounded-xl">
              <div className="text-2xl font-serif text-[#C5A880] mb-2">03</div>
              <h4 className="text-base font-medium text-white mb-2">First-Fix Site QA</h4>
              <p className="text-xs text-[#A0A0A5] leading-relaxed">
                On-site inspections in Bangalore during conduit chasing, cabling pulls, and backbox alignment.
              </p>
            </div>
            <div className="p-5 bg-[#121216] border border-white/5 rounded-xl">
              <div className="text-2xl font-serif text-[#C5A880] mb-2">04</div>
              <h4 className="text-base font-medium text-white mb-2">Panel Assembly</h4>
              <p className="text-xs text-[#A0A0A5] leading-relaxed">
                Prefabrication of industrial DIN-rail automation distribution boards tested before delivery to site.
              </p>
            </div>
            <div className="p-5 bg-[#121216] border border-white/5 rounded-xl">
              <div className="text-2xl font-serif text-[#C5A880] mb-2">05</div>
              <h4 className="text-base font-medium text-white mb-2">ETS Commissioning</h4>
              <p className="text-xs text-[#A0A0A5] leading-relaxed">
                Certified KNX programmers configure personalized scenes, lux sensors, and provide ongoing white-glove support.
              </p>
            </div>
          </div>
        </section>

        {/* Related Pillars */}
        <section className="my-16 p-8 bg-[#121216] border border-white/10 rounded-xl">
          <h3 className="text-xl font-serif font-light text-white mb-6">Explore Bangalore Residential Systems</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <Link href="/home-theatre/bangalore" className="p-4 bg-white/5 rounded-lg hover:bg-white/10 hover:text-[#C5A880] transition text-sm">
              Home Theatre Bangalore →
            </Link>
            <Link href="/private-cinema/bangalore" className="p-4 bg-white/5 rounded-lg hover:bg-white/10 hover:text-[#C5A880] transition text-sm">
              Private Cinema Bangalore →
            </Link>
            <Link href="/fresh-air-ventilation/bangalore" className="p-4 bg-white/5 rounded-lg hover:bg-white/10 hover:text-[#C5A880] transition text-sm">
              Fresh Air Ventilation Bangalore →
            </Link>
            <Link href="/central-vacuum/bangalore" className="p-4 bg-white/5 rounded-lg hover:bg-white/10 hover:text-[#C5A880] transition text-sm">
              Central Vacuum Bangalore →
            </Link>
          </div>
        </section>

        {/* FAQs */}
        <FAQSection faqs={faqs} heading="Frequently Asked Questions — Bangalore Home Automation" />

        {/* CTA */}
        <ServiceCTA
          title="Schedule an Architectural Consultation in Bangalore"
          description="Visit our Indiranagar studio to test European KNX keypads, or have our engineering team review your villa plans for single-line schematics."
        />
      </div>
    </div>
  )
}
