"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { staggerContainer, fadeUp } from "@/lib/animations";

export interface Capability {
  title: string;
  description: string;
  image?: string;
  videoUrl?: string;
  imageAlt?: string;
}

interface CapabilityGridProps {
  capabilities: Capability[];
  title?: string;
  subtitle?: string;
}

export default function CapabilityGrid({
  capabilities,
  title = "Capabilities & Experience Zones",
  subtitle = "What's Included",
}: CapabilityGridProps) {
  return (
    <section className="section-padding border-b border-[var(--border)]">
      <div className="container-varelli">
        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <motion.div variants={fadeUp} className="mb-12">
            <p className="badge-mono mb-4">{subtitle}</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-[-0.02em] text-[var(--text-primary)]">
              {title}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap.title}
                variants={fadeUp}
                custom={i}
                className="group relative overflow-hidden rounded-xl border border-[var(--border)] hover:border-[var(--gold)]/60 bg-[var(--surface-1)] transition-all duration-500 flex flex-col justify-between"
              >
                {/* Visual Image/Video Container */}
                <div className="relative h-52 w-full overflow-hidden bg-[var(--surface-2)]">
                  {cap.videoUrl ? (
                    <video
                      src={cap.videoUrl}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <Image
                      src={
                        cap.image ||
                        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80"
                      }
                      alt={cap.imageAlt || cap.title}
                      fill
                      unoptimized
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(8,8,10,0.95)] via-[rgba(8,8,10,0.4)] to-transparent pointer-events-none" />
                  <div className="absolute top-3 left-3">
                    <span className="badge-mono text-[9px] uppercase tracking-widest bg-black/60 backdrop-blur-md px-2.5 py-1 rounded text-[var(--gold)]">
                      Zone {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display text-lg font-semibold text-[var(--text-primary)] group-hover:text-[var(--gold)] transition-colors duration-300 mb-2">
                      {cap.title}
                    </h3>
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed font-body">
                      {cap.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
