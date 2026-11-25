import Link from "next/link";

interface ServiceCTAProps {
  serviceName?: string;
  title?: string;
  description?: string;
}

function getSolutionParam(serviceName: string): string {
  const lower = serviceName.toLowerCase();
  if (lower.includes("cinema") || lower.includes("theatre") || lower.includes("theater")) {
    return "cinema";
  }
  if (lower.includes("fresh air") || lower.includes("ventilation") || lower.includes("iaq")) {
    return "fresh-air";
  }
  if (lower.includes("vacuum")) {
    return "vacuum";
  }
  if (lower.includes("security") || lower.includes("network") || lower.includes("wifi")) {
    return "security";
  }
  return "automation";
}

export default function ServiceCTA({ serviceName = "Smart Home", title, description }: ServiceCTAProps) {
  const solutionParam = getSolutionParam(serviceName);
  return (
    <section className="section-padding">
      <div className="container-varelli">
        <div className="relative rounded-2xl border border-[rgba(197,168,128,0.18)] bg-[var(--surface-1)] p-12 md:p-16 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(197,168,128,0.05)_0%,transparent_70%)] pointer-events-none" />
          <div className="relative max-w-2xl">
            <p className="badge-mono mb-5">Begin Your Project</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-[-0.02em] text-[var(--text-primary)] mb-5 leading-tight">
              {title || `Begin your ${serviceName} project`}
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-8 font-body">
              {description || `Every VARELLI project begins with a private consultation. Share the details of your residence and we will arrange a meeting with our design team.`}
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4">
              <Link
                href={`/plan-your-smart-home?solution=${solutionParam}`}
                className="btn-gold px-8 py-3.5 text-sm font-semibold rounded-full font-body inline-block text-center"
              >
                Plan &amp; Estimate Cost →
              </Link>
              <Link
                href="/contact"
                className="btn-ghost px-8 py-3.5 text-sm font-semibold rounded-full font-body inline-block text-center"
              >
                Request a Consultation
              </Link>
              <a
                href="https://wa.me/919964984695?text=Hello%20VARELLI%2C%20I%20would%20like%20to%20discuss%20a%20smart%20home%20residence%20project."
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
