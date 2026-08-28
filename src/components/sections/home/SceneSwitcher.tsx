"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { staggerContainer, fadeUp } from "@/lib/animations";

const scenes = [
  {
    id: "morning",
    label: "Morning",
    headline: "Morning Routine",
    description:
      "Curtains open gradually. Lighting rises to 80% warm white. Climate adjusts to your preferred morning temperature. Coffee machine activates.",
    systems: ["Lighting", "Motorized Curtains", "Climate", "Appliance Control"],
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
    imageAlt: "Luxury living room in morning mode with natural light and warm automation",
  },
  {
    id: "cinema",
    label: "Cinema",
    headline: "Cinema Mode",
    description:
      "Lights dim to 5%. Curtains close fully. Projector lifts and warms up. Amplifier powers on. Climate adjusts for 2-hour occupancy.",
    systems: ["Lighting", "Motorized Curtains", "Projection", "Audio", "Climate"],
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1200&q=80",
    imageAlt: "Private cinema room in cinema mode with Dolby Atmos home theatre",
  },
  {
    id: "evening",
    label: "Evening",
    headline: "Evening Ambience",
    description:
      "Lighting transitions to warm 2700K. Curtains partially close. Background audio activates. Security perimeter arms.",
    systems: ["Lighting", "Motorized Curtains", "Audio", "Security"],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
    imageAlt: "Luxury home in evening ambience mode with warm automated lighting",
  },
  {
    id: "away",
    label: "Away",
    headline: "Away & Secure",
    description:
      "All lights off. Curtains fully closed. Security system fully armed. HVAC to economy mode. Remote monitoring active.",
    systems: ["Lighting", "Security", "HVAC", "Remote Monitoring"],
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=1200&q=80",
    imageAlt: "Smart home security system in away mode",
  },
];

export default function SceneSwitcher() {
  const [active, setActive] = useState("morning");
  const activeScene = scenes.find((s) => s.id === active)!;

  return (
    <section className="section-padding bg-[var(--surface-1)] border-y border-[var(--border)]">
      <div className="container-varelli">
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <motion.div variants={fadeUp} className="mb-12">
            <p className="badge-mono mb-4">Scene Intelligence</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-[-0.02em] text-[var(--text-primary)]">
              One touch.
              <br />
              <span className="text-[var(--text-secondary)]">Everything responds.</span>
            </h2>
          </motion.div>

          <motion.div variants={fadeUp} className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="relative h-[420px] rounded-xl overflow-hidden border border-[var(--border)]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={activeScene.image}
                    alt={activeScene.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                    priority={active === "morning"}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(8,8,10,0.6)] to-transparent" />
                </motion.div>
              </AnimatePresence>

              <div className="absolute bottom-5 left-5">
                <span className="badge-mono">
                  {activeScene.label} Mode Active
                </span>
              </div>
            </div>

            <div>
              <div className="flex gap-2 mb-8 flex-wrap">
                {scenes.map((scene) => (
                  <button
                    key={scene.id}
                    onClick={() => setActive(scene.id)}
                    className={
                      active === scene.id
                        ? "px-5 py-2.5 rounded-full text-sm font-body font-medium transition-all duration-300 cursor-pointer bg-[var(--gold)] text-[#08080A]"
                        : "px-5 py-2.5 rounded-full text-sm font-body font-medium transition-all duration-300 cursor-pointer border border-[var(--border-hover)] text-[var(--text-secondary)] hover:border-[var(--gold)] hover:text-[var(--gold)]"
                    }
                  >
                    {scene.label}
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.35 }}
                >
                  <h3 className="font-display text-2xl font-semibold text-[var(--text-primary)] mb-4">
                    {activeScene.headline}
                  </h3>
                  <p className="text-[var(--text-secondary)] leading-relaxed mb-6 font-body">
                    {activeScene.description}
                  </p>
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--text-muted)] mb-3">
                      Systems Activated
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {activeScene.systems.map((sys) => (
                        <span
                          key={sys}
                          className="px-3 py-1.5 rounded border border-[var(--border)] text-xs text-[var(--text-secondary)] font-body"
                        >
                          {sys}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
