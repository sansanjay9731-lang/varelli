import Link from "next/link";
import { ArrowUpRight } from "@/components/ui/icons";

const featuredArticles = [
  {
    slug: "best-home-theatre-companies-bangalore",
    title: "Best Home Theatre Companies in Bangalore 2026",
    description: "An authoritative buyer's guide comparing reference cinema engineers, acoustic calibration, and what separates custom private cinema from retail AV stores.",
    category: "Home Theatre & Cinema",
    readTime: "8 min read"
  },
  {
    slug: "best-home-automation-companies-bangalore-2026",
    title: "Best Home Automation Companies in Bangalore 2026",
    description: "How to choose a reliable smart home integrator in Bangalore. Why European KNX open standard dominates over cloud-dependent wireless apps.",
    category: "Home Automation & KNX",
    readTime: "7 min read"
  },
  {
    slug: "knx-home-automation-bangalore-cost-2026",
    title: "KNX Home Automation Cost in Bangalore 2026",
    description: "Transparent breakdown of KNX hardware, cabling, panel design, and integration costs for 3BHK flats, luxury villas, and grand estates.",
    category: "Cost & Pricing",
    readTime: "6 min read"
  }
];

export default function JournalSection() {
  return (
    <section className="section-padding border-t border-[var(--border)] bg-[#070709]">
      <div className="container-varelli">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="badge-mono block mb-3">The VARELLI Journal &amp; Blog</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-[-0.02em] text-[var(--text-primary)] leading-tight">
              Architectural Guides &amp; Market Intelligence
            </h2>
          </div>
          <Link
            href="/journal"
            className="btn-outline px-6 py-3 text-xs uppercase tracking-wider rounded-full self-start md:self-auto hover:bg-[var(--gold)] hover:text-[#08080A] transition-colors whitespace-nowrap"
          >
            Explore All 270+ Articles
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredArticles.map((article) => (
            <Link
              key={article.slug}
              href={`/journal/${article.slug}`}
              className="group flex flex-col justify-between p-8 rounded-2xl bg-[var(--surface-1)] border border-[var(--border)] hover:border-[var(--gold)]/50 hover:bg-[var(--surface-2)] transition-all duration-300 hover:shadow-xl hover:shadow-[var(--gold)]/5"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--gold)] px-2.5 py-1 rounded bg-[var(--gold)]/10 border border-[var(--gold)]/20">
                    {article.category}
                  </span>
                  <span className="text-xs text-[var(--text-muted)] font-mono">
                    {article.readTime}
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold text-white group-hover:text-[var(--gold)] transition-colors mb-3 leading-snug">
                  {article.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6 font-body">
                  {article.description}
                </p>
              </div>
              <div className="flex items-center text-xs font-semibold text-[var(--gold)] pt-4 border-t border-[var(--border)] group-hover:border-[var(--gold)]/20">
                <span>Read Full Guide</span>
                <ArrowUpRight size={14} className="ml-1.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
