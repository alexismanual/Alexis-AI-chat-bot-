"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function UseCases() {
  const cases = [
    { name: "Customer Support", desc: "Automate 80% of routine inquiries instantly." },
    { name: "Education", desc: "Interactive tutoring and personalized learning plans." },
    { name: "Business Automation", desc: "Streamline workflows and data entry securely." },
    { name: "Marketing", desc: "Generate SEO-optimized content and ad copy." },
    { name: "Programming Help", desc: "Debug code, write tests, and document fast." },
    { name: "Personal Assistant", desc: "Manage schedules, emails, and daily tasks." },
  ];

  return (
    <section id="use-cases" className="py-24 relative overflow-hidden bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Built for Every <span className="text-gradient">Industry</span></h2>
            <p className="text-lg text-foreground/70 text-balance">
              Whether you are a startup founder, an enterprise team, or an individual student, alexis AI chat bot adapts to your specific workflow to maximize productivity.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 pt-6">
              {cases.map((c, i) => (
               <motion.div 
                 key={c.name}
                 initial={{ opacity: 0, x: -20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.1 }}
                 className="flex items-start gap-3 text-left"
               >
                 <CheckCircle2 className="w-5 h-5 text-ai-cyan mt-1 flex-shrink-0" />
                 <div>
                   <h4 className="font-semibold">{c.name}</h4>
                   <p className="text-sm text-foreground/60">{c.desc}</p>
                 </div>
               </motion.div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 w-full max-w-lg mx-auto relative group">
             <div className="absolute inset-0 bg-gradient-to-tr from-ai-blue to-ai-purple blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity duration-1000 -z-10 rounded-full" />
             <div className="relative glass p-8 rounded-[2.5rem] shadow-2xl space-y-4">
               {/* Mockup Dashboard Preview */}
               <div className="flex justify-between items-center mb-6">
                 <h3 className="font-semibold text-lg">Weekly Usage</h3>
                 <span className="text-xs font-bold text-ai-cyan bg-ai-cyan/10 px-2 py-1 rounded-full">+24%</span>
               </div>
               <div className="flex items-end gap-2 h-32 border-b border-border/50 pb-2">
                 {[40, 70, 45, 90, 65, 80, 100].map((h, i) => (
                   <motion.div 
                     key={i} 
                     initial={{ height: 0 }}
                     whileInView={{ height: `${h}%` }}
                     viewport={{ once: true }}
                     transition={{ duration: 1, delay: i * 0.1 }}
                     className="w-full bg-gradient-to-t from-ai-blue/50 to-ai-cyan/50 rounded-t-md relative group/bar"
                   >
                     <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-medium opacity-0 group-hover/bar:opacity-100 transition-opacity bg-background px-1.5 py-0.5 rounded shadow">
                       {h}k
                     </div>
                   </motion.div>
                 ))}
               </div>
               <div className="flex justify-between text-xs text-foreground/40 font-medium">
                 <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
               </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
