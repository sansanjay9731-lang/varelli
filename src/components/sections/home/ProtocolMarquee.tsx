"use client";

const protocols = [
  "KNX",
  "Control4",
  "Dolby Atmos",
  "Apple HomeKit",
  "Google Home",
  "Amazon Alexa",
  "Matter",
  "Lutron",
  "DALI",
  "DTS:X",
  "4K Laser",
  "Savant",
];

export default function ProtocolMarquee() {
  const doubled = [...protocols, ...protocols];

  return (
    <section className="py-10 border-y border-[var(--border)] bg-[var(--surface-1)] overflow-hidden">
      <div className="flex w-max animate-marquee">
        {doubled.map((protocol, i) => (
          <div key={i} className="flex items-center gap-8 px-10">
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--text-muted)] whitespace-nowrap hover:text-[var(--gold)] transition-colors duration-200 cursor-default">
              {protocol}
            </span>
            <span className="text-[var(--border-hover)] text-xs">·</span>
          </div>
        ))}
      </div>
      <p className="sr-only">
        VARELLI works with KNX, Control4, Dolby Atmos, Apple HomeKit, Google Home, Amazon Alexa, Matter, Lutron, DALI, DTS:X, 4K Laser projection, and Savant platforms.
      </p>
    </section>
  );
}
