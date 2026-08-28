"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";

export default function ConsultationCTA() {
  return (
    <section className="section-padding">
      <div className="container-varelli">
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="relative rounded-2xl border border-[rgba(197,168,128,0.20)] bg-[var(--surface-1)] overflow-hidden p-12 md:p-20 text-center"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(197,168,128,0.06)_0%,transparent_70%)] pointer-events-none" />

          <motion.p variants={fadeUp} className="badge-mono mb-6">
            Begin Your Residence
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="font-display text-4xl md:text-6xl font-bold tracking-[-0.03em] text-[var(--text-primary)] mb-6 max-w-3xl mx-auto leading-tight"
          >
            Ready to design your
            <br />
            <span className="text-gradient-gold">intelligent living environment?</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-[var(--text-secondary)] text-lg mb-10 max-w-xl mx-auto font-body leading-relaxed"
          >
            Every VARELLI project begins with a private consultation. Tell us about your residence and we will arrange a meeting with our design team.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="btn-gold px-10 py-4 text-sm font-semibold rounded-full font-body inline-block"
            >
              Begin Your Residence
            </Link>
            <a
              href="https://wa.me/919999999999?text=I%20would%20like%20to%20enquire%20about%20VARELLI%20intelligent%20living%20systems"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost px-10 py-4 text-sm font-semibold rounded-full font-body inline-block"
            >
              WhatsApp Enquiry
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
