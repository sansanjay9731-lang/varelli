import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import Breadcrumb from '@/components/layout/Breadcrumb'
import FAQSection from '@/components/sections/service/FAQSection'
import ServiceCTA from '@/components/sections/service/ServiceCTA'
import Link from 'next/link'

export const metadata: Metadata = generatePageMetadata({
  title: "Home Security System in Koramangala, Bangalore — CCTV & Smart Access | VARELLI",
  description: "Integrated smart home security — Hikvision 4K CCTV, DoorBird video doorbell, KNX access control for luxury residences in Koramangala, Bangalore.",
  path: "/home-security/bangalore/koramangala",
  keywords: ["home security Koramangala bangalore", "CCTV installation Koramangala", "smart security bangalore", "home security company bangalore"],
})

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "VARELLI - Home Security Koramangala",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Koramangala",
    "addressRegion": "Karnataka",
    "addressCountry": "IN"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Who is the best home security company in Koramangala, Bangalore?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "VARELLI provides the best home security systems in Koramangala, integrating premium brands like Hikvision and DoorBird for robust and seamless security."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide CCTV camera installation in Koramangala?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we specialize in high-end CCTV camera installation in Koramangala, featuring 4K IP cameras with AI analytics and KNX integration."
      }
    },
    {
      "@type": "Question",
      "name": "Is DoorBird video doorbell available in Bangalore?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, VARELLI is an authorized integrator for DoorBird video doorbells in Bangalore, providing smart access control for luxury residences."
      }
    },
    {
      "@type": "Question",
      "name": "How much does a smart home security system cost in Koramangala?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our security systems in Koramangala range from ₹1.2 Lakhs for essential setups to over ₹18 Lakhs for comprehensive, multi-layered security."
      }
    },
    {
      "@type": "Question",
      "name": "Can security systems be integrated with home automation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. Our home security systems integrate perfectly with KNX smart home systems, allowing automated lighting and alarms during security events."
      }
    }
  ]
};

export default function HomeSecurityKoramangalaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <section className="relative bg-[var(--surface-1)] border-b border-[var(--border)]">
        <div className="relative container-varelli pt-40 pb-16">
          <Breadcrumb
            items={[
              { name: "Home Security", href: "/home-security" },
              { name: "Bangalore", href: "/home-security/bangalore" },
              { name: "Koramangala", href: "/home-security/bangalore/koramangala" }
            ]}
          />
          <div className="mt-6 max-w-3xl">
            <h1 className="font-display text-[clamp(2.2rem,5vw,4rem)] font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text-primary)] mb-5">
              Smart Home Security in Koramangala, Bangalore — Hikvision CCTV & DoorBird Access
            </h1>
            <p className="text-[var(--text-secondary)] text-lg leading-relaxed font-body">
              Premium home security installations for luxury villas and apartments in Koramangala. We integrate Hikvision 4K cameras, DoorBird intercoms, and KNX access control for uncompromised safety.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding border-b border-[var(--border)]">
        <div className="container-varelli">
          <h2 className="font-display text-3xl font-bold mb-8">Security Tiers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-6">
              <h3 className="text-xl font-bold mb-4">Essential</h3>
              <p className="text-[var(--text-secondary)] mb-4">₹1.2L – ₹2.5L</p>
              <ul className="list-disc pl-5 text-[var(--text-secondary)]">
                <li>Basic CCTV coverage</li>
                <li>Video doorbell</li>
                <li>App-based access</li>
              </ul>
            </div>
            <div className="glass-card p-6 border-[var(--gold)] border">
              <h3 className="text-xl font-bold mb-4">Enhanced</h3>
              <p className="text-[var(--text-secondary)] mb-4">₹3.5L – ₹6L</p>
              <ul className="list-disc pl-5 text-[var(--text-secondary)]">
                <li>4K AI cameras</li>
                <li>DoorBird intercom</li>
                <li>Perimeter protection</li>
              </ul>
            </div>
            <div className="glass-card p-6">
              <h3 className="text-xl font-bold mb-4">Comprehensive</h3>
              <p className="text-[var(--text-secondary)] mb-4">₹8L – ₹18L+</p>
              <ul className="list-disc pl-5 text-[var(--text-secondary)]">
                <li>Multi-layered security</li>
                <li>KNX access control</li>
                <li>24/7 monitoring integration</li>
                <li>Biometric entry</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={[
        {
          question: "Who is the best home security company in Koramangala, Bangalore?",
          answer: "VARELLI provides the best home security systems in Koramangala, integrating premium brands like Hikvision and DoorBird for robust and seamless security."
        },
        {
          question: "Do you provide CCTV camera installation in Koramangala?",
          answer: "Yes, we specialize in high-end CCTV camera installation in Koramangala, featuring 4K IP cameras with AI analytics and KNX integration."
        },
        {
          question: "Is DoorBird video doorbell available in Bangalore?",
          answer: "Yes, VARELLI is an authorized integrator for DoorBird video doorbells in Bangalore, providing smart access control for luxury residences."
        },
        {
          question: "How much does a smart home security system cost in Koramangala?",
          answer: "Our security systems in Koramangala range from ₹1.2 Lakhs for essential setups to over ₹18 Lakhs for comprehensive, multi-layered security."
        },
        {
          question: "Can security systems be integrated with home automation?",
          answer: "Absolutely. Our home security systems integrate perfectly with KNX smart home systems, allowing automated lighting and alarms during security events."
        }
      ]} heading="Frequently Asked Questions" />

      <ServiceCTA serviceName="Home Security" />
    </>
  )
}
