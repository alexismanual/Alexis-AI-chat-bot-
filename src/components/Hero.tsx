"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { ChatbotInterface } from "./ChatbotInterface";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Animated gradient background blob */}
      <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-gradient-to-tr from-ai-cyan/20 via-ai-purple/20 to-ai-blue/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 opacity-50 dark:opacity-20 animate-[pulse_8s_infinite] pointer-events-none" />
      <div className="absolute bottom-0 left-0 -z-10 w-[500px] h-[500px] bg-gradient-to-tr from-ai-blue/20 via-transparent to-ai-purple/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3 opacity-50 dark:opacity-20 animate-[pulse_10s_infinite_reverse] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center lg:text-left space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ai-blue/10 text-ai-blue border border-ai-blue/20 text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              <span>Next Generation AI Model is Here</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance">
              Your Intelligent <br className="hidden md:block"/>
              <span className="text-gradient">AI Assistant</span> for Everything
            </h1>
            
            <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto lg:mx-0 text-balance">
              Automate workflows, analyze data, and create content in seconds with our state-of-the-art multilingual AI designed for professionals.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-ai-blue to-ai-purple text-white font-semibold text-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 group shadow-lg shadow-ai-blue/25">
                Start Chatting
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="w-full sm:w-auto px-8 py-4 rounded-full glass font-medium text-lg hover:bg-black/5 dark:hover:bg-white/5 transition-colors text-foreground flex items-center justify-center">
                Try Demo
              </button>
            </div>
            
            <div className="flex items-center justify-center lg:justify-start gap-6 pt-4 text-sm font-medium text-foreground/50">
              <span className="flex items-center gap-2">✓ No credit card required</span>
              <span className="flex items-center gap-2">✓ 14-day free trial</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 w-full max-w-2xl relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-ai-purple to-ai-cyan rounded-3xl blur-[80px] opacity-20 dark:opacity-10 pointer-events-none" />
            <div className="relative glass rounded-3xl shadow-2xl overflow-hidden border border-white/20 dark:border-white/10 h-[500px] flex flex-col">
               <ChatbotInterface />
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
