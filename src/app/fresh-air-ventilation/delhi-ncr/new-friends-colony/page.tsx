import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import Breadcrumb from '@/components/layout/Breadcrumb'
import FAQSection from '@/components/sections/service/FAQSection'
import ServiceCTA from '@/components/sections/service/ServiceCTA'
import Link from 'next/link'

export const metadata: Metadata = generatePageMetadata({
  title: "Fresh Air Ventilation in New Friends Colony, Delhi NCR — Zehnder ERV | VARELLI",
  description: "Combat Delhi's severe AQI with Zehnder ERV fresh air ventilation systems in New Friends Colony. H13 HEPA filtration for farmhouses and apartments.",
  path: "/fresh-air-ventilation/delhi-ncr/new-friends-colony"
})

export default function FreshAirVentilationnewfriendscolonyPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Fresh Air Ventilation Installation in New Friends Colony",
    "provider": {
      "@type": "Organization",
      "name": "VARELLI"
    },
    "areaServed": "New Friends Colony, Delhi NCR"
  }

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Breadcrumb 
        items={[
          { name: "Home", href: "/" },
          { name: "Fresh Air Ventilation", href: "/fresh-air-ventilation" },
          { name: "Delhi NCR", href: "/fresh-air-ventilation/delhi-ncr" },
          { name: "New Friends Colony", href: "/fresh-air-ventilation/delhi-ncr/new-friends-colony" }
        ]} 
      />
      
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Fresh Air Ventilation in New Friends Colony, Delhi NCR</h1>
          <p className="text-lg md:text-xl text-[#A0A0A5] max-w-3xl mb-8">
            Protect your family from Delhi&apos;s severe winter pollution (AQI 300–500) with premium Zehnder ERV 
            ventilation. Essential for sealed AC farmhouses and luxury homes in New Friends Colony, featuring 
            Zehnder H13 HEPA filtration to eliminate PM2.5 and PM10 particles.
          </p>
        </div>
      </section>

      <section className="py-16 bg-[#121216]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Installation Tiers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4">Apartment</h3>
              <p className="text-[#A0A0A5] mb-4">₹2.8L – ₹4.5L</p>
              <p className="text-sm">Compact, high-efficiency Zehnder ERV solutions for luxury apartments.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4">Bungalow</h3>
              <p className="text-[#A0A0A5] mb-4">₹5.5L – ₹9L</p>
              <p className="text-sm">Comprehensive whole-house fresh air ventilation for multi-story bungalows.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border-2 border-gray-900">
              <h3 className="text-xl font-bold mb-4">Farmhouse / Estate</h3>
              <p className="text-[#A0A0A5] mb-4">₹11L – ₹18L+</p>
              <p className="text-sm">Commercial-grade residential ventilation for large sealed farmhouses.</p>
            </div>
          </div>
        </div>
      </section>

      <FAQSection 
        faqs={[
          {
            question: "Do you install fresh air ventilation in New Friends Colony Delhi?",
            answer: "Yes, we install high-end Zehnder ERV systems across New Friends Colony and the Delhi NCR region."
          },
          {
            question: "Why choose an ERV over an air purifier vs ERV in Delhi?",
            answer: "Air purifiers only recycle stale indoor air. A Zehnder ERV brings in fresh, filtered outdoor air while exhausting stale air and reducing CO2 buildup, which is critical in sealed homes during Delhi winters."
          },
          {
            question: "Are you an authorized Zehnder installer in Delhi NCR?",
            answer: "Yes, we specify and install premium Zehnder ventilation systems equipped with H13 HEPA filters."
          },
          {
            question: "Can this system handle severe AQI of 500+?",
            answer: "Yes, the multi-stage filtration including H13 HEPA effectively blocks PM2.5 and PM10 pollutants even on the worst pollution days."
          },
          {
            question: "Is it suitable for large farmhouses?",
            answer: "Absolutely. Our Farmhouse and Estate tier systems are specifically designed to handle the high volume requirements of large properties."
          }
        ]} 
      />

      <ServiceCTA serviceName="Fresh Air Ventilation" />
    </main>
  )
}
