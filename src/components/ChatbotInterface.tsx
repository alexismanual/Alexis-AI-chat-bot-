"use client";

import * as React from "react";
import { Send, Mic, Paperclip, Loader2, Bot, Sparkles } from "lucide-react";

export function ChatbotInterface() {
  const [messages, setMessages] = React.useState([
    { id: 1, role: "bot", content: "Hello! I'm alexis AI chat bot. How can I assist you today?" },
    { id: 2, role: "user", content: "Can you analyze the Q3 revenue report and generate a summary?" },
    { id: 3, role: "bot", content: "I've analyzed the report. Q3 revenue grew by 15% year-over-year, driven largely by new enterprise subscriptions. Here are the key highlights..." }
  ]);
  const [input, setInput] = React.useState("");
  const [isTyping, setIsTyping] = React.useState(false);

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages(prev => [...prev, { id: Date.now(), role: "user", content: input }]);
    setInput("");
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, { id: Date.now() + 1, role: "bot", content: "This is a simulated response demonstrating the AI answering." }]);
    }, 1500);
  };

  return (
    <div className="flex flex-col h-full bg-background dark:bg-card/40 rounded-3xl overflow-hidden glass shadow-2xl">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((m) => (
          <div key={m.id} className={`flex w-full ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] rounded-2xl p-4 text-sm md:text-base leading-relaxed ${
              m.role === 'user' 
                ? 'bg-gradient-to-br from-ai-blue to-ai-purple text-white shadow-md' 
                : 'glass shadow-sm dark:bg-white/5 border border-border/50'
            }`}>
              {m.role === 'bot' && (
                <div className="flex items-center gap-2 mb-2">
                  <Bot className="w-5 h-5 text-ai-cyan" />
                  <span className="font-semibold text-foreground/80 text-xs">alexis AI chat bot</span>
                </div>
              )}
              <p className={m.role === 'user' ? 'text-white/90' : 'text-foreground/80'}>{m.content}</p>
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex w-full justify-start">
            <div className="max-w-[85%] rounded-2xl p-4 glass border border-border/50 text-foreground/70 flex items-center gap-2">
              <Bot className="w-5 h-5 text-ai-cyan animate-pulse" />
              <Loader2 className="w-4 h-4 animate-spin text-ai-cyan" />
              <span className="text-sm">Thinking...</span>
            </div>
          </div>
        )}
      </div>

      <div className="p-4 border-t border-border/50 bg-background/50 dark:bg-black/20 pb-4">
        <div className="relative flex items-center bg-card dark:bg-white/5 rounded-full shadow-inner border border-border/50 px-4 py-2">
          <button className="p-2 hover:bg-black/5 dark:hover:bg-white/10 rounded-full text-foreground/40 hover:text-foreground transition-colors">
            <Paperclip className="w-5 h-5" />
          </button>
          <input 
             type="text" 
             value={input}
             onChange={(e) => setInput(e.target.value)}
             onKeyDown={(e) => e.key === 'Enter' && handleSend()}
             placeholder="Message alexis AI chat bot..." 
             className="flex-1 bg-transparent border-none outline-none px-3 text-sm md:text-base text-foreground placeholder:text-foreground/40"
          />
          <button className="p-2 hover:bg-black/5 dark:hover:bg-white/10 rounded-full text-foreground/40 hover:text-foreground transition-colors mr-1">
             <Mic className="w-5 h-5" />
          </button>
          <button 
             onClick={handleSend}
             className="p-2 bg-gradient-to-r from-ai-blue to-ai-purple text-white rounded-full hover:opacity-90 transition-opacity shadow-md"
          >
             <Send className="w-5 h-5 ml-1" />
          </button>
        </div>
        <p className="text-center text-[10px] sm:text-xs text-foreground/40 mt-3 flex items-center justify-center gap-1">
          <Sparkles className="w-3 h-3" />
          AI responses may be inaccurate. Please verify important information.
        </p>
      </div>
    </div>
  );
}
