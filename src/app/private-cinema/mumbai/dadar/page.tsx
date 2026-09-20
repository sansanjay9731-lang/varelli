import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import Breadcrumb from '@/components/layout/Breadcrumb'
import FAQSection from '@/components/sections/service/FAQSection'
import ServiceCTA from '@/components/sections/service/ServiceCTA'
import Link from 'next/link'

export const metadata: Metadata = generatePageMetadata({
  title: "Private Cinema in Dadar, Mumbai — Dedicated Home Cinema Room | VARELLI",
  description: "Design your ultimate private cinema room in Dadar, Mumbai. Bespoke dedicated home cinema installations with Dolby Atmos, acoustic perfection for high-rise residences.",
  path: "/private-cinema/mumbai/dadar"
})

export default function PrivateCinemadadarPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "name": "VARELLI Private Cinema Dadar",
        "description": "Dedicated home cinema room installations in Dadar, Mumbai.",
        "areaServed": "Dadar, Mumbai",
        "url": "https://varelli.co.in/private-cinema/mumbai/dadar"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Who provides the best private cinema Dadar mumbai?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "VARELLI delivers unmatched private cinema installations in Dadar, tailored for high-end residences and dedicated home cinema rooms."
            }
          },
          {
            "@type": "Question",
            "name": "What is the typical home cinema room cost mumbai?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "For a dedicated setup, a home cinema room cost in Mumbai ranges from ₹38L to ₹1.5Cr+, based on acoustics, technology, and customization."
            }
          },
          {
            "@type": "Question",
            "name": "How to set up a dolby atmos cinema Dadar?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Setting up a Dolby Atmos cinema requires precise speaker placement and room acoustics, handled expertly by VARELLI in Dadar."
            }
          },
          {
            "@type": "Question",
            "name": "Can you build a private cinema in high-rise apartments in Dadar?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we specialize in building private cinemas in high-rise apartments in Dadar, ensuring perfect sound isolation and premium design."
            }
          },
          {
            "@type": "Question",
            "name": "How do you manage carpet area constraints for a private cinema in Dadar?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our engineering team at VARELLI maximizes acoustic performance and seating comfort even within strict carpet area constraints typical in Dadar."
            }
          }
        ]
      }
    ]
  }

  const breadcrumbItems = [
    { name: "Home", href: "/" },
    { name: "Private Cinema", href: "/private-cinema" },
    { name: "Mumbai", href: "/private-cinema/mumbai" },
    { name: "Dadar", href: "/private-cinema/mumbai/dadar" }
  ]

  const faqItems = [
    {
      question: "Who provides the best private cinema Dadar mumbai?",
      answer: "VARELLI delivers unmatched private cinema installations in Dadar, tailored for high-end residences and dedicated home cinema rooms."
    },
    {
      question: "What is the typical home cinema room cost mumbai?",
      answer: "For a dedicated setup, a home cinema room cost in Mumbai ranges from ₹38L to ₹1.5Cr+, based on acoustics, technology, and customization."
    },
    {
      question: "How to set up a dolby atmos cinema Dadar?",
      answer: "Setting up a Dolby Atmos cinema requires precise speaker placement and room acoustics, handled expertly by VARELLI in Dadar."
    },
    {
      question: "Can you build a private cinema in high-rise apartments in Dadar?",
      answer: "Yes, we specialize in building private cinemas in high-rise apartments in Dadar, ensuring perfect sound isolation and premium design."
    },
    {
      question: "How do you manage carpet area constraints for a private cinema in Dadar?",
      answer: "Our engineering team at VARELLI maximizes acoustic performance and seating comfort even within strict carpet area constraints typical in Dadar."
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
        <h1 className="text-4xl font-bold mb-6">Private Cinema Room in Dadar, Mumbai</h1>
        <p className="mb-4">
          Experience the pinnacle of entertainment with a dedicated private cinema room in Dadar. 
          VARELLI creates bespoke home cinemas perfectly integrated into Mumbai&apos;s high-rise residences, 
          sea-view apartments, and spaces with strict carpet area constraints.
        </p>
        <div className="my-8">
          <h2 className="text-2xl font-semibold mb-4">Cinema Tiers</h2>
          <ul className="list-disc pl-6">
            <li><strong>Room Cinema:</strong> ₹18L – ₹28L</li>
            <li><strong>Dedicated Cinema:</strong> ₹38L – ₹65L</li>
            <li><strong>Reference Cinema:</strong> ₹75L – ₹1.5Cr+</li>
          </ul>
        </div>
      </div>
      <FAQSection faqs={faqItems} />
      <ServiceCTA serviceName="Private Cinema" />
    </main>
  )
}
