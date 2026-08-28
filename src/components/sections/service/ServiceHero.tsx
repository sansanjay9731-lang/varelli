import Image from "next/image";
import Breadcrumb from "@/components/layout/Breadcrumb";

interface ServiceHeroProps {
  title: string;
  subheadline: string;
  image: string;
  imageAlt: string;
  badge?: string;
  breadcrumbs: { name: string; href: string }[];
}

export default function ServiceHero({
  title,
  subheadline,
  image,
  imageAlt,
  badge,
  breadcrumbs,
}: ServiceHeroProps) {
  return (
    <section className="relative min-h-[70vh] flex flex-col justify-end pb-0" aria-label={title}>
      <div className="absolute inset-0 z-0">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(8,8,10,0.98)] via-[rgba(8,8,10,0.60)] to-[rgba(8,8,10,0.30)]" />
      </div>

      <div className="relative z-10 container-varelli pt-32 pb-16">
        <Breadcrumb items={breadcrumbs} />
        <div className="mt-6 max-w-3xl">
          {badge && (
            <span className="badge-mono block mb-5">{badge}</span>
          )}
          <h1 className="font-display text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text-primary)] mb-5">
            {title}
          </h1>
          <p className="font-editorial italic text-xl md:text-2xl text-[var(--text-secondary)] leading-relaxed max-w-2xl">
            {subheadline}
          </p>
        </div>
      </div>
    </section>
  );
}
