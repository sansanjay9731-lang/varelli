"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  city: z.string().min(1, "Please select your city"),
  projectType: z.string().min(1, "Please select a project type"),
  message: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

const cities = ["Bangalore", "Mumbai", "Delhi NCR", "Hyderabad", "Chennai", "Pune", "Goa", "Other"];
const projectTypes = [
  "Home Automation",
  "Private Cinema",
  "Home Theatre",
  "Fresh Air Ventilation",
  "Central Vacuum",
  "Smart Security",
  "Home Networking",
  "Complete Residence (Multiple Systems)",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    await new Promise((r) => setTimeout(r, 800));
    console.log(data);
    setSubmitted(true);
  };

  return (
    <section className="section-padding">
      <div className="container-varelli">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <p className="badge-mono mb-6">What to Expect</p>
            <div className="space-y-6">
              {[
                { step: "01", title: "Initial Response", desc: "We respond to all enquiries within one working day." },
                { step: "02", title: "Discovery Call", desc: "A 30-minute conversation to understand your residence, timeline, and aspirations." },
                { step: "03", title: "Site Visit", desc: "For projects in Bangalore and major cities, we arrange a site visit at no charge." },
                { step: "04", title: "Technical Proposal", desc: "A detailed proposal covering systems, scope, and investment — specific to your residence." },
              ].map((item) => (
                <div key={item.step} className="flex gap-5">
                  <span className="font-mono text-2xl font-medium text-[var(--surface-3)] shrink-0 mt-0.5">{item.step}</span>
                  <div>
                    <h3 className="font-display text-sm font-semibold text-[var(--text-primary)] mb-1">{item.title}</h3>
                    <p className="text-sm text-[var(--text-secondary)] font-body leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-[var(--border)]">
              <p className="badge-mono mb-3">Prefer WhatsApp?</p>
              <a
                href="https://wa.me/919999999999?text=I%20would%20like%20to%20enquire%20about%20VARELLI%20intelligent%20living%20systems"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-full font-body"
              >
                WhatsApp Enquiry →
              </a>
            </div>
          </div>

          <div className="glass-card p-8 md:p-10">
            {submitted ? (
              <div className="text-center py-12">
                <p className="badge-mono mb-4">Thank You</p>
                <h2 className="font-display text-2xl font-semibold text-[var(--text-primary)] mb-3">We will be in touch shortly.</h2>
                <p className="text-[var(--text-secondary)] font-body text-sm">
                  A member of our team will respond within one working day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-[0.1em] text-[var(--text-muted)] mb-2">Full Name *</label>
                    <input
                      {...register("name")}
                      type="text"
                      className="w-full bg-[var(--surface-2)] border border-[var(--border)] rounded-lg px-4 py-3 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--gold)] transition-colors font-body"
                      placeholder="Your name"
                    />
                    {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-[0.1em] text-[var(--text-muted)] mb-2">Phone *</label>
                    <input
                      {...register("phone")}
                      type="tel"
                      className="w-full bg-[var(--surface-2)] border border-[var(--border)] rounded-lg px-4 py-3 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--gold)] transition-colors font-body"
                      placeholder="+91 99999 99999"
                    />
                    {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone.message}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-[0.1em] text-[var(--text-muted)] mb-2">Email *</label>
                  <input
                    {...register("email")}
                    type="email"
                    className="w-full bg-[var(--surface-2)] border border-[var(--border)] rounded-lg px-4 py-3 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--gold)] transition-colors font-body"
                    placeholder="your@email.com"
                  />
                  {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-[0.1em] text-[var(--text-muted)] mb-2">City *</label>
                    <select
                      {...register("city")}
                      className="w-full bg-[var(--surface-2)] border border-[var(--border)] rounded-lg px-4 py-3 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--gold)] transition-colors font-body"
                    >
                      <option value="">Select city</option>
                      {cities.map((c) => <option key={c} value={c}>{c}</option>)}
                    </select>
                    {errors.city && <p className="text-red-400 text-xs mt-1">{errors.city.message}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-[0.1em] text-[var(--text-muted)] mb-2">Project Type *</label>
                    <select
                      {...register("projectType")}
                      className="w-full bg-[var(--surface-2)] border border-[var(--border)] rounded-lg px-4 py-3 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--gold)] transition-colors font-body"
                    >
                      <option value="">Select type</option>
                      {projectTypes.map((p) => <option key={p} value={p}>{p}</option>)}
                    </select>
                    {errors.projectType && <p className="text-red-400 text-xs mt-1">{errors.projectType.message}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-[0.1em] text-[var(--text-muted)] mb-2">Brief (Optional)</label>
                  <textarea
                    {...register("message")}
                    rows={4}
                    className="w-full bg-[var(--surface-2)] border border-[var(--border)] rounded-lg px-4 py-3 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--gold)] transition-colors font-body resize-none"
                    placeholder="Tell us about your residence — size, location, systems of interest, timeline..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-gold w-full py-4 text-sm font-semibold rounded-full font-body disabled:opacity-60 transition-opacity cursor-pointer"
                >
                  {isSubmitting ? "Sending..." : "Begin Your Residence"}
                </button>

                <p className="text-xs text-[var(--text-muted)] text-center font-body">
                  We respond within one working day. Your details are kept strictly private.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
