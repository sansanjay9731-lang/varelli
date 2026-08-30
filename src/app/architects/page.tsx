import type { Metadata } from "next";
import Link from "next/link";
import { generatePageMetadata } from "@/lib/metadata";
import { buildServiceSchema } from "@/components/seo/schemas/service";
import SchemaOrg from "@/components/seo/SchemaOrg";
import Breadcrumb from "@/components/layout/Breadcrumb";
import FAQSection from "@/components/sections/service/FAQSection";
import CapabilityGrid from "@/components/sections/service/CapabilityGrid";
import { Sparkles, MessageCircle, Check, ArrowRight, ShieldCheck, Download, Layers, Cpu, Compass } from "@/components/ui/icons";

export const metadata: Metadata = generatePageMetadata({
  title: "Home Automation for Architects & Interior Designers | VARELLI",
  description:
    "VARELLI is the technical execution partner for design-led residences. We provide wiring schedules, acoustic specifications, equipment coordination, and on-site integration - aligned to your design intent.",
  path: "/architects",
  keywords: [
    "home automation for architects",
    "smart home for architects India",
    "home automation for interior designers Bangalore",
    "architectural home automation India",
    "technology coordination for architects",
    "smart home wiring drawings DWG",
    "home automation CAD BIM Revit families",
    "residential AV consultant Bangalore",
    "home cinema acoustic consultant India",
    "KNX consultant for architects Bangalore",
    "DALI 2 lighting design consultant India",
    "luxury residential technology integration",
  ],
});

const capabilities = [
  { title: "AutoCAD & Revit Coordination", description: "First-fix conduit routes, panel locations, and cable schedules provided in .DWG and Revit BIM formats that your electrical and MEP contractors can build from directly." },
  { title: "Equipment Layout & Rack Elevation", description: "AV racks, KNX DB panels, and subwoofer cavity placement drawings coordinated to exact millimeter scale with your joinery and millwork drawings." },
  { title: "Acoustic Specifications & RT60", description: "Computational room acoustic documentation for private cinemas - RT60 decay curves, bass trap cavity sizing, and STC 65 soundproofing details." },
  { title: "Ceiling Reflected Coordination (RCP)", description: "Speaker placement, linear Zehnder diffuser slots, motorized drapery pockets, and recessed DALI lighting channels aligned perfectly with your reflected ceiling plans." },
  { title: "Direct On-Site Site Engineering", description: "VARELLI engineers attend site coordination meetings, inspect conduit rough-in, and supervise electrical contractors to ensure 100% compliance with design intent." },
  { title: "VIP Client Presentation Support", description: "We host your clients at our private experience centers to explain the technology and lighting strategy - taking technical briefings entirely off your scope." },
];

const cadResources = [
  {
    title: "KNX & DALI-2 Single-Line Schematics",
    format: "DWG / PDF",
    desc: "Complete electrical line diagram template with DIN rail bus topology and ballast channeling.",
  },
  {
    title: "Dolby Atmos 9.4.6 Acoustic Detail Pack",
    format: "DWG / PDF",
    desc: "Wall decoupling section, baffle wall construction detail, and speaker azimuth raycast layout.",
  },
  {
    title: "Architectural Keypads & In-Wall Cut-Sheets",
    format: "Revit RFA / PDF",
    desc: "BIM families and back-box flush installation templates for Basalte, Ekinex, and Lutron.",
  },
  {
    title: "Zehnder IAQ Linear Diffuser Ceiling Pocket",
    format: "DWG / PDF",
    desc: "Plaster-in continuous slot diffuser mounting details for minimal architectural visual impact.",
  },
];

const faqs = [
  { question: "When in the project timeline should we engage VARELLI?", answer: "Ideally at schematic design stage - before electrical drawings are issued for contractor pricing. This allows wiring infrastructure to be coordinated from the beginning, avoiding costly additions or compromises during construction." },
  { question: "Do you provide drawings in CAD or PDF format?", answer: "VARELLI provides coordination drawings in both AutoCAD (.dwg) and Vector PDF format suitable for direct integration into your architectural master drawing sets." },
  { question: "How does VARELLI coordinate with other consultants on the project?", answer: "We work directly with your MEP consultants, lighting designers, electrical contractor, and civil team - coordinating conduit routes, panel locations, and equipment placement. We are accustomed to working within structured project environments." },
  { question: "Do you compete with interior designers on client relationships?", answer: "No. VARELLI is a technical partner. We design and engineer the systems behind your interiors - the technology, not the aesthetic. Our work amplifies your design; it does not compete with it." },
  { question: "Can you host our client at your private experience center?", answer: "Yes. We host private, by-appointment-only audition sessions for your clients at our Bangalore, Mumbai, and Delhi experience suites, walking them through the technology, lighting scenes, and acoustic calibration." },
];

export default function ArchitectsPage() {
  const schema = buildServiceSchema({
    name: "Home Automation for Architects & Interior Designers",
    description: "VARELLI is the technical execution partner for design-led residences - providing wiring schedules, acoustic specifications, and on-site integration.",
    url: "https://varelli.in/architects",
    areaServed: "India",
  });

  return (
    <>
      <SchemaOrg schema={schema} />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex flex-col justify-end pb-0 bg-[var(--surface-1)] border-b border-[var(--border)]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(197,168,128,0.06)_0%,transparent_60%)]" />
        <div className="relative container-varelli pt-40 pb-16">
          <Breadcrumb items={[{ name: "Architects & Designers", href: "/architects" }]} />
          <div className="mt-6 max-w-3xl">
            <span className="badge-mono block mb-5">Architects &amp; Interior Designers Program</span>
            <h1 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text-primary)] mb-5">
              We amplify your vision.
              <br />
              <span className="text-gradient-gold font-normal">We do not compete with it.</span>
            </h1>
            <p className="text-[var(--text-secondary)] text-lg leading-relaxed font-body max-w-2xl">
              VARELLI is the technical execution partner for design-led residences. We provide wiring schedules, equipment coordination drawings, acoustic specifications, and on-site integration - all aligned to your design intent and project timeline.
            </p>
          </div>
        </div>
      </section>

      {/* Partnership Highlights */}
      <section className="section-padding border-b border-[var(--border)]">
        <div className="container-varelli grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="badge-mono mb-4">The Partnership Standard</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-[-0.02em] text-[var(--text-primary)] mb-6">
              One technical partner.
              <br />
              <span className="text-[var(--text-secondary)]">All residential technology.</span>
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed font-body mb-4 text-sm md:text-base">
              VARELLI covers the full spectrum of residential technology - home automation, private cinema, fresh air ventilation, central vacuum, security, and networking. Engaging one partner for all systems eliminates the coordination complexity of multiple specialist vendors.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed font-body text-sm md:text-base mb-6">
              Our documentation and coordination process is designed to fit within structured architectural and interior design project environments. We speak the language of drawings, specifications, and site programmes.
            </p>

            <a
              href="https://wa.me/919964984695?text=Hello%20VARELLI%2C%20I%20am%20an%20Architect%20%2F%20Interior%20Designer%20and%20would%20like%20to%20discuss%20an%20upcoming%20residential%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs font-mono transition-all shadow-xl shadow-emerald-950/40"
            >
              <MessageCircle size={15} />
              <span>Connect with Architect Concierge</span>
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { v: "Single", l: "Technical Partner", desc: "No coordination gaps between AV, KNX, and IAQ" },
              { v: "DWG / BIM", l: "Drawings Provided", desc: "Ready for insertion into your master CAD sheets" },
              { v: "In-House", l: "Engineers on Site", desc: "Direct site meetings with electrical contractors" },
              { v: "5-Year", l: "Warranty SLA", desc: "Direct factory support protecting your reputation" },
            ].map((item) => (
              <div key={item.l} className="glass-card p-6 rounded-2xl border border-[var(--border)] bg-[var(--surface-1)]">
                <p className="font-display text-3xl font-bold text-[var(--gold)] mb-1">{item.v}</p>
                <p className="text-xs text-white font-mono uppercase tracking-wider mb-2">{item.l}</p>
                <p className="text-[11px] text-gray-400 font-body leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <CapabilityGrid capabilities={capabilities} />

      {/* Architects Technical CAD & BIM Vault */}
      <section className="section-padding bg-[#0A0C10] border-b border-[var(--border)] relative overflow-hidden">
        <div className="container-varelli">
          <div className="max-w-3xl mb-14">
            <span className="badge-mono mb-4 block">Architects Technical Vault</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-[var(--text-primary)] mb-4 tracking-[-0.02em]">
              Downloadable CAD Blocks &amp; Wiring Schematics.
            </h2>
            <p className="text-sm md:text-base text-[var(--text-secondary)] leading-relaxed font-body">
              Standardized architectural details, line schematics, and ceiling pocket details ready for integration into your AutoCAD (.dwg) and Revit drawing packages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cadResources.map((res, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--surface-1)] flex flex-col justify-between hover:border-[var(--gold)]/40 transition-all duration-300 shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="badge-mono text-[10px] text-[var(--gold)] uppercase">{res.format}</span>
                    <Layers size={16} className="text-[var(--gold)]" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-white mb-2">{res.title}</h3>
                  <p className="text-xs text-gray-400 font-body leading-relaxed mb-6">{res.desc}</p>
                </div>

                <a
                  href={`https://wa.me/919964984695?text=Hello%20VARELLI%2C%20please%20send%20me%20the%20CAD%20Detail%20Pack%20for%3A%20${encodeURIComponent(res.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-4 py-3 rounded-xl bg-white/5 hover:bg-[var(--gold)] hover:text-[#08080A] text-gray-300 text-xs font-mono border border-white/10 transition-all group"
                >
                  <span>Request CAD / BIM Drawing File</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Systems We Coordinate */}
      <section className="section-padding border-b border-[var(--border)]">
        <div className="container-varelli">
          <p className="badge-mono mb-5">Systems Coordinated</p>
          <h2 className="font-display text-3xl font-bold tracking-[-0.02em] text-[var(--text-primary)] mb-8">
            Complete Residential Technology Scope
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {[
              { name: "Home Automation & KNX", href: "/home-automation" },
              { name: "Private Cinema (Dolby Atmos)", href: "/private-cinema" },
              { name: "Home Theatre & Media Salons", href: "/home-theatre" },
              { name: "Fresh Air IAQ Ventilation", href: "/fresh-air-ventilation" },
              { name: "Central Vacuum Systems", href: "/central-vacuum" },
              { name: "Smart Security & Biometrics", href: "/home-security" },
              { name: "Enterprise WiFi 7 Networking", href: "/home-networking" },
              { name: "Residence Design Studio", href: "/studio" },
            ].map((svc) => (
              <Link
                key={svc.href}
                href={svc.href}
                className="glass-card p-4 text-sm font-body text-[var(--text-secondary)] hover:text-[var(--gold)] hover:border-[var(--border-hover)] transition-all duration-200"
              >
                {svc.name} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} heading="Architect & Designer Questions" />

      {/* Direct Architect CTA */}
      <section className="section-padding bg-[var(--surface-1)]">
        <div className="container-varelli">
          <div className="rounded-2xl border border-[var(--gold)]/30 bg-[#0C0E14] p-10 md:p-14 text-center max-w-3xl mx-auto shadow-2xl">
            <span className="badge-mono mb-4 inline-block">Direct Trade Desk</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              Have an upcoming residential project?
            </h2>
            <p className="text-xs md:text-sm text-gray-400 mb-8 font-body leading-relaxed">
              Send us your architectural floorplans or schedule a joint consultation with our senior systems architects. We will provide a complete schematic review within 48 hours.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="https://wa.me/919964984695?text=Hello%20VARELLI%2C%20I%20have%20an%20architectural%20floorplan%20to%20share%20for%20a%20residential%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs font-mono transition-all shadow-xl shadow-emerald-950/50 flex items-center space-x-2"
              >
                <MessageCircle size={15} />
                <span>Submit Plan on WhatsApp Desk</span>
              </a>
              <Link
                href="/contact"
                className="px-8 py-3.5 rounded-full bg-[var(--surface-2)] hover:bg-[var(--surface-3)] text-white text-xs font-mono border border-gray-800 transition-all"
              >
                Schedule Studio Meeting
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
