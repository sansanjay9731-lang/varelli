import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import Breadcrumb from "@/components/layout/Breadcrumb";
import FAQSection from "@/components/sections/service/FAQSection";
import ServiceCTA from "@/components/sections/service/ServiceCTA";
import JournalDirectory from "@/components/journal/JournalDirectory";
import Link from "next/link";
import { ArrowUpRight } from "@/components/ui/icons";

export const metadata: Metadata = generatePageMetadata({
  title: "The VARELLI Journal & Blog — Smart Home, Home Theatre & KNX Guides",
  description: "Explore 270+ expert guides, transparent cost breakdowns, and technical articles on KNX home automation, Dolby Atmos cinema, and luxury living in Bangalore and India.",
  path: "/journal",
  keywords: [
    "smart home blog",
    "home automation articles",
    "home theatre guides bangalore",
    "KNX automation india blog",
    "dolby atmos installation bangalore",
    "home automation cost bangalore"
  ],
});

const featuredArticles = [
  {
    slug: "best-home-theatre-companies-bangalore",
    title: "Best Home Theatre Companies in Bangalore 2026 — Expert Guide",
    description: "An authoritative buyer's guide comparing reference cinema engineers, acoustics calibration, and what separates true private cinema from generic AV stores.",
    category: "Home Theatre & Cinema",
    tag: "Featured Guide"
  },
  {
    slug: "best-home-automation-companies-bangalore-2026",
    title: "Best Home Automation Companies in Bangalore 2026",
    description: "How to choose a reliable smart home integrator in Bangalore. Why European KNX open standard dominates over cloud-dependent wireless apps.",
    category: "Home Automation & KNX",
    tag: "Top Read"
  },
  {
    slug: "knx-home-automation-bangalore-cost-2026",
    title: "KNX Home Automation Cost in Bangalore 2026 — Full Price Breakdown",
    description: "Complete transparent breakdown of KNX hardware, cabling, panel design, and integration costs for 3BHK flats, villas, and grand estates in Bangalore.",
    category: "Cost & Pricing",
    tag: "Price Guide"
  }
];

const faqs = [
  {
    question: "What topics does the VARELLI Journal & Blog cover?",
    answer: "Our journal covers architecture-first KNX smart home systems, reference Dolby Atmos home theatre design, acoustic engineering, DALI-2 circadian lighting, Zehnder ERV fresh air ventilation, Drainvac central vacuum systems, and transparent cost guides for luxury residences across Bangalore and India.",
  },
  {
    question: "How often are new smart home and home theatre guides published?",
    answer: "We continuously publish technical deep dives, area-wise guides for Bangalore localities, brand comparisons (Sonus Faber, Barco, Basalte, Ekinex, KEF, Anthem), and project walkthroughs.",
  },
  {
    question: "Can I get a customized quote for my Bangalore residence?",
    answer: "Yes. Contact VARELLI via WhatsApp at +91 99649 84695 or submit our contact form to schedule an architectural consultation and detailed bill of quantities (BOQ) review for your home.",
  },
  {
    question: "Are these guides relevant for architects and interior designers?",
    answer: "Absolutely. We provide dedicated MEP coordination guides, KNX conduit layouts, and acoustic specifications tailored specifically for Indian architects and interior design practices.",
  },
];

export default function JournalPage() {
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "The VARELLI Journal & Blog",
    description: "270+ architectural guides and technical articles on luxury home automation, private cinema, and acoustic engineering.",
    url: "https://varelli.co.in/journal",
    publisher: {
      "@type": "Organization",
      name: "VARELLI",
      url: "https://varelli.co.in",
      logo: {
        "@type": "ImageObject",
        url: "https://varelli.co.in/images/varelli-logo.png",
      },
    },
  };

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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Header */}
      <section className="relative bg-[var(--surface-1)] border-b border-[var(--border)]">
        <div className="relative container-varelli pt-36 pb-14">
          <Breadcrumb
            items={[
              { name: "Home", href: "/" },
              { name: "Journal & Blog", href: "/journal" },
            ]}
          />
          <div className="mt-6 max-w-3xl">
            <span className="badge-mono block mb-4">The VARELLI Journal &amp; Blog</span>
            <h1 className="font-display text-[clamp(2.2rem,5vw,4rem)] font-bold leading-[1.08] tracking-[-0.03em] text-[var(--text-primary)] mb-5">
              Intelligent Living Insights, Guides &amp; Market Intelligence
            </h1>
            <p className="font-editorial text-xl text-[var(--text-secondary)] leading-relaxed italic mb-4">
              Over 270 engineering whitepapers, Bangalore locality spotlights, transparent price guides, and European integration standards.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Articles Section */}
      <section className="section-padding border-b border-[var(--border)] bg-[#0A0A0D]">
        <div className="container-varelli">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="badge-mono block mb-2">Editor&apos;s Choice</span>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-white">
                Featured Insights
              </h2>
            </div>
            <span className="hidden md:inline-block text-xs font-mono text-[var(--gold)] uppercase tracking-wider">
              Must-Read Architecture Guides
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/journal/${article.slug}`}
                className="group p-8 rounded-2xl bg-[var(--surface-1)] border border-[var(--gold)]/30 hover:border-[var(--gold)] transition-all duration-300 hover:shadow-2xl hover:shadow-[var(--gold)]/10 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#08080A] bg-[var(--gold)] px-2.5 py-1 rounded font-bold">
                      {article.tag}
                    </span>
                    <span className="text-xs text-[var(--text-muted)] font-mono">
                      {article.category}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-white group-hover:text-[var(--gold)] transition-colors mb-3 leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6 font-body">
                    {article.description}
                  </p>
                </div>
                <div className="flex items-center text-xs font-semibold text-[var(--gold)] pt-4 border-t border-[var(--border)] group-hover:border-[var(--gold)]/30">
                  <span>Read Full Guide</span>
                  <ArrowUpRight size={14} className="ml-1.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Main Directory & Search */}
      <section className="section-padding border-b border-[var(--border)]">
        <div className="container-varelli">
          <div className="mb-10">
            <span className="badge-mono block mb-2">Explore All 270+ Guides</span>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-white">
              All Journal Articles &amp; Resources
            </h2>
            <p className="text-sm text-[var(--text-secondary)] mt-2">
              Filter by category or search by topic, Bangalore neighborhood, brand, or cost tier.
            </p>
          </div>

          <JournalDirectory />
        </div>
      </section>

      {/* FAQ & CTA */}
      <FAQSection
        faqs={faqs}
        title="VARELLI Journal & Blog — Frequently Asked Questions"
      />
      <ServiceCTA serviceName="Home Automation" />
    </>
  );
}
