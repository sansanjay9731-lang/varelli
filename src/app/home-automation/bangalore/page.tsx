import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import Breadcrumb from '@/components/layout/Breadcrumb'
import FAQSection from '@/components/sections/service/FAQSection'
import ServiceCTA from '@/components/sections/service/ServiceCTA'
import Link from 'next/link'

export const metadata: Metadata = generatePageMetadata({
  title: "Home Automation in Bangalore — KNX Smart Home Systems | VARELLI",
  description: "Bangalore's best home automation company. We design and install premium KNX smart home systems for luxury villas and apartments. No subscriptions, 30+ year lifespan.",
  path: "/home-automation/bangalore",
  keywords: ["home automation companies in bangalore", "home automation bangalore", "best home automation company bangalore", "KNX bangalore"],
})

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "VARELLI - Home Automation Bangalore",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Bangalore",
    "addressRegion": "Karnataka",
    "addressCountry": "IN"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Which is the best home automation company in Bangalore?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "VARELLI is widely recognized as the best home automation company in Bangalore for luxury residences, exclusively using the reliable, wired KNX open standard rather than proprietary wireless gadgets."
      }
    },
    {
      "@type": "Question",
      "name": "How much does home automation cost in Bangalore?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Costs vary significantly based on the project scope. A comprehensive KNX system for a luxury 4BHK villa in Bangalore typically ranges between ₹15 Lakhs to ₹45+ Lakhs depending on the chosen brands like Basalte, Ekinex, or Gira."
      }
    },
    {
      "@type": "Question",
      "name": "What is KNX and why is it better than other systems?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "KNX is a worldwide open standard for home and building automation. Unlike proprietary systems, it is decentralized, meaning no single point of failure. It works fully offline, requires no subscriptions, and has a proven lifespan of 30+ years."
      }
    },
    {
      "@type": "Question",
      "name": "Does VARELLI have a showroom in Bangalore?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we have an exclusive experience centre in Bangalore where you can physically interact with premium KNX keypads, motorized shading, and smart lighting solutions."
      }
    }
  ]
};

export default function HomeAutomationBangalorePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <section className="relative bg-[var(--surface-1)] border-b border-[var(--border)]">
        <div className="relative container-varelli pt-40 pb-16">
          <Breadcrumb
            items={[
              { name: "Home Automation", href: "/home-automation" },
              { name: "Bangalore", href: "/home-automation/bangalore" }
            ]}
          />
          <div className="mt-6 max-w-3xl">
            <h1 className="font-display text-[clamp(2.2rem,5vw,4rem)] font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text-primary)] mb-5">
              Home Automation in Bangalore — KNX Smart Home Systems | VARELLI
            </h1>
            <p className="text-[var(--text-secondary)] text-lg leading-relaxed font-body">
              Transform your residence with Bangalore&apos;s most reliable wired smart home infrastructure. We specialize in luxury KNX installations that work beautifully, forever.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding border-b border-[var(--border)]">
        <div className="container-varelli">
          <h2 className="font-display text-3xl font-bold mb-8">Why VARELLI Is Bangalore&apos;s Most Trusted Home Automation Company</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="p-4 border-b border-[var(--border)] font-bold">Feature</th>
                  <th className="p-4 border-b border-[var(--border)] font-bold text-[var(--gold)]">VARELLI</th>
                  <th className="p-4 border-b border-[var(--border)] font-bold">Generic Installer</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4 border-b border-[var(--border)]">Protocol</td>
                  <td className="p-4 border-b border-[var(--border)] font-semibold">KNX (ISO/IEC 14543 Open Standard)</td>
                  <td className="p-4 border-b border-[var(--border)] text-[var(--text-secondary)]">Proprietary WiFi App</td>
                </tr>
                <tr>
                  <td className="p-4 border-b border-[var(--border)]">Internet Required</td>
                  <td className="p-4 border-b border-[var(--border)] font-semibold">No — works fully offline</td>
                  <td className="p-4 border-b border-[var(--border)] text-[var(--text-secondary)]">Yes — cloud dependent</td>
                </tr>
                <tr>
                  <td className="p-4 border-b border-[var(--border)]">Lifespan</td>
                  <td className="p-4 border-b border-[var(--border)] font-semibold">30+ years</td>
                  <td className="p-4 border-b border-[var(--border)] text-[var(--text-secondary)]">3–5 years</td>
                </tr>
                <tr>
                  <td className="p-4 border-b border-[var(--border)]">Subscription Fees</td>
                  <td className="p-4 border-b border-[var(--border)] font-semibold">None</td>
                  <td className="p-4 border-b border-[var(--border)] text-[var(--text-secondary)]">₹12,000–₹36,000/year</td>
                </tr>
                <tr>
                  <td className="p-4 border-b border-[var(--border)]">Brands</td>
                  <td className="p-4 border-b border-[var(--border)] font-semibold">Basalte, Ekinex, Gira, JUNG</td>
                  <td className="p-4 border-b border-[var(--border)] text-[var(--text-secondary)]">Generic Chinese modules</td>
                </tr>
                <tr>
                  <td className="p-4 border-b border-[var(--border)]">MEP Coordination</td>
                  <td className="p-4 border-b border-[var(--border)] font-semibold">Full CAD drawings with architect</td>
                  <td className="p-4 border-b border-[var(--border)] text-[var(--text-secondary)]">No coordination</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section-padding border-b border-[var(--border)]">
        <div className="container-varelli">
          <h2 className="font-display text-3xl font-bold mb-8">Localities We Serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            <Link href="/home-automation/bangalore/whitefield" className="text-[var(--text-secondary)] hover:text-[var(--gold)]">Whitefield</Link>
            <Link href="/home-automation/bangalore/koramangala" className="text-[var(--text-secondary)] hover:text-[var(--gold)]">Koramangala</Link>
            <Link href="/home-automation/bangalore/indiranagar" className="text-[var(--text-secondary)] hover:text-[var(--gold)]">Indiranagar</Link>
            <Link href="/home-automation/bangalore/sadashivanagar" className="text-[var(--text-secondary)] hover:text-[var(--gold)]">Sadashivanagar</Link>
            <Link href="/home-automation/bangalore/hsr-layout" className="text-[var(--text-secondary)] hover:text-[var(--gold)]">Hsr Layout</Link>
            <Link href="/home-automation/bangalore/hebbal" className="text-[var(--text-secondary)] hover:text-[var(--gold)]">Hebbal</Link>
            <Link href="/home-automation/bangalore/yelahanka" className="text-[var(--text-secondary)] hover:text-[var(--gold)]">Yelahanka</Link>
            <Link href="/home-automation/bangalore/malleshwaram" className="text-[var(--text-secondary)] hover:text-[var(--gold)]">Malleshwaram</Link>
            <Link href="/home-automation/bangalore/jayanagar" className="text-[var(--text-secondary)] hover:text-[var(--gold)]">Jayanagar</Link>
            <Link href="/home-automation/bangalore/jp-nagar" className="text-[var(--text-secondary)] hover:text-[var(--gold)]">Jp Nagar</Link>
            <Link href="/home-automation/bangalore/banashankari" className="text-[var(--text-secondary)] hover:text-[var(--gold)]">Banashankari</Link>
            <Link href="/home-automation/bangalore/electronic-city" className="text-[var(--text-secondary)] hover:text-[var(--gold)]">Electronic City</Link>
            <Link href="/home-automation/bangalore/bellandur" className="text-[var(--text-secondary)] hover:text-[var(--gold)]">Bellandur</Link>
            <Link href="/home-automation/bangalore/devanahalli" className="text-[var(--text-secondary)] hover:text-[var(--gold)]">Devanahalli</Link>
            <Link href="/home-automation/bangalore/rajajinagar" className="text-[var(--text-secondary)] hover:text-[var(--gold)]">Rajajinagar</Link>
            <Link href="/home-automation/bangalore/basavangudi" className="text-[var(--text-secondary)] hover:text-[var(--gold)]">Basavangudi</Link>
            <Link href="/home-automation/bangalore/cunningham-road" className="text-[var(--text-secondary)] hover:text-[var(--gold)]">Cunningham Road</Link>
            <Link href="/home-automation/bangalore/lavelle-road" className="text-[var(--text-secondary)] hover:text-[var(--gold)]">Lavelle Road</Link>
            <Link href="/home-automation/bangalore/kalyan-nagar" className="text-[var(--text-secondary)] hover:text-[var(--gold)]">Kalyan Nagar</Link>
            <Link href="/home-automation/bangalore/marathahalli" className="text-[var(--text-secondary)] hover:text-[var(--gold)]">Marathahalli</Link>
            <Link href="/home-automation/bangalore/kr-puram" className="text-[var(--text-secondary)] hover:text-[var(--gold)]">Kr Puram</Link>
            <Link href="/home-automation/bangalore/bannerghatta-road" className="text-[var(--text-secondary)] hover:text-[var(--gold)]">Bannerghatta Road</Link>
            <Link href="/home-automation/bangalore/frazer-town" className="text-[var(--text-secondary)] hover:text-[var(--gold)]">Frazer Town</Link>
            <Link href="/home-automation/bangalore/richmond-town" className="text-[var(--text-secondary)] hover:text-[var(--gold)]">Richmond Town</Link>
            <Link href="/home-automation/bangalore/ulsoor" className="text-[var(--text-secondary)] hover:text-[var(--gold)]">Ulsoor</Link>
            <Link href="/home-automation/bangalore/btm-layout" className="text-[var(--text-secondary)] hover:text-[var(--gold)]">Btm Layout</Link>
            <Link href="/home-automation/bangalore/vijayanagar" className="text-[var(--text-secondary)] hover:text-[var(--gold)]">Vijayanagar</Link>
            <Link href="/home-automation/bangalore/rr-nagar" className="text-[var(--text-secondary)] hover:text-[var(--gold)]">Rr Nagar</Link>
            <Link href="/home-automation/bangalore/hebbal-kempapura" className="text-[var(--text-secondary)] hover:text-[var(--gold)]">Hebbal Kempapura</Link>
            <Link href="/home-automation/bangalore/sarjapur" className="text-[var(--text-secondary)] hover:text-[var(--gold)]">Sarjapur</Link>
          </div>
        </div>
      </section>

      <section className="section-padding border-b border-[var(--border)]">
        <div className="container-varelli">
          <h2 className="font-display text-3xl font-bold mb-8">All Bangalore Solutions</h2>
          <div className="flex flex-wrap gap-4">
            <Link href="/home-theatre/bangalore" className="glass-card px-6 py-3 hover:border-[var(--gold)] transition-colors">Home Theatre</Link>
            <Link href="/private-cinema/bangalore" className="glass-card px-6 py-3 hover:border-[var(--gold)] transition-colors">Private Cinema</Link>
            <Link href="/fresh-air-ventilation/bangalore" className="glass-card px-6 py-3 hover:border-[var(--gold)] transition-colors">Fresh Air Ventilation</Link>
            <Link href="/central-vacuum/bangalore" className="glass-card px-6 py-3 hover:border-[var(--gold)] transition-colors">Central Vacuum</Link>
            <Link href="/home-security/bangalore" className="glass-card px-6 py-3 hover:border-[var(--gold)] transition-colors">Home Security</Link>
          </div>
        </div>
      </section>

      <FAQSection faqs={[
        {
          question: "Which is the best home automation company in Bangalore?",
          answer: "VARELLI is widely recognized as the best home automation company in Bangalore for luxury residences, exclusively using the reliable, wired KNX open standard rather than proprietary wireless gadgets."
        },
        {
          question: "How much does home automation cost in Bangalore?",
          answer: "Costs vary significantly based on the project scope. A comprehensive KNX system for a luxury 4BHK villa in Bangalore typically ranges between ₹15 Lakhs to ₹45+ Lakhs depending on the chosen brands like Basalte, Ekinex, or Gira."
        },
        {
          question: "What is KNX and why is it better than other systems?",
          answer: "KNX is a worldwide open standard for home and building automation. Unlike proprietary systems, it is decentralized, meaning no single point of failure. It works fully offline, requires no subscriptions, and has a proven lifespan of 30+ years."
        },
        {
          question: "Does VARELLI have a showroom in Bangalore?",
          answer: "Yes, we have an exclusive experience centre in Bangalore where you can physically interact with premium KNX keypads, motorized shading, and smart lighting solutions."
        }
      ]} heading="Frequently Asked Questions" />

      <ServiceCTA serviceName="Home Automation" />
    </>
  )
}
