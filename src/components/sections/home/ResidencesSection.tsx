"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "@/components/ui/icons";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { featuredProjects } from "@/lib/data/projects";

export default function ResidencesSection() {
  return (
    <section className="section-padding">
      <div className="container-varelli">
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <motion.div variants={fadeUp} className="mb-12 flex items-end justify-between gap-6">
            <div>
              <p className="badge-mono mb-4">Selected Residences</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold tracking-[-0.02em] text-white">
                Intelligent living,
                <br />
                <span className="text-[var(--gold)]">thoughtfully delivered.</span>
              </h2>
            </div>
            <Link
              href="/residences"
              className="hidden md:inline-flex items-center gap-2 text-sm text-[var(--gold)] hover:text-[var(--gold-light)] transition-colors font-body"
            >
              View All Residences <ArrowRight size={14} />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {featuredProjects.map((project, i) => (
              <motion.article key={project.id} variants={fadeUp} custom={i}>
                <div
                  className="group block rounded-xl overflow-hidden border border-[var(--border)] hover:border-[var(--border-hover)] transition-all duration-500"
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[rgba(8,8,10,0.7)] to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="badge-mono text-[9px]">{project.type}</span>
                    </div>
                  </div>
                  <div className="p-5 bg-[var(--surface-1)]">
                    <h3 className="font-display text-lg font-semibold text-[var(--text-primary)] mb-1 group-hover:text-[var(--gold)] transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-xs text-[var(--text-muted)] font-mono mb-3">
                      {project.location}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.services.slice(0, 3).map((svc) => (
                        <span
                          key={svc}
                          className="text-xs px-2.5 py-1 border border-[var(--border)] text-[var(--text-muted)] rounded font-body"
                        >
                          {svc}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <motion.div variants={fadeUp} className="mt-8 text-center md:hidden">
            <Link
              href="/residences"
              className="inline-flex items-center gap-2 text-sm text-[var(--gold)] hover:text-[var(--gold-light)] transition-colors font-body"
            >
              View All Residences <ArrowRight size={14} />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
