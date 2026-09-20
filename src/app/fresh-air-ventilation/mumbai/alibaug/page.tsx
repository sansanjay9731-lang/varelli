import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import Breadcrumb from '@/components/layout/Breadcrumb'
import FAQSection from '@/components/sections/service/FAQSection'
import ServiceCTA from '@/components/sections/service/ServiceCTA'
import Link from 'next/link'

export const metadata: Metadata = generatePageMetadata({
  title: "Fresh Air Ventilation in Alibaug, Mumbai — Zehnder ERV | VARELLI",
  description: "Breathe clean air in Alibaug with VARELLI's premium Zehnder fresh air ventilation systems. Expert installation for apartments & villas.",
  path: "/fresh-air-ventilation/mumbai/alibaug"
})

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Fresh Air Ventilation in Alibaug",
  "provider": {
    "@type": "Organization",
    "name": "VARELLI"
  },
  "areaServed": "Alibaug, Mumbai"
}

export default function FreshAirVentilationAlibaug() {
  const breadcrumbItems = [
    { name: "Home", href: "/" },
    { name: "Fresh Air Ventilation", href: "/fresh-air-ventilation" },
    { name: "Mumbai", href: "/fresh-air-ventilation/mumbai" },
    { name: "Alibaug", href: "/fresh-air-ventilation/mumbai/alibaug" }
  ]

  const faqs = [
    {
      question: "Why do I need a fresh air system in Alibaug, Mumbai?",
      answer: "Mumbai's high-rise sealed AC apartments often suffer from poor natural ventilation and high pollution. A Zehnder ERV system brings in filtered fresh air while exhausting stale air, maintaining optimal indoor air quality in Alibaug."
    },
    {
      question: "Are Zehnder ERV units suitable for Mumbai's coastal climate?",
      answer: "Yes, our Zehnder systems offer excellent sea salt corrosion resistance and are typhoon-resistant, making them ideal for coastal areas like Alibaug."
    },
    {
      question: "How much does a fresh air ventilation system cost in Alibaug?",
      answer: "Costs typically range from ₹2.8L-₹4.5L for an apartment, ₹5.5L-₹9L for a penthouse, and ₹11L-₹18L+ for a duplex or villa in Alibaug, depending on the area and specific requirements."
    },
    {
      question: "Can this system improve indoor air quality in my Alibaug home?",
      answer: "Absolutely. The system filters out outdoor pollutants, PM2.5 particles, and allergens, significantly enhancing the indoor air quality in your Alibaug residence."
    },
    {
      question: "How long does installation take for an apartment in Alibaug?",
      answer: "A standard installation for an apartment in Alibaug typically takes 3-5 days, perfectly coordinated with your interior design team."
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
          <h1 className="text-4xl font-bold mb-6">Fresh Air Ventilation in Alibaug, Mumbai</h1>
          <p className="mb-4">
            Discover premium Zehnder ERV systems designed for Mumbai&apos;s high-rise sealed AC apartments. Experience unmatched indoor air quality in Alibaug with solutions tailored for coastal environments, featuring sea salt corrosion resistance and typhoon-resistant construction.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Investment Tiers for Alibaug</h2>
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
