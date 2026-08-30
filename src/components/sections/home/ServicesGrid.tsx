"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "@/components/ui/icons";
import { staggerContainer, fadeUp } from "@/lib/animations";

// Row 1: Home Automation (wide 2col) + Home Theatre (tall 1col, spans 2 rows)
// Row 2: Fresh Air (1col) + Central Vacuum (1col) [fits under Home Theatre in row 2]
// Row 3: Smart Security (full 3col wide)

export default function ServicesGrid() {
  return (
    <section className="section-padding">
      <div className="container-varelli">
        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <motion.div variants={fadeUp} className="mb-12 flex items-end justify-between">
            <div>
              <p className="badge-mono mb-4">What We Design</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold tracking-[-0.02em] text-white">
                Intelligent Systems.
                <br />
                <span className="text-[var(--gold)]">Invisible Integration.</span>
              </h2>
            </div>
          </motion.div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

            {/* ── Row 1 Left: Home Automation (spans 2 cols on lg) ── */}
            <motion.div variants={fadeUp} custom={0} className="lg:col-span-2">
              <Link
                href="/home-automation"
                className="group relative flex overflow-hidden rounded-2xl border border-[var(--border)] hover:border-[var(--gold)]/40 transition-all duration-500 h-80"
              >
                <Image
                  src="/images/home-automation-hero.jpg"
                  alt="Luxury smart home living room with KNX touch panel and warm cinematic lighting"
                  fill
                  sizes="(max-width: 768px) 100vw, 66vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(8,8,10,0.95)] via-[rgba(8,8,10,0.35)] to-transparent" />
                <div className="absolute inset-0 p-7 flex flex-col justify-end">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <span className="badge-mono text-[9px] mb-3 inline-block opacity-70">KNX · Basalte · Ekinex</span>
                      <h3 className="font-display text-2xl font-bold text-white mb-2 group-hover:text-[var(--gold)] transition-colors duration-300">
                        Home Automation
                      </h3>
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed max-w-md opacity-80 group-hover:opacity-100 transition-opacity">
                        Whole-home KNX wired intelligence. Scene-based lighting, motorised curtains, HVAC, and single-app orchestration across every room.
                      </p>
                    </div>
                    <div className="shrink-0 w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/50 group-hover:border-[var(--gold)] group-hover:text-[var(--gold)] transition-all duration-300">
                      <ArrowUpRight size={15} />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* ── Row 1 Right + Row 2 Right: Home Theatre (spans 2 rows on lg) ── */}
            <motion.div variants={fadeUp} custom={1} className="lg:row-span-2">
              <Link
                href="/private-cinema"
                className="group relative flex overflow-hidden rounded-2xl border border-[var(--border)] hover:border-[var(--gold)]/40 transition-all duration-500 h-80 lg:h-full lg:min-h-[664px]"
              >
                <Image
                  src="/images/home-theatre-star-ceiling.png"
                  alt="Luxury home theatre with fiber-optic star ceiling and velvet daybed loungers"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(8,8,10,0.98)] via-[rgba(8,8,10,0.35)] to-transparent" />
                <div className="absolute inset-0 p-7 flex flex-col justify-end">
                  <span className="badge-mono text-[9px] mb-3 inline-block opacity-70">Dolby Atmos · Sonus Faber · Barco</span>
                  <h3 className="font-display text-2xl font-bold text-white mb-2 group-hover:text-[var(--gold)] transition-colors duration-300">
                    Home Theatre &amp; Cinema
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                    Reference Dolby Atmos 9.4.6 with fiber-optic constellation ceilings, custom velvet daybeds, and 4K laser projection.
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-[var(--gold)] text-xs font-mono uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>Explore Cinema Design</span>
                    <ArrowUpRight size={12} />
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* ── Row 2 Left-1: Fresh Air Ventilation ── */}
            <motion.div variants={fadeUp} custom={2} className="lg:col-span-1">
              <Link
                href="/fresh-air-ventilation"
                className="group relative flex overflow-hidden rounded-2xl border border-[var(--border)] hover:border-[var(--gold)]/40 transition-all duration-500 h-72"
              >
                <Image
                  src="/images/fresh-air-ventilation-hero.jpg"
                  alt="Luxury bedroom with Zehnder ERV fresh air ventilation and mountain view, CO2 412ppm display"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(8,8,10,0.95)] via-[rgba(8,8,10,0.30)] to-transparent" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <span className="badge-mono text-[9px] mb-2 inline-block opacity-70">Zehnder · Swiss ERV</span>
                  <h3 className="font-display text-xl font-bold text-white mb-1.5 group-hover:text-[var(--gold)] transition-colors duration-300">
                    Fresh Air Ventilation
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                    Mechanical ERV systems continuously refresh indoor oxygen and expel CO2 while recovering 95% of HVAC energy.
                  </p>
                </div>
              </Link>
            </motion.div>

            {/* ── Row 2 Left-2: Central Vacuum ── */}
            <motion.div variants={fadeUp} custom={3} className="lg:col-span-1">
              <Link
                href="/central-vacuum"
                className="group relative flex overflow-hidden rounded-2xl border border-[var(--border)] hover:border-[var(--gold)]/40 transition-all duration-500 h-72"
              >
                <Image
                  src="/images/central-vacuum-hero.jpg"
                  alt="Architectural central vacuum brass inlet in luxury marble hallway"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(8,8,10,0.95)] via-[rgba(8,8,10,0.30)] to-transparent" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <span className="badge-mono text-[9px] mb-2 inline-block opacity-70">Drainvac · Canada</span>
                  <h3 className="font-display text-xl font-bold text-white mb-1.5 group-hover:text-[var(--gold)] transition-colors duration-300">
                    Central Vacuum
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                    Built-in whole-home vacuum with concealed brass wall inlets. Silent, cyclonic, and architecturally invisible.
                  </p>
                </div>
              </Link>
            </motion.div>

            {/* ── Row 3: Smart Security (full 3-col wide) ── */}
            <motion.div variants={fadeUp} custom={4} className="lg:col-span-3">
              <Link
                href="/home-security"
                className="group relative flex overflow-hidden rounded-2xl border border-[var(--border)] hover:border-[var(--gold)]/40 transition-all duration-500 h-72"
              >
                <Image
                  src="/images/smart-security-hero.jpg"
                  alt="DoorBird video intercom and biometric access at luxury villa entrance with UniFi WiFi camera"
                  fill
                  sizes="100vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[rgba(8,8,10,0.95)] via-[rgba(8,8,10,0.55)] to-transparent" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end max-w-2xl">
                  <div className="flex items-end justify-between gap-6 w-full max-w-2xl">
                    <div>
                      <span className="badge-mono text-[9px] mb-3 inline-block opacity-70">DoorBird · Mobotix · UniFi</span>
                      <h3 className="font-display text-2xl font-bold text-white mb-2 group-hover:text-[var(--gold)] transition-colors duration-300">
                        Smart Security &amp; Networking
                      </h3>
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed max-w-lg opacity-80 group-hover:opacity-100 transition-opacity">
                        Biometric entry, German DoorBird video intercoms, smart optical perimeter surveillance, and enterprise WiFi 7 infrastructure. All data stored locally — zero cloud exposure.
                      </p>
                    </div>
                    <div className="shrink-0 w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/50 group-hover:border-[var(--gold)] group-hover:text-[var(--gold)] transition-all duration-300">
                      <ArrowUpRight size={15} />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
