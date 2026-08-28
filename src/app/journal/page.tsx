import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import Breadcrumb from "@/components/layout/Breadcrumb";
import Link from "next/link";

export const metadata: Metadata = generatePageMetadata({
  title: "The VARELLI Journal — Intelligent Living Guides & Resources",
  description:
    "Expert guides on home automation (KNX, Control4), private cinema (Dolby Atmos), fresh air ventilation (Zehnder ERV), and intelligent living for luxury residences across India.",
  path: "/journal",
  keywords: [
    "home automation guide India",
    "KNX vs Control4 India",
    "KNX vs Crestron vs Control4",
    "home automation cost India 2026",
    "private cinema design guide India",
    "Dolby Atmos room design guide India",
    "fresh air ventilation vs air purifier India",
    "private cinema vs home theatre India",
    "home theatre design guide India",
  ],
});

const articles = [
  {
    slug: "knx-vs-crestron-vs-control4",
    title: "KNX vs Crestron vs Control4 — Which Protocol Should You Choose?",
    category: "Home Automation",
    description: "A complete technical comparison of KNX, Crestron, and Control4 — architecture, cost, reliability, and which is right for your luxury villa in India.",
    readTime: 12,
    date: "2026-08-28",
  },
  {
    slug: "home-automation-cost-india-2026",
    title: "Home Automation Cost in India 2026 — Honest ₹ Price Guide",
    category: "Home Automation",
    description: "Transparent pricing for KNX, Control4, and WiFi home automation in India. Cost tables by protocol, system type, and home size. Updated 2026.",
    readTime: 10,
    date: "2026-08-15",
  },
  {
    slug: "dolby-atmos-room-design-guide",
    title: "Dolby Atmos Room Design Guide — Full Technical Breakdown",
    category: "Home Theatre",
    description: "Complete technical guide: speaker configurations (5.1.2 to 9.4.6), room dimensions, RT60 targets, acoustic treatment, and projector selection for Indian luxury homes.",
    readTime: 14,
    date: "2026-08-10",
  },
  {
    slug: "private-cinema-vs-home-theatre",
    title: "Dedicated Home Theatre vs Media Room — What's the Difference?",
    category: "Home Theatre",
    description: "Dedicated home theatre vs living media room: acoustics, screen size, Dolby Atmos configurations, seating, and investment. Which should you build in your residence?",
    readTime: 8,
    date: "2026-08-05",
  },
  {
    slug: "fresh-air-ventilation-vs-air-purifier",
    title: "Fresh Air Ventilation vs Air Purifier — What Actually Works?",
    category: "Fresh Air",
    description: "Why air purifiers cannot fix high CO2 levels in air-conditioned homes. How Zehnder Energy Recovery Ventilation (ERV) works and why it matters in India.",
    readTime: 10,
    date: "2026-08-01",
  },
  {
    slug: "home-automation-cost-bangalore",
    title: "How Much Does Home Automation Cost in Bangalore?",
    category: "Home Automation",
    description: "A transparent guide to home automation investment in Bangalore — covering system types, scope, and what determines the final cost.",
    readTime: 8,
    date: "2026-01-15",
  },
  {
    slug: "home-theatre-cost-bangalore",
    title: "How Much Does a Home Theatre Cost in Bangalore?",
    category: "Home Theatre",
    description: "From living room audio-visual systems to dedicated Dolby Atmos installations — what different levels of home theatre investment look like.",
    readTime: 7,
    date: "2026-01-22",
  },
  {
    slug: "knx-vs-control4",
    title: "KNX vs Control4 — Which Home Automation System is Right for You?",
    category: "Home Automation",
    description: "A detailed, honest comparison of two leading luxury home automation platforms — architecture, reliability, flexibility, and fit.",
    readTime: 10,
    date: "2026-02-01",
  },
  {
    slug: "private-cinema-design-guide",
    title: "Private Cinema Design Guide — Everything You Need to Know",
    category: "Private Cinema",
    description: "From room dimensions and acoustic treatment to Dolby Atmos configuration and laser projection — a complete design reference for private cinema owners.",
    readTime: 12,
    date: "2026-02-10",
  },
  {
    slug: "what-is-home-automation",
    title: "What is Home Automation? A Complete Guide for Indian Homeowners",
    category: "Home Automation",
    description: "Understanding what home automation is, how it works, what it includes, and how to plan it for a new or existing residence in India.",
    readTime: 9,
    date: "2026-02-18",
  },
  {
    slug: "dolby-atmos-home-theatre",
    title: "What is Dolby Atmos? And What it Means for Your Home Cinema",
    category: "Private Cinema",
    description: "Dolby Atmos explained — how object-based audio works, why it matters, and what different configurations (7.1.4, 9.1.4, 9.1.6) mean in practice.",
    readTime: 8,
    date: "2026-02-25",
  },
];

export default function JournalPage() {
  return (
    <>
      <section className="relative bg-[var(--surface-1)] border-b border-[var(--border)]">
        <div className="relative container-varelli pt-40 pb-16">
          <Breadcrumb items={[{ name: "Journal", href: "/journal" }]} />
          <div className="mt-6 max-w-2xl">
            <span className="badge-mono block mb-5">Knowledge & Resources</span>
            <h1 className="font-display text-[clamp(2.5rem,5vw,4rem)] font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text-primary)] mb-5">
              The VARELLI Journal
            </h1>
            <p className="text-[var(--text-secondary)] text-lg leading-relaxed font-body">
              Expert guides, cost references, and technical resources for homeowners, architects, and designers planning intelligent residential environments.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-varelli">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={"/journal/" + article.slug}
                className="group glass-card overflow-hidden hover:border-[var(--border-hover)] transition-all duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="badge-mono text-[9px]">{article.category}</span>
                    <span className="text-xs text-[var(--text-muted)] font-mono">{article.readTime} min read</span>
                  </div>
                  <h2 className="font-display text-lg font-semibold text-[var(--text-primary)] mb-3 group-hover:text-[var(--gold)] transition-colors duration-300 leading-snug">
                    {article.title}
                  </h2>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed font-body line-clamp-3">
                    {article.description}
                  </p>
                  <div className="mt-4 pt-4 border-t border-[var(--border)] flex items-center justify-between">
                    <span className="text-xs text-[var(--text-muted)] font-mono">
                      {new Date(article.date).toLocaleDateString("en-IN", { month: "long", year: "numeric" })}
                    </span>
                    <span className="text-xs text-[var(--gold)] group-hover:text-[var(--gold-light)] transition-colors font-body">
                      Read →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
