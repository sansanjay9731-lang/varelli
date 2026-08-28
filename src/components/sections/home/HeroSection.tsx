"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "@/components/ui/icons";
import { fadeUp, staggerContainer, ease } from "@/lib/animations";

const stats = [
  { label: "Residential Systems", value: "Bangalore" },
  { label: "Cinema Format", value: "Dolby Atmos" },
  { label: "Platform", value: "KNX · Matter" },
  { label: "Consultation", value: "By Appointment" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-between" aria-label="VARELLI - Luxury Intelligent Living">
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(8,8,10,0.65)] via-[rgba(8,8,10,0.40)] to-[rgba(8,8,10,0.95)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(197,168,128,0.04)_0%,transparent_70%)]" />
      </div>

      <div className="relative z-10 flex-1 flex flex-col justify-center container-varelli pt-32 pb-12">
        <motion.div
          variants={staggerContainer(0.12, 0.2)}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          <motion.div variants={fadeUp} className="mb-8">
            <span className="badge-mono">
              [ Intelligent Living // India ]
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="font-display text-[clamp(2.8rem,7vw,5.5rem)] font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text-primary)] mb-6"
          >
            Where Technology
            <br />
            <span className="text-gradient-gold">Disappears</span>
            <br />
            Into Architecture.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="font-editorial text-2xl md:text-3xl text-[var(--text-secondary)] italic mb-10 max-w-2xl leading-relaxed"
          >
            VARELLI engineers intelligent residential environments for luxury villas, estates and private residences across India.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/residences"
              className="btn-gold px-8 py-4 text-sm font-semibold rounded-full font-body inline-flex items-center gap-2 w-fit"
            >
              Explore Our Work
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/contact"
              className="btn-ghost px-8 py-4 text-sm font-semibold rounded-full font-body inline-flex items-center gap-2 w-fit"
            >
              Begin Your Residence
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.7, ease: ease.smooth }}
        className="relative z-10 border-t border-[var(--border)] bg-[rgba(8,8,10,0.5)] backdrop-blur-sm"
      >
        <div className="container-varelli grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="py-6 px-4 border-r border-[var(--border)] last:border-r-0"
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--text-muted)] mb-1">
                {stat.label}
              </p>
              <p className="font-display text-sm font-semibold text-[var(--gold)]">
                {stat.value}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
