import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import FAQSection from '@/components/sections/service/FAQSection'
import ServiceCTA from '@/components/sections/service/ServiceCTA'
import Link from 'next/link'

export function generateMetadata(): Metadata {
  return generatePageMetadata({
    title: 'Smart Home Companies in Marathahalli, Bangalore — KNX Automation | VARELLI',
    description: 'Expert KNX smart home automation company in Marathahalli, Bangalore. Reliable, internet-free, wired home automation systems.',
    path: '/smart-home-marathahalli-bangalore'
  })
}

export default function SmartHomeCompanyPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "FAQPage"],
    "name": "VARELLI - Smart Home Automation Marathahalli",
    "description": "Premium KNX smart home company in Marathahalli, Bangalore.",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "smart home company marathahalli bangalore",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "VARELLI is a leading smart home company in Marathahalli, specializing in wired KNX automation."
        }
      },
      {
        "@type": "Question",
        "name": "home automation company near me marathahalli",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, VARELLI serves Marathahalli and surrounding areas with reliable KNX systems."
        }
      },
      {
        "@type": "Question",
        "name": "KNX installer marathahalli bangalore",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "VARELLI provides certified KNX installation in Marathahalli, Bangalore."
        }
      },
      {
        "@type": "Question",
        "name": "smart home cost marathahalli",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Costs vary, but KNX systems are a premium, long-term investment compared to standard wireless options."
        }
      },
      {
        "@type": "Question",
        "name": "best home automation marathahalli",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Wired KNX systems are considered the best and most reliable home automation in Marathahalli."
        }
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <main className="bg-black text-white min-h-screen">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Smart Home Companies in Marathahalli, Bangalore</h1>
          
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">Why VARELLI Is Marathahalli&apos;s Premier Smart Home Integrator</h2>
          
          <div className="grid grid-cols-3 gap-4 mb-12 border border-gray-800 p-4">
            <div className="font-bold border-b border-gray-800 pb-2">Feature</div>
            <div className="font-bold border-b border-gray-800 pb-2">VARELLI</div>
            <div className="font-bold border-b border-gray-800 pb-2">Generic Installer</div>
            
            <div>Protocol</div>
            <div>KNX Open Standard</div>
            <div>Proprietary WiFi</div>
            
            <div>Internet Required</div>
            <div>No</div>
            <div>Yes</div>
            
            <div>Lifespan</div>
            <div>30+ years</div>
            <div>3-5 years</div>
            
            <div>Subscription</div>
            <div>None</div>
            <div>₹12K–₹36K/year</div>
          </div>
          
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-4">Explore More Services in Marathahalli</h3>
            <ul className="flex flex-col gap-2">
              <li><Link href={`/home-automation/bangalore/marathahalli`} className="text-blue-400 hover:underline">Home Automation in Marathahalli</Link></li>
              <li><Link href={`/home-theatre/bangalore/marathahalli`} className="text-blue-400 hover:underline">Home Theatre in Marathahalli</Link></li>
              <li><Link href={`/home-security/bangalore/marathahalli`} className="text-blue-400 hover:underline">Home Security in Marathahalli</Link></li>
            </ul>
          </div>
          
          <FAQSection faqs={schema.mainEntity.map((q: any) => ({ question: q.name, answer: q.acceptedAnswer.text }))} />
          <ServiceCTA serviceName="Home Automation" />
        </div>
      </main>
    </>
  )
}
