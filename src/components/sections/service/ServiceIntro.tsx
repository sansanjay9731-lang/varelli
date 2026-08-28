"use client";
import { motion } from "framer-motion";
import { staggerContainer, fadeUp } from "@/lib/animations";
import Link from "next/link";

interface ServiceIntroProps {
  description: string;
  relatedServices?: { name: string; href: string }[];
}

export default function ServiceIntro({ description, relatedServices }: ServiceIntroProps) {
  return (
    <section className="section-padding border-b border-[var(--border)]">
      <div className="container-varelli">
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16"
        >
          <motion.div variants={fadeUp}>
            <p className="text-[var(--text-primary)] text-lg md:text-xl leading-relaxed font-body">
              {description}
            </p>
          </motion.div>
          {relatedServices && relatedServices.length > 0 && (
            <motion.div variants={fadeUp} className="lg:border-l lg:border-[var(--border)] lg:pl-16">
              <p className="badge-mono mb-5">Related Solutions</p>
              <ul className="space-y-3">
                {relatedServices.map((svc) => (
                  <li key={svc.href}>
                    <Link
                      href={svc.href}
                      className="text-[var(--text-secondary)] hover:text-[var(--gold)] transition-colors font-body text-sm flex items-center gap-2"
                    >
                      <span className="w-1 h-1 rounded-full bg-[var(--gold)] shrink-0" />
                      {svc.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
