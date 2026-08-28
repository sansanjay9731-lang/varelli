import Link from "next/link";

interface ServiceCTAProps { serviceName: string }

export default function ServiceCTA({ serviceName }: ServiceCTAProps) {
  return (
    <section className="section-padding">
      <div className="container-varelli">
        <div className="relative rounded-2xl border border-[rgba(197,168,128,0.18)] bg-[var(--surface-1)] p-12 md:p-16 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(197,168,128,0.05)_0%,transparent_70%)] pointer-events-none" />
          <div className="relative max-w-xl">
            <p className="badge-mono mb-5">Begin Your Project</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-[-0.02em] text-[var(--text-primary)] mb-5 leading-tight">
              Begin your {serviceName} project
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-8 font-body">
              Every VARELLI project begins with a private consultation. Share the details of your residence and we will arrange a meeting with our design team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="btn-gold px-8 py-3.5 text-sm font-semibold rounded-full font-body inline-block text-center"
              >
                Request a Consultation
              </Link>
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost px-8 py-3.5 text-sm font-semibold rounded-full font-body inline-block text-center"
              >
                WhatsApp Enquiry
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
