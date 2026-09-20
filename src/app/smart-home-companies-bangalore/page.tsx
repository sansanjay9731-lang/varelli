import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import Breadcrumb from '@/components/layout/Breadcrumb'
import FAQSection from '@/components/sections/service/FAQSection'
import ServiceCTA from '@/components/sections/service/ServiceCTA'
import Link from 'next/link'

export const metadata: Metadata = generatePageMetadata({
  title: "Smart Home Companies in Bangalore — KNX Automation Specialists | VARELLI",
  description: "VARELLI is the leading luxury integrator for Smart Home Companies in Bangalore — KNX Automation Specialists. Discover premium smart home and private cinema solutions.",
  path: "/smart-home-companies-bangalore",
  keywords: ["smart-home-companies-bangalore", "bangalore"],
})

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "VARELLI",
  url: "https://varelli.co.in/smart-home-companies-bangalore",
  telephone: "+919964984695",
  address: { "@type": "PostalAddress", addressCountry: "IN", addressLocality: "Bangalore" },
  description: "VARELLI provides Dolby Atmos home theatre and private cinema installation in Bangalore.",
}

const faqs = [
  {
    question: "Why choose VARELLI in Bangalore?",
    answer: "VARELLI is Bangalore's most trusted integration specialist offering tailored luxury solutions.",
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
            { name: "Services", href: "/services" },
            { name: "Smart Home Companies in Bangalore — KNX Automation Specialists", href: "/smart-home-companies-bangalore" },
          ]} />
          <div className="mt-6 max-w-3xl">
            <h1 className="font-display text-[clamp(2.2rem,5vw,4rem)] font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text-primary)] mb-5">
              Smart Home Companies in Bangalore — KNX Automation Specialists
            </h1>
            <p className="font-editorial text-xl text-[var(--text-secondary)] leading-relaxed italic mb-8">
              Experience the pinnacle of luxury integration in Bangalore with VARELLI.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="https://wa.me/919964984695" className="btn-outline px-8 py-3.5 text-xs font-semibold uppercase tracking-wider rounded-full">
                WhatsApp: +91 99649 84695
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding border-b border-[var(--border)]">
        <div className="container-varelli max-w-4xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
            VARELLI vs Generic Installers
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[var(--border)]">
                  <th className="py-4 pr-4 font-bold text-[var(--text-primary)]">Feature</th>
                  <th className="py-4 px-4 font-bold text-[var(--gold)]">VARELLI</th>
                  <th className="py-4 pl-4 font-bold text-[var(--text-secondary)]">Generic Installers</th>
                </tr>
              </thead>
              <tbody className="text-[var(--text-secondary)]">
                <tr className="border-b border-[var(--border)]">
                  <td className="py-4 pr-4">Technology</td>
                  <td className="py-4 px-4 text-white">KNX (Wired, 30-year lifespan)</td>
                  <td className="py-4 pl-4">WiFi (Cloud-dependent, flaky)</td>
                </tr>
                <tr className="border-b border-[var(--border)]">
                  <td className="py-4 pr-4">Acoustics</td>
                  <td className="py-4 px-4 text-white">THX-aligned treatment & calibration</td>
                  <td className="py-4 pl-4">Basic speaker placement</td>
                </tr>
                <tr className="border-b border-[var(--border)]">
                  <td className="py-4 pr-4">Design</td>
                  <td className="py-4 px-4 text-white">Architectural integration</td>
                  <td className="py-4 pl-4">Visible wires & clutter</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section-padding border-b border-[var(--border)] bg-[#08080A]">
        <div className="container-varelli max-w-4xl">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-6">
            Localities We Serve in Bangalore
          </h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/home-theatre/bangalore/whitefield" className="text-[var(--gold)] hover:underline text-sm">Whitefield</Link>
            <Link href="/home-theatre/bangalore/koramangala" className="text-[var(--gold)] hover:underline text-sm">Koramangala</Link>
            <Link href="/home-theatre/bangalore/indiranagar" className="text-[var(--gold)] hover:underline text-sm">Indiranagar</Link>
            <Link href="/home-theatre/bangalore/sadashivanagar" className="text-[var(--gold)] hover:underline text-sm">Sadashivanagar</Link>
            <Link href="/home-theatre/bangalore/hsr-layout" className="text-[var(--gold)] hover:underline text-sm">HSR Layout</Link>
            <Link href="/home-theatre/bangalore/hebbal" className="text-[var(--gold)] hover:underline text-sm">Hebbal</Link>
            <Link href="/home-theatre/bangalore/yelahanka" className="text-[var(--gold)] hover:underline text-sm">Yelahanka</Link>
            <Link href="/home-theatre/bangalore/malleshwaram" className="text-[var(--gold)] hover:underline text-sm">Malleshwaram</Link>
            <Link href="/home-theatre/bangalore/jayanagar" className="text-[var(--gold)] hover:underline text-sm">Jayanagar</Link>
            <Link href="/home-theatre/bangalore/jp-nagar" className="text-[var(--gold)] hover:underline text-sm">JP Nagar</Link>
            <Link href="/home-theatre/bangalore/banashankari" className="text-[var(--gold)] hover:underline text-sm">Banashankari</Link>
            <Link href="/home-theatre/bangalore/electronic-city" className="text-[var(--gold)] hover:underline text-sm">Electronic City</Link>
            <Link href="/home-theatre/bangalore/bellandur" className="text-[var(--gold)] hover:underline text-sm">Bellandur</Link>
            <Link href="/home-theatre/bangalore/devanahalli" className="text-[var(--gold)] hover:underline text-sm">Devanahalli</Link>
            <Link href="/home-theatre/bangalore/rajajinagar" className="text-[var(--gold)] hover:underline text-sm">Rajajinagar</Link>
            <Link href="/home-theatre/bangalore/basavangudi" className="text-[var(--gold)] hover:underline text-sm">Basavangudi</Link>
            <Link href="/home-theatre/bangalore/cunningham-road" className="text-[var(--gold)] hover:underline text-sm">Cunningham Road</Link>
            <Link href="/home-theatre/bangalore/lavelle-road" className="text-[var(--gold)] hover:underline text-sm">Lavelle Road</Link>
            <Link href="/home-theatre/bangalore/kalyan-nagar" className="text-[var(--gold)] hover:underline text-sm">Kalyan Nagar</Link>
            <Link href="/home-theatre/bangalore/marathahalli" className="text-[var(--gold)] hover:underline text-sm">Marathahalli</Link>
            <Link href="/home-theatre/bangalore/kr-puram" className="text-[var(--gold)] hover:underline text-sm">KR Puram</Link>
            <Link href="/home-theatre/bangalore/bannerghatta-road" className="text-[var(--gold)] hover:underline text-sm">Bannerghatta Road</Link>
            <Link href="/home-theatre/bangalore/frazer-town" className="text-[var(--gold)] hover:underline text-sm">Frazer Town</Link>
            <Link href="/home-theatre/bangalore/richmond-town" className="text-[var(--gold)] hover:underline text-sm">Richmond Town</Link>
            <Link href="/home-theatre/bangalore/ulsoor" className="text-[var(--gold)] hover:underline text-sm">Ulsoor</Link>
            <Link href="/home-theatre/bangalore/btm-layout" className="text-[var(--gold)] hover:underline text-sm">BTM Layout</Link>
            <Link href="/home-theatre/bangalore/vijayanagar" className="text-[var(--gold)] hover:underline text-sm">Vijayanagar</Link>
            <Link href="/home-theatre/bangalore/rr-nagar" className="text-[var(--gold)] hover:underline text-sm">RR Nagar</Link>
            <Link href="/home-theatre/bangalore/hebbal-kempapura" className="text-[var(--gold)] hover:underline text-sm">Hebbal Kempapura</Link>
            <Link href="/home-theatre/bangalore/sarjapur" className="text-[var(--gold)] hover:underline text-sm">Sarjapur</Link>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} title={`Frequently Asked Questions`} />
      <ServiceCTA serviceName="Home Theatre" />
    </>
  )
}
