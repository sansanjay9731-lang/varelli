import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import Breadcrumb from '@/components/layout/Breadcrumb'
import FAQSection from '@/components/sections/service/FAQSection'
import ServiceCTA from '@/components/sections/service/ServiceCTA'
import Link from 'next/link'

export const metadata: Metadata = generatePageMetadata({
  title: "Home Security System in Wadala, Mumbai — Hikvision CCTV & DoorBird | VARELLI",
  description: "Secure your Wadala home with VARELLI's advanced Hikvision CCTV and DoorBird IP video intercom systems for ultimate peace of mind.",
  path: "/home-security/mumbai/wadala"
})

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Home Security System in Wadala",
  "provider": {
    "@type": "Organization",
    "name": "VARELLI"
  },
  "areaServed": "Wadala, Mumbai"
}

export default function HomeSecurityWadala() {
  const breadcrumbItems = [
    { name: "Home", href: "/" },
    { name: "Home Security", href: "/home-security" },
    { name: "Mumbai", href: "/home-security/mumbai" },
    { name: "Wadala", href: "/home-security/mumbai/wadala" }
  ]

  const faqs = [
    {
      question: "Which is the best home security company in Wadala, Mumbai?",
      answer: "VARELLI provides top-tier home security solutions in Wadala, specializing in Hikvision CCTV integration and DoorBird IP video intercoms for high-rise apartments."
    },
    {
      question: "Do you offer CCTV installation in Wadala, Mumbai?",
      answer: "Yes, we provide professional CCTV installation in Wadala, offering seamless society CCTV integration and remote viewing capabilities for maximum security."
    },
    {
      question: "Is a video doorbell suitable for a Mumbai apartment in Wadala?",
      answer: "Absolutely. We install DoorBird IP video intercoms which are perfect for apartment blocks in Wadala, allowing you to see and speak to visitors from anywhere in the world."
    },
    {
      question: "What is the cost of a comprehensive home security system in Wadala?",
      answer: "Our security packages in Wadala start at ₹1.2L-₹2.5L for Essential setups, ₹3.5L-₹6L for Enhanced protection, and ₹8L-₹18L+ for Comprehensive estate security."
    },
    {
      question: "Can the security system integrate with our Wadala society's existing infrastructure?",
      answer: "Yes, our systems are designed for high-rise gated security and can often integrate with existing society infrastructure in Wadala for a unified security approach."
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
          <h1 className="text-4xl font-bold mb-6">Home Security System in Wadala, Mumbai</h1>
          <p className="mb-4">
            Protect your residence in Wadala with enterprise-grade security solutions. Tailored for Mumbai&apos;s high-rise gated communities, we offer seamless society CCTV integration and premium DoorBird IP video intercoms for apartment blocks.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Investment Tiers for Wadala</h2>
          <ul className="list-disc pl-6 mb-8">
            <li><strong>Essential:</strong> ₹1.2L – ₹2.5L</li>
            <li><strong>Enhanced:</strong> ₹3.5L – ₹6L</li>
            <li><strong>Comprehensive:</strong> ₹8L – ₹18L+</li>
          </ul>
        </div>
      </section>

      <FAQSection faqs={faqs} />
      <ServiceCTA serviceName="Home Security" />
    </main>
  )
}
