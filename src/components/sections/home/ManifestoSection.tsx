"use client";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";

export default function ManifestoSection() {
  return (
    <section className="section-padding border-b border-[var(--border)]">
      <div className="container-varelli">
        <motion.div
          variants={staggerContainer(0.15)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="max-w-5xl mx-auto text-center"
        >
          <motion.p variants={fadeUp} className="badge-mono mb-10">
            Our Philosophy
          </motion.p>
          <motion.blockquote
            variants={fadeUp}
            className="font-editorial text-[clamp(1.8rem,4vw,3.5rem)] italic text-[var(--text-primary)] leading-[1.25] mb-10"
          >
            "We do not install gadgets.{" "}
            <span className="text-gradient-gold not-italic font-display font-bold">
              We engineer environments
            </span>{" "}
            where technology serves life - invisibly, precisely, and beautifully."
          </motion.blockquote>
          <motion.p
            variants={fadeUp}
            className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto leading-relaxed font-body"
          >
            Every system VARELLI designs is invisible by intention and flawless in execution.
            The measure of our work is not what you see - it is what you feel.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
