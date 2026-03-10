"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function FAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const faqs = [
    { q: "How secure is the AI?", a: "We use enterprise-grade end-to-end encryption. Your data is not used to train our models without explicit consent, conforming to SOC 2 Type II standards." },
    { q: "Can I integrate custom APIs?", a: "Yes, our platform supports Webhooks and REST API integration, allowing you to connect your databases and internal tools easily." },
    { q: "Does it support multiple languages?", a: "Absolutely! alexis AI chat bot can converse naturally in over 50 languages with native-like accuracy and fluency." },
    { q: "Can businesses customize the model?", a: "Enterprise clients can finetune models on their specific datasets for perfectly aligned brand voice and proprietary knowledge retrieval." },
    { q: "Do you offer a free trial?", a: "Yes, you can sign up for a 14-day free trial on the Pro plan right away with zero commitments." }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Got Questions?</h2>
          <p className="text-foreground/60 text-lg">Find answers to the most commonly requested details below.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((f, i) => (
            <motion.div 
               key={i}
               initial={{ opacity: 0, y: 10 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               className="border border-border/50 rounded-2xl glass overflow-hidden hover:border-border transition-colors"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex justify-between items-center p-6 text-left font-semibold text-lg hover:bg-card/40 transition-colors focus:outline-none"
              >
                {f.q}
                <ChevronDown className={`w-5 h-5 transition-transform duration-300 text-ai-cyan ${openIndex === i ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-foreground/70 text-sm leading-relaxed border-t border-border/30 pt-4">
                      {f.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
