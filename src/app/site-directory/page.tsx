import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import Breadcrumb from "@/components/layout/Breadcrumb";
import Link from "next/link";

export const metadata: Metadata = generatePageMetadata({
  title: "Site Directory & Architecture Sitemap | VARELLI",
  description: "Complete architectural index of VARELLI luxury home automation, private cinema, fresh air ventilation, and journal resources.",
  path: "/site-directory",
});

const corePages = [
  { name: "Home", href: "/" },
  { name: "Home Automation Ecosystem", href: "/home-automation" },
  { name: "Private Cinema & Dolby Atmos", href: "/private-cinema" },
  { name: "Media Rooms & Custom Audio", href: "/home-theatre" },
  { name: "Swiss Zehnder ERV Ventilation", href: "/fresh-air-ventilation" },
  { name: "Drainvac Central Vacuum", href: "/central-vacuum" },
  { name: "Luxury Smart Security", href: "/home-security" },
  { name: "Enterprise Home Networking", href: "/home-networking" },
  { name: "European Brand Ecosystem", href: "/brands" },
  { name: "Architects & Designers Portal", href: "/architects" },
  { name: "Completed Luxury Residences", href: "/residences" },
  { name: "Design Studio Configurator", href: "/studio" },
  { name: "Contact & Consultations", href: "/contact" },
  { name: "The VARELLI Journal Index", href: "/journal" },
];

const cityPages = [
  { name: "Home Automation Bangalore", href: "/home-automation/bangalore" },
  { name: "Home Automation Mumbai", href: "/home-automation/mumbai" },
  { name: "Home Automation Delhi NCR", href: "/home-automation/delhi-ncr" },
  { name: "Home Automation Hyderabad", href: "/home-automation/hyderabad" },
  { name: "Home Automation Chennai", href: "/home-automation/chennai" },
  { name: "Home Automation Pune", href: "/home-automation/pune" },
  { name: "Private Cinema Bangalore", href: "/private-cinema/bangalore" },
  { name: "Private Cinema Mumbai", href: "/private-cinema/mumbai" },
  { name: "Private Cinema Delhi NCR", href: "/private-cinema/delhi-ncr" },
  { name: "Private Cinema Hyderabad", href: "/private-cinema/hyderabad" },
  { name: "Private Cinema Chennai", href: "/private-cinema/chennai" },
  { name: "Private Cinema Pune", href: "/private-cinema/pune" },
  { name: "Home Theatre Bangalore", href: "/home-theatre/bangalore" },
  { name: "Fresh Air Ventilation Bangalore", href: "/fresh-air-ventilation/bangalore" },
  { name: "Central Vacuum Bangalore", href: "/central-vacuum/bangalore" },
];

const journalPages = [
  { name: "What is DALI-2 Lighting Control?", href: "/journal/what-is-dali-2-lighting" },
  { name: "Invisible In-Wall Speakers Guide", href: "/journal/invisible-speakers-guide" },
  { name: "KNX vs Zigbee vs Matter Protocol Comparison", href: "/journal/smart-home-protocols-guide" },
  { name: "Best Home Automation Company Bangalore 2026", href: "/journal/best-home-automation-company-bangalore" },
  { name: "Smart Home Automation Mumbai Guide", href: "/journal/smart-home-automation-mumbai" },
  { name: "KNX Home Automation in India Guide", href: "/journal/knx-home-automation-india" },
  { name: "Home Theatre Cost in India 2026 Guide", href: "/journal/home-theatre-cost-india" },
  { name: "Dolby Atmos Speaker Systems India Guide", href: "/journal/dolby-atmos-speakers-india" },
  { name: "Luxury Smart Home Design Bangalore", href: "/journal/luxury-smart-home-bangalore" },
  { name: "Basalte Keypads in India Guide", href: "/journal/basalte-keypad-india" },
  { name: "Zehnder Fresh Air System India Guide", href: "/journal/zehnder-fresh-air-system-india" },
  { name: "Central Vacuum System India Guide", href: "/journal/central-vacuum-system-india" },
  { name: "KNX vs Crestron vs Control4 Comparison", href: "/journal/knx-vs-crestron-vs-control4" },
  { name: "Home Automation Cost India 2026", href: "/journal/home-automation-cost-india-2026" },
  { name: "Dolby Atmos Room Design Guide", href: "/journal/dolby-atmos-room-design-guide" },
  { name: "Private Cinema vs Home Theatre", href: "/journal/private-cinema-vs-home-theatre" },
  { name: "Fresh Air ERV vs Air Purifier", href: "/journal/fresh-air-ventilation-vs-air-purifier" },
  { name: "Home Automation Cost Bangalore", href: "/journal/home-automation-cost-bangalore" },
  { name: "Home Theatre Cost Bangalore", href: "/journal/home-theatre-cost-bangalore" },
  { name: "KNX vs Control4", href: "/journal/knx-vs-control4" },
  { name: "Private Cinema Design Guide", href: "/journal/private-cinema-design-guide" },
  { name: "What is Home Automation Guide", href: "/journal/what-is-home-automation" },
  { name: "Dolby Atmos Home Theatre Guide", href: "/journal/dolby-atmos-home-theatre" },
];

export default function SiteDirectoryPage() {
  return (
    <>
      <section className="relative bg-[var(--surface-1)] border-b border-[var(--border)]">
        <div className="relative container-varelli pt-40 pb-16">
          <Breadcrumb items={[{ name: "Site Directory", href: "/site-directory" }]} />
          <div className="mt-6 max-w-2xl">
            <span className="badge-mono block mb-5">Navigation Index</span>
            <h1 className="font-display text-[clamp(2.5rem,5vw,4rem)] font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text-primary)] mb-5">
              Site Directory
            </h1>
            <p className="text-[var(--text-secondary)] text-lg leading-relaxed font-body">
              Complete index of VARELLI intelligent living solutions, city hubs, technical guides, and architectural resources.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-varelli space-y-16">
          {/* Core Services & Platform */}
          <div>
            <span className="badge-mono mb-4 block">Core Platform</span>
            <h2 className="font-display text-2xl font-bold text-white mb-6">Services & Architectural Solutions</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {corePages.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="p-4 rounded-xl glass-card text-sm text-[var(--text-primary)] hover:text-[var(--gold)] hover:border-[var(--gold)]/50 transition-all font-medium block"
                >
                  {item.name} →
                </Link>
              ))}
            </div>
          </div>

          {/* City Hubs */}
          <div>
            <span className="badge-mono mb-4 block">Regional Hubs</span>
            <h2 className="font-display text-2xl font-bold text-white mb-6">City & Location Hubs</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {cityPages.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="p-4 rounded-xl glass-card text-sm text-[var(--text-primary)] hover:text-[var(--gold)] hover:border-[var(--gold)]/50 transition-all font-medium block"
                >
                  {item.name} →
                </Link>
              ))}
            </div>
          </div>

          {/* Journal Articles */}
          <div>
            <span className="badge-mono mb-4 block">Knowledge Base</span>
            <h2 className="font-display text-2xl font-bold text-white mb-6">Journal Articles & Technical Guides</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {journalPages.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="p-4 rounded-xl glass-card text-sm text-[var(--text-primary)] hover:text-[var(--gold)] hover:border-[var(--gold)]/50 transition-all font-medium block"
                >
                  {item.name} →
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
