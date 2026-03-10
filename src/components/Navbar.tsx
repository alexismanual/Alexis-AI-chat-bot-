"use client";

import * as React from "react";
import Link from "next/link";
import { MessageSquare, Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 glass border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-400 p-2 rounded-xl">
                <MessageSquare className="h-6 w-6 text-white" />
              </div>
              <span className="font-bold text-xl tracking-tight hidden sm:block lowercase">alexis AI chat bot</span>
            </Link>
          </div>
          <div className="hidden md:flex flex-1 items-center justify-center space-x-8 text-sm font-medium">
            <Link href="#features" className="text-foreground/80 hover:text-ai-blue transition-colors">Features</Link>
            <Link href="#use-cases" className="text-foreground/80 hover:text-ai-blue transition-colors">Use Cases</Link>
            <Link href="#pricing" className="text-foreground/80 hover:text-ai-blue transition-colors">Pricing</Link>
            <Link href="#docs" className="text-foreground/80 hover:text-ai-blue transition-colors">Docs</Link>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <Link href="/login" className="text-sm font-medium text-foreground/80 hover:text-foreground">Log in</Link>
            <Link href="/signup" className="text-sm font-medium bg-foreground text-background px-4 py-2 rounded-full hover:bg-foreground/90 transition-all dark:bg-white dark:text-black">
              Sign Up
            </Link>
          </div>
          <div className="flex items-center md:hidden gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground/80 hover:text-foreground"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden glass border-t border-border absolute w-full inset-x-0 shadow-lg top-16">
          <div className="px-4 py-6 space-y-4 flex flex-col items-center">
            <Link href="#features" onClick={() => setIsOpen(false)} className="text-lg font-medium">Features</Link>
            <Link href="#use-cases" onClick={() => setIsOpen(false)} className="text-lg font-medium">Use Cases</Link>
            <Link href="#pricing" onClick={() => setIsOpen(false)} className="text-lg font-medium">Pricing</Link>
            <div className="w-full h-px bg-border/50 my-2" />
            <Link href="/login" onClick={() => setIsOpen(false)} className="w-full p-3 text-center rounded-xl bg-foreground/5 hover:bg-foreground/10">Log in</Link>
            <Link href="/signup" onClick={() => setIsOpen(false)} className="w-full p-3 text-center rounded-xl bg-foreground text-background">Sign Up</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
