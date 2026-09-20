import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import FAQSection from '@/components/sections/service/FAQSection'
import ServiceCTA from '@/components/sections/service/ServiceCTA'
import Link from 'next/link'

export function generateMetadata(): Metadata {
  return generatePageMetadata({
    title: 'Home Theatre Company in Frazer Town, Bangalore — Dolby Atmos | VARELLI',
    description: 'Top-rated home theatre company in Frazer Town, Bangalore. Experience Dolby Atmos surround sound with premium brands.',
    path: '/home-theatre-company-frazer-town-bangalore'
  })
}

export default function HomeTheatreCompanyPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "FAQPage"],
    "name": "VARELLI - Home Theatre Company Frazer Town",
    "description": "Premium home theatre design and installation in Frazer Town, Bangalore.",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "best home theatre company frazer-town bangalore",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "VARELLI offers bespoke home theatre design and installation in Frazer Town, featuring top brands like Sonus Faber and KEF."
        }
      },
      {
        "@type": "Question",
        "name": "home theatre installation cost frazer-town",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Costs range from ₹8L for Essentials 5.1 to over ₹42L for Reference Cinema 9.4.6 systems."
        }
      },
      {
        "@type": "Question",
        "name": "dolby atmos frazer-town bangalore",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "VARELLI designs and installs custom Dolby Atmos home theatres in Frazer Town."
        }
      },
      {
        "@type": "Question",
        "name": "home theatre brands bangalore",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer premium brands including Sonus Faber, KEF, JBL Synthesis, Barco, and Anthem."
        }
      },
      {
        "@type": "Question",
        "name": "home theatre warranty bangalore",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "VARELLI provides comprehensive warranty and support for all installed systems."
        }
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <main className="bg-black text-white min-h-screen">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Home Theatre Company in Frazer Town, Bangalore</h1>
          
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">Why VARELLI Is Frazer Town&apos;s Best Home Theatre Company</h2>
          
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-4">Features & Brands</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Premium Brands:</strong> Sonus Faber, KEF, JBL Synthesis, Barco, Anthem</li>
              <li><strong>Process Phases:</strong> Acoustic Design, Wiring, Calibration, Final Handover</li>
              <li><strong>Warranty:</strong> Comprehensive system warranty and ongoing support</li>
            </ul>
          </div>
          
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-4">Our Home Theatre Tiers</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border border-gray-800 p-6 rounded-lg">
                <h4 className="text-lg font-bold mb-2">Essentials 5.1</h4>
                <p>From ₹8L</p>
              </div>
              <div className="border border-gray-800 p-6 rounded-lg">
                <h4 className="text-lg font-bold mb-2">Dolby Atmos 7.2.4</h4>
                <p>From ₹18L</p>
              </div>
              <div className="border border-gray-800 p-6 rounded-lg">
                <h4 className="text-lg font-bold mb-2">Reference Cinema 9.4.6</h4>
                <p>From ₹42L</p>
              </div>
            </div>
          </div>
          
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-4">Explore More Services in Frazer Town</h3>
            <ul className="flex flex-col gap-2">
              <li><Link href={`/home-theatre/bangalore/frazer-town`} className="text-blue-400 hover:underline">Home Theatre in Frazer Town</Link></li>
              <li><Link href={`/private-cinema/bangalore/frazer-town`} className="text-blue-400 hover:underline">Private Cinema in Frazer Town</Link></li>
            </ul>
          </div>
          
          <FAQSection faqs={schema.mainEntity.map((q: any) => ({ question: q.name, answer: q.acceptedAnswer.text }))} />
          <ServiceCTA serviceName="Home Theatre" />
        </div>
      </main>
    </>
  )
}
