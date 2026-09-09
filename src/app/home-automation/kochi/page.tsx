import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import Breadcrumb from "@/components/layout/Breadcrumb";
import FAQSection from "@/components/sections/service/FAQSection";
import ServiceCTA from "@/components/sections/service/ServiceCTA";
import Link from "next/link";

export const metadata: Metadata = generatePageMetadata({
  title: "Luxury Home Automation in Kochi | VARELLI",
  description: "KNX smart home systems for NRI homeowners, waterfront villas, and luxury residences in Kochi.",
  path: "/home-automation/kochi",
  keywords: ['home automation Kochi', 'smart home Kochi', 'KNX automation Kochi Kerala', 'luxury home automation Kochi'],
});

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "VARELLI",
  url: `https://varelli.co.in/home-automation/kochi`,
  telephone: "+919964984695",
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
    addressLocality: "Kochi, Kerala",
  },
  description: "KNX smart home systems for NRI homeowners, waterfront villas, and luxury residences in Kochi.",
};

const faqs = [
  {
    question: "Does VARELLI serve Kochi, Kerala?",
    answer: "Yes. VARELLI provides full-scope KNX home automation, private cinema, fresh air ventilation, and central vacuum services in Kochi, Kerala. We serve luxury villas, penthouses, and premium residences across the area.",
  },
  {
    question: "What home automation systems are available in Kochi?",
    answer: "VARELLI offers KNX wired home automation, DALI-2 lighting control, Dolby Atmos private cinema, Zehnder ERV fresh air ventilation, Drainvac central vacuum, DoorBird access control, and structured home networking for residences in Kochi.",
  },
  {
    question: "How much does smart home automation cost in Kochi, Kerala?",
    answer: "Home automation in Kochi ranges from ₹4.8 Lakhs to ₹7.5 Lakhs for a KNX Core Living setup in a 3BHK luxury apartment, ₹14.5 Lakhs to ₹24 Lakhs for an Architectural Villa, and ₹38 Lakhs to ₹65 Lakhs+ for Grand Estate systems.",
  },
  {
    question: "What is KNX and why is it best for luxury homes in Kochi?",
    answer: "KNX is the international open standard (ISO/IEC 14543) for building automation. It works offline with zero internet dependency, has no subscription fees, and lasts 30+ years. For luxury villas in Kochi, KNX provides unmatched reliability and future-proof design.",
  },
  {
    question: "How can I schedule a consultation for my Kochi residence?",
    answer: "Contact VARELLI via WhatsApp at +91 99649 84695 or use the contact form on our website to book a private architectural consultation. We also offer live demonstrations at our Bangalore audition space.",
  },
  {
    question: "Which European smart home brands does VARELLI install in Kochi?",
    answer: "VARELLI integrates Basalte (Belgian luxury keypads), Ekinex (Italian architectural plates), Zehnder (Swiss ERV), Sonus Faber and KEF (cinema speakers), Barco (4K laser projectors), DoorBird (German video doorbell), and Drainvac (central vacuum) into luxury residences in Kochi.",
  },
];

export default function Page() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="relative bg-[var(--surface-1)] border-b border-[var(--border)]">
        <div className="relative container-varelli pt-40 pb-16">
          <Breadcrumb
            items={[
              { name: "Home Automation", href: "/home-automation" },
              { name: "Kochi", href: "/home-automation/kochi" },
            ]}
          />
          <div className="mt-6 max-w-3xl">
            <span className="badge-mono block mb-5">Home Automation · Kochi</span>
            <h1 className="font-display text-[clamp(2.2rem,5vw,4rem)] font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text-primary)] mb-5">
              Luxury Home Automation in Kochi
            </h1>
            <p className="font-editorial text-xl text-[var(--text-secondary)] leading-relaxed italic mb-8">
              KNX smart home systems for NRI homeowners, waterfront villas, and luxury residences in Kochi.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="btn-gold px-8 py-3.5 text-xs font-semibold uppercase tracking-wider rounded-full"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding border-b border-[var(--border)]">
        <div className="container-varelli max-w-4xl">
          <p className="badge-mono mb-4">Architecture &amp; Engineering</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
            Why Discerning Kochi Homeowners Choose VARELLI
          </h2>
          <div className="prose prose-invert max-w-none text-[var(--text-secondary)] space-y-5 text-base leading-relaxed">
            <p>
              Luxury residences in Kochi demand permanent, architecture-led infrastructure. VARELLI integrates decentralized European KNX wired automation, DALI-2 circadian lighting control, Dolby Atmos reference cinema acoustics, and Swiss Zehnder ERV fresh air systems into a single invisible ecosystem.
            </p>
            <p>
              Our team handles complete first-fix electrical CAD coordination, panel building, custom acoustics, and final system commissioning — ensuring every detail is engineered for a 30-year lifespan with zero vendor lock-in.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding border-b border-[var(--border)] bg-[#08080A]">
        <div className="container-varelli">
          <p className="badge-mono mb-4">Our Services</p>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-8">
            Complete Smart Living Systems for Kochi
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { title: "KNX Home Automation", desc: "Wired European open-standard control for lighting, climate, AV, and security." },
              { title: "Private Cinema", desc: "Dolby Atmos reference cinema with Barco 4K laser projection and Sonus Faber acoustics." },
              { title: "DALI-2 Lighting", desc: "Circadian tunable-white architectural lighting with scene control." },
              { title: "Zehnder Fresh Air", desc: "Swiss ERV whole-home ventilation delivering filtered, tempered fresh air 24/7." },
              { title: "Central Vacuum", desc: "Drainvac built-in vacuum system for effortless whole-home cleaning." },
              { title: "Smart Security", desc: "DoorBird video doorbell, Hikvision 4K cameras, and KNX-integrated access control." },
            ].map((s) => (
              <div key={s.title} className="p-6 rounded-2xl bg-[var(--surface-1)] border border-[var(--border)]">
                <h3 className="font-semibold text-[var(--text-primary)] mb-2">{s.title}</h3>
                <p className="text-sm text-[var(--text-secondary)]">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} title={`Home Automation in Kochi — Frequently Asked Questions`} />
      <ServiceCTA serviceName="Home Automation" />
    </>
  );
}
