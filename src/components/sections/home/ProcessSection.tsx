"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeUp } from "@/lib/animations";

const steps = [
  {
    number: "01",
    title: "Consultation & Brief",
    description:
      "We begin with a detailed consultation - understanding your residence, lifestyle, and aspirations. Existing drawings are reviewed. A full technical brief is established.",
  },
  {
    number: "02",
    title: "Design & Engineering",
    description:
      "Every system is engineered to your specific residence. Wiring schedules, equipment lists, acoustic calculations, and coordination drawings are produced for your architect and contractor.",
  },
  {
    number: "03",
    title: "Installation & Integration",
    description:
      "VARELLI oversees installation from first-fix conduit to final commissioning. Every system is integrated into a unified platform and tested to specification.",
  },
  {
    number: "04",
    title: "Calibration & Support",
    description:
      "Your systems are calibrated to reference performance standards. We provide comprehensive training and ongoing support for the lifetime of your residence.",
  },
];

export default function ProcessSection() {
  return (
    <section className="section-padding border-b border-[var(--border)]">
      <div className="container-varelli">
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <motion.div variants={fadeUp} className="mb-16 text-center max-w-2xl mx-auto">
            <p className="badge-mono mb-4">The VARELLI Process</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-[-0.02em] text-[var(--text-primary)]">
              From brief to
              <br />
              <span className="text-gradient-gold">flawless execution.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--border)]">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                variants={fadeUp}
                custom={i}
                className="bg-[var(--bg)] p-8 hover:bg-[var(--surface-1)] transition-colors duration-300 group"
              >
                <p className="font-mono text-5xl font-medium text-[var(--surface-3)] group-hover:text-[var(--gold-dim)] transition-colors duration-300 mb-6 leading-none">
                  {step.number}
                </p>
                <h3 className="font-display text-lg font-semibold text-[var(--text-primary)] mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed font-body">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
