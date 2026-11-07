import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import Link from "next/link";
import ServiceCTA from "@/components/sections/service/ServiceCTA";
import FAQSection from "@/components/sections/service/FAQSection";
import Breadcrumb from "@/components/layout/Breadcrumb";

export const metadata: Metadata = generatePageMetadata({
  title: "Home Theatre Acoustic Design & Treatment in Bangalore | VARELLI",
  description:
    "Professional acoustic engineering for private cinemas in Bangalore. VARELLI calculates RT60 decay times, builds custom bass traps, and ensures perfect Dolby Atmos sound — no foam pyramids.",
  path: "/acoustic-design",
  keywords: [
    "home theatre acoustic design bangalore",
    "acoustic treatment home cinema india",
    "RT60 calculation home theatre",
    "bass trap home cinema india",
    "soundproofing home theatre bangalore",
    "dolby atmos acoustic treatment india",
    "private cinema acoustic engineering",
  ],
});

const faqs = [
  {
    question: "What is RT60 and why does it matter for a home cinema?",
    answer:
      "RT60 is the time it takes for sound to decay by 60 dB after the source stops. For a reference home cinema, the target is 0.3–0.4 seconds. Too long (above 0.5s) and dialogue sounds muddy and unclear. Too short (below 0.2s) and the room feels dead. VARELLI targets the Dolby Atmos specification precisely.",
  },
  {
    question: "What is the difference between soundproofing and acoustic treatment?",
    answer:
      "Soundproofing prevents sound from entering or leaving the room — it uses mass, decoupling, and seals. Acoustic treatment manages how sound behaves inside the room — it controls reflections, standing waves, and reverberation. Most AV dealers confuse the two. A cinema room requires both, designed together.",
  },
  {
    question: "Why do cheap foam panels ruin home cinema sound?",
    answer:
      "Consumer foam panels (like Amazon acoustic tiles) only absorb high frequencies (above 2 kHz). They do nothing for bass frequencies (below 300 Hz), which cause the most problematic room modes in Indian RCC construction. This leaves the room sounding thin and muddy. VARELLI uses broadband absorbers and corner bass traps to manage the full frequency spectrum.",
  },
  {
    question: "How much does acoustic treatment cost for a home cinema in Bangalore?",
    answer:
      "Professional acoustic treatment for a private cinema room (250–400 sq ft) typically costs ₹4L–₹12L depending on room dimensions, panel count, fabric choice, and bass trap depth. This is included in VARELLI's turnkey cinema packages or available as a standalone acoustic-only service.",
  },
  {
    question: "Does VARELLI do acoustic design for existing rooms?",
    answer:
      "Yes. VARELLI performs acoustic treatment retrofits for completed rooms. We start with measurement using calibrated microphones, calculate the room modes, and design a treatment plan. For best results, we recommend involvement at the construction/false ceiling stage — but significant improvement is achievable in any room.",
  },
  {
    question: "What room dimensions are ideal for a home cinema in India?",
    answer:
      "The ideal home cinema room uses dimensions based on the Sepmeyer or Louden ratios. A commonly recommended ratio is 1 : 1.28 : 1.54 (height : width : length). For a 10 ft ceiling, this gives approximately 12.8 ft width and 15.4 ft length — around 200 sq ft minimum. For Dolby Atmos 7.2.4, VARELLI recommends 300–450 sq ft.",
  },
];

const steps = [
  {
    num: "01",
    title: "Room Modelling",
    desc: "We calculate the room volume and dimensions against established acoustic ratios to predict standing waves and resonant modes before any equipment is bought or any wall is built.",
  },
  {
    num: "02",
    title: "RT60 Target Setting",
    desc: "We target 0.3–0.4 seconds reverberation time — the Dolby Atmos reference specification — ensuring dialogue is crisp, explosions are tight, and music has natural air without smear.",
  },
  {
    num: "03",
    title: "Bass Trap Design",
    desc: "Corner-mounted and ceiling-corner broadband bass traps are designed to control the low-frequency room modes that cause the characteristic 'boom' in most Indian RCC rooms.",
  },
  {
    num: "04",
    title: "Panel Fabrication",
    desc: "Custom wooden-frame acoustic panels wrapped in premium acoustic fabric that matches your interior design. Zero visible foam, zero ugly pyramid tiles.",
  },
  {
    num: "05",
    title: "Post-Installation Measurement",
    desc: "After installation, we measure the room with calibrated microphones and produce a frequency response graph verifying the RT60 target has been achieved across the full 20 Hz–20 kHz spectrum.",
  },
];

export default function AcousticDesign() {
  return (
    <main className="bg-[#08080A] min-h-screen">
      <div className="max-w-5xl mx-auto px-6 pt-32 pb-20">
        <Breadcrumb
          items={[
            { name: "Private Cinema", href: "/private-cinema" },
            { name: "Acoustic Design", href: "/acoustic-design" },
          ]}
        />

        {/* Hero */}
        <section className="mb-14 max-w-3xl">
          <p className="text-xs font-mono uppercase tracking-widest text-[#C5A880] mb-4">
            Acoustic Engineering · Bangalore
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Home Theatre Acoustic Design & Engineering
          </h1>
          <p className="text-lg text-[#C2C2C8] leading-relaxed">
            A home theatre is only as good as its room acoustics. You can spend ₹50 Lakhs on premium
            KEF or Sonus Faber speakers — but if the room has untreated hard surfaces and uncontrolled
            bass modes, it will sound like a PA system. VARELLI engineers acoustic treatments for
            Bangalore villas using calibrated RT60 measurement, custom bass traps, and broadband
            absorbers built to match your interior design.
          </p>
        </section>

        {/* Soundproofing vs Treatment */}
        <section className="mb-14 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#121216] border border-[#2A2A35] rounded-sm p-6">
            <h2 className="font-display text-xl font-bold text-white mb-4">
              Soundproofing vs. Acoustic Treatment
            </h2>
            <div className="space-y-4">
              <div>
                <div className="text-sm font-semibold text-[#C5A880] mb-1">Soundproofing</div>
                <p className="text-sm text-[#C2C2C8]">
                  Keeps sound <em>out</em> (and in). Prevents the outside world from hearing your
                  cinema — and prevents cinema sound from disturbing the rest of the home. Uses mass,
                  structural decoupling, and acoustic seals.
                </p>
              </div>
              <div>
                <div className="text-sm font-semibold text-[#C5A880] mb-1">Acoustic Treatment</div>
                <p className="text-sm text-[#C2C2C8]">
                  Makes the sound <em>inside</em> the room accurate. Controls reflections, standing
                  waves, and reverberation time. Without it, even ₹50L of speakers sounds muddy.
                </p>
              </div>
              <p className="text-xs text-[#C2C2C8] italic border-t border-[#2A2A35] pt-3 mt-3">
                Most AV installers confuse the two. VARELLI engineers both — designed together from
                the same room model.
              </p>
            </div>
          </div>

          <div className="bg-[#121216] border border-[#2A2A35] rounded-sm p-6">
            <h2 className="font-display text-xl font-bold text-white mb-4">
              Why Cheap Foam Panels Ruin Your Sound
            </h2>
            <p className="text-[#C2C2C8] text-sm leading-relaxed mb-4">
              Amazon acoustic foam tiles (₹500–₹2,000 per panel) only absorb high frequencies above
              2 kHz. They do nothing for bass modes below 300 Hz — the frequencies that cause the
              characteristic "boomy" sound in Indian RCC rooms.
            </p>
            <p className="text-[#C2C2C8] text-sm leading-relaxed">
              The result: deadened treble with untouched bass — the room sounds lifeless and muddy
              simultaneously. VARELLI uses <strong className="text-[#F2F2F5]">calibrated broadband
              absorbers</strong> and <strong className="text-[#F2F2F5]">corner bass traps</strong> to
              manage the full 20 Hz–20 kHz spectrum.
            </p>
          </div>
        </section>

        {/* RT60 explainer */}
        <section className="mb-14 bg-[#121216] border-l-2 border-[#C5A880] px-6 py-5 rounded-sm">
          <p className="text-xs font-mono uppercase tracking-widest text-[#C5A880] mb-2">Key Metric</p>
          <p className="text-[#C2C2C8] text-sm leading-relaxed">
            <strong className="text-white">RT60</strong> is the time for sound to decay by 60 dB after
            a source stops. The Dolby Atmos specification for a reference cinema room targets{" "}
            <strong className="text-white">0.3–0.4 seconds</strong>. Above 0.5s: dialogue sounds muddy.
            Below 0.2s: the room sounds unnaturally dead. VARELLI measures, models, and designs to hit
            this target precisely — verified with post-installation measurement.
          </p>
        </section>

        {/* Process */}
        <section className="mb-14">
          <p className="text-xs font-mono uppercase tracking-widest text-[#C5A880] mb-3">Process</p>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-8">
            Our Acoustic Engineering Process
          </h2>
          <div className="space-y-5">
            {steps.map((step) => (
              <div
                key={step.num}
                className="flex gap-5 bg-[#121216] border border-[#2A2A35] rounded-sm p-6"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-[#1A1A22] border border-[#C5A880] rounded-sm flex items-center justify-center font-mono text-[#C5A880] text-xs font-bold">
                  {step.num}
                </div>
                <div>
                  <h3 className="font-display text-base font-bold text-white mb-1">{step.title}</h3>
                  <p className="text-sm text-[#C2C2C8] leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* What we use */}
        <section className="mb-14">
          <p className="text-xs font-mono uppercase tracking-widest text-[#C5A880] mb-3">Materials</p>
          <h2 className="font-display text-2xl font-bold text-white mb-6">What VARELLI Builds</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                title: "Corner Bass Traps",
                desc: "Floor-to-ceiling triangular absorption columns in every corner — the most effective low-frequency treatment for any room.",
              },
              {
                title: "Broadband Absorbers",
                desc: "4\" to 8\" thick fabric-wrapped panels on first reflection points (side walls, rear wall, ceiling cloud) — full-range absorption, not just treble.",
              },
              {
                title: "Diffusers",
                desc: "Mathematical diffuser panels on the rear wall scatter high-frequency energy to create spaciousness without deadening the room.",
              },
            ].map((m) => (
              <div key={m.title} className="bg-[#121216] border border-[#2A2A35] rounded-sm p-5">
                <div className="text-sm font-semibold text-[#C5A880] mb-2">{m.title}</div>
                <p className="text-xs text-[#C2C2C8] leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related links */}
        <section className="mb-14 pt-8 border-t border-[#2A2A35]">
          <p className="text-xs font-mono uppercase tracking-widest text-[#C5A880] mb-4">Related</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: "/bangalore-home-theatre", label: "Turnkey Cinema", title: "Turnkey Home Theatre Bangalore →", desc: "Complete private cinema execution — acoustics, AV, seating, automation." },
              { href: "/private-cinema/bangalore", label: "Private Cinema", title: "Private Cinema in Bangalore →", desc: "Full guide to private cinema design and pricing for Bangalore villas." },
              { href: "/journal/best-home-theatre-companies-bangalore", label: "Comparison", title: "Best Home Theatre Companies Bangalore →", desc: "Honest ranking of Bangalore AV integrators — who actually does acoustics right." },
              { href: "/journal/home-cinema-room-dimensions-guide", label: "Room Design", title: "Home Cinema Room Dimensions Guide →", desc: "Minimum sizes, Golden Ratio, ceiling height and acoustic requirements." },
            ].map(({ href, label, title, desc }) => (
              <Link key={href} href={href} className="p-4 bg-[#121216] border border-[#2A2A35] hover:border-[#C5A880] transition-colors rounded-sm group">
                <span className="text-xs text-[#C5A880] font-mono">{label}</span>
                <h4 className="font-display text-sm font-semibold text-[#F2F2F5] group-hover:text-[#C5A880] transition-colors mt-1">{title}</h4>
                <p className="text-xs text-[#C2C2C8] mt-1">{desc}</p>
              </Link>
            ))}
          </div>
        </section>

        <FAQSection faqs={faqs} title="Acoustic Design — Frequently Asked Questions" />
      </div>

      <ServiceCTA serviceName="Private Cinema" />
    </main>
  );
}
