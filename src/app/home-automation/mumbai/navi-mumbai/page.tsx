import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import Breadcrumb from '@/components/layout/Breadcrumb'
import FAQSection from '@/components/sections/service/FAQSection'
import ServiceCTA from '@/components/sections/service/ServiceCTA'
import Link from 'next/link'

export const metadata: Metadata = generatePageMetadata({
  path: "/home-automation/mumbai/navi-mumbai",
title: "Smart Home Automation in Navi Mumbai — KNX Systems for Planned City Luxury Residences",
  description: "Experience ultra-luxury European craftsmanship with KNX certified home automation systems in Navi Mumbai. Brands include Basalte, Ekinex, Sonus Faber and more.",
})

export default function Page() {
  const breadcrumbItems = [
    { name: "Home", href: "/" },
    { name: "Home Automation", href: "/home-automation" },
    { name: "Navi Mumbai", href: "/home-automation/mumbai/navi-mumbai" }
  ]

  const faqs = [
    {
      question: "What is the typical cost of home automation in Navi Mumbai?",
      answer: "Pricing for luxury automation in Navi Mumbai ranges from ₹4.8L–₹7.5L for Core systems, ₹14.5L–₹24L for Architectural, and ₹38L–₹65L+ for Grand Estates."
    },
    {
      question: "Do you provide KNX systems in Navi Mumbai?",
      answer: "Yes, we specialise in architecture-first, KNX-certified systems featuring premium brands like Basalte and Ekinex."
    },
    {
      question: "Can I control my home from my phone?",
      answer: "Absolutely. Our systems offer secure, seamless control from your smartphone, tablets, and dedicated touch panels."
    },
    {
      question: "What audio brands do you install?",
      answer: "We install audiophile-grade systems from brands like Sonus Faber, KEF, and more, integrated flawlessly into your home."
    },
    {
      question: "Do you handle security systems as well?",
      answer: "Yes, we provide integrated smart security, including DoorBird entry systems, access control, and CCTV integration."
    },
    {
      question: "How do I get a consultation in Navi Mumbai?",
      answer: "You can reach us via WhatsApp at +91 99649 84695 to schedule a private consultation for your property."
    }
  ]

  const schemaData = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "FAQPage"],
    "name": "VARELLI Home Automation - Navi Mumbai",
    "url": "https://varelli.co.in/home-automation/mumbai/navi-mumbai",
    "telephone": "+91 99649 84695",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <Breadcrumb items={breadcrumbItems} />
      <section className="hero w-full py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <span className="badge">Ultra-Luxury</span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Smart Home Automation in Navi Mumbai — KNX Systems for Planned City Luxury Residences</h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">European Craftsmanship for Kharghar, Vashi, Seawoods, planned townships, senior executives</p>
        </div>
      </section>
      
      <section className="services w-full py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-8">Services for Navi Mumbai Residences</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white shadow-sm">
              <h3 className="text-xl font-bold mb-4">KNX Automation</h3>
              <p>Architecture-first automation with Basalte and Ekinex.</p>
            </div>
            <div className="p-6 bg-white shadow-sm">
              <h3 className="text-xl font-bold mb-4">High-End Audio</h3>
              <p>Sonus Faber and KEF systems for the ultimate listening experience.</p>
            </div>
            <div className="p-6 bg-white shadow-sm">
              <h3 className="text-xl font-bold mb-4">Climate & Vacuum</h3>
              <p>Zehnder ERV and Drainvac central vacuum integration.</p>
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} title="Frequently Asked Questions" />
      <ServiceCTA serviceName="Home Automation" />
    </main>
  )
}
