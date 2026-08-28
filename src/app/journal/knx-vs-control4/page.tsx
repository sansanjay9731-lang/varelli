import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import Breadcrumb from "@/components/layout/Breadcrumb";
import FAQSection from "@/components/sections/service/FAQSection";
import ServiceCTA from "@/components/sections/service/ServiceCTA";
import Link from "next/link";

export const metadata: Metadata = generatePageMetadata({
  title: "KNX vs Control4 — Which Home Automation System is Right for You? | VARELLI",
  description:
    "An honest, detailed comparison of KNX and Control4 home automation platforms — architecture, reliability, flexibility, cost, and which is right for your residence.",
  path: "/journal/knx-vs-control4",
  keywords: ["KNX vs Control4", "KNX home automation", "Control4 home automation", "KNX vs Control4 India", "home automation platform comparison"],
});

const faqs = [
  { question: "Is KNX better than Control4?", answer: "KNX and Control4 serve different purposes and are not directly comparable. KNX is a low-level device protocol — the language devices use to communicate. Control4 is an ecosystem with its own devices, interfaces, and cloud services. KNX is platform-neutral and indefinitely supported; Control4 depends on a commercial relationship with a vendor. Neither is categorically 'better' — the right choice depends on the project, the owner's priorities, and the integrator's capability." },
  { question: "Can KNX and Control4 work together?", answer: "Yes. KNX infrastructure can be integrated with Control4 via a KNX-to-Control4 driver, allowing Control4 to act as the user interface and automation engine while KNX handles device communication at the infrastructure level. This is a common approach in premium projects." },
  { question: "Which system is easier to modify after installation?", answer: "KNX systems require reprogramming by a KNX-certified engineer. Control4 also requires a certified dealer for most changes, though dealers are more numerous. Both require professional involvement for changes beyond basic scene adjustments." },
];

export default function KNXvsControl4Page() {
  return (
    <>
      <article>
        <section className="relative bg-[var(--surface-1)] border-b border-[var(--border)]">
          <div className="relative container-varelli pt-40 pb-16">
            <Breadcrumb items={[{ name: "Journal", href: "/journal" }, { name: "KNX vs Control4", href: "/journal/knx-vs-control4" }]} />
            <div className="mt-6 max-w-3xl">
              <div className="flex items-center gap-4 mb-6">
                <span className="badge-mono">Home Automation</span>
                <span className="text-xs text-[var(--text-muted)] font-mono">10 min read · February 2026</span>
              </div>
              <h1 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.1] tracking-[-0.03em] text-[var(--text-primary)] mb-5">
                KNX vs Control4 — Which Home Automation System is Right for You?
              </h1>
              <p className="font-editorial italic text-xl text-[var(--text-secondary)] leading-relaxed">
                A detailed, honest comparison — architecture, reliability, flexibility, and which platform is best suited to a luxury Indian residence.
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding border-b border-[var(--border)]">
          <div className="container-varelli max-w-3xl mx-auto space-y-10">
            <div>
              <h2 className="font-display text-2xl font-semibold text-[var(--text-primary)] mb-4">First: Understanding What Each System Actually Is</h2>
              <p className="text-[var(--text-secondary)] leading-relaxed font-body mb-4">
                KNX and Control4 are frequently compared as competing home automation platforms — but this comparison is imprecise. KNX is a device communication protocol and standard: an open, internationally standardised language that building devices use to talk to each other. Control4 is a proprietary ecosystem: a commercial automation platform with its own hardware, software, dealer network, and cloud services.
              </p>
              <p className="text-[var(--text-secondary)] leading-relaxed font-body">
                This distinction matters enormously when choosing a system for a luxury residence. One is an infrastructure standard; the other is a product ecosystem. The implications of that difference are substantial and long-term.
              </p>
            </div>

            <div className="glass-card overflow-hidden">
              <div className="grid grid-cols-3 border-b border-[var(--border)]">
                <div className="p-4 bg-[var(--surface-2)]"><p className="badge-mono text-[9px]">Dimension</p></div>
                <div className="p-4 bg-[var(--surface-2)] border-l border-[var(--border)]"><p className="badge-mono text-[9px]">KNX</p></div>
                <div className="p-4 bg-[var(--surface-2)] border-l border-[var(--border)]"><p className="badge-mono text-[9px]">Control4</p></div>
              </div>
              {[
                ["Type", "Open standard / protocol", "Proprietary ecosystem"],
                ["Origin", "European (EN 50090 standard)", "US commercial vendor (Snap One)"],
                ["Longevity", "30+ year track record, indefinite standard", "Vendor-dependent, commercial risk"],
                ["Hardware", "400+ certified manufacturers", "Control4 certified hardware"],
                ["Programming", "KNX-certified engineer", "Control4 certified dealer"],
                ["Interface", "Third-party apps, touch panels, voice", "Control4 app, voice, touchscreens"],
                ["Cost profile", "Higher infrastructure cost, open hardware", "Variable — ecosystem-dependent"],
                ["Best for", "New construction, large villas", "Any stage, mid-to-large projects"],
              ].map(([dim, knx, c4]) => (
                <div key={dim} className="grid grid-cols-3 border-b border-[var(--border)] last:border-0">
                  <div className="p-4"><p className="text-xs font-mono text-[var(--text-muted)]">{dim}</p></div>
                  <div className="p-4 border-l border-[var(--border)]"><p className="text-xs font-body text-[var(--text-secondary)]">{knx}</p></div>
                  <div className="p-4 border-l border-[var(--border)]"><p className="text-xs font-body text-[var(--text-secondary)]">{c4}</p></div>
                </div>
              ))}
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-[var(--text-primary)] mb-4">The Longevity Question</h2>
              <p className="text-[var(--text-secondary)] leading-relaxed font-body mb-4">
                For a luxury residence that may be lived in for decades, the longevity of the automation infrastructure matters. KNX, as an international standard maintained by the KNX Association and standardised in EN 50090, is not dependent on any commercial entity. It has been in continuous use since 1990. KNX-certified devices from one manufacturer are interoperable with devices from any other certified manufacturer.
              </p>
              <p className="text-[var(--text-secondary)] leading-relaxed font-body">
                Control4, now operating as part of Snap One, is a commercial product. While it is well-established, its long-term trajectory depends on the health and strategy of that commercial entity. This is not a criticism — it is simply a different risk profile that should be considered for a 20+ year investment.
              </p>
            </div>

            <div className="pt-6 border-t border-[var(--border)] flex flex-wrap gap-3">
              <Link href="/home-automation" className="text-xs text-[var(--gold)] border border-[rgba(197,168,128,0.2)] rounded px-3 py-1.5 hover:border-[var(--gold)] transition-colors font-body">Home Automation</Link>
              <Link href="/home-automation/bangalore" className="text-xs text-[var(--gold)] border border-[rgba(197,168,128,0.2)] rounded px-3 py-1.5 hover:border-[var(--gold)] transition-colors font-body">Home Automation Bangalore</Link>
              <Link href="/journal/home-automation-cost-bangalore" className="text-xs text-[var(--gold)] border border-[rgba(197,168,128,0.2)] rounded px-3 py-1.5 hover:border-[var(--gold)] transition-colors font-body">Home Automation Cost Guide</Link>
            </div>
          </div>
        </section>
      </article>
      <FAQSection faqs={faqs} heading="KNX vs Control4 — Questions Answered" />
      <ServiceCTA serviceName="home automation" />
    </>
  );
}
