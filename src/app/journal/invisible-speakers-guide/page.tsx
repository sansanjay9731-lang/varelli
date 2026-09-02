import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import SchemaOrg from "@/components/seo/SchemaOrg";
import { buildFAQSchema } from "@/components/seo/schemas/faqPage";
import { buildArticleSchema } from "@/components/seo/schemas/article";
import Breadcrumb from "@/components/layout/Breadcrumb";
import FAQSection from "@/components/sections/service/FAQSection";
import ServiceCTA from "@/components/sections/service/ServiceCTA";

export const metadata: Metadata = generatePageMetadata({
  title: "Invisible In-Wall Speakers India — Architectural Audio Guide | VARELLI",
  description: "Complete guide to invisible in-wall speakers for luxury Indian villas. Learn how planar diaphragm plaster-over speakers work, pricing, acoustics, and Sonance / Stealth Acoustics / KEF options in India.",
  path: "/journal/invisible-speakers-guide",
  keywords: [
    "invisible speakers India",
    "invisible in-wall speakers Bangalore",
    "Sonance invisible speakers India",
    "Stealth Acoustics India",
    "architectural audio India",
    "plaster over speakers India",
  ],
});

const faqs = [
  {
    question: "What are invisible in-wall speakers?",
    answer: "Invisible speakers are planar diaphragm audio transducers mounted inside wall or ceiling cavities, covered with plaster, paint, wallpaper, or wood veneer. They deliver 170-degree room-filling sound while remaining 100% hidden.",
  },
  {
    question: "Can you paint or plaster over invisible speakers?",
    answer: "Yes. Quality architectural invisible speakers (like Sonance Motion Flex or Stealth Acoustics) are engineered to be covered with up to 3mm of plaster, paint, or flexible wall finish without degrading frequency response.",
  },
  {
    question: "How do invisible speakers compare to visible high-end speakers?",
    answer: "Modern planar diaphragm invisible speakers deliver audiophile-grade 40Hz-30kHz clarity with ultra-wide 170° dispersion. For deep sub-bass (<40Hz), they are paired with concealed bandpass in-wall subwoofers.",
  },
  {
    question: "How much do invisible speaker systems cost in India?",
    answer: "Invisible speaker systems typically range from ₹1.8L to ₹4.5L per room zone (including amplifier and concealed subwoofer), making them popular for luxury living rooms, dining spaces, and master suites.",
  },
];

export default function InvisibleSpeakersPage() {
  const articleSchema = buildArticleSchema({
    headline: "Invisible In-Wall Speakers for Luxury Homes — 2026 Design Guide",
    description: "Complete guide to invisible in-wall speakers for luxury Indian villas.",
    url: "https://varelli.co.in/journal/invisible-speakers-guide",
    datePublished: "2026-08-01",
    dateModified: "2026-08-30",
  });
  const faqSchema = buildFAQSchema(faqs);

  return (
    <>
      <SchemaOrg schema={articleSchema} />
      <SchemaOrg schema={faqSchema} />
      
      <article className="min-h-screen bg-[var(--bg)] text-[var(--text-primary)] pt-32 pb-20">
        <div className="container-varelli max-w-4xl">
          <Breadcrumb
            items={[
              { name: "Journal", href: "/journal" },
              { name: "Invisible In-Wall Speakers Guide", href: "/journal/invisible-speakers-guide" },
            ]}
          />
          
          <header className="mt-8 mb-12">
            <span className="badge-mono mb-4">Architectural Audio · Acoustics</span>
            <h1 className="font-display text-3xl md:text-5xl font-bold tracking-[-0.03em] leading-tight mb-6 text-white">
              Invisible In-Wall Speakers for Luxury Homes — 2026 Design Guide
            </h1>
            <div className="p-6 rounded-2xl bg-[var(--surface-1)] border border-[var(--border)] text-sm text-[var(--text-secondary)] leading-relaxed font-body">
              <strong className="text-white font-mono uppercase tracking-wider block mb-2">Executive Summary</strong>
              Invisible in-wall and in-ceiling speakers allow interior designers and architects to eliminate visible speaker grilles entirely. Using flat planar diaphragm panels skimmed over with wall plaster, these systems fill luxury living spaces with immersive high-fidelity audio while maintaining immaculate architectural surfaces.
            </div>
          </header>

          <div className="prose prose-invert max-w-none text-[var(--text-secondary)] space-y-8 text-lg leading-relaxed font-body">
            <section>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">
                How Do Plaster-Over Invisible Speakers Work?
              </h2>
              <p>
                Unlike traditional cone speakers that move air via forward piston motion, invisible speakers utilize micro-vibration planar diaphragm technology. High-frequency exciters vibrate a flat carbon fiber panel, radiating sound evenly across a massive 170° dispersion angle.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">
                Reference Brands in India: Sonance & Stealth Acoustics
              </h2>
              <p>
                VARELLI specifies Sonance Motion Flex and Stealth Acoustics LineaResponse series for high-end residential projects in Bangalore, Mumbai, and Delhi NCR. Combined with discrete subwoofers vented through linear HVAC slots, the audio infrastructure becomes completely invisible.
              </p>
            </section>
          </div>

          <FAQSection faqs={faqs} title="Invisible Speakers — Frequently Asked Questions" />
          <ServiceCTA serviceName="Media Rooms & Custom Audio" />
        </div>
      </article>
    </>
  );
}
