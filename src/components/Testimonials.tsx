"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

export function Testimonials() {
  const reviews = [
    { name: "Sarah J.", role: "CEO at TechFlow", text: "alexis AI chat bot completely changed how we handle customer support. Our response time went from 4 hours to instant, and customer satisfaction is up 40%.", rating: 5, bg: "bg-ai-blue" },
    { name: "Mark T.", role: "Senior Developer", text: "As a programmer, having an AI assistant that understands context and can help debug in real-time has saved me hundreds of hours this year.", rating: 5, bg: "bg-ai-purple" },
    { name: "Emily R.", role: "Marketing Director", text: "The document analysis feature is incredible. Parsing through 50-page reports takes seconds instead of hours. A must-have tool for any modern team.", rating: 5, bg: "bg-ai-cyan" }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Loved by <span className="text-gradient">Innovators</span></h2>
          <p className="text-foreground/60 text-lg md:text-xl max-w-2xl mx-auto">Don't just take our word for it. See what our users have to say.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <motion.div 
              key={r.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-8 rounded-3xl border border-border shadow-sm flex flex-col justify-between hover:border-foreground/20 transition-colors"
            >
              <div className="flex gap-1 mb-6 text-yellow-500">
                {[...Array(r.rating)].map((_, i) => <Star key={i} className="fill-current w-4 h-4" />)}
              </div>
              <p className="text-foreground/80 mb-8 italic text-balance">"{r.text}"</p>
              <div className="flex items-center gap-4 mt-auto">
                <div className={`w-12 h-12 rounded-full ${r.bg} flex items-center justify-center text-white font-bold text-lg shadow-inner`}>
                  {r.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold text-sm">{r.name}</h4>
                  <span className="text-xs text-foreground/50">{r.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
