import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import Breadcrumb from "@/components/layout/Breadcrumb";
import FAQSection from "@/components/sections/service/FAQSection";
import ServiceCTA from "@/components/sections/service/ServiceCTA";

export const metadata: Metadata = generatePageMetadata({
  title: "JBL Synthesis — Hollywood's Reference Cinema Audio for Indian Private Theatres | VARELLI",
  description: "JBL Synthesis SCL series cinema speakers — the same technology used in professional Hollywood screening rooms.",
  path: "/brands/jbl-synthesis",
  keywords: ["JBL Synthesis India", "JBL Synthesis price India", "JBL Synthesis dealer India", "luxury smart home India"],
});

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "JBL Synthesis",
  description: "JBL Synthesis SCL series cinema speakers — the same technology used in professional Hollywood screening rooms.",
  url: "https://varelli.co.in/brands/jbl-synthesis",
};

const faqs = [
  {
    question: "Is JBL Synthesis available in India?",
    answer: "JBL Synthesis products are available in India through luxury integration specialists like VARELLI. Contact us via WhatsApp at +91 99649 84695 to discuss JBL Synthesis integration for your residence.",
  },
  {
    question: "How does JBL Synthesis integrate with KNX home automation?",
    answer: "JBL Synthesis integrates with KNX-based smart home systems to provide seamless control alongside lighting, climate, security, and AV. VARELLI engineers this integration as part of a complete architecture-led smart home design.",
  },
  {
    question: "What is the price of JBL Synthesis products in India?",
    answer: "JBL Synthesis pricing in India varies by product line and configuration. VARELLI provides transparent project estimates that include JBL Synthesis equipment, installation, programming, and commissioning. Contact us for a precise quote.",
  },
  {
    question: "Where can I experience JBL Synthesis products before buying?",
    answer: "VARELLI offers private demonstrations in Bangalore where you can experience JBL Synthesis products live alongside other European luxury smart home brands. Book your audition via WhatsApp: +91 99649 84695.",
  },
  {
    question: "Which cities does VARELLI install JBL Synthesis in?",
    answer: "VARELLI installs JBL Synthesis products across Bangalore, Mumbai, Delhi NCR, Hyderabad, Chennai, Pune, Kochi, Kolkata, Ahmedabad, Chandigarh, and Jaipur.",
  },
  {
    question: "What is VARELLI's approach to integrating JBL Synthesis?",
    answer: "VARELLI takes an architecture-first approach — we begin with your design drawings and coordinate JBL Synthesis integration with your MEP consultant and interior designer at first-fix stage, ensuring zero visible cabling or retrofitting.",
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
              { name: "JBL Synthesis", href: "/brands/jbl-synthesis" },
            ]}
          />
          <div className="mt-6 max-w-3xl">
            <span className="badge-mono block mb-5">Brand Profile · United States</span>
            <h1 className="font-display text-[clamp(2.2rem,5vw,4rem)] font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text-primary)] mb-5">
              JBL Synthesis — Hollywood's Reference Cinema Audio for Indian Private Theatres
            </h1>
            <p className="font-editorial text-xl text-[var(--text-secondary)] leading-relaxed italic mb-8">
              JBL Synthesis SCL series cinema speakers — the same technology used in professional Hollywood screening rooms.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding border-b border-[var(--border)]">
        <div className="container-varelli max-w-4xl">
          <p className="badge-mono mb-4">Brand Heritage</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
            JBL Synthesis in India — Integrated by VARELLI
          </h2>
          <div className="prose prose-invert max-w-none text-[var(--text-secondary)] space-y-5 text-base leading-relaxed">
            <p>
              JBL Synthesis represents the pinnacle of United States engineering excellence. For India's most discerning homeowners, JBL Synthesis products deliver a level of craftsmanship, reliability, and aesthetic refinement that is unmatched in the market. VARELLI integrates JBL Synthesis into complete architecture-led smart home ecosystems for luxury villas, penthouses, and private residences across India.
            </p>
            <p>
              As an integration specialist, VARELLI engineers JBL Synthesis products into KNX-based building automation systems, coordinating every detail with your architect and interior designer at first-fix stage. The result is a seamless, invisible integration that enhances your living environment without compromise.
            </p>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} title={"JBL Synthesis in India — Frequently Asked Questions"} />
      <ServiceCTA serviceName="Home Automation" />
    </>
  );
}
