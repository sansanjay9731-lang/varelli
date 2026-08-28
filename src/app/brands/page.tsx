"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Breadcrumb from "@/components/layout/Breadcrumb";
import { brands } from "@/lib/data/brands";
import { fadeUp, staggerContainer } from "@/lib/animations";
import ConsultationCTA from "@/components/sections/home/ConsultationCTA";

const categories = [
  { id: "all", label: "All Curated Brands" },
  { id: "automation", label: "Automation & Control" },
  { id: "audio", label: "Reference Cinema Audio" },
  { id: "video", label: "4K Laser & Screens" },
  { id: "lighting", label: "Architectural Keypads" },
  { id: "climate", label: "Fresh Air & IAQ" },
  { id: "vacuum", label: "Central Vacuum" },
  { id: "networking", label: "Enterprise WiFi" },
];

export default function BrandsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredBrands = selectedCategory === "all"
    ? brands
    : brands.filter((b) => b.category === selectedCategory);

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
              VARELLI partners exclusively with the global gold standards in building automation, reference Dolby Atmos acoustics, native 4K laser projection, and Swiss indoor air quality engineering.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-varelli">
          <div className="flex gap-2 mb-12 flex-wrap pb-4 border-b border-[var(--border)]">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={
                  selectedCategory === cat.id
                    ? "px-5 py-2.5 rounded-full text-xs font-body font-medium transition-all duration-300 cursor-pointer bg-[var(--gold)] text-[#08080A] font-semibold"
                    : "px-5 py-2.5 rounded-full text-xs font-body font-medium transition-all duration-300 cursor-pointer border border-[var(--border-hover)] text-[var(--text-secondary)] hover:border-[var(--gold)] hover:text-[var(--gold)]"
                }
              >
                {cat.label}
              </button>
            ))}
          </div>

          <motion.div
            layout
            variants={staggerContainer(0.08)}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
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
                  className="glass-card overflow-hidden group hover:border-[var(--border-hover)] transition-all duration-500 flex flex-col"
                >
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={brand.image}
                      alt={brand.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[rgba(8,8,10,0.92)] via-[rgba(8,8,10,0.40)] to-transparent" />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="badge-mono text-[9px]">{brand.tier}</span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--gold)] mb-1">
                        {brand.origin} · {brand.categoryLabel}
                      </p>
                      <h2 className="font-display text-2xl font-bold text-[var(--text-primary)]">
                        {brand.name}
                      </h2>
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <p className="text-xs font-editorial italic text-[var(--text-primary)] mb-3 leading-relaxed">
                        "{brand.tagline}"
                      </p>
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed font-body mb-6">
                        {brand.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-[var(--border)]">
                      <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--text-muted)] mb-2">
                        Flagship Product Series
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {brand.featuredProducts.map((prod) => (
                          <span
                            key={prod}
                            className="text-[11px] px-2.5 py-1 rounded bg-[var(--surface-2)] text-[var(--text-secondary)] border border-[var(--border)] font-body"
                          >
                            {prod}
                          </span>
                        ))}
                      </div>
                    </div>
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
