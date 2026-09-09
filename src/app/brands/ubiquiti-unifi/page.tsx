import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import Breadcrumb from "@/components/layout/Breadcrumb";
import FAQSection from "@/components/sections/service/FAQSection";
import ServiceCTA from "@/components/sections/service/ServiceCTA";

export const metadata: Metadata = generatePageMetadata({
  title: "Ubiquiti UniFi — Enterprise-Grade Networking for India's Luxury Smart Homes | VARELLI",
  description: "UniFi Dream Machine Pro and Wi-Fi 6E access points delivering enterprise-grade connectivity for luxury residences.",
  path: "/brands/ubiquiti-unifi",
  keywords: ["Ubiquiti UniFi India", "Ubiquiti UniFi price India", "Ubiquiti UniFi dealer India", "luxury smart home India"],
});

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Ubiquiti UniFi",
  description: "UniFi Dream Machine Pro and Wi-Fi 6E access points delivering enterprise-grade connectivity for luxury residences.",
  url: "https://varelli.co.in/brands/ubiquiti-unifi",
};

const faqs = [
  {
    question: "Is Ubiquiti UniFi available in India?",
    answer: "Ubiquiti UniFi products are available in India through luxury integration specialists like VARELLI. Contact us via WhatsApp at +91 99649 84695 to discuss Ubiquiti UniFi integration for your residence.",
  },
  {
    question: "How does Ubiquiti UniFi integrate with KNX home automation?",
    answer: "Ubiquiti UniFi integrates with KNX-based smart home systems to provide seamless control alongside lighting, climate, security, and AV. VARELLI engineers this integration as part of a complete architecture-led smart home design.",
  },
  {
    question: "What is the price of Ubiquiti UniFi products in India?",
    answer: "Ubiquiti UniFi pricing in India varies by product line and configuration. VARELLI provides transparent project estimates that include Ubiquiti UniFi equipment, installation, programming, and commissioning. Contact us for a precise quote.",
  },
  {
    question: "Where can I experience Ubiquiti UniFi products before buying?",
    answer: "VARELLI offers private demonstrations in Bangalore where you can experience Ubiquiti UniFi products live alongside other European luxury smart home brands. Book your audition via WhatsApp: +91 99649 84695.",
  },
  {
    question: "Which cities does VARELLI install Ubiquiti UniFi in?",
    answer: "VARELLI installs Ubiquiti UniFi products across Bangalore, Mumbai, Delhi NCR, Hyderabad, Chennai, Pune, Kochi, Kolkata, Ahmedabad, Chandigarh, and Jaipur.",
  },
  {
    question: "What is VARELLI's approach to integrating Ubiquiti UniFi?",
    answer: "VARELLI takes an architecture-first approach — we begin with your design drawings and coordinate Ubiquiti UniFi integration with your MEP consultant and interior designer at first-fix stage, ensuring zero visible cabling or retrofitting.",
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
              { name: "Ubiquiti UniFi", href: "/brands/ubiquiti-unifi" },
            ]}
          />
          <div className="mt-6 max-w-3xl">
            <span className="badge-mono block mb-5">Brand Profile · United States</span>
            <h1 className="font-display text-[clamp(2.2rem,5vw,4rem)] font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text-primary)] mb-5">
              Ubiquiti UniFi — Enterprise-Grade Networking for India's Luxury Smart Homes
            </h1>
            <p className="font-editorial text-xl text-[var(--text-secondary)] leading-relaxed italic mb-8">
              UniFi Dream Machine Pro and Wi-Fi 6E access points delivering enterprise-grade connectivity for luxury residences.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding border-b border-[var(--border)]">
        <div className="container-varelli max-w-4xl">
          <p className="badge-mono mb-4">Brand Heritage</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
            Ubiquiti UniFi in India — Integrated by VARELLI
          </h2>
          <div className="prose prose-invert max-w-none text-[var(--text-secondary)] space-y-5 text-base leading-relaxed">
            <p>
              Ubiquiti UniFi represents the pinnacle of United States engineering excellence. For India's most discerning homeowners, Ubiquiti UniFi products deliver a level of craftsmanship, reliability, and aesthetic refinement that is unmatched in the market. VARELLI integrates Ubiquiti UniFi into complete architecture-led smart home ecosystems for luxury villas, penthouses, and private residences across India.
            </p>
            <p>
              As an integration specialist, VARELLI engineers Ubiquiti UniFi products into KNX-based building automation systems, coordinating every detail with your architect and interior designer at first-fix stage. The result is a seamless, invisible integration that enhances your living environment without compromise.
            </p>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} title={"Ubiquiti UniFi in India — Frequently Asked Questions"} />
      <ServiceCTA serviceName="Home Automation" />
    </>
  );
}
