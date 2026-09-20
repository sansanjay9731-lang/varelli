import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import Breadcrumb from '@/components/layout/Breadcrumb'
import FAQSection from '@/components/sections/service/FAQSection'
import ServiceCTA from '@/components/sections/service/ServiceCTA'
import Link from 'next/link'

export const metadata: Metadata = generatePageMetadata({
  title: "Home Security System in Lower Parel, Mumbai — Hikvision CCTV & DoorBird | VARELLI",
  description: "Secure your Lower Parel home with VARELLI's advanced Hikvision CCTV and DoorBird IP video intercom systems for ultimate peace of mind.",
  path: "/home-security/mumbai/lower-parel"
})

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Home Security System in Lower Parel",
  "provider": {
    "@type": "Organization",
    "name": "VARELLI"
  },
  "areaServed": "Lower Parel, Mumbai"
}

export default function HomeSecurityLowerparel() {
  const breadcrumbItems = [
    { name: "Home", href: "/" },
    { name: "Home Security", href: "/home-security" },
    { name: "Mumbai", href: "/home-security/mumbai" },
    { name: "Lower Parel", href: "/home-security/mumbai/lower-parel" }
  ]

  const faqs = [
    {
      question: "Which is the best home security company in Lower Parel, Mumbai?",
      answer: "VARELLI provides top-tier home security solutions in Lower Parel, specializing in Hikvision CCTV integration and DoorBird IP video intercoms for high-rise apartments."
    },
    {
      question: "Do you offer CCTV installation in Lower Parel, Mumbai?",
      answer: "Yes, we provide professional CCTV installation in Lower Parel, offering seamless society CCTV integration and remote viewing capabilities for maximum security."
    },
    {
      question: "Is a video doorbell suitable for a Mumbai apartment in Lower Parel?",
      answer: "Absolutely. We install DoorBird IP video intercoms which are perfect for apartment blocks in Lower Parel, allowing you to see and speak to visitors from anywhere in the world."
    },
    {
      question: "What is the cost of a comprehensive home security system in Lower Parel?",
      answer: "Our security packages in Lower Parel start at ₹1.2L-₹2.5L for Essential setups, ₹3.5L-₹6L for Enhanced protection, and ₹8L-₹18L+ for Comprehensive estate security."
    },
    {
      question: "Can the security system integrate with our Lower Parel society's existing infrastructure?",
      answer: "Yes, our systems are designed for high-rise gated security and can often integrate with existing society infrastructure in Lower Parel for a unified security approach."
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
          <h1 className="text-4xl font-bold mb-6">Home Security System in Lower Parel, Mumbai</h1>
          <p className="mb-4">
            Protect your residence in Lower Parel with enterprise-grade security solutions. Tailored for Mumbai&apos;s high-rise gated communities, we offer seamless society CCTV integration and premium DoorBird IP video intercoms for apartment blocks.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Investment Tiers for Lower Parel</h2>
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
