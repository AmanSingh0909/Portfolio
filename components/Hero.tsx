"use client";

import { useState, useEffect } from "react";
import { ArrowRight, ExternalLink } from "lucide-react";

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
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden grid-bg">
      {/* Gradient Orbs */}
      <div className="gradient-orb w-96 h-96 bg-primary/30 top-20 -left-48" />
      <div className="gradient-orb w-80 h-80 bg-secondary/20 bottom-20 right-10" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 font-mono">
          <span className="text-foreground">Aman Kumar Singh</span>
          <span className="text-primary animate-glow-pulse">_</span>
        </h1>

        <p className="text-xl md:text-2xl text-secondary font-mono mb-8 min-h-[2rem]">
          {typedText}
          <span className="typing-cursor text-primary" />
        </p>

        <p className="text-muted max-w-2xl mx-auto mb-12 text-lg">
          Transforming raw data into actionable insights through scalable pipelines,
          ETL processes, and cloud-native data architectures.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/30"
          >
            View Projects <ArrowRight size={18} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 border border-border text-foreground font-medium rounded-lg hover:border-primary hover:text-primary transition-all"
          >
            <ExternalLink size={18} /> Get in Touch
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-muted rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-muted rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}