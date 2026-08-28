"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "@/components/ui/icons";
import { staggerContainer, fadeUp } from "@/lib/animations";

export default function ArchitectCTA() {
  return (
    <section className="section-padding border-b border-[var(--border)]">
      <div className="container-varelli">
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          <motion.div variants={fadeUp}>
            <p className="badge-mono mb-6">For Architects & Designers</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-[-0.02em] text-[var(--text-primary)] mb-6 leading-tight">
              We amplify your vision.
              <br />
              <span className="font-editorial italic text-[var(--text-secondary)] font-normal">
                We do not compete with it.
              </span>
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-8 font-body max-w-lg">
              VARELLI is the technical execution partner for design-led residences. We provide wiring schedules, equipment coordination drawings, acoustic specifications, and on-site integration - all aligned to your design intent and timeline.
            </p>
            <Link
              href="/architects"
              className="inline-flex items-center gap-2 text-[var(--gold)] hover:text-[var(--gold-light)] transition-colors font-body font-medium text-sm group"
            >
              Architect & Designer Resources
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          <motion.div variants={fadeUp} className="grid grid-cols-2 gap-4">
            {[
              { label: "Wiring Schedules", desc: "Coordinated with your electrical drawings" },
              { label: "Equipment Layouts", desc: "Rack, panel and hardware placement drawings" },
              { label: "Acoustic Specs", desc: "Room design for cinema and AV spaces" },
              { label: "Site Coordination", desc: "Direct liaison with your site team" },
            ].map((item) => (
              <div
                key={item.label}
                className="glass-card p-5"
              >
                <h3 className="font-display text-sm font-semibold text-[var(--gold)] mb-2">
                  {item.label}
                </h3>
                <p className="text-xs text-[var(--text-muted)] font-body leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
