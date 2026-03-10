"use client";

import { motion } from "framer-motion";
import { MessageSquare, Globe, FileText, Image, Headphones, Code, Zap, BarChart } from "lucide-react";

export function Features() {
  const features = [
    { title: "Smart Conversations", icon: <MessageSquare className="w-6 h-6 text-ai-blue" />, description: "Context-aware interactions that feel human and professional." },
    { title: "Multilingual Chat", icon: <Globe className="w-6 h-6 text-ai-purple" />, description: "Communicate accurately in 50+ languages natively." },
    { title: "Document Analysis", icon: <FileText className="w-6 h-6 text-ai-cyan" />, description: "Upload PDFs and long documents to extract key insights instantly." },
    { title: "Image Understanding", icon: <Image className="w-6 h-6 text-ai-blue" />, description: "Vision capabilities allow alexis AI chat bot to understand and interpret images." },
    { title: "Voice Chat", icon: <Headphones className="w-6 h-6 text-ai-purple" />, description: "Seamlessly talk to your assistant with low-latency voice mode." },
    { title: "API Integration", icon: <Code className="w-6 h-6 text-ai-cyan" />, description: "Easily connect with your existing tools and custom databases." },
    { title: "Task Automation", icon: <Zap className="w-6 h-6 text-ai-blue" />, description: "Set up automated workflows to save hours of manual data entry." },
    { title: "Data Analysis", icon: <BarChart className="w-6 h-6 text-ai-purple" />, description: "Upload spreadsheets and get dynamic charts and analytical summaries." },
  ];

  return (
    <section id="features" className="py-24 relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-ai-purple/5 via-background to-background pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">AI Capabilities</h2>
          <p className="text-foreground/60 text-lg md:text-xl max-w-2xl mx-auto text-balance">
            Unleash the power of cutting-edge AI designed specifically for enterprise scale and individual speed.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div 
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="p-6 rounded-3xl glass hover:bg-card/40 transition-all border border-border group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/10 to-transparent blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-12 h-12 rounded-full hidden sm:flex items-center justify-center bg-foreground/5 dark:bg-white/5 mb-6 group-hover:scale-110 transition-transform">
                {f.icon}
              </div>
              <div className="flex sm:hidden items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-foreground/5 dark:bg-white/5">
                  {f.icon}
                </div>
                <h3 className="text-xl font-semibold tracking-tight">{f.title}</h3>
              </div>
              <h3 className="text-xl font-semibold tracking-tight hidden sm:block mb-2 group-hover:text-ai-blue transition-colors">{f.title}</h3>
              <p className="text-foreground/60 text-sm leading-relaxed text-balance">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
