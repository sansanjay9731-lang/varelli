"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { ArrowUpRight, Search } from "@/components/ui/icons";
import { journalArticles } from "@/data/journalArticles";

const categories = [
  "All",
  "Home Automation & KNX",
  "Home Theatre & Cinema",
  "Cost & Pricing",
  "Architecture & Guides",
  "Fresh Air & IAQ",
  "Central Vacuum",
  "Smart Security",
];

export default function JournalDirectory() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(24);

  const filteredArticles = useMemo(() => {
    return journalArticles.filter((article) => {
      const matchesCategory =
        selectedCategory === "All" || article.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        article.title.toLowerCase().includes(q) ||
        article.description.toLowerCase().includes(q) ||
        article.slug.toLowerCase().includes(q) ||
        article.category.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const displayedArticles = filteredArticles.slice(0, visibleCount);

  return (
    <div className="w-full">
      {/* Search & Filter Controls */}
      <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between mb-10">
        {/* Search Input */}
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-muted)]" />
          <input
            type="text"
            placeholder="Search guides, Bangalore areas, brands, costs..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setVisibleCount(24);
            }}
            className="w-full pl-11 pr-4 py-3 rounded-full bg-[var(--surface-1)] border border-[var(--border)] text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--gold)] transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-[var(--text-muted)] hover:text-white"
            >
              Clear
            </button>
          )}
        </div>

        {/* Article Count */}
        <div className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider self-center">
          Showing {displayedArticles.length} of {filteredArticles.length} Articles
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap gap-2 mb-12 overflow-x-auto pb-2">
        {categories.map((cat) => {
          const count =
            cat === "All"
              ? journalArticles.length
              : journalArticles.filter((a) => a.category === cat).length;
          const isSelected = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setVisibleCount(24);
              }}
              className={'px-4 py-2 rounded-full text-xs font-mono tracking-wider transition-all flex items-center gap-1.5 ' + (
                isSelected
                  ? 'bg-[var(--gold)] text-[#08080A] font-bold shadow-md shadow-[var(--gold)]/20'
                  : 'bg-[var(--surface-1)] border border-[var(--border)] text-[var(--text-secondary)] hover:text-white hover:border-[var(--gold)]/50'
              )}
            >
              <span>{cat}</span>
              <span
                className={'text-[10px] px-1.5 py-0.5 rounded-full ' + (
                  isSelected
                    ? 'bg-black/20 text-black font-semibold'
                    : 'bg-white/5 text-[var(--text-muted)]'
                )}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Articles Grid */}
      {displayedArticles.length === 0 ? (
        <div className="text-center py-20 bg-[var(--surface-1)] rounded-2xl border border-[var(--border)] p-8">
          <p className="font-display text-xl text-[var(--text-primary)] mb-2">
            No articles found for &quot;{searchQuery}&quot;
          </p>
          <p className="text-sm text-[var(--text-secondary)] mb-6">
            Try searching for &quot;Bangalore&quot;, &quot;KNX&quot;, &quot;Dolby Atmos&quot;, or &quot;Cost&quot;.
          </p>
          <button
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("All");
            }}
            className="btn-gold px-6 py-2.5 text-xs uppercase tracking-wider rounded-full font-semibold"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedArticles.map((article) => (
            <Link
              key={article.slug}
              href={'/journal/' + article.slug}
              className="group flex flex-col justify-between p-6 rounded-2xl bg-[var(--surface-1)] border border-[var(--border)] hover:border-[var(--gold)]/50 hover:bg-[var(--surface-2)] transition-all duration-300 hover:shadow-xl hover:shadow-[var(--gold)]/5"
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

                <h2 className="font-display text-lg font-bold text-[var(--text-primary)] group-hover:text-[var(--gold)] transition-colors leading-snug mb-3">
                  {article.title}
                </h2>

                <p className="text-sm text-[var(--text-secondary)] line-clamp-3 leading-relaxed mb-6 font-body">
                  {article.description}
                </p>
              </div>

              <div className="flex items-center text-xs font-semibold text-[var(--gold)] pt-4 border-t border-[var(--border)] group-hover:border-[var(--gold)]/20">
                <span>Read Full Article</span>
                <ArrowUpRight
                  size={14}
                  className="ml-1.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* Load More Button */}
      {visibleCount < filteredArticles.length && (
        <div className="text-center mt-12">
          <button
            onClick={() => setVisibleCount((prev) => prev + 24)}
            className="btn-outline px-8 py-3.5 text-xs font-semibold uppercase tracking-wider rounded-full hover:bg-[var(--gold)] hover:text-[#08080A] transition-colors"
          >
            Load More Articles ({filteredArticles.length - visibleCount} remaining)
          </button>
        </div>
      )}
    </div>
  );
}
