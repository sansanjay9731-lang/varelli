import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import FAQSection from '@/components/sections/service/FAQSection'
import ServiceCTA from '@/components/sections/service/ServiceCTA'
import Link from 'next/link'

export function generateMetadata(): Metadata {
  return generatePageMetadata({
    title: 'Home Theatre Company in Jp Nagar, Bangalore — Dolby Atmos | VARELLI',
    description: 'Top-rated home theatre company in Jp Nagar, Bangalore. Experience Dolby Atmos surround sound with premium brands.',
    path: '/home-theatre-company-jp-nagar-bangalore'
  })
}

export default function HomeTheatreCompanyPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "FAQPage"],
    "name": "VARELLI - Home Theatre Company Jp Nagar",
    "description": "Premium home theatre design and installation in Jp Nagar, Bangalore.",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "best home theatre company jp-nagar bangalore",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "VARELLI offers bespoke home theatre design and installation in Jp Nagar, featuring top brands like Sonus Faber and KEF."
        }
      },
      {
        "@type": "Question",
        "name": "home theatre installation cost jp-nagar",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Costs range from ₹8L for Essentials 5.1 to over ₹42L for Reference Cinema 9.4.6 systems."
        }
      },
      {
        "@type": "Question",
        "name": "dolby atmos jp-nagar bangalore",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "VARELLI designs and installs custom Dolby Atmos home theatres in Jp Nagar."
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
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Home Theatre Company in Jp Nagar, Bangalore</h1>
          
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">Why VARELLI Is Jp Nagar&apos;s Best Home Theatre Company</h2>
          
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
            <h3 className="text-xl font-semibold mb-4">Explore More Services in Jp Nagar</h3>
            <ul className="flex flex-col gap-2">
              <li><Link href={`/home-theatre/bangalore/jp-nagar`} className="text-blue-400 hover:underline">Home Theatre in Jp Nagar</Link></li>
              <li><Link href={`/private-cinema/bangalore/jp-nagar`} className="text-blue-400 hover:underline">Private Cinema in Jp Nagar</Link></li>
            </ul>
          </div>
          
          <FAQSection faqs={schema.mainEntity.map((q: any) => ({ question: q.name, answer: q.acceptedAnswer.text }))} />
          <ServiceCTA serviceName="Home Theatre" />
        </div>
      </main>
    </>
  )
}
