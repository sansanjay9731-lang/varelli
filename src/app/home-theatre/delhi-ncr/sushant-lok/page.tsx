import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import Breadcrumb from '@/components/layout/Breadcrumb'
import FAQSection from '@/components/sections/service/FAQSection'
import ServiceCTA from '@/components/sections/service/ServiceCTA'
import Link from 'next/link'

export const metadata: Metadata = generatePageMetadata({
  title: "Home Theatre in Sushant Lok, Delhi NCR — Dolby Atmos Installation | VARELLI",
  description: "Experience premium home theatre in Sushant Lok, Delhi NCR. Custom Dolby Atmos and Reference Cinema installations for farmhouses, bungalows, and luxury apartments.",
  path: "/home-theatre/delhi-ncr/sushant-lok"
})

export default function HomeTheatresushantlokPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Home Theatre Installation in Sushant Lok",
    "provider": {
      "@type": "Organization",
      "name": "VARELLI"
    },
    "areaServed": "Sushant Lok, Delhi NCR"
  }

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Breadcrumb 
        items={[
          { name: "Home", href: "/" },
          { name: "Home Theatre", href: "/home-theatre" },
          { name: "Delhi NCR", href: "/home-theatre/delhi-ncr" },
          { name: "Sushant Lok", href: "/home-theatre/delhi-ncr/sushant-lok" }
        ]} 
      />
      
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Home Theatre in Sushant Lok, Delhi NCR</h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mb-8">
            Elevate your entertainment experience with a custom-designed home theatre in Sushant Lok. 
            Whether it&apos;s a dedicated screen room in a large plot, a golf-facing luxury apartment in Gurgaon, 
            a farmhouse in Chattarpur, or a bungalow in Lutyens Delhi, we provide the ultimate cinematic experience.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Our Tiers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4">Essentials 5.1</h3>
              <p className="text-gray-600 mb-4">Starting from ₹8L</p>
              <p className="text-sm">Perfect for living rooms and smaller dedicated spaces.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4">Dolby Atmos 7.2.4</h3>
              <p className="text-gray-600 mb-4">Starting from ₹18L</p>
              <p className="text-sm">Immersive 3D audio for mid to large sized dedicated rooms.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border-2 border-gray-900">
              <h3 className="text-xl font-bold mb-4">Reference Cinema 9.4.6</h3>
              <p className="text-gray-600 mb-4">Starting from ₹42L</p>
              <p className="text-sm">The ultimate private screening room experience for large spaces.</p>
            </div>
          </div>
        </div>
      </section>

      <FAQSection 
        faqs={[
          {
            question: "Are you a home theatre company in Sushant Lok Delhi?",
            answer: "Yes, VARELLI is a premium home theatre company serving Sushant Lok and the wider Delhi NCR region. We specialize in custom installations."
          },
          {
            question: "Do you offer Dolby Atmos installation in Delhi NCR?",
            answer: "Absolutely. We design and install Dolby Atmos systems, typically ranging from 5.1.2 up to 9.4.6 configurations, delivering immersive audio for your space."
          },
          {
            question: "What is the typical home theatre cost in Sushant Lok?",
            answer: "Costs vary based on the tier. Our Essentials 5.1 starts at ₹8L, Dolby Atmos 7.2.4 at ₹18L, and Reference Cinema 9.4.6 at ₹42L and above."
          },
          {
            question: "Can you install a home theatre in an apartment?",
            answer: "Yes, we regularly install premium home theatres in golf-facing luxury apartments and penthouses in Delhi NCR with appropriate acoustic treatment."
          },
          {
            question: "Do you handle the entire room acoustic design?",
            answer: "Yes, we provide end-to-end services including acoustic design, seating, lighting, and AV calibration."
          }
        ]} 
      />

      <ServiceCTA serviceName="Home Theatre" />
    </main>
  )
}
