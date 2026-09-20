import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import Breadcrumb from '@/components/layout/Breadcrumb'
import FAQSection from '@/components/sections/service/FAQSection'
import ServiceCTA from '@/components/sections/service/ServiceCTA'
import Link from 'next/link'

export const metadata: Metadata = generatePageMetadata({
  title: "Home Security System in Versova, Mumbai — Hikvision CCTV & DoorBird | VARELLI",
  description: "Secure your Versova home with VARELLI's advanced Hikvision CCTV and DoorBird IP video intercom systems for ultimate peace of mind.",
  path: "/home-security/mumbai/versova"
})

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Home Security System in Versova",
  "provider": {
    "@type": "Organization",
    "name": "VARELLI"
  },
  "areaServed": "Versova, Mumbai"
}

export default function HomeSecurityVersova() {
  const breadcrumbItems = [
    { name: "Home", href: "/" },
    { name: "Home Security", href: "/home-security" },
    { name: "Mumbai", href: "/home-security/mumbai" },
    { name: "Versova", href: "/home-security/mumbai/versova" }
  ]

  const faqs = [
    {
      question: "Which is the best home security company in Versova, Mumbai?",
      answer: "VARELLI provides top-tier home security solutions in Versova, specializing in Hikvision CCTV integration and DoorBird IP video intercoms for high-rise apartments."
    },
    {
      question: "Do you offer CCTV installation in Versova, Mumbai?",
      answer: "Yes, we provide professional CCTV installation in Versova, offering seamless society CCTV integration and remote viewing capabilities for maximum security."
    },
    {
      question: "Is a video doorbell suitable for a Mumbai apartment in Versova?",
      answer: "Absolutely. We install DoorBird IP video intercoms which are perfect for apartment blocks in Versova, allowing you to see and speak to visitors from anywhere in the world."
    },
    {
      question: "What is the cost of a comprehensive home security system in Versova?",
      answer: "Our security packages in Versova start at ₹1.2L-₹2.5L for Essential setups, ₹3.5L-₹6L for Enhanced protection, and ₹8L-₹18L+ for Comprehensive estate security."
    },
    {
      question: "Can the security system integrate with our Versova society's existing infrastructure?",
      answer: "Yes, our systems are designed for high-rise gated security and can often integrate with existing society infrastructure in Versova for a unified security approach."
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
          <h1 className="text-4xl font-bold mb-6">Home Security System in Versova, Mumbai</h1>
          <p className="mb-4">
            Protect your residence in Versova with enterprise-grade security solutions. Tailored for Mumbai&apos;s high-rise gated communities, we offer seamless society CCTV integration and premium DoorBird IP video intercoms for apartment blocks.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Investment Tiers for Versova</h2>
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
