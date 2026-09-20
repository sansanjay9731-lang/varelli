import os

PROJECT_ROOT = "/Users/apple/.gemini/antigravity/scratch/varelli"

localities = [
    "whitefield", "koramangala", "indiranagar", "sadashivanagar", "hsr-layout", 
    "hebbal", "yelahanka", "malleshwaram", "jayanagar", "jp-nagar", "banashankari", 
    "electronic-city", "bellandur", "devanahalli", "rajajinagar", "basavangudi", 
    "cunningham-road", "lavelle-road", "kalyan-nagar", "marathahalli", "kr-puram", 
    "bannerghatta-road", "frazer-town", "richmond-town", "ulsoor", "btm-layout", 
    "vijayanagar", "rr-nagar", "hebbal-kempapura", "sarjapur"
]

def format_locality_name(slug):
    return slug.replace("-", " ").title()

template_sec = """import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import Breadcrumb from '@/components/layout/Breadcrumb'
import FAQSection from '@/components/sections/service/FAQSection'
import ServiceCTA from '@/components/sections/service/ServiceCTA'
import Link from 'next/link'

export const metadata: Metadata = generatePageMetadata({
  title: "Home Security System in [NAME], Bangalore — CCTV & Smart Access | VARELLI",
  description: "Integrated smart home security — Hikvision 4K CCTV, DoorBird video doorbell, KNX access control for luxury residences in [NAME], Bangalore.",
  path: "/home-security/bangalore/[SLUG]",
  keywords: ["home security [NAME] bangalore", "CCTV installation [NAME]", "smart security bangalore", "home security company bangalore"],
})

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "VARELLI - Home Security [NAME]",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "[NAME]",
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
      "name": "Who is the best home security company in [NAME], Bangalore?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "VARELLI provides the best home security systems in [NAME], integrating premium brands like Hikvision and DoorBird for robust and seamless security."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide CCTV camera installation in [NAME]?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we specialize in high-end CCTV camera installation in [NAME], featuring 4K IP cameras with AI analytics and KNX integration."
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
      "name": "How much does a smart home security system cost in [NAME]?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our security systems in [NAME] range from ₹1.2 Lakhs for essential setups to over ₹18 Lakhs for comprehensive, multi-layered security."
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

export default function HomeSecurity[COMPONENT_NAME]Page() {
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
              { name: "[NAME]", href: "/home-security/bangalore/[SLUG]" }
            ]}
          />
          <div className="mt-6 max-w-3xl">
            <h1 className="font-display text-[clamp(2.2rem,5vw,4rem)] font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text-primary)] mb-5">
              Smart Home Security in [NAME], Bangalore — Hikvision CCTV & DoorBird Access
            </h1>
            <p className="text-[var(--text-secondary)] text-lg leading-relaxed font-body">
              Premium home security installations for luxury villas and apartments in [NAME]. We integrate Hikvision 4K cameras, DoorBird intercoms, and KNX access control for uncompromised safety.
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
          question: "Who is the best home security company in [NAME], Bangalore?",
          answer: "VARELLI provides the best home security systems in [NAME], integrating premium brands like Hikvision and DoorBird for robust and seamless security."
        },
        {
          question: "Do you provide CCTV camera installation in [NAME]?",
          answer: "Yes, we specialize in high-end CCTV camera installation in [NAME], featuring 4K IP cameras with AI analytics and KNX integration."
        },
        {
          question: "Is DoorBird video doorbell available in Bangalore?",
          answer: "Yes, VARELLI is an authorized integrator for DoorBird video doorbells in Bangalore, providing smart access control for luxury residences."
        },
        {
          question: "How much does a smart home security system cost in [NAME]?",
          answer: "Our security systems in [NAME] range from ₹1.2 Lakhs for essential setups to over ₹18 Lakhs for comprehensive, multi-layered security."
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
"""

for slug in localities:
    name = format_locality_name(slug)
    comp_name = slug.replace("-", "").title()
    content = template_sec.replace("[NAME]", name).replace("[SLUG]", slug).replace("[COMPONENT_NAME]", comp_name)
    
    dir_path = os.path.join(PROJECT_ROOT, f"src/app/home-security/bangalore/{slug}")
    os.makedirs(dir_path, exist_ok=True)
    
    file_path = os.path.join(dir_path, "page.tsx")
    with open(file_path, "w") as f:
        f.write(content)

template_ha = """import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import Breadcrumb from '@/components/layout/Breadcrumb'
import FAQSection from '@/components/sections/service/FAQSection'
import ServiceCTA from '@/components/sections/service/ServiceCTA'
import Link from 'next/link'

export const metadata: Metadata = generatePageMetadata({
  title: "Home Automation in Bangalore — KNX Smart Home Systems | VARELLI",
  description: "Bangalore's best home automation company. We design and install premium KNX smart home systems for luxury villas and apartments. No subscriptions, 30+ year lifespan.",
  path: "/home-automation/bangalore",
  keywords: ["home automation companies in bangalore", "home automation bangalore", "best home automation company bangalore", "KNX bangalore"],
})

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "VARELLI - Home Automation Bangalore",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Bangalore",
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
      "name": "Which is the best home automation company in Bangalore?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "VARELLI is widely recognized as the best home automation company in Bangalore for luxury residences, exclusively using the reliable, wired KNX open standard rather than proprietary wireless gadgets."
      }
    },
    {
      "@type": "Question",
      "name": "How much does home automation cost in Bangalore?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Costs vary significantly based on the project scope. A comprehensive KNX system for a luxury 4BHK villa in Bangalore typically ranges between ₹15 Lakhs to ₹45+ Lakhs depending on the chosen brands like Basalte, Ekinex, or Gira."
      }
    },
    {
      "@type": "Question",
      "name": "What is KNX and why is it better than other systems?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "KNX is a worldwide open standard for home and building automation. Unlike proprietary systems, it is decentralized, meaning no single point of failure. It works fully offline, requires no subscriptions, and has a proven lifespan of 30+ years."
      }
    },
    {
      "@type": "Question",
      "name": "Does VARELLI have a showroom in Bangalore?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we have an exclusive experience centre in Bangalore where you can physically interact with premium KNX keypads, motorized shading, and smart lighting solutions."
      }
    }
  ]
};

export default function HomeAutomationBangalorePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <section className="relative bg-[var(--surface-1)] border-b border-[var(--border)]">
        <div className="relative container-varelli pt-40 pb-16">
          <Breadcrumb
            items={[
              { name: "Home Automation", href: "/home-automation" },
              { name: "Bangalore", href: "/home-automation/bangalore" }
            ]}
          />
          <div className="mt-6 max-w-3xl">
            <h1 className="font-display text-[clamp(2.2rem,5vw,4rem)] font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text-primary)] mb-5">
              Home Automation in Bangalore — KNX Smart Home Systems | VARELLI
            </h1>
            <p className="text-[var(--text-secondary)] text-lg leading-relaxed font-body">
              Transform your residence with Bangalore&apos;s most reliable wired smart home infrastructure. We specialize in luxury KNX installations that work beautifully, forever.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding border-b border-[var(--border)]">
        <div className="container-varelli">
          <h2 className="font-display text-3xl font-bold mb-8">Why VARELLI Is Bangalore&apos;s Most Trusted Home Automation Company</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="p-4 border-b border-[var(--border)] font-bold">Feature</th>
                  <th className="p-4 border-b border-[var(--border)] font-bold text-[var(--gold)]">VARELLI</th>
                  <th className="p-4 border-b border-[var(--border)] font-bold">Generic Installer</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4 border-b border-[var(--border)]">Protocol</td>
                  <td className="p-4 border-b border-[var(--border)] font-semibold">KNX (ISO/IEC 14543 Open Standard)</td>
                  <td className="p-4 border-b border-[var(--border)] text-[var(--text-secondary)]">Proprietary WiFi App</td>
                </tr>
                <tr>
                  <td className="p-4 border-b border-[var(--border)]">Internet Required</td>
                  <td className="p-4 border-b border-[var(--border)] font-semibold">No — works fully offline</td>
                  <td className="p-4 border-b border-[var(--border)] text-[var(--text-secondary)]">Yes — cloud dependent</td>
                </tr>
                <tr>
                  <td className="p-4 border-b border-[var(--border)]">Lifespan</td>
                  <td className="p-4 border-b border-[var(--border)] font-semibold">30+ years</td>
                  <td className="p-4 border-b border-[var(--border)] text-[var(--text-secondary)]">3–5 years</td>
                </tr>
                <tr>
                  <td className="p-4 border-b border-[var(--border)]">Subscription Fees</td>
                  <td className="p-4 border-b border-[var(--border)] font-semibold">None</td>
                  <td className="p-4 border-b border-[var(--border)] text-[var(--text-secondary)]">₹12,000–₹36,000/year</td>
                </tr>
                <tr>
                  <td className="p-4 border-b border-[var(--border)]">Brands</td>
                  <td className="p-4 border-b border-[var(--border)] font-semibold">Basalte, Ekinex, Gira, JUNG</td>
                  <td className="p-4 border-b border-[var(--border)] text-[var(--text-secondary)]">Generic Chinese modules</td>
                </tr>
                <tr>
                  <td className="p-4 border-b border-[var(--border)]">MEP Coordination</td>
                  <td className="p-4 border-b border-[var(--border)] font-semibold">Full CAD drawings with architect</td>
                  <td className="p-4 border-b border-[var(--border)] text-[var(--text-secondary)]">No coordination</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section-padding border-b border-[var(--border)]">
        <div className="container-varelli">
          <h2 className="font-display text-3xl font-bold mb-8">Localities We Serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
[LOCALITIES_LINKS]
          </div>
        </div>
      </section>

      <section className="section-padding border-b border-[var(--border)]">
        <div className="container-varelli">
          <h2 className="font-display text-3xl font-bold mb-8">All Bangalore Solutions</h2>
          <div className="flex flex-wrap gap-4">
            <Link href="/home-theatre/bangalore" className="glass-card px-6 py-3 hover:border-[var(--gold)] transition-colors">Home Theatre</Link>
            <Link href="/private-cinema/bangalore" className="glass-card px-6 py-3 hover:border-[var(--gold)] transition-colors">Private Cinema</Link>
            <Link href="/fresh-air-ventilation/bangalore" className="glass-card px-6 py-3 hover:border-[var(--gold)] transition-colors">Fresh Air Ventilation</Link>
            <Link href="/central-vacuum/bangalore" className="glass-card px-6 py-3 hover:border-[var(--gold)] transition-colors">Central Vacuum</Link>
            <Link href="/home-security/bangalore" className="glass-card px-6 py-3 hover:border-[var(--gold)] transition-colors">Home Security</Link>
          </div>
        </div>
      </section>

      <FAQSection faqs={[
        {
          question: "Which is the best home automation company in Bangalore?",
          answer: "VARELLI is widely recognized as the best home automation company in Bangalore for luxury residences, exclusively using the reliable, wired KNX open standard rather than proprietary wireless gadgets."
        },
        {
          question: "How much does home automation cost in Bangalore?",
          answer: "Costs vary significantly based on the project scope. A comprehensive KNX system for a luxury 4BHK villa in Bangalore typically ranges between ₹15 Lakhs to ₹45+ Lakhs depending on the chosen brands like Basalte, Ekinex, or Gira."
        },
        {
          question: "What is KNX and why is it better than other systems?",
          answer: "KNX is a worldwide open standard for home and building automation. Unlike proprietary systems, it is decentralized, meaning no single point of failure. It works fully offline, requires no subscriptions, and has a proven lifespan of 30+ years."
        },
        {
          question: "Does VARELLI have a showroom in Bangalore?",
          answer: "Yes, we have an exclusive experience centre in Bangalore where you can physically interact with premium KNX keypads, motorized shading, and smart lighting solutions."
        }
      ]} heading="Frequently Asked Questions" />

      <ServiceCTA serviceName="Home Automation" />
    </>
  )
}
"""

localities_links = ""
for slug in localities:
    name = format_locality_name(slug)
    localities_links += f'            <Link href="/home-automation/bangalore/{slug}" className="text-[var(--text-secondary)] hover:text-[var(--gold)]">{name}</Link>\n'

ha_content = template_ha.replace("[LOCALITIES_LINKS]", localities_links.rstrip())

ha_dir = os.path.join(PROJECT_ROOT, "src/app/home-automation/bangalore")
os.makedirs(ha_dir, exist_ok=True)
ha_file = os.path.join(ha_dir, "page.tsx")

with open(ha_file, "w") as f:
    f.write(ha_content)

print("Generated all files successfully.")

