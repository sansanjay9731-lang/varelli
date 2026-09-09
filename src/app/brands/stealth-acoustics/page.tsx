import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import Breadcrumb from "@/components/layout/Breadcrumb";
import FAQSection from "@/components/sections/service/FAQSection";
import ServiceCTA from "@/components/sections/service/ServiceCTA";

export const metadata: Metadata = generatePageMetadata({
  title: "Stealth Acoustics — Truly Invisible Speakers for Architecturally Pure Interiors | VARELLI",
  description: "Stealth Acoustics invisible speakers — paintable, plaster-over loudspeakers for India's most design-conscious luxury interiors.",
  path: "/brands/stealth-acoustics",
  keywords: ["Stealth Acoustics India", "Stealth Acoustics price India", "Stealth Acoustics dealer India", "luxury smart home India"],
});

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Stealth Acoustics",
  description: "Stealth Acoustics invisible speakers — paintable, plaster-over loudspeakers for India's most design-conscious luxury interiors.",
  url: "https://varelli.co.in/brands/stealth-acoustics",
};

const faqs = [
  {
    question: "Is Stealth Acoustics available in India?",
    answer: "Stealth Acoustics products are available in India through luxury integration specialists like VARELLI. Contact us via WhatsApp at +91 99649 84695 to discuss Stealth Acoustics integration for your residence.",
  },
  {
    question: "How does Stealth Acoustics integrate with KNX home automation?",
    answer: "Stealth Acoustics integrates with KNX-based smart home systems to provide seamless control alongside lighting, climate, security, and AV. VARELLI engineers this integration as part of a complete architecture-led smart home design.",
  },
  {
    question: "What is the price of Stealth Acoustics products in India?",
    answer: "Stealth Acoustics pricing in India varies by product line and configuration. VARELLI provides transparent project estimates that include Stealth Acoustics equipment, installation, programming, and commissioning. Contact us for a precise quote.",
  },
  {
    question: "Where can I experience Stealth Acoustics products before buying?",
    answer: "VARELLI offers private demonstrations in Bangalore where you can experience Stealth Acoustics products live alongside other European luxury smart home brands. Book your audition via WhatsApp: +91 99649 84695.",
  },
  {
    question: "Which cities does VARELLI install Stealth Acoustics in?",
    answer: "VARELLI installs Stealth Acoustics products across Bangalore, Mumbai, Delhi NCR, Hyderabad, Chennai, Pune, Kochi, Kolkata, Ahmedabad, Chandigarh, and Jaipur.",
  },
  {
    question: "What is VARELLI's approach to integrating Stealth Acoustics?",
    answer: "VARELLI takes an architecture-first approach — we begin with your design drawings and coordinate Stealth Acoustics integration with your MEP consultant and interior designer at first-fix stage, ensuring zero visible cabling or retrofitting.",
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
              { name: "Stealth Acoustics", href: "/brands/stealth-acoustics" },
            ]}
          />
          <div className="mt-6 max-w-3xl">
            <span className="badge-mono block mb-5">Brand Profile · United States</span>
            <h1 className="font-display text-[clamp(2.2rem,5vw,4rem)] font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text-primary)] mb-5">
              Stealth Acoustics — Truly Invisible Speakers for Architecturally Pure Interiors
            </h1>
            <p className="font-editorial text-xl text-[var(--text-secondary)] leading-relaxed italic mb-8">
              Stealth Acoustics invisible speakers — paintable, plaster-over loudspeakers for India's most design-conscious luxury interiors.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding border-b border-[var(--border)]">
        <div className="container-varelli max-w-4xl">
          <p className="badge-mono mb-4">Brand Heritage</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
            Stealth Acoustics in India — Integrated by VARELLI
          </h2>
          <div className="prose prose-invert max-w-none text-[var(--text-secondary)] space-y-5 text-base leading-relaxed">
            <p>
              Stealth Acoustics represents the pinnacle of United States engineering excellence. For India's most discerning homeowners, Stealth Acoustics products deliver a level of craftsmanship, reliability, and aesthetic refinement that is unmatched in the market. VARELLI integrates Stealth Acoustics into complete architecture-led smart home ecosystems for luxury villas, penthouses, and private residences across India.
            </p>
            <p>
              As an integration specialist, VARELLI engineers Stealth Acoustics products into KNX-based building automation systems, coordinating every detail with your architect and interior designer at first-fix stage. The result is a seamless, invisible integration that enhances your living environment without compromise.
            </p>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} title={"Stealth Acoustics in India — Frequently Asked Questions"} />
      <ServiceCTA serviceName="Home Automation" />
    </>
  );
}
