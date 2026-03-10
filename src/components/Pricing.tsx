"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

export function Pricing() {
  const plans = [
    { name: "Starter", price: "Free", popular: false, desc: "For individuals exploring AI.", features: ["1,000 Messages per month", "Basic AI model", "1 User", "Standard text support", "Community access"] },
    { name: "Pro", price: "$29", popular: true, desc: "For professionals requiring power.", features: ["Unlimited messages", "Advanced GPT-4 model", "Document & Image analysis", "API Access", "Priority Support"] },
    { name: "Enterprise", price: "Custom", popular: false, desc: "For large teams and companies.", features: ["Custom AI models", "Dedicated compute", "Advanced data privacy", "24/7 Account manager", "SSO integration"] },
  ];

  return (
    <section id="pricing" className="py-24 relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-gradient-to-t from-ai-cyan/5 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Flexible Pricing for <span className="text-gradient">Everyone</span></h2>
          <p className="text-foreground/60 text-lg md:text-xl max-w-2xl mx-auto">Scale your AI usage exactly how you need it. No hidden fees.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((p, i) => (
            <motion.div 
               key={p.name}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               className={`relative glass rounded-3xl p-8 border ${p.popular ? 'border-ai-blue shadow-lg shadow-ai-blue/20' : 'border-border'}`}
            >
              {p.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-ai-blue to-ai-cyan py-1 px-4 rounded-full text-white text-xs font-bold uppercase tracking-widest shadow-lg">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold tracking-tight mb-2">{p.name}</h3>
              <p className="text-foreground/60 text-sm mb-6 pb-6 border-b border-border/50">{p.desc}</p>
              <div className="mb-6">
                 <span className="text-5xl font-bold tracking-tight">{p.price}</span>
                 {p.price !== "Custom" && p.price !== "Free" && <span className="text-foreground/60 font-medium">/mo</span>}
              </div>
              <ul className="space-y-4 mb-8 text-sm font-medium">
                {p.features.map(f => (
                  <li key={f} className="flex items-center gap-3">
                    <div className={`p-1 rounded-full ${p.popular ? 'bg-ai-blue/20 text-ai-blue' : 'bg-foreground/5 text-foreground/50'}`}>
                       <Check className="w-3 h-3" />
                    </div>
                    {f}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-4 rounded-full font-semibold transition-all shadow-md ${p.popular ? 'bg-foreground text-background hover:opacity-90 dark:bg-white dark:text-black' : 'glass hover:bg-card/40'}`}>
                {p.name === "Enterprise" ? "Contact Sales" : "Get Started"}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
