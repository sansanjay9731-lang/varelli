import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import Breadcrumb from "@/components/layout/Breadcrumb";
import FAQSection from "@/components/sections/service/FAQSection";
import ServiceCTA from "@/components/sections/service/ServiceCTA";
import Link from "next/link";

export const metadata: Metadata = generatePageMetadata({
  title: "Luxury Home Automation in Jubilee Hills, Hyderabad | VARELLI",
  description: "KNX smart home systems for Jubilee Hills luxury residences in Hyderabad. Film industry executives, senior officials, and bungalow estates served by VARELLI.",
  path: "/home-automation/hyderabad/jubilee-hills",
  keywords: [
    "home automation Jubilee Hills Hyderabad",
    "smart home Jubilee Hills",
    "KNX automation Jubilee Hills",
    "luxury home automation Hyderabad",
  ],
});

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "VARELLI",
  url: "https://varelli.co.in/home-automation/hyderabad/jubilee-hills",
  telephone: "+919964984695",
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
    addressLocality: "Jubilee Hills, Hyderabad",
  },
  description: "VARELLI provides KNX home automation and luxury smart living systems for residences in Jubilee Hills, Hyderabad.",
};

const faqs = [
  {
    question: "Does VARELLI serve Jubilee Hills, Hyderabad?",
    answer: "Yes. VARELLI provides full-scope KNX home automation, private cinema, fresh air ventilation, and central vacuum services in Jubilee Hills. We serve luxury villas, bungalows, and premium residences across the area.",
  },
  {
    question: "What home automation systems are available in Jubilee Hills?",
    answer: "VARELLI offers KNX wired home automation, DALI-2 lighting control, Dolby Atmos private cinema, Zehnder ERV fresh air ventilation, Drainvac central vacuum, DoorBird access control, and structured home networking.",
  },
  {
    question: "How much does smart home automation cost in Jubilee Hills?",
    answer: "Home automation in Jubilee Hills ranges from Rs. 4.8 Lakhs to Rs. 7.5 Lakhs for a KNX Core Living setup, Rs. 14.5 Lakhs to Rs. 24 Lakhs for an Architectural Villa package, and Rs. 38 Lakhs to Rs. 65 Lakhs+ for Grand Estate systems.",
  },
  {
    question: "What is KNX and why is it best for Jubilee Hills luxury homes?",
    answer: "KNX is the international open standard (ISO/IEC 14543) for building automation. It works offline with zero internet dependency, no subscription fees, and lasts 30+ years. Perfect for the large bungalows and villas of Jubilee Hills.",
  },
  {
    question: "How can I schedule a consultation for my Jubilee Hills residence?",
    answer: "Contact VARELLI via WhatsApp at +91 99649 84695 or use the contact form on our website to book a private architectural consultation.",
  },
  {
    question: "Which European smart home brands does VARELLI install in Jubilee Hills?",
    answer: "VARELLI integrates Basalte keypads, Ekinex plates, Zehnder ERV, Sonus Faber and KEF speakers, Barco 4K projectors, DoorBird video doorbells, and Drainvac central vacuum systems.",
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="relative bg-[var(--surface-1)] border-b border-[var(--border)]">
        <div className="relative container-varelli pt-40 pb-16">
          <Breadcrumb
            items={[
              { name: "Home Automation", href: "/home-automation" },
              { name: "Hyderabad", href: "/home-automation/hyderabad" },
              { name: "Jubilee Hills", href: "/home-automation/hyderabad/jubilee-hills" },
            ]}
          />
          <div className="mt-6 max-w-3xl">
            <span className="badge-mono block mb-5">Home Automation · Jubilee Hills, Hyderabad</span>
            <h1 className="font-display text-[clamp(2.2rem,5vw,4rem)] font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text-primary)] mb-5">
              Luxury Home Automation in Jubilee Hills, Hyderabad
            </h1>
            <p className="font-editorial text-xl text-[var(--text-secondary)] leading-relaxed italic mb-8">
              KNX architecture-led smart home systems for Hyderabad&apos;s most prestigious address.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-gold px-8 py-3.5 text-xs font-semibold uppercase tracking-wider rounded-full">
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
            Why Jubilee Hills Homeowners Choose VARELLI
          </h2>
          <div className="prose prose-invert max-w-none text-[var(--text-secondary)] space-y-5 text-base leading-relaxed">
            <p>
              Jubilee Hills is home to film industry leaders, senior officials, and established business families whose residences demand infrastructure that matches their stature. VARELLI integrates European KNX wired automation, DALI-2 circadian lighting, Dolby Atmos private cinema, and Swiss Zehnder ERV fresh air systems into one seamless ecosystem.
            </p>
            <p>
              Our team handles complete first-fix electrical CAD, panel building, custom acoustics, and commissioning — engineered for a 30-year lifespan with zero vendor lock-in.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding border-b border-[var(--border)] bg-[#08080A]">
        <div className="container-varelli">
          <p className="badge-mono mb-4">Our Services</p>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-8">
            Complete Smart Living Systems for Jubilee Hills
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

      <FAQSection faqs={faqs} title="Home Automation in Jubilee Hills — Frequently Asked Questions" />
      <ServiceCTA serviceName="Home Automation" />
    </>
  );
}
