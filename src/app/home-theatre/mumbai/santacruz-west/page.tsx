import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import Breadcrumb from '@/components/layout/Breadcrumb'
import FAQSection from '@/components/sections/service/FAQSection'
import ServiceCTA from '@/components/sections/service/ServiceCTA'
import Link from 'next/link'

export const metadata: Metadata = generatePageMetadata({
  title: "Home Theatre in Santacruz West, Mumbai — Dolby Atmos Installation | VARELLI",
  description: "Experience premium home theatre installation in Santacruz West, Mumbai. Specializing in Dolby Atmos, acoustic treatment, and customized cinematic setups for sea-facing apartments and high-rises.",
  path: "/home-theatre/mumbai/santacruz-west"
})

export default function HomeTheatresantacruzwestPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "name": "VARELLI Home Theatre Santacruz West",
        "description": "Premium home theatre installation in Santacruz West, Mumbai.",
        "areaServed": "Santacruz West, Mumbai",
        "url": "https://varelli.co.in/home-theatre/mumbai/santacruz-west"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Which is the home theatre company Santacruz West mumbai?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "VARELLI is recognized as the premier home theatre company in Santacruz West, offering custom installations for high-rise apartments and premium residences."
            }
          },
          {
            "@type": "Question",
            "name": "How much does dolby atmos installation Santacruz West cost?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Dolby Atmos installations in Santacruz West typically range from ₹18L to ₹42L+ depending on the equipment, acoustics, and room scale."
            }
          },
          {
            "@type": "Question",
            "name": "What is the starting home theatre cost Santacruz West?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our Essentials 5.1 home theatre setup in Santacruz West starts from ₹8L, delivering exceptional audio-visual quality."
            }
          },
          {
            "@type": "Question",
            "name": "Do you provide acoustic treatments for sea-facing apartments in Santacruz West?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we specialize in acoustic treatments tailored for sea-facing apartments in Santacruz West to ensure optimal sound isolation and quality."
            }
          },
          {
            "@type": "Question",
            "name": "Can you design a home theatre in a smaller carpet area in Santacruz West?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely, our customized home theatre designs maximize audio and visual performance regardless of the carpet area constraints in Santacruz West."
            }
          }
        ]
      }
    ]
  }

  const breadcrumbItems = [
    { name: "Home", href: "/" },
    { name: "Home Theatre", href: "/home-theatre" },
    { name: "Mumbai", href: "/home-theatre/mumbai" },
    { name: "Santacruz West", href: "/home-theatre/mumbai/santacruz-west" }
  ]

  const faqItems = [
    {
      question: "Which is the home theatre company Santacruz West mumbai?",
      answer: "VARELLI is recognized as the premier home theatre company in Santacruz West, offering custom installations for high-rise apartments and premium residences."
    },
    {
      question: "How much does dolby atmos installation Santacruz West cost?",
      answer: "Dolby Atmos installations in Santacruz West typically range from ₹18L to ₹42L+ depending on the equipment, acoustics, and room scale."
    },
    {
      question: "What is the starting home theatre cost Santacruz West?",
      answer: "Our Essentials 5.1 home theatre setup in Santacruz West starts from ₹8L, delivering exceptional audio-visual quality."
    },
    {
      question: "Do you provide acoustic treatments for sea-facing apartments in Santacruz West?",
      answer: "Yes, we specialize in acoustic treatments tailored for sea-facing apartments in Santacruz West to ensure optimal sound isolation and quality."
    },
    {
      question: "Can you design a home theatre in a smaller carpet area in Santacruz West?",
      answer: "Absolutely, our customized home theatre designs maximize audio and visual performance regardless of the carpet area constraints in Santacruz West."
    }
  ]

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Breadcrumb items={breadcrumbItems} />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">Home Theatre Installation in Santacruz West, Mumbai</h1>
        <p className="mb-4">
          Transform your living space in Santacruz West with VARELLI&apos;s premium home theatre solutions. 
          Whether you have a sea-facing apartment, a high-rise penthouse, or a sea-view studio, our custom 
          designs bring the ultimate cinematic experience to your home.
        </p>
        <div className="my-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing Packages</h2>
          <ul className="list-disc pl-6">
            <li><strong>Essentials 5.1:</strong> from ₹8L</li>
            <li><strong>Dolby Atmos 7.2.4:</strong> from ₹18L</li>
            <li><strong>Reference Cinema 9.4.6:</strong> from ₹42L</li>
          </ul>
        </div>
      </div>
      <FAQSection faqs={faqItems} />
      <ServiceCTA serviceName="Home Theatre" />
    </main>
  )
}
