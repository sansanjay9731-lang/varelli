import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { buildServiceSchema } from "@/components/seo/schemas/service";
import SchemaOrg from "@/components/seo/SchemaOrg";
import Breadcrumb from "@/components/layout/Breadcrumb";
import ServiceCTA from "@/components/sections/service/ServiceCTA";
import FAQSection from "@/components/sections/service/FAQSection";
import CapabilityGrid from "@/components/sections/service/CapabilityGrid";
import Link from "next/link";

export const metadata: Metadata = generatePageMetadata({
  title: "Home Automation for Architects & Interior Designers | VARELLI",
  description:
    "VARELLI is the technical execution partner for design-led residences. We provide wiring schedules, acoustic specifications, equipment coordination, and on-site integration — aligned to your design intent.",
  path: "/architects",
  keywords: [
    "home automation for architects",
    "smart home for architects",
    "home automation for interior designers",
    "architectural home automation",
    "technology coordination for architects",
    "smart home wiring",
    "home automation wiring",
    "AV consultant",
    "home cinema consultant",
  ],
});

const capabilities = [
  { title: "Wiring Schedules", description: "Coordinated with your electrical drawings. First-fix conduit routes, panel locations, and cable schedules provided in a format your contractor can build from." },
  { title: "Equipment Layout Drawings", description: "Rack, panel, and hardware placement drawings coordinated with your architectural and MEP drawings. All dimensions to scale." },
  { title: "Acoustic Specifications", description: "Room design documentation for private cinemas and home theatre spaces — RT60 calculations, panel placement schedules, and structural isolation requirements." },
  { title: "Construction Stage Coordination", description: "VARELLI attends site meetings and works directly with your electrical and construction teams to ensure the infrastructure is built to specification." },
  { title: "False Ceiling Coordination", description: "Speaker placement, diffuser and grille positions, and recessed lighting integration coordinated with your reflected ceiling plans." },
  { title: "Client Consultation Support", description: "We can present directly to your clients to explain the technology strategy — removing that conversation from your scope entirely." },
];

const faqs = [
  { question: "When in the project timeline should we engage VARELLI?", answer: "Ideally at schematic design stage — before electrical drawings are issued for contractor pricing. This allows wiring infrastructure to be coordinated from the beginning, avoiding costly additions or compromises during construction." },
  { question: "Do you provide drawings in CAD or PDF format?", answer: "VARELLI provides coordination drawings in PDF format suitable for inclusion in your drawing package. CAD files can be provided on request." },
  { question: "How does VARELLI coordinate with other consultants on the project?", answer: "We work directly with your MEP consultants, electrical contractor, and civil team — coordinating conduit routes, panel locations, and equipment placement. We are accustomed to working within structured project environments." },
  { question: "Do you compete with interior designers on client relationships?", answer: "No. VARELLI is a technical partner. We design and engineer the systems behind your interiors — the technology, not the aesthetic. Our work amplifies your design; it does not compete with it." },
  { question: "Can you present to our client on the technology strategy?", answer: "Yes. VARELLI can present the automation, cinema, and air quality strategy directly to your client — explaining the rationale, the options, and the investment — removing that technical briefing from your scope." },
];

export default function ArchitectsPage() {
  const schema = buildServiceSchema({
    name: "Home Automation for Architects & Interior Designers",
    description: "VARELLI is the technical execution partner for design-led residences — providing wiring schedules, acoustic specifications, and on-site integration.",
    url: "https://varelli.in/architects",
    areaServed: "India",
  });

  return (
    <>
      <SchemaOrg schema={schema} />
      <section className="relative min-h-[60vh] flex flex-col justify-end pb-0 bg-[var(--surface-1)]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(197,168,128,0.06)_0%,transparent_60%)]" />
        <div className="relative container-varelli pt-40 pb-16">
          <Breadcrumb items={[{ name: "Architects & Designers", href: "/architects" }]} />
          <div className="mt-6 max-w-3xl">
            <span className="badge-mono block mb-5">For Architects & Interior Designers</span>
            <h1 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text-primary)] mb-5">
              We amplify your vision.
              <br />
              <span className="font-editorial italic font-normal text-[var(--text-secondary)]">We do not compete with it.</span>
            </h1>
            <p className="text-[var(--text-secondary)] text-lg leading-relaxed font-body max-w-2xl">
              VARELLI is the technical execution partner for design-led residences. We provide wiring schedules, equipment coordination drawings, acoustic specifications, and on-site integration — all aligned to your design intent and project timeline.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding border-b border-[var(--border)]">
        <div className="container-varelli grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <p className="badge-mono mb-5">The Partnership</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-[-0.02em] text-[var(--text-primary)] mb-6">
              One technical partner.
              <br />
              <span className="text-[var(--text-secondary)]">All the technology.</span>
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed font-body mb-4">
              VARELLI covers the full spectrum of residential technology — home automation, private cinema, fresh air ventilation, central vacuum, security, and networking. Engaging one partner for all systems eliminates the coordination complexity of multiple specialist vendors.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed font-body">
              Our documentation and coordination process is designed to fit within structured architectural and interior design project environments. We speak the language of drawings, specifications, and site programmes.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[
              { v: "Single", l: "Technical Partner" },
              { v: "All Systems", l: "Coordinated" },
              { v: "CAD-ready", l: "Documentation" },
              { v: "Site", l: "Coordination" },
            ].map((item) => (
              <div key={item.l} className="glass-card p-6 text-center">
                <p className="font-display text-2xl font-bold text-[var(--gold)] mb-1">{item.v}</p>
                <p className="text-xs text-[var(--text-muted)] font-mono uppercase tracking-[0.1em]">{item.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CapabilityGrid capabilities={capabilities} />

      <section className="section-padding border-b border-[var(--border)]">
        <div className="container-varelli">
          <p className="badge-mono mb-5">Related Services</p>
          <h2 className="font-display text-3xl font-bold tracking-[-0.02em] text-[var(--text-primary)] mb-8">Systems we coordinate</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {[
              { name: "Home Automation", href: "/home-automation" },
              { name: "Private Cinema", href: "/private-cinema" },
              { name: "Home Theatre", href: "/home-theatre" },
              { name: "Fresh Air Ventilation", href: "/fresh-air-ventilation" },
              { name: "Central Vacuum", href: "/central-vacuum" },
              { name: "Smart Security", href: "/home-security" },
              { name: "Home Networking", href: "/home-networking" },
            ].map((svc) => (
              <Link key={svc.href} href={svc.href} className="glass-card p-4 text-sm font-body text-[var(--text-secondary)] hover:text-[var(--gold)] hover:border-[var(--border-hover)] transition-all duration-200">
                {svc.name} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} heading="Architect & Designer Questions" />
      <ServiceCTA serviceName="architect collaboration" />
    </>
  );
}
