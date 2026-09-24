import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import Breadcrumb from '@/components/layout/Breadcrumb'
import FAQSection from '@/components/sections/service/FAQSection'
import ServiceCTA from '@/components/sections/service/ServiceCTA'
import Link from 'next/link'

export const metadata: Metadata = generatePageMetadata({
  title: "Private Cinema in Vasant Vihar, Delhi NCR — Dedicated Cinema Room | VARELLI",
  description: "Bespoke private cinema rooms in Vasant Vihar, Delhi NCR. Dedicated screening rooms for bungalows and farmhouses featuring Dolby Atmos.",
  path: "/private-cinema/delhi-ncr/vasant-vihar"
})

export default function PrivateCinemavasantviharPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Private Cinema Design in Vasant Vihar",
    "provider": {
      "@type": "Organization",
      "name": "VARELLI"
    },
    "areaServed": "Vasant Vihar, Delhi NCR"
  }

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Breadcrumb 
        items={[
          { name: "Home", href: "/" },
          { name: "Private Cinema", href: "/private-cinema" },
          { name: "Delhi NCR", href: "/private-cinema/delhi-ncr" },
          { name: "Vasant Vihar", href: "/private-cinema/delhi-ncr/vasant-vihar" }
        ]} 
      />
      
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Private Cinema in Vasant Vihar, Delhi NCR</h1>
          <p className="text-lg md:text-xl text-[#A0A0A5] max-w-3xl mb-8">
            Experience the pinnacle of cinematic luxury in Vasant Vihar. We design and build dedicated 
            screening rooms and large basement cinema rooms for Delhi bungalows and farmhouses.
          </p>
        </div>
      </section>

      <section className="py-16 bg-[#121216]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Cinema Tiers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4">Room Cinema</h3>
              <p className="text-[#A0A0A5] mb-4">₹18L – ₹28L</p>
              <p className="text-sm">High-performance cinema setups for dedicated medium-sized rooms.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4">Dedicated Cinema</h3>
              <p className="text-[#A0A0A5] mb-4">₹38L – ₹65L</p>
              <p className="text-sm">Fully treated acoustic spaces with high-end projection and immersive audio.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border-2 border-gray-900">
              <h3 className="text-xl font-bold mb-4">Reference Cinema</h3>
              <p className="text-[#A0A0A5] mb-4">₹75L – ₹1.5Cr+</p>
              <p className="text-sm">World-class private screening rooms with uncompromising performance.</p>
            </div>
          </div>
        </div>
      </section>

      <FAQSection 
        faqs={[
          {
            question: "Can you build a private cinema in Vasant Vihar Delhi?",
            answer: "Yes, we specialize in building luxury private cinemas in Vasant Vihar and across Delhi NCR."
          },
          {
            question: "How long does it take to build a home cinema room in Delhi NCR?",
            answer: "A fully dedicated home cinema room typically takes 4 to 8 weeks from design approval to final calibration."
          },
          {
            question: "Is Dolby Atmos included in your cinema rooms in Delhi?",
            answer: "Yes, our Dedicated and Reference tiers feature immersive Dolby Atmos audio setups as a standard."
          },
          {
            question: "Are these suitable for basement screening rooms?",
            answer: "Absolutely. Many of our private cinema projects are installed in large dedicated basement rooms in bungalows and farmhouses."
          },
          {
            question: "Do you provide acoustic isolation?",
            answer: "Yes, we design comprehensive acoustic isolation to ensure sound doesn&apos;t leak into other areas of the house."
          }
        ]} 
      />

      <ServiceCTA serviceName="Private Cinema" />
    </main>
  )
}
