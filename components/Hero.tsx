"use client";

import { useState, useEffect } from "react";
import { ArrowRight, ExternalLink, Sparkles } from "lucide-react";

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const fullText = "Building robust data pipelines & analytics platforms";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden grid-bg pt-20">
      {/* Enhanced Gradient Orbs */}
      <div className="gradient-orb w-[500px] h-[500px] bg-gradient-to-r from-primary/40 to-blue-500/30 top-[-10%] -left-[15%] animate-float" style={{ animationDelay: "0s" }} />
      <div className="gradient-orb w-[400px] h-[400px] bg-gradient-to-r from-secondary/30 to-purple-500/20 bottom-[10%] -right-[10%] animate-float" style={{ animationDelay: "-4s" }} />
      <div className="gradient-orb w-64 h-64 bg-cyan-500/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-[100px]" />

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm mb-10 animate-fade-in-up backdrop-blur-sm shadow-lg shadow-primary/10">
          <Sparkles size={14} className="animate-pulse" />
          <span className="font-medium">Available for opportunities</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 font-mono animate-fade-in-up stagger-1 leading-tight">
          <span className="bg-gradient-to-r from-foreground via-foreground to-muted bg-clip-text text-transparent">Aman Kumar Singh</span>
          <span className="text-primary animate-glow-pulse">_</span>
        </h1>

        <p className="text-xl md:text-2xl lg:text-3xl text-secondary font-mono mb-6 min-h-[2rem] animate-fade-in-up stagger-2">
          {typedText}
          <span className="typing-cursor text-primary" />
        </p>

        <p className="text-muted max-w-2xl mx-auto mb-12 text-lg leading-relaxed animate-fade-in-up stagger-3">
          Transforming raw data into{" "}
          <span className="text-primary font-medium">actionable insights</span> through
          scalable pipelines, ETL processes, and cloud-native data architectures.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up stagger-4">
          <a
            href="#projects"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-blue-600 text-white font-medium rounded-xl hover:from-blue-600 hover:to-primary transition-all hover:shadow-2xl hover:shadow-primary/40 hover:-translate-y-1"
          >
            View Projects
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 border border-border text-foreground font-medium rounded-xl hover:border-primary/60 hover:text-primary transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10 hover:bg-primary/5"
          >
            <ExternalLink size={18} /> Get in Touch
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float hidden sm:block">
        <div className="w-6 h-10 border-2 border-border/60 rounded-full flex justify-center pt-2 bg-background/50 backdrop-blur-sm">
          <div className="w-1.5 h-3 bg-primary/60 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
