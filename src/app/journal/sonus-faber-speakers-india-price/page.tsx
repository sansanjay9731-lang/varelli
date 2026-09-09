import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import Breadcrumb from '@/components/layout/Breadcrumb'
import FAQSection from '@/components/sections/service/FAQSection'
import ServiceCTA from '@/components/sections/service/ServiceCTA'
import Link from 'next/link'

export const metadata: Metadata = generatePageMetadata({
  path: "/journal/sonus-faber-speakers-india-price",
title: "Sonus Faber Speaker Systems in India — Price Guide & Installation for Luxury Homes",
  description: "Comprehensive guide and transparent pricing for luxury smart home systems by VARELLI.",
})

export default function Page() {
  const breadcrumbItems = [
    { name: "Home", href: "/" },
    { name: "Journal", href: "/journal" },
    { name: "Pricing Guide", href: "/journal/sonus-faber-speakers-india-price" }
  ]

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Breadcrumb items={breadcrumbItems} />
      <article className="w-full py-20 px-4">
        <div className="container mx-auto max-w-4xl prose lg:prose-xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Sonus Faber Speaker Systems in India — Price Guide & Installation for Luxury Homes</h1>
          <p className="lead text-xl text-gray-600 mb-12">
            Detailed pricing and cost breakdown for luxury installations. Contact us on WhatsApp: +91 99649 84695.
          </p>
          
          <div className="my-12">
            <h2>Pricing Tiers Breakdown</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 text-left border-b">Tier</th>
                    <th className="py-3 px-4 text-left border-b">Price Range</th>
                    <th className="py-3 px-4 text-left border-b">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-3 px-4 border-b font-semibold">Core</td>
                    <td className="py-3 px-4 border-b">₹4.8L – ₹7.5L</td>
                    <td className="py-3 px-4 border-b">Essential luxury automation features.</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b font-semibold">Architectural</td>
                    <td className="py-3 px-4 border-b">₹14.5L – ₹24L</td>
                    <td className="py-3 px-4 border-b">Comprehensive integration and premium finishes.</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b font-semibold">Grand Estate</td>
                    <td className="py-3 px-4 border-b">₹38L – ₹65L+</td>
                    <td className="py-3 px-4 border-b">Ultra-luxury, bespoke systems for large properties.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="content">
            <h3>Additional Details</h3>
            <p>model lineup, India pricing, Olympica, Lumina, Homage series</p>
            <p>Our solutions feature European craftsmanship and architecture-first design, utilizing KNX certified products from brands like Basalte, Ekinex, Sonus Faber, KEF, Zehnder, Drainvac, and DoorBird.</p>
          </div>
        </div>
      </article>
      <ServiceCTA serviceName="Home Automation" />
    </main>
  )
}
