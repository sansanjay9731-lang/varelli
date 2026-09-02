"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "@/components/ui/icons";
import { staggerContainer, fadeUp } from "@/lib/animations";
import SchemaOrg from "@/components/seo/SchemaOrg";
import { buildFAQSchema } from "@/components/seo/schemas/faqPage";

interface FAQ { question: string; answer: string }
interface FAQSectionProps { faqs: FAQ[]; heading?: string; title?: string }

export default function FAQSection({ faqs, heading, title }: FAQSectionProps) {
  const displayHeading = title || heading || "Frequently Asked Questions";
  const [open, setOpen] = useState<number | null>(null);
  const schema = buildFAQSchema(faqs);

  return (
    <>
      <SchemaOrg schema={schema} />
      <section className="section-padding border-b border-[var(--border)]">
        <div className="container-varelli">
          <motion.div
            variants={staggerContainer(0.08)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            <motion.div variants={fadeUp} className="mb-12">
              <p className="badge-mono mb-4">Knowledge</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold tracking-[-0.02em] text-[var(--text-primary)]">
                {displayHeading}
              </h2>
            </motion.div>

            <div className="max-w-3xl divide-y divide-[var(--border)]">
              {faqs.map((faq, i) => (
                <motion.div key={i} variants={fadeUp}>
                  <button
                    onClick={() => setOpen(open === i ? null : i)}
                    className="w-full flex items-start justify-between gap-6 py-6 text-left group cursor-pointer"
                    aria-expanded={open === i}
                  >
                    <h3 className="font-body font-medium text-[var(--text-primary)] group-hover:text-[var(--gold)] transition-colors duration-200 text-base leading-snug">
                      {faq.question}
                    </h3>
                    <span className="shrink-0 mt-0.5 text-[var(--text-muted)] group-hover:text-[var(--gold)] transition-colors duration-200">
                      {open === i ? <Minus size={16} /> : <Plus size={16} />}
                    </span>
                  </button>
                  <AnimatePresence>
                    {open === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="pb-6 text-[var(--text-secondary)] leading-relaxed font-body text-sm">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
