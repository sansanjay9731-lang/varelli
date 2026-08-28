"use client";

import React from "react";
import Link from "next/link";
import { Check, Sparkles, MessageCircle, ArrowRight, ShieldCheck } from "@/components/ui/icons";

export interface PackageTier {
  id: string;
  name: string;
  badge?: string;
  priceRange: string;
  targetProperty: string;
  description: string;
  highlighted?: boolean;
  specifications: string[];
  keyBrands: string[];
  warranty: string;
}

interface SolutionPackageGridProps {
  serviceTitle: string;
  serviceCategory: string;
  subtitle: string;
  packages: PackageTier[];
}

export default function SolutionPackageGrid({
  serviceTitle,
  serviceCategory,
  subtitle,
  packages,
}: SolutionPackageGridProps) {
  const createWhatsAppLink = (pkgName: string, price: string) => {
    const text = `Hello VARELLI, I would like to inquire about the ${serviceTitle} (${pkgName} - ${price}) for our residence.`;
    return `https://wa.me/919900000000?text=${encodeURIComponent(text)}`;
  };

  return (
    <section className="section-padding bg-[var(--surface-1)] border-t border-[var(--border)] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(197,168,128,0.04)_0%,transparent_60%)] pointer-events-none" />

      <div className="container-varelli relative">
        <div className="max-w-3xl mb-16">
          <span className="badge-mono mb-4 block">{serviceCategory} Investment Tiers</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-[var(--text-primary)] mb-4 tracking-[-0.02em]">
            Transparent Architectural Packages &amp; Specifications.
          </h2>
          <p className="text-sm md:text-base text-[var(--text-secondary)] leading-relaxed font-body">
            {subtitle} All packages include end-to-end design engineering, factory-direct supply, certified on-site commissioning, and lifetime warranty support.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
                pkg.highlighted
                  ? "bg-[#12131A] border-2 border-[var(--gold)] shadow-2xl shadow-[var(--gold)]/10 scale-[1.02]"
                  : "bg-[#0C0D12] border border-[var(--border)] hover:border-[var(--gold)]/40"
              }`}
            >
              {pkg.badge && (
                <div className="absolute -top-3.5 left-8 px-3.5 py-1 rounded-full bg-[var(--gold)] text-[#08080A] text-[10px] font-mono font-bold tracking-wider uppercase shadow-lg">
                  {pkg.badge}
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[var(--gold)]">
                    {pkg.targetProperty}
                  </span>
                </div>

                <h3 className="font-display text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                <p className="text-xs text-gray-400 font-body mb-6 leading-relaxed">
                  {pkg.description}
                </p>

                {/* Price Display */}
                <div className="mb-6 pb-6 border-b border-gray-800">
                  <span className="text-xs text-gray-500 font-mono block mb-1">Estimated Investment</span>
                  <div className="font-display text-3xl font-bold text-[var(--gold-light)]">
                    {pkg.priceRange}
                  </div>
                  <span className="text-[10px] text-gray-500 font-mono">Turnkey Design + Supply + Commissioning</span>
                </div>

                {/* Brand Stack */}
                <div className="mb-6">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-gray-400 block mb-2">
                    Hardware Ecosystem:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {pkg.keyBrands.map((b, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-gray-300"
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Technical Specifications */}
                <div className="space-y-2.5 mb-8">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-gray-400 block mb-2">
                    Included Architecture:
                  </span>
                  {pkg.specifications.map((spec, i) => (
                    <div key={i} className="flex items-start space-x-2.5 text-xs text-gray-300">
                      <Check size={14} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5 pt-4 border-t border-gray-800">
                <a
                  href={createWhatsAppLink(pkg.name, pkg.priceRange)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center space-x-2 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs font-mono transition-all shadow-lg shadow-emerald-950/40"
                >
                  <MessageCircle size={15} />
                  <span>Inquire on WhatsApp</span>
                </a>

                <Link
                  href="/contact"
                  className="w-full flex items-center justify-center space-x-1.5 py-3 rounded-xl bg-[var(--surface-2)] hover:bg-[var(--surface-3)] text-gray-300 hover:text-white text-xs font-mono border border-gray-800 transition-all"
                >
                  <span>Request Full Bill of Materials</span>
                  <ArrowRight size={13} />
                </Link>

                <div className="flex items-center justify-center space-x-1.5 text-[10px] text-gray-500 font-mono pt-1">
                  <ShieldCheck size={12} className="text-[var(--gold)]" />
                  <span>{pkg.warranty}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
