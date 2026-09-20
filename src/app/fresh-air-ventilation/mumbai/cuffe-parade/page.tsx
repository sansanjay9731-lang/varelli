import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import Breadcrumb from '@/components/layout/Breadcrumb'
import FAQSection from '@/components/sections/service/FAQSection'
import ServiceCTA from '@/components/sections/service/ServiceCTA'
import Link from 'next/link'

export const metadata: Metadata = generatePageMetadata({
  title: "Fresh Air Ventilation in Cuffe Parade, Mumbai — Zehnder ERV | VARELLI",
  description: "Breathe clean air in Cuffe Parade with VARELLI's premium Zehnder fresh air ventilation systems. Expert installation for apartments & villas.",
  path: "/fresh-air-ventilation/mumbai/cuffe-parade"
})

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Fresh Air Ventilation in Cuffe Parade",
  "provider": {
    "@type": "Organization",
    "name": "VARELLI"
  },
  "areaServed": "Cuffe Parade, Mumbai"
}

export default function FreshAirVentilationCuffeparade() {
  const breadcrumbItems = [
    { name: "Home", href: "/" },
    { name: "Fresh Air Ventilation", href: "/fresh-air-ventilation" },
    { name: "Mumbai", href: "/fresh-air-ventilation/mumbai" },
    { name: "Cuffe Parade", href: "/fresh-air-ventilation/mumbai/cuffe-parade" }
  ]

  const faqs = [
    {
      question: "Why do I need a fresh air system in Cuffe Parade, Mumbai?",
      answer: "Mumbai's high-rise sealed AC apartments often suffer from poor natural ventilation and high pollution. A Zehnder ERV system brings in filtered fresh air while exhausting stale air, maintaining optimal indoor air quality in Cuffe Parade."
    },
    {
      question: "Are Zehnder ERV units suitable for Mumbai's coastal climate?",
      answer: "Yes, our Zehnder systems offer excellent sea salt corrosion resistance and are typhoon-resistant, making them ideal for coastal areas like Cuffe Parade."
    },
    {
      question: "How much does a fresh air ventilation system cost in Cuffe Parade?",
      answer: "Costs typically range from ₹2.8L-₹4.5L for an apartment, ₹5.5L-₹9L for a penthouse, and ₹11L-₹18L+ for a duplex or villa in Cuffe Parade, depending on the area and specific requirements."
    },
    {
      question: "Can this system improve indoor air quality in my Cuffe Parade home?",
      answer: "Absolutely. The system filters out outdoor pollutants, PM2.5 particles, and allergens, significantly enhancing the indoor air quality in your Cuffe Parade residence."
    },
    {
      question: "How long does installation take for an apartment in Cuffe Parade?",
      answer: "A standard installation for an apartment in Cuffe Parade typically takes 3-5 days, perfectly coordinated with your interior design team."
    }
  ]

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Breadcrumb items={breadcrumbItems} />
      
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">Fresh Air Ventilation in Cuffe Parade, Mumbai</h1>
          <p className="mb-4">
            Discover premium Zehnder ERV systems designed for Mumbai&apos;s high-rise sealed AC apartments. Experience unmatched indoor air quality in Cuffe Parade with solutions tailored for coastal environments, featuring sea salt corrosion resistance and typhoon-resistant construction.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Investment Tiers for Cuffe Parade</h2>
          <ul className="list-disc pl-6 mb-8">
            <li><strong>Apartment:</strong> ₹2.8L – ₹4.5L</li>
            <li><strong>Penthouse:</strong> ₹5.5L – ₹9L</li>
            <li><strong>Duplex/Villa:</strong> ₹11L – ₹18L+</li>
          </ul>
        </div>
      </section>

      <FAQSection faqs={faqs} />
      <ServiceCTA serviceName="Fresh Air Ventilation" />
    </main>
  )
}
