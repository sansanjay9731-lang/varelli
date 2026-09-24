import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import Breadcrumb from '@/components/layout/Breadcrumb'
import FAQSection from '@/components/sections/service/FAQSection'
import ServiceCTA from '@/components/sections/service/ServiceCTA'
import Link from 'next/link'

export const metadata: Metadata = generatePageMetadata({
  title: "Private Cinema in Hebbal Kempapura, Bangalore — Dolby Atmos Dedicated Room | VARELLI",
  description: "Dedicated private cinema rooms with Dolby Atmos and Barco 4K laser projection in Hebbal Kempapura, Bangalore. VARELLI designs reference-grade home cinemas.",
  path: "/private-cinema/bangalore/hebbal-kempapura",
  keywords: ["private cinema Hebbal Kempapura bangalore", "home cinema Hebbal Kempapura", "dolby atmos room Hebbal Kempapura bangalore", "private cinema companies bangalore"],
})

export default function PrivateCinemaHebbalKempapuraPage() {
  const faqData = [
    {
      question: "Which is the best private cinema company in Hebbal Kempapura, Bangalore?",
      answer: "VARELLI is considered among the top private cinema design firms serving Hebbal Kempapura, specializing in reference-grade dedicated rooms with Dolby Atmos and 4K projection."
    },
    {
      question: "How much does a private cinema room cost in Hebbal Kempapura?",
      answer: "In Hebbal Kempapura, a dedicated private cinema room typically starts at ₹18 Lakhs for an entry-level acoustic setup, going up to ₹1.5 Cr+ for reference-grade reference cinemas with Barco projection and Meyer Sound."
    },
    {
      question: "What screen size is ideal for a private cinema in a Hebbal Kempapura villa?",
      answer: "For most luxury villas in Hebbal Kempapura, an acoustically transparent screen between 133 inches and 180 inches is ideal, depending on the room depth and viewing distance."
    },
    {
      question: "Does VARELLI serve Hebbal Kempapura for home cinema?",
      answer: "Yes, VARELLI provides complete turnkey private cinema design, acoustics, and installation services for premium residences across Hebbal Kempapura and surrounding areas in Bangalore."
    },
    {
      question: "What brands are used for cinema rooms in Hebbal Kempapura?",
      answer: "We deploy world-class brands like Barco, Meyer Sound, Trinnov, JBL Synthesis, and Wisdom Audio for our high-end home cinema projects in Hebbal Kempapura."
    }
  ];

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "VARELLI - Private Cinema Hebbal Kempapura",
    "description": "Premium private cinema design and installation in Hebbal Kempapura, Bangalore.",
    "url": "https://varelli.co.in/private-cinema/bangalore/hebbal-kempapura",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bangalore",
      "addressRegion": "KA",
      "addressCountry": "IN"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <main className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <Breadcrumb
        items={[
          { name: 'Home', href: '/' },
          { name: 'Private Cinema', href: '/private-cinema' },
          { name: 'Bangalore', href: '/private-cinema/bangalore' },
          { name: 'Hebbal Kempapura', href: '/private-cinema/bangalore/hebbal-kempapura' }
        ]}
      />
      
      <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Private Cinema in Hebbal Kempapura, Bangalore
        </h1>
        <p className="text-lg text-[#A0A0A5] mb-12">
          Experience the ultimate in home entertainment with VARELLI&apos;s custom-designed private cinema rooms in Hebbal Kempapura.
        </p>

        <div className="grid gap-8 md:grid-cols-3 mb-16">
          <div className="border border-white/10 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-3">Room Cinema</h3>
            <p className="text-[#A0A0A5] mb-4">Premium media room setups for mixed-use spaces.</p>
            <p className="font-bold text-xl">₹18L – ₹28L</p>
          </div>
          <div className="border border-white/10 p-6 rounded-lg bg-[#121216]">
            <h3 className="text-2xl font-semibold mb-3">Dedicated Cinema</h3>
            <p className="text-[#A0A0A5] mb-4">Acoustically treated rooms with Dolby Atmos.</p>
            <p className="font-bold text-xl">₹38L – ₹65L</p>
          </div>
          <div className="border border-white/10 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-3">Reference Cinema</h3>
            <p className="text-[#A0A0A5] mb-4">Uncompromising reference-grade audio and video.</p>
            <p className="font-bold text-xl">₹75L – ₹1.5Cr+</p>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqData} />
      <ServiceCTA serviceName="Private Cinema" />
    </main>
  )
}
