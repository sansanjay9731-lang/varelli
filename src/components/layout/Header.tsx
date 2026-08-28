"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Sparkles, Volume2 } from "@/components/ui/icons";
import AuditionModal from "@/components/ui/AuditionModal";

const navigationLinks = [
  {
    name: "Solutions",
    href: "/home-automation",
    children: [
      { name: "Home Automation & KNX", href: "/home-automation", desc: "Decentralized German KNX & DALI-2 circadian dimming." },
      { name: "Home Theatre & Dolby Atmos", href: "/private-cinema", desc: "Reference 9.4.6 cinema, star ceilings & 4K laser projection." },
      { name: "Media Rooms & Custom Audio", href: "/home-theatre", desc: "Discrete architectural in-wall audio & luxury living room Hi-Fi." },
      { name: "Fresh Air IAQ Ventilation", href: "/fresh-air-ventilation", desc: "Swiss Zehnder ERV, positive pressure & True HEPA." },
      { name: "Central Vacuum Systems", href: "/central-vacuum", desc: "Canadian Drainvac wet/dry & retractable Hide-A-Hose." },
      { name: "Smart Security & Biometrics", href: "/home-security", desc: "DoorBird video stations & local edge optical cameras." },
      { name: "Enterprise WiFi 7 Networking", href: "/home-networking", desc: "10GbE fiber backbone & isolated IoT security." },
    ],
  },
  { name: "Brands", href: "/brands" },
  { name: "Residences", href: "/residences" },
  { name: "Architects", href: "/architects" },
  { name: "Journal", href: "/journal" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [auditionOpen, setAuditionOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[rgba(8,8,10,0.88)] backdrop-blur-md border-b border-[var(--border)]">
        <div className="container-varelli h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <span className="font-display text-2xl font-bold tracking-[-0.03em] text-[var(--text-primary)] group-hover:text-[var(--gold)] transition-colors">
              VARELLI
            </span>
            <span className="hidden sm:inline-block font-mono text-[9px] uppercase tracking-[0.2em] px-2 py-0.5 border border-[var(--border)] rounded text-[var(--gold)]">
              INTELLIGENT LIVING
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-7 text-sm font-body">
            <Link
              href="/studio"
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-[var(--gold)]/10 border border-[var(--gold)]/40 text-[var(--gold)] font-mono text-xs uppercase tracking-wider hover:bg-[var(--gold)] hover:text-[#08080A] transition-all"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Design Studio</span>
            </Link>

            {navigationLinks.map((link) =>
              link.children ? (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <button className="flex items-center gap-1 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors py-2">
                    {link.name}
                    <span className="text-[10px] opacity-60">▾</span>
                  </button>

                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 w-80 p-3 rounded-xl bg-[var(--surface-1)] border border-[var(--border)] shadow-2xl shadow-black/80 space-y-1"
                      >
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block p-3 rounded-lg hover:bg-[var(--surface-2)] transition-colors group"
                          >
                            <div className="flex items-center justify-between text-sm font-semibold text-[var(--text-primary)] group-hover:text-[var(--gold)]">
                              <span>{child.name}</span>
                              <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                            <p className="text-xs text-[var(--text-muted)] mt-1">{child.desc}</p>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                >
                  {link.name}
                </Link>
              )
            )}
          </nav>

          <div className="flex items-center gap-3">
            {/* Book Audition Trigger (Experia Concept) */}
            <button
              onClick={() => setAuditionOpen(true)}
              className="hidden md:inline-flex items-center space-x-1.5 px-4 py-2 rounded-full border border-[var(--gold)]/50 text-[var(--gold)] hover:bg-[var(--gold)] hover:text-[#08080A] text-xs font-mono font-medium transition-all cursor-pointer shadow-lg shadow-[var(--gold)]/5"
            >
              <Volume2 size={13} />
              <span>Book Audition</span>
            </button>

            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[var(--gold)] text-[#08080A] hover:bg-[var(--gold-light)] transition-all font-body"
            >
              Begin Residence
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[var(--text-primary)]"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Experience Center Audition Modal */}
      <AuditionModal isOpen={auditionOpen} onClose={() => setAuditionOpen(false)} />
    </>
  );
}
