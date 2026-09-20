import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import Breadcrumb from '@/components/layout/Breadcrumb'
import FAQSection from '@/components/sections/service/FAQSection'
import ServiceCTA from '@/components/sections/service/ServiceCTA'
import Link from 'next/link'

export const metadata: Metadata = generatePageMetadata({
  title: "Fresh Air Ventilation System in Jp Nagar, Bangalore — Zehnder ERV | VARELLI",
  description: "Swiss Zehnder ComfoAir ERV whole-home fresh air ventilation for luxury residences in Jp Nagar, Bangalore. Filters PM2.5, reduces CO2, 95% energy recovery.",
  path: "/fresh-air-ventilation/bangalore/jp-nagar",
  keywords: ["fresh air ventilation Jp Nagar bangalore", "ERV system Jp Nagar", "home ventilation bangalore", "Zehnder ventilation bangalore"],
})

export default function FreshAirJpNagarPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "name": "VARELLI - Fresh Air Ventilation Jp Nagar",
        "description": "Premium Zehnder fresh air ventilation systems in Jp Nagar, Bangalore.",
        "areaServed": "Jp Nagar, Bangalore"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the best fresh air system in Jp Nagar, Bangalore?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The Zehnder ERV system is the premier choice for luxury homes in Jp Nagar, offering superior PM2.5 filtration and energy recovery."
            }
          },
          {
            "@type": "Question",
            "name": "Does Zehnder work in Bangalore?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, Zehnder systems are perfectly suited for Bangalore's climate, managing indoor air quality effectively."
            }
          },
          {
            "@type": "Question",
            "name": "How to improve indoor air quality in Jp Nagar?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Installing a whole-home ERV system helps filter out pollutants, reduces CO2 buildup, and maintains fresh air circulation."
            }
          },
          {
            "@type": "Question",
            "name": "What is the cost of ERV in Jp Nagar?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Systems range from ₹2.8L for studios up to ₹18L+ for large villas, depending on requirements."
            }
          },
          {
            "@type": "Question",
            "name": "Do I need ventilation in a sealed AC building?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, sealed AC environments lead to CO2 buildup. An ERV system provides continuous fresh air without losing cooling efficiency."
            }
          }
        ]
      }
    ]
  };

  const faqs = [
    { question: "What is the best fresh air system in Jp Nagar, Bangalore?", answer: "The Zehnder ERV system is the premier choice for luxury homes in Jp Nagar, offering superior PM2.5 filtration and energy recovery." },
    { question: "Does Zehnder work in Bangalore?", answer: "Yes, Zehnder systems are perfectly suited for Bangalore&apos;s climate, managing indoor air quality effectively." },
    { question: "How to improve indoor air quality in Jp Nagar?", answer: "Installing a whole-home ERV system helps filter out pollutants, reduces CO2 buildup, and maintains fresh air circulation." },
    { question: "What is the cost of ERV in Jp Nagar?", answer: "Systems range from ₹2.8L for studios up to ₹18L+ for large villas, depending on requirements." },
    { question: "Do I need ventilation in a sealed AC building?", answer: "Yes, sealed AC environments lead to CO2 buildup. An ERV system provides continuous fresh air without losing cooling efficiency." }
  ];

  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Breadcrumb
        items={[
          { name: "Home", href: "/" },
          { name: "Fresh Air Ventilation", href: "/fresh-air-ventilation" },
          { name: "Bangalore", href: "/fresh-air-ventilation/bangalore" },
          { name: "Jp Nagar", href: "/fresh-air-ventilation/bangalore/jp-nagar" }
        ]}
      />
      
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Fresh Air Ventilation in Jp Nagar, Bangalore — Zehnder ERV Systems</h1>
        
        <div className="prose max-w-none mb-12">
          <p>
            In dense urban areas like Jp Nagar, maintaining optimal indoor air quality is essential. With rising AQI levels and the prevalence of sealed air-conditioned buildings, CO2 buildup and indoor pollutants are significant concerns. Our Zehnder ERV systems provide a constant supply of filtered, fresh air while exhausting stale air, ensuring a healthy environment for your family.
          </p>
        </div>

        <h2 className="text-3xl font-semibold mb-6">System Tiers for Jp Nagar Homes</h2>
        <ul className="space-y-4 mb-12">
          <li className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold">Studio System</h3>
            <p className="text-gray-700">₹2.8L–₹4.5L — Ideal for compact luxury apartments.</p>
          </li>
          <li className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold">Residence System</h3>
            <p className="text-gray-700">₹5.5L–₹9L — Designed for premium multi-bedroom residences.</p>
          </li>
          <li className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold">Villa System</h3>
            <p className="text-gray-700">₹11L–₹18L+ — Comprehensive solutions for expansive luxury villas.</p>
          </li>
        </ul>
        
        <FAQSection title="Frequently Asked Questions" faqs={faqs} />
      </section>

      <ServiceCTA serviceName="Fresh Air Ventilation" />
    </main>
  )
}
