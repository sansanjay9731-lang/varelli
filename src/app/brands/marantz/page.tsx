import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import Breadcrumb from "@/components/layout/Breadcrumb";
import FAQSection from "@/components/sections/service/FAQSection";
import ServiceCTA from "@/components/sections/service/ServiceCTA";

export const metadata: Metadata = generatePageMetadata({
  title: "Marantz — Seven Decades of Audiophile Heritage in India's Home Theatres | VARELLI",
  description: "Marantz AV receivers and amplifiers — Japanese audiophile engineering for India's most discerning home theatre enthusiasts.",
  path: "/brands/marantz",
  keywords: ["Marantz India", "Marantz price India", "Marantz dealer India", "luxury smart home India"],
});

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Marantz",
  description: "Marantz AV receivers and amplifiers — Japanese audiophile engineering for India's most discerning home theatre enthusiasts.",
  url: "https://varelli.co.in/brands/marantz",
};

const faqs = [
  {
    question: "Is Marantz available in India?",
    answer: "Marantz products are available in India through luxury integration specialists like VARELLI. Contact us via WhatsApp at +91 99649 84695 to discuss Marantz integration for your residence.",
  },
  {
    question: "How does Marantz integrate with KNX home automation?",
    answer: "Marantz integrates with KNX-based smart home systems to provide seamless control alongside lighting, climate, security, and AV. VARELLI engineers this integration as part of a complete architecture-led smart home design.",
  },
  {
    question: "What is the price of Marantz products in India?",
    answer: "Marantz pricing in India varies by product line and configuration. VARELLI provides transparent project estimates that include Marantz equipment, installation, programming, and commissioning. Contact us for a precise quote.",
  },
  {
    question: "Where can I experience Marantz products before buying?",
    answer: "VARELLI offers private demonstrations in Bangalore where you can experience Marantz products live alongside other European luxury smart home brands. Book your audition via WhatsApp: +91 99649 84695.",
  },
  {
    question: "Which cities does VARELLI install Marantz in?",
    answer: "VARELLI installs Marantz products across Bangalore, Mumbai, Delhi NCR, Hyderabad, Chennai, Pune, Kochi, Kolkata, Ahmedabad, Chandigarh, and Jaipur.",
  },
  {
    question: "What is VARELLI's approach to integrating Marantz?",
    answer: "VARELLI takes an architecture-first approach — we begin with your design drawings and coordinate Marantz integration with your MEP consultant and interior designer at first-fix stage, ensuring zero visible cabling or retrofitting.",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="relative bg-[var(--surface-1)] border-b border-[var(--border)]">
        <div className="relative container-varelli pt-40 pb-16">
          <Breadcrumb
            items={[
              { name: "Brands", href: "/brands" },
              { name: "Marantz", href: "/brands/marantz" },
            ]}
          />
          <div className="mt-6 max-w-3xl">
            <span className="badge-mono block mb-5">Brand Profile · Japan</span>
            <h1 className="font-display text-[clamp(2.2rem,5vw,4rem)] font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text-primary)] mb-5">
              Marantz — Seven Decades of Audiophile Heritage in India's Home Theatres
            </h1>
            <p className="font-editorial text-xl text-[var(--text-secondary)] leading-relaxed italic mb-8">
              Marantz AV receivers and amplifiers — Japanese audiophile engineering for India's most discerning home theatre enthusiasts.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding border-b border-[var(--border)]">
        <div className="container-varelli max-w-4xl">
          <p className="badge-mono mb-4">Brand Heritage</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
            Marantz in India — Integrated by VARELLI
          </h2>
          <div className="prose prose-invert max-w-none text-[var(--text-secondary)] space-y-5 text-base leading-relaxed">
            <p>
              Marantz represents the pinnacle of Japan engineering excellence. For India's most discerning homeowners, Marantz products deliver a level of craftsmanship, reliability, and aesthetic refinement that is unmatched in the market. VARELLI integrates Marantz into complete architecture-led smart home ecosystems for luxury villas, penthouses, and private residences across India.
            </p>
            <p>
              As an integration specialist, VARELLI engineers Marantz products into KNX-based building automation systems, coordinating every detail with your architect and interior designer at first-fix stage. The result is a seamless, invisible integration that enhances your living environment without compromise.
            </p>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} title={"Marantz in India — Frequently Asked Questions"} />
      <ServiceCTA serviceName="Home Automation" />
    </>
  );
}
