import type { Metadata } from "next";
import Image from "next/image";
import { generatePageMetadata } from "@/lib/metadata";
import Breadcrumb from "@/components/layout/Breadcrumb";
import { productCategories } from "@/lib/data/products";
import ConsultationCTA from "@/components/sections/home/ConsultationCTA";

export const metadata: Metadata = generatePageMetadata({
  title: "Architectural Products & Technology Hardware | VARELLI",
  description:
    "Explore VARELLI's curated selection of luxury architectural keypads, Dolby Atmos cinema speakers, native 4K laser projectors, motorized shading, and fresh air ERV units.",
  path: "/products",
  keywords: [
    "luxury smart home products",
    "architectural touch keypads",
    "Dolby Atmos cinema speakers",
    "4K laser projector home theater",
    "motorized shading systems",
    "fresh air ERV ventilation",
    "central vacuum units",
  ],
});

export default function ProductsPage() {
  return (
    <>
      <section className="relative bg-[var(--surface-1)] border-b border-[var(--border)]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(197,168,128,0.06)_0%,transparent_60%)]" />
        <div className="relative container-varelli pt-40 pb-16">
          <Breadcrumb items={[{ name: "Products & Hardware", href: "/products" }]} />
          <div className="mt-6 max-w-3xl">
            <span className="badge-mono block mb-5">Hardware & Architecture</span>
            <h1 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text-primary)] mb-5">
              Architectural Hardware
              <br />
              <span className="text-gradient-gold">& Precision Instruments.</span>
            </h1>
            <p className="text-[var(--text-secondary)] text-lg leading-relaxed font-body">
              Every switch, speaker, actuator, projector, and sensor in a VARELLI residence is chosen for its engineering excellence, architectural beauty, and seamless integration.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-varelli space-y-24">
          {productCategories.map((category, index) => (
            <div
              key={category.slug}
              id={category.slug}
              className={
                index !== 0
                  ? "grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pt-12 border-t border-[var(--border)]"
                  : "grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pt-12"
              }
            >
              <div className="lg:col-span-5 space-y-6">
                <span className="badge-mono">Category 0{index + 1}</span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--text-primary)] leading-tight">
                  {category.title}
                </h2>
                <p className="font-editorial italic text-lg text-[var(--gold)]">
                  {category.subtitle}
                </p>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed font-body">
                  {category.description}
                </p>

                <div className="relative h-72 rounded-xl overflow-hidden border border-[var(--border)]">
                  <Image
                    src={category.image}
                    alt={category.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(8,8,10,0.6)] to-transparent" />
                </div>

                <div className="space-y-2 pt-2">
                  <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--text-muted)]">
                    Curated Partner Brands:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {category.brands.map((brand) => (
                      <span key={brand} className="text-xs px-3 py-1 rounded-full border border-[var(--gold-dim)] text-[var(--gold)] font-body">
                        {brand}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-6">
                <div className="glass-card p-6 md:p-8">
                  <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-[var(--gold)] mb-4">
                    Architectural Highlights
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {category.highlights.map((highlight) => (
                      <li key={highlight} className="text-xs text-[var(--text-secondary)] font-body flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold)] shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-[var(--gold)] mb-4">
                    Featured Reference Hardware
                  </h3>
                  <div className="space-y-4">
                    {category.productItems.map((item) => (
                      <div
                        key={item.name}
                        className="p-5 rounded-lg bg-[var(--surface-2)] border border-[var(--border)] hover:border-[var(--border-hover)] transition-colors"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                          <h4 className="font-display text-base font-semibold text-[var(--text-primary)]">
                            {item.name}
                          </h4>
                          <span className="badge-mono text-[9px] w-fit">{item.brand}</span>
                        </div>
                        <p className="font-mono text-[11px] text-[var(--gold)] mb-2">
                          {item.specs}
                        </p>
                        <p className="text-xs text-[var(--text-secondary)] font-body leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <ConsultationCTA />
    </>
  );
}
