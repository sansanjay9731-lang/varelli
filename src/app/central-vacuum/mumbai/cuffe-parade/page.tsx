import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import Breadcrumb from '@/components/layout/Breadcrumb'
import FAQSection from '@/components/sections/service/FAQSection'
import ServiceCTA from '@/components/sections/service/ServiceCTA'
import Link from 'next/link'

export const metadata: Metadata = generatePageMetadata({
  title: "Central Vacuum System in Cuffe Parade, Mumbai — Drainvac Built-In | VARELLI",
  description: "Install a powerful Drainvac central vacuum system in Cuffe Parade. Built-in vacuum solutions perfect for Mumbai homes and apartments.",
  path: "/central-vacuum/mumbai/cuffe-parade"
})

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Central Vacuum System in Cuffe Parade",
  "provider": {
    "@type": "Organization",
    "name": "VARELLI"
  },
  "areaServed": "Cuffe Parade, Mumbai"
}

export default function CentralVacuumCuffeparade() {
  const breadcrumbItems = [
    { name: "Home", href: "/" },
    { name: "Central Vacuum", href: "/central-vacuum" },
    { name: "Mumbai", href: "/central-vacuum/mumbai" },
    { name: "Cuffe Parade", href: "/central-vacuum/mumbai/cuffe-parade" }
  ]

  const faqs = [
    {
      question: "Is a central vacuum system suitable for apartments in Cuffe Parade, Mumbai?",
      answer: "Yes, our Drainvac systems are perfect for Mumbai high-rises. They are designed to fit in compact utility areas while delivering superior suction power to handle sea salt dust and sand."
    },
    {
      question: "What is the cost of a Drainvac installation in Cuffe Parade?",
      answer: "Costs in Cuffe Parade range from ₹1.8L-₹2.8L for a compact setup, ₹3.2L-₹5.5L for residential, and ₹6.5L-₹12L+ for larger estates."
    },
    {
      question: "How does a built-in vacuum system handle sand and dust in Cuffe Parade?",
      answer: "Living near the coast means dealing with sand and fine dust. A built-in vacuum system provides 3x to 5x more suction power than portable vacuums, completely exhausting microscopic dust outside your living area."
    },
    {
      question: "Do you provide Drainvac maintenance in Cuffe Parade, Mumbai?",
      answer: "Yes, we offer comprehensive maintenance and support for all Drainvac central vacuum systems installed in Cuffe Parade and across Mumbai."
    },
    {
      question: "Can a central vacuum be installed in an existing home in Cuffe Parade?",
      answer: "While best installed during construction or renovation, we can retrofit built-in vacuum systems in existing Cuffe Parade homes using creative routing techniques."
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
          <h1 className="text-4xl font-bold mb-6">Central Vacuum System in Cuffe Parade, Mumbai</h1>
          <p className="mb-4">
            Upgrade your Cuffe Parade home with a state-of-the-art Drainvac built-in vacuum system. Perfectly suited for Mumbai high-rises, our systems tackle sea salt dust and sand from beaches effortlessly, with compact motor units that fit seamlessly into utility areas.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Investment Tiers for Cuffe Parade</h2>
          <ul className="list-disc pl-6 mb-8">
            <li><strong>Compact:</strong> ₹1.8L – ₹2.8L</li>
            <li><strong>Residential:</strong> ₹3.2L – ₹5.5L</li>
            <li><strong>Estate:</strong> ₹6.5L – ₹12L+</li>
          </ul>
        </div>
      </section>

      <FAQSection faqs={faqs} />
      <ServiceCTA serviceName="Central Vacuum" />
    </main>
  )
}
