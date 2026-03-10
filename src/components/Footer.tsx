import Link from "next/link";
import { MessageSquare, Linkedin, Instagram, Facebook, Palette } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card/30 border-t border-border mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-400 p-2 rounded-xl">
                <MessageSquare className="h-5 w-5 text-white" />
              </div>
              <span className="font-bold text-xl tracking-tight">alexis AI chat bot</span>
            </Link>
            <p className="text-sm text-foreground/60 max-w-sm text-balance">
              The intelligent AI assistant designed to automate, create, and scale workflows for modern teams everywhere.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="https://de.linkedin.com/in/alexis-manual/de" target="_blank" rel="noopener noreferrer" className="text-foreground/40 hover:text-blue-500 transition-colors"><Linkedin className="h-5 w-5" /></a>
              <a href="https://www.behance.net/alexismanualstocks" target="_blank" rel="noopener noreferrer" className="text-foreground/40 hover:text-blue-600 transition-colors"><Palette className="h-5 w-5" /></a>
              <a href="https://www.instagram.com/alexis.manual/" target="_blank" rel="noopener noreferrer" className="text-foreground/40 hover:text-pink-500 transition-colors"><Instagram className="h-5 w-5" /></a>
              <a href="https://www.facebook.com/alexis.manual/" target="_blank" rel="noopener noreferrer" className="text-foreground/40 hover:text-blue-700 transition-colors"><Facebook className="h-5 w-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4">Product</h4>
            <ul className="space-y-3 text-sm text-foreground/60">
              <li><Link href="#features" className="hover:text-foreground transition-colors">Features</Link></li>
              <li><Link href="#use-cases" className="hover:text-foreground transition-colors">Use Cases</Link></li>
              <li><Link href="#pricing" className="hover:text-foreground transition-colors">Pricing</Link></li>
              <li><Link href="#" className="hover:text-foreground transition-colors">Integrations</Link></li>
              <li><Link href="#" className="hover:text-foreground transition-colors">Changelog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4">Resources</h4>
            <ul className="space-y-3 text-sm text-foreground/60">
              <li><Link href="#" className="hover:text-foreground transition-colors">Documentation</Link></li>
              <li><Link href="#" className="hover:text-foreground transition-colors">API Reference</Link></li>
              <li><Link href="#" className="hover:text-foreground transition-colors">Blog</Link></li>
              <li><Link href="#" className="hover:text-foreground transition-colors">Community</Link></li>
              <li><Link href="#" className="hover:text-foreground transition-colors">Help Center</Link></li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <h4 className="font-semibold text-sm mb-4">Stay updated</h4>
            <p className="text-sm text-foreground/60 mb-4">Subscribe to our newsletter for product updates and AI tips.</p>
            <form className="flex">
              <input 
                 type="email" 
                 placeholder="Enter your email" 
                 className="flex-1 min-w-0 px-3 py-2 text-sm bg-background border border-border rounded-l-md focus:outline-none focus:border-ai-cyan transition-colors z-10"
              />
              <button 
                 type="submit"
                 className="px-4 py-2 bg-foreground text-background text-sm font-medium rounded-r-md hover:bg-foreground/90 transition-colors z-0"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>
        
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-foreground/50">
          <p>
            © {new Date().getFullYear()} alexis AI chat bot. All rights reserved. <span className="hidden sm:inline">|</span> <br className="sm:hidden" />
            Design and developed by <a href="https://alexismanual.vercel.app" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-cyan-400 transition-colors font-medium">alexis manual</a>
          </p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
