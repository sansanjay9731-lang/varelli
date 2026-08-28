"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Breadcrumb from "@/components/layout/Breadcrumb";
import { brands } from "@/lib/data/brands";
import { fadeUp, staggerContainer } from "@/lib/animations";
import ConsultationCTA from "@/components/sections/home/ConsultationCTA";
import { MessageCircle, Sparkles, Check, ShieldCheck, ArrowRight } from "@/components/ui/icons";

import BrandLogo from "@/components/ui/BrandLogos";

const categories = [
  { id: "all", label: "All Curated Brands (20)" },
  { id: "automation", label: "Automation & KNX" },
  { id: "audio", label: "Reference Cinema Audio" },
  { id: "video", label: "4K Laser & Screens" },
  { id: "lighting", label: "Architectural Keypads" },
  { id: "climate", label: "Fresh Air & IAQ" },
  { id: "vacuum", label: "Central Vacuum" },
  { id: "security", label: "Smart Security" },
  { id: "networking", label: "Enterprise WiFi 7" },
];

export default function BrandsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBrands = brands.filter((b) => {
    const matchesCat = selectedCategory === "all" || b.category === selectedCategory;
    const matchesSearch =
      b.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.origin.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.speciality.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.whyPeopleRelate.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.tagline.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const createBrandWhatsAppLink = (brandName: string, category: string) => {
    const text = `Hello VARELLI, I would like to inquire about ${brandName} (${category}) for our residential project. Please share product specifications and Indian pricing.`;
    return `https://wa.me/919900000000?text=${encodeURIComponent(text)}`;
  };

  return (
    <>
      <section className="relative bg-[var(--surface-1)] border-b border-[var(--border)]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(197,168,128,0.06)_0%,transparent_60%)]" />
        <div className="relative container-varelli pt-40 pb-16">
          <Breadcrumb items={[{ name: "Brands Ecosystem", href: "/brands" }]} />
          <div className="mt-6 max-w-3xl">
            <span className="badge-mono block mb-5">Curated Global Ecosystem</span>
            <h1 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text-primary)] mb-5">
              The World’s Finest
              <br />
              <span className="text-gradient-gold">Architectural Technology.</span>
            </h1>
            <p className="text-[var(--text-secondary)] text-lg leading-relaxed font-body">
              VARELLI partners exclusively with the global reference standards in building automation, reference Dolby Atmos acoustics, native 4K laser projection, and Swiss indoor air quality engineering.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-varelli">
          {/* Filter Bar & Search */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12 pb-6 border-b border-[var(--border)]">
            <div className="flex gap-2 flex-wrap">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={
                    selectedCategory === cat.id
                      ? "px-4 py-2 rounded-full text-xs font-body font-medium transition-all duration-300 cursor-pointer bg-[var(--gold)] text-[#08080A] font-semibold"
                      : "px-4 py-2 rounded-full text-xs font-body font-medium transition-all duration-300 cursor-pointer border border-[var(--border-hover)] text-[var(--text-secondary)] hover:border-[var(--gold)] hover:text-[var(--gold)]"
                  }
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Quick Search */}
            <input
              type="text"
              placeholder="Search brand, country, or speciality..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="px-4 py-2.5 rounded-full bg-[var(--surface-1)] border border-[var(--border)] text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[var(--gold)] font-mono w-full md:w-72"
            />
          </div>

          <motion.div
            layout
            variants={staggerContainer(0.08)}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredBrands.map((brand) => (
                <motion.div
                  layout
                  key={brand.id}
                  variants={fadeUp}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-2xl border border-[var(--border)] bg-[var(--surface-1)] overflow-hidden group hover:border-[var(--gold)]/50 transition-all duration-500 flex flex-col justify-between shadow-xl"
                >
                  <div>
                    {/* Brand Image & Header Badge */}
                    <div className="relative h-60 overflow-hidden">
                      <Image
                        src={brand.image}
                        alt={brand.imageAlt}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(8,8,10,0.98)] via-[rgba(8,8,10,0.50)] to-transparent" />
                      
                      {/* Top Brand Logo Banner */}
                      <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                        <div className="px-3.5 py-1.5 rounded-lg bg-black/75 backdrop-blur-md border border-[var(--border)] shadow-lg">
                          <BrandLogo brandId={brand.id} className="h-6 w-auto" />
                        </div>
                        <span className="badge-mono text-[9px] bg-black/75 backdrop-blur-md border border-[var(--gold)]/40 text-[var(--gold)]">
                          {brand.originFlag} {brand.originCountry}
                        </span>
                      </div>

                      {/* Bottom Title on Image */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--gold)] mb-1">
                          {brand.categoryLabel}
                        </p>
                        <h2 className="font-display text-2xl font-bold text-[var(--text-primary)] flex items-center gap-2">
                          <span>{brand.name}</span>
                        </h2>
                      </div>
                    </div>

                    <div className="p-6 space-y-4">
                      {/* Tagline */}
                      <p className="text-xs font-editorial italic text-[var(--text-primary)] leading-relaxed">
                        "{brand.tagline}"
                      </p>

                      {/* Speciality Highlight Box */}
                      <div className="p-3 rounded-xl bg-[var(--surface-2)] border border-[var(--gold)]/20">
                        <p className="font-mono text-[9px] uppercase tracking-widest text-[var(--gold)] font-bold mb-1 flex items-center gap-1.5">
                          <Sparkles className="w-3 h-3" />
                          <span>Speciality</span>
                        </p>
                        <p className="text-xs text-[var(--text-primary)] font-medium leading-relaxed">
                          {brand.speciality}
                        </p>
                      </div>

                      {/* Relatable Why People Choose Them */}
                      <div>
                        <p className="font-mono text-[9px] uppercase tracking-widest text-[var(--text-muted)] font-semibold mb-1">
                          Why Homeowners Love It
                        </p>
                        <p className="text-xs text-[var(--text-secondary)] leading-relaxed font-body">
                          {brand.whyPeopleRelate}
                        </p>
                      </div>

                      {/* Flagship Product Series */}
                      <div className="pt-3 border-t border-[var(--border)]">
                        <p className="font-mono text-[9px] uppercase tracking-[0.12em] text-[var(--text-muted)] mb-2">
                          Key Product Series
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {brand.featuredProducts.map((prod) => (
                            <span
                              key={prod}
                              className="text-[10px] px-2.5 py-1 rounded bg-[var(--surface-2)] text-[var(--text-secondary)] border border-[var(--border)] font-mono"
                            >
                              {prod}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Brand Action Footer */}
                  <div className="p-6 pt-0 space-y-2">
                    <a
                      href={createBrandWhatsAppLink(brand.name, brand.categoryLabel)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center space-x-2 py-3 rounded-xl bg-emerald-600/20 hover:bg-emerald-600 text-emerald-400 hover:text-white border border-emerald-500/40 font-medium text-xs font-mono transition-all"
                    >
                      <MessageCircle size={14} />
                      <span>Inquire for {brand.name} Specs & Pricing</span>
                    </a>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <ConsultationCTA />
    </>
  );
}
