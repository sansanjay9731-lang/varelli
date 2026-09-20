import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import Breadcrumb from '@/components/layout/Breadcrumb'
import FAQSection from '@/components/sections/service/FAQSection'
import ServiceCTA from '@/components/sections/service/ServiceCTA'
import Link from 'next/link'

export const metadata: Metadata = generatePageMetadata({
  title: "Home Theatre in BTM Layout, Bangalore — Dolby Atmos Installation | VARELLI",
  description: "Premium home theatre and Dolby Atmos installation in BTM Layout. VARELLI designs reference cinema systems for luxury residences in BTM Layout, Bangalore.",
  path: "/home-theatre/bangalore/btm-layout",
  keywords: ["home theatre BTM Layout", "home theatre companies BTM Layout bangalore", "dolby atmos BTM Layout", "home theatre installation bangalore"],
})

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "VARELLI",
  url: "https://varelli.co.in/home-theatre/bangalore/btm-layout",
  telephone: "+919964984695",
  address: { "@type": "PostalAddress", addressCountry: "IN", addressLocality: "BTM Layout, Bangalore" },
  description: "VARELLI provides Dolby Atmos home theatre and private cinema installation in BTM Layout, Bangalore.",
}

const faqs = [
  {
    question: "Which is the best home theatre company in BTM Layout, Bangalore?",
    answer: "VARELLI is BTM Layout's most trusted home theatre integration specialist. We design Dolby Atmos 5.1, 7.1, and 9.4.6 reference cinema systems using Sonus Faber, KEF, JBL Synthesis, Barco, and Anthem for luxury villas and penthouses in BTM Layout, Bangalore.",
  },
  {
    question: "How much does home theatre installation cost in BTM Layout?",
    answer: "Home theatre costs in BTM Layout vary based on the room size and equipment. Our premium solutions start from ₹8 Lakhs for a 5.1 setup and can go upwards of ₹42 Lakhs for reference 9.4.6 private cinemas.",
  },
  {
    question: "What Dolby Atmos setup is best for a BTM Layout villa?",
    answer: "For spacious villas in BTM Layout, we typically recommend a 7.2.4 or 9.4.6 Dolby Atmos configuration to deliver an immersive cinematic experience that matches the scale of the residence.",
  },
  {
    question: "Does VARELLI serve BTM Layout?",
    answer: "Yes, VARELLI provides complete end-to-end home theatre consultation, design, and installation services for residences across BTM Layout, Bangalore.",
  },
  {
    question: "What brands does VARELLI use for home theatre in BTM Layout?",
    answer: "We partner with industry-leading brands such as Sonus Faber, KEF, JBL Synthesis, Barco, Anthem, and Trinnov to build world-class home theatres in BTM Layout.",
  }
]

export default function Page() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(f => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="relative bg-[var(--surface-1)] border-b border-[var(--border)]">
        <div className="relative container-varelli pt-40 pb-16">
          <Breadcrumb items={[
            { name: "Home Theatre", href: "/home-theatre" },
            { name: "Bangalore", href: "/home-theatre/bangalore" },
            { name: "BTM Layout", href: "/home-theatre/bangalore/btm-layout" },
          ]} />
          <div className="mt-6 max-w-3xl">
            <span className="badge-mono block mb-5">Home Theatre · BTM Layout, Bangalore</span>
            <h1 className="font-display text-[clamp(2.2rem,5vw,4rem)] font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text-primary)] mb-5">
              Home Theatre Installation in BTM Layout, Bangalore
            </h1>
            <p className="font-editorial text-xl text-[var(--text-secondary)] leading-relaxed italic mb-8">
              Dolby Atmos reference home theatre systems for luxury residences in BTM Layout. VARELLI engineers cinematic audio from 5.1 to 9.4.6 configurations.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-gold px-8 py-3.5 text-xs font-semibold uppercase tracking-wider rounded-full">
                Get Home Theatre Quote
              </Link>
              <Link href="https://wa.me/919964984695" className="btn-outline px-8 py-3.5 text-xs font-semibold uppercase tracking-wider rounded-full">
                WhatsApp: +91 99649 84695
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding border-b border-[var(--border)]">
        <div className="container-varelli max-w-4xl">
          <p className="badge-mono mb-4">Why VARELLI</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
            BTM Layout&apos;s Premier Home Theatre Company
          </h2>
          <div className="prose prose-invert max-w-none text-[var(--text-secondary)] space-y-5 text-base leading-relaxed">
            <p>For discerning homeowners in BTM Layout, building a dedicated cinema room requires precision engineering and an uncompromising approach to acoustics. High-end villas and expansive apartments in BTM Layout provide the perfect canvas for bespoke private cinemas, allowing for optimal screen placement and acoustic room treatment without spatial compromises.</p>
            <p>Unlike generic AV installers who simply place speakers in a room, VARELLI takes a scientific approach. We calculate room modes, optimize seating distances, and employ THX-aligned acoustic treatments. From initial 3D acoustic modeling to final calibration, every home theatre in BTM Layout is crafted to deliver a reference-grade cinematic experience.</p>
            <p>Whether you are renovating an existing space or building a new residence in BTM Layout, our expert integrators work seamlessly with your architects and interior designers. We ensure that the technology remains hidden while the performance speaks for itself, blending world-class audio-visual equipment into your home&apos;s aesthetic.</p>
          </div>
        </div>
      </section>

      <section className="section-padding border-b border-[var(--border)] bg-[#08080A]">
        <div className="container-varelli">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-8">Home Theatre Packages for BTM Layout</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Cinema Essentials (5.1)", price: "From ₹8 Lakhs", desc: "KEF Ci series in-wall speakers, Anthem MRX receiver, 4K laser projection, acoustic treatment." },
              { title: "Dolby Atmos 7.2.4", price: "From ₹18 Lakhs", desc: "JBL Synthesis in-ceiling atmos, Anthem MRX 1140, Barco Njord 4K laser, dedicated acoustic room." },
              { title: "Reference Cinema 9.4.6", price: "From ₹42 Lakhs", desc: "Sonus Faber cinema series, dual 18\" subwoofers, Barco Loki 4K laser, THX-aligned acoustic treatment." },
            ].map(p => (
              <div key={p.title} className="p-6 rounded-2xl bg-[var(--surface-1)] border border-[var(--border)]">
                <h3 className="font-semibold text-[var(--text-primary)] mb-1">{p.title}</h3>
                <div className="text-[var(--gold)] font-bold mb-2">{p.price}</div>
                <p className="text-sm text-[var(--text-secondary)]">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} title={`Home Theatre in BTM Layout, Bangalore — Frequently Asked Questions`} />
      <ServiceCTA serviceName="Home Theatre" />
    </>
  )
}
