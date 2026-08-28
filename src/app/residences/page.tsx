import type { Metadata } from "next";
import Image from "next/image";
import { generatePageMetadata } from "@/lib/metadata";
import Breadcrumb from "@/components/layout/Breadcrumb";
import { projects } from "@/lib/data/projects";
import ConsultationCTA from "@/components/sections/home/ConsultationCTA";

export const metadata: Metadata = generatePageMetadata({
  title: "Completed Residences & Projects | VARELLI",
  description:
    "Selected VARELLI projects — luxury villas, private estates and residences across India featuring home automation, private cinema, fresh air ventilation, and intelligent living systems.",
  path: "/residences",
  keywords: [
    "luxury home automation projects",
    "home automation portfolio",
    "private cinema projects India",
    "intelligent home projects Bangalore",
  ],
});

export default function ResidencesPage() {
  return (
    <>
      <section className="relative bg-[var(--surface-1)] border-b border-[var(--border)]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(197,168,128,0.05)_0%,transparent_60%)]" />
        <div className="relative container-varelli pt-40 pb-16">
          <Breadcrumb items={[{ name: "Residences", href: "/residences" }]} />
          <div className="mt-6 max-w-2xl">
            <span className="badge-mono block mb-5">Selected Projects</span>
            <h1 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text-primary)] mb-5">
              Intelligent environments,
              <br />
              <span className="font-editorial italic font-normal text-[var(--text-secondary)]">thoughtfully delivered.</span>
            </h1>
            <p className="text-[var(--text-secondary)] text-lg leading-relaxed font-body">
              A selection of completed VARELLI residences — each a unique integration of automation, cinema, air quality, and intelligent living systems.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-varelli">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <article key={project.id} className="group border border-[var(--border)] rounded-xl overflow-hidden hover:border-[var(--border-hover)] transition-all duration-500">
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
                <div className="p-6 bg-[var(--surface-1)]">
                  <h2 className="font-display text-lg font-semibold text-[var(--text-primary)] mb-1">{project.title}</h2>
                  <p className="text-xs text-[var(--text-muted)] font-mono mb-3">{project.location}</p>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed font-body mb-4">{project.description}</p>
                  {project.specs && (
                    <div className="grid grid-cols-2 gap-2 pt-4 border-t border-[var(--border)]">
                      {project.specs.map((spec) => (
                        <div key={spec.label}>
                          <p className="text-[10px] font-mono uppercase tracking-[0.1em] text-[var(--text-muted)] mb-0.5">{spec.label}</p>
                          <p className="text-xs text-[var(--text-secondary)] font-body">{spec.value}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ConsultationCTA />
    </>
  );
}
