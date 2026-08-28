"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "@/components/ui/icons";
import { staggerContainer, fadeUp } from "@/lib/animations";

const serviceItems = [
  {
    title: "Home Automation",
    desc: "Whole-home intelligent systems. KNX wired infrastructure, scene-based control, and single-app orchestration.",
    href: "/home-automation",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    alt: "Luxury home automation control system in a modern residence",
    span: "lg:col-span-2",
  },
  {
    title: "Home Theatre & Cinema",
    desc: "Reference Dolby Atmos 9.4.6 home theatres with fiber-optic star ceilings, custom velvet daybeds, and 4K laser projection.",
    href: "/private-cinema",
    image: "/images/home-theatre-star-ceiling.png",
    alt: "Luxury home theatre with starry fiber-optic ceiling, velvet daybed lounge, and 4K laser projection",
    span: "lg:col-span-1",
  },
  {
    title: "Fresh Air Ventilation",
    desc: "Mechanical fresh air systems for optimal indoor air quality throughout the residence.",
    href: "/fresh-air-ventilation",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    alt: "Fresh air ventilation system in a luxury home",
    span: "lg:col-span-1",
  },
  {
    title: "Central Vacuum",
    desc: "Built-in whole-home vacuum infrastructure - silent, powerful, architecturally seamless.",
    href: "/central-vacuum",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
    alt: "Central vacuum system installation in luxury villa",
    span: "lg:col-span-1",
  },
  {
    title: "Smart Security & Networking",
    desc: "Integrated biometric access, optical perimeter surveillance, and enterprise-grade WiFi infrastructure.",
    href: "/home-security",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80",
    alt: "Smart home security and networking systems",
    span: "lg:col-span-2",
  },
];

export default function ServicesGrid() {
  return (
    <section className="section-padding">
      <div className="container-varelli">
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <motion.div variants={fadeUp} className="mb-12 flex items-end justify-between">
            <div>
              <p className="badge-mono mb-4">What We Design</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold tracking-[-0.02em] text-[var(--text-primary)]">
                Intelligent Systems.
                <br />
                <span className="text-[var(--text-secondary)]">Invisible Integration.</span>
              </h2>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {serviceItems.map((item, i) => (
              <motion.div
                key={item.href}
                variants={fadeUp}
                custom={i}
                className={item.span}
              >
                <Link
                  href={item.href}
                  className="group relative block overflow-hidden rounded-xl border border-[var(--border)] hover:border-[var(--border-hover)] transition-all duration-500 h-72 md:h-80"
                >
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(8,8,10,0.95)] via-[rgba(8,8,10,0.50)] to-transparent" />

                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-display text-xl font-semibold text-[var(--text-primary)] mb-2 group-hover:text-[var(--gold)] transition-colors duration-300">
                          {item.title}
                        </h3>
                        <p className="text-sm text-[var(--text-secondary)] leading-relaxed max-w-xs opacity-80 group-hover:opacity-100 transition-opacity duration-400">
                          {item.desc}
                        </p>
                      </div>
                      <div className="shrink-0 w-8 h-8 rounded-full border border-[var(--border-hover)] flex items-center justify-center text-[var(--text-muted)] group-hover:border-[var(--gold)] group-hover:text-[var(--gold)] transition-all duration-300">
                        <ArrowUpRight size={14} />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
