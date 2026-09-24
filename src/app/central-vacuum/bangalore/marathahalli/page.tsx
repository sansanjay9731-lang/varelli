import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import Breadcrumb from '@/components/layout/Breadcrumb'
import FAQSection from '@/components/sections/service/FAQSection'
import ServiceCTA from '@/components/sections/service/ServiceCTA'
import Link from 'next/link'

export const metadata: Metadata = generatePageMetadata({
  title: "Central Vacuum System in Marathahalli, Bangalore — Drainvac Built-In | VARELLI",
  description: "Drainvac built-in central vacuum systems for luxury villas in Marathahalli, Bangalore. Eliminates portable vacuums, reduces allergens, whisper-quiet operation.",
  path: "/central-vacuum/bangalore/marathahalli",
  keywords: ["central vacuum Marathahalli bangalore", "built-in vacuum Marathahalli", "Drainvac bangalore", "central vacuum system bangalore"],
})

export default function CentralVacuumMarathahalliPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "name": "VARELLI - Central Vacuum Marathahalli",
        "description": "Premium Drainvac central vacuum systems in Marathahalli, Bangalore.",
        "areaServed": "Marathahalli, Bangalore"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the best central vacuum in Marathahalli, Bangalore?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Drainvac offers powerful built-in vacuum solutions ideal for luxury homes in Marathahalli."
            }
          },
          {
            "@type": "Question",
            "name": "How does Drainvac installation work in Bangalore?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our team handles the complete installation process, routing PVC pipes seamlessly through your home's walls or floors."
            }
          },
          {
            "@type": "Question",
            "name": "What is the built-in vacuum system cost in Bangalore?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Costs range from ₹1.8L for compact setups to ₹12L+ for large estates."
            }
          },
          {
            "@type": "Question",
            "name": "Is a central vacuum quieter than portable ones?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, because the motor is located in a utility room or garage, operation in living areas is whisper-quiet."
            }
          },
          {
            "@type": "Question",
            "name": "Does a central vacuum reduce allergens?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely. It exhausts 100% of vacuumed dirt and dust outside of your living space, significantly improving indoor air quality."
            }
          }
        ]
      }
    ]
  };

  const faqs = [
    { question: "What is the best central vacuum in Marathahalli, Bangalore?", answer: "Drainvac offers powerful built-in vacuum solutions ideal for luxury homes in Marathahalli." },
    { question: "How does Drainvac installation work in Bangalore?", answer: "Our team handles the complete installation process, routing PVC pipes seamlessly through your home&apos;s walls or floors." },
    { question: "What is the built-in vacuum system cost in Bangalore?", answer: "Costs range from ₹1.8L for compact setups to ₹12L+ for large estates." },
    { question: "Is a central vacuum quieter than portable ones?", answer: "Yes, because the motor is located in a utility room or garage, operation in living areas is whisper-quiet." },
    { question: "Does a central vacuum reduce allergens?", answer: "Absolutely. It exhausts 100% of vacuumed dirt and dust outside of your living space, significantly improving indoor air quality." }
  ];

  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Breadcrumb
        items={[
          { name: "Home", href: "/" },
          { name: "Central Vacuum", href: "/central-vacuum" },
          { name: "Bangalore", href: "/central-vacuum/bangalore" },
          { name: "Marathahalli", href: "/central-vacuum/bangalore/marathahalli" }
        ]}
      />
      
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Built-In Central Vacuum System in Marathahalli, Bangalore — Drainvac</h1>
        
        <div className="prose prose-invert max-w-none text-[#C2C2C8] mb-12">
          <p>
            Experience the ultimate cleaning convenience for your luxury home in Marathahalli. Our Drainvac built-in central vacuum systems eliminate the need to lug heavy portable vacuums from room to room. With powerful suction and whisper-quiet operation, these systems reduce allergens and provide a deeper clean for your entire residence.
          </p>
        </div>

        <h2 className="text-3xl font-semibold mb-6">System Options for Marathahalli Homes</h2>
        <ul className="space-y-4 mb-12">
          <li className="bg-[#121216] border border-white/5 p-6 rounded-lg">
            <h3 className="text-xl font-bold">Compact System</h3>
            <p className="text-[#C2C2C8]">₹1.8L–₹2.8L — Perfect for modern apartments and townhouses.</p>
          </li>
          <li className="bg-[#121216] border border-white/5 p-6 rounded-lg">
            <h3 className="text-xl font-bold">Residential System</h3>
            <p className="text-[#C2C2C8]">₹3.2L–₹5.5L — Ideal for standard-sized luxury villas.</p>
          </li>
          <li className="bg-[#121216] border border-white/5 p-6 rounded-lg">
            <h3 className="text-xl font-bold">Estate System</h3>
            <p className="text-[#C2C2C8]">₹6.5L–₹12L+ — Designed for sprawling estates and multi-level mansions.</p>
          </li>
        </ul>
        
        <FAQSection title="Frequently Asked Questions" faqs={faqs} />
      </section>

      <ServiceCTA serviceName="Central Vacuum" />
    </main>
  )
}
