import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import Breadcrumb from "@/components/layout/Breadcrumb";
import ContactForm from "@/components/sections/contact/ContactForm";

export const metadata: Metadata = generatePageMetadata({
  title: "Begin Your Residence — Contact VARELLI | VARELLI",
  description:
    "Begin your VARELLI project. Share the details of your residence and we will arrange a private consultation with our design team.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <section className="relative bg-[var(--surface-1)] border-b border-[var(--border)]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(197,168,128,0.06)_0%,transparent_60%)]" />
        <div className="relative container-varelli pt-40 pb-16">
          <Breadcrumb items={[{ name: "Contact", href: "/contact" }]} />
          <div className="mt-6 max-w-xl">
            <span className="badge-mono block mb-5">Begin Your Residence</span>
            <h1 className="font-display text-[clamp(2.5rem,5vw,4rem)] font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text-primary)] mb-5">
              Every project begins
              <br />
              <span className="text-gradient-gold">with a conversation.</span>
            </h1>
            <p className="text-[var(--text-secondary)] text-lg leading-relaxed font-body">
              Share the details of your residence and we will arrange a private consultation with our design team.
            </p>
          </div>
        </div>
      </section>
      <ContactForm />
    </>
  );
}
