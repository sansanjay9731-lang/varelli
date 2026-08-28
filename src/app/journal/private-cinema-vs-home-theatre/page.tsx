import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import Breadcrumb from "@/components/layout/Breadcrumb";
import FAQSection from "@/components/sections/service/FAQSection";
import ServiceCTA from "@/components/sections/service/ServiceCTA";
import Link from "next/link";

export const metadata: Metadata = generatePageMetadata({
  title: "Private Cinema vs Home Theatre - What's the Difference? | VARELLI",
  description:
    "Private cinema vs home theatre: understand the differences in acoustics, screen size, seating, Dolby Atmos certification, and total investment. Which should you build in your luxury villa?",
  path: "/journal/private-cinema-vs-home-theatre",
  keywords: [
    "private cinema vs home theatre India",
    "difference between private cinema and home theatre",
    "home cinema vs home theatre",
    "private cinema India",
    "Dolby Atmos home theatre India",
    "private cinema room India cost",
    "dedicated home cinema room India",
  ],
});

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Private Cinema vs Home Theatre: What's the Difference and Which Should You Build?",
  description:
    "A technical guide comparing private cinema and home theatre configurations - covering room design, acoustics, screen size, Dolby Atmos configuration, seating, and investment levels for luxury Indian residences.",
  author: {
    "@type": "Organization",
    name: "VARELLI Cinema Design Team",
    url: "https://varelli.in",
  },
  publisher: {
    "@type": "Organization",
    name: "VARELLI",
    logo: { "@type": "ImageObject", url: "https://varelli.in/images/varelli-logo.png" },
  },
  datePublished: "2025-08-01",
  dateModified: "2025-08-28",
  mainEntityOfPage: "https://varelli.in/journal/private-cinema-vs-home-theatre",
};

const faqs = [
  {
    question: "What is the difference between a private cinema and a home theatre?",
    answer:
      "A private cinema is a dedicated, purpose-built room designed exclusively for film watching - with acoustic treatment from floor to ceiling, reference-grade Dolby Atmos audio (7.1.4 minimum), 4K laser projection on an acoustically transparent screen, and theatre-grade seating. A home theatre uses an existing living room or media room adapted for cinema use, typically with a large TV or projector, 5.1–7.1 audio, and basic acoustic treatment. Private cinemas offer a significantly superior viewing experience but require dedicated space and higher investment.",
  },
  {
    question: "How much does a private cinema cost in India?",
    answer:
      "A private cinema in India costs between ₹8.5 Lakhs for an entry-level Dolby Atmos 5.1.2 room (180–220 sq. ft.) and ₹45 Lakhs+ for a reference 9.4.6 Dolby Atmos cinema with 4K laser projection, acoustic treatment, star ceiling, and luxury recliner seating. VARELLI's private cinema packages start at ₹8.5 Lakhs (Classic 5.1.2) and go to ₹38–₹65 Lakhs for Grand Estate cinemas.",
  },
  {
    question: "What room size is needed for a private cinema in India?",
    answer:
      "A minimum room size of 180 sq. ft. (approximately 12 ft × 15 ft) is recommended for an entry-level private cinema with 5.1.2 Dolby Atmos. For a reference 7.1.4 or 9.1.6 configuration, 250–400 sq. ft. is ideal (approximately 15 ft × 20 ft or 20 ft × 24 ft). VARELLI performs a room mode analysis (RT60 calculation) for every project to determine the optimal acoustic design for the available space.",
  },
  {
    question: "What is Dolby Atmos and do I need it for a home theatre?",
    answer:
      "Dolby Atmos is an immersive three-dimensional audio format that adds height channels above the traditional 5.1 or 7.1 channel configuration. Dolby Atmos uses audio objects (up to 128 per mix) that can be precisely positioned in a 360° sphere around the listener, including height. For a dedicated private cinema room, Dolby Atmos is strongly recommended - it is the current reference standard for premium content (all major streaming platforms, 4K Blu-ray). For a casual home theatre in a living room, a 5.1 or 7.1 configuration without Atmos height channels is a reasonable starting point.",
  },
  {
    question: "Is a 4K projector better than a large TV for a home cinema?",
    answer:
      "For a dedicated cinema room of 200+ sq. ft., a 4K laser projector with an acoustically transparent screen is typically superior to a large TV for the cinematic experience. A 110–150 inch projected image on an acoustically transparent screen creates a more immersive field of view and allows speakers to be positioned behind the screen (as in commercial cinemas). Large TVs (85–100 inch OLED/QLED) are better suited to media rooms where ambient light cannot be fully controlled, or where the room doubles as a living space.",
  },
  {
    question: "Can a living room be converted into a home theatre?",
    answer:
      "Yes, a living room can be converted into a home theatre, though with significant compromises. Key challenges include ambient light control (cannot be fully blacked out), reflective parallel surfaces (glass doors, hard floors) causing acoustic issues, and limited speaker placement options. For clients without a dedicated room, VARELLI designs architectural-grade living room AV setups with in-wall speakers, recessed subwoofers, and motorized blackout blinds to maximise the experience within the constraints.",
  },
];

export default function PrivateCinemaVsHomeTheatrePage() {
  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <div className="pt-32 pb-16 px-6 max-w-4xl mx-auto">
        <Breadcrumb
          items={[
            { name: "Journal", href: "/journal" },
            { name: "Private Cinema vs Home Theatre", href: "" },
          ]}
        />

        <header className="mt-8 mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[var(--gold)] border border-[var(--gold)]/30 px-3 py-1">
              Design Guide
            </span>
            <span className="text-xs text-[var(--text-muted)]">August 2025 · 8 min read</span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl text-[var(--text-primary)] leading-tight mb-6">
            Private Cinema vs. Home Theatre
          </h1>
          <p className="text-xl text-[var(--text-secondary)] leading-relaxed max-w-2xl">
            The terms are used interchangeably, but they describe very different rooms. Here is a precise technical
            breakdown to help you decide which to build in your residence.
          </p>
          <div className="mt-6 pt-6 border-t border-[var(--border)] text-sm text-[var(--text-muted)]">
            Reviewed by the VARELLI Cinema Design Team · Updated August 2025
          </div>
        </header>

        <div className="bg-[var(--surface-2)] border border-[var(--gold)]/20 rounded-sm p-6 mb-12">
          <p className="text-xs font-mono uppercase tracking-widest text-[var(--gold)] mb-3">Quick Answer</p>
          <p className="text-[var(--text-primary)] leading-relaxed">
            A <strong>private cinema</strong> is a purpose-built, acoustically treated dedicated room with 4K laser
            projection and reference Dolby Atmos audio (7.1.4–9.4.6). A <strong>home theatre</strong> is a media room
            adapted for cinema - often a large TV, 5.1 audio, and minimal acoustic treatment. Private cinemas start from
            ₹8.5 Lakhs; home theatres from ₹2.5 Lakhs.
          </p>
        </div>

        <div className="prose prose-invert prose-lg max-w-none mb-12">
          <h2>The Core Difference: Dedicated vs. Multi-Purpose Space</h2>
          <p>
            The fundamental distinction between a private cinema and a home theatre is not the quality of equipment  - 
            it is whether the room is <strong>designed exclusively for cinema</strong>, or whether it is an existing
            living space adapted to serve dual purposes.
          </p>
          <p>
            A private cinema starts with the room: geometry, surface materials, RT60 targets, bass mode management,
            background noise levels (NR25 target), and sightlines. The electronics are specified after the acoustic
            environment is defined. In a home theatre, the room is taken as-is and the electronics are selected to
            perform acceptably within those constraints.
          </p>

          <h2>Comparison: Private Cinema vs Home Theatre</h2>
        </div>

        <div className="overflow-x-auto mb-12">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[var(--surface-2)]">
                <th className="text-left p-4 border border-[var(--border)] text-[var(--gold)] font-mono text-xs uppercase">Feature</th>
                <th className="text-center p-4 border border-[var(--border)] text-[var(--text-primary)]">Private Cinema</th>
                <th className="text-center p-4 border border-[var(--border)] text-[var(--text-secondary)]">Home Theatre</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Room type", "Dedicated, blacked-out room", "Living room / media room"],
                ["Minimum room size", "180–200 sq. ft.", "100 sq. ft. (flexible)"],
                ["Display", "4K laser projector + 100–150\" screen", "65–100\" OLED/QLED TV or projector"],
                ["Audio minimum", "Dolby Atmos 5.1.2 (7 speakers)", "5.1 surround (6 speakers)"],
                ["Audio reference", "9.4.6 Dolby Atmos (22 speakers)", "7.1.4 Dolby Atmos (12 speakers)"],
                ["Acoustic treatment", "Full: bass traps, panels, diffusers, isolation", "Partial: some panels, soft furnishings"],
                ["Seating", "Dedicated cinema recliners on tiered platform", "Sofa, couch, or basic recliners"],
                ["Ambient light control", "Complete blackout (no external light)", "Blackout blinds (some light leakage)"],
                ["Room background noise", "NR-25 target (very quiet)", "NR-35+ (some HVAC/traffic noise)"],
                ["India investment range", "₹8.5L – ₹65L+", "₹2.5L – ₹20L"],
                ["Best for", "Ultimate cinema experience", "Multi-purpose media room"],
              ].map(([feat, cinema, theatre], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-[var(--surface-1)]" : ""}>
                  <td className="p-4 border border-[var(--border)] text-[var(--text-secondary)] font-medium">{feat}</td>
                  <td className="p-4 border border-[var(--border)] text-center text-[var(--text-primary)]">{cinema}</td>
                  <td className="p-4 border border-[var(--border)] text-center text-[var(--text-secondary)]">{theatre}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="prose prose-invert prose-lg max-w-none">
          <h2>VARELLI Private Cinema Packages</h2>
          <p>
            VARELLI designs private cinemas from reference Dolby Atmos 5.1.2 configurations for compact dedicated rooms,
            to 9.4.6 grand estate cinemas with 4K Barco laser projection, Sonus Faber architectural speakers, and star
            ceiling lighting. All private cinemas are delivered with:
          </p>
          <ul>
            <li>Full acoustic room analysis (RT60 measurement and target report)</li>
            <li>Dolby Atmos speaker placement specification</li>
            <li>Custom acoustic treatment concealed within architectural finishes</li>
            <li>Professional AV calibration and Dolby Atmos object mapping</li>
            <li>KNX lighting and curtain scene integration</li>
            <li>5-year system warranty</li>
          </ul>
          <p>
            Explore our{" "}
            <Link href="/private-cinema" className="text-[var(--gold)] hover:underline">
              Private Cinema design and installation service →
            </Link>
          </p>
        </div>

        <FAQSection faqs={faqs} />
      </div>

      <ServiceCTA serviceName="Private Cinema" />
    </article>
  );
}
