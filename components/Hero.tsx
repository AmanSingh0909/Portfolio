"use client";

import { useState, useEffect } from "react";
import { ArrowRight, ExternalLink } from "lucide-react";

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const fullText = "I build cloud-ready data platforms, analytics pipelines, and automation workflows.";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 35);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden grid-bg">
      {/* Gradient Orbs */}
      <div className="gradient-orb w-96 h-96 bg-primary/24 top-20 -left-48" />
      <div className="gradient-orb w-80 h-80 bg-secondary/18 bottom-20 right-10" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-secondary/30 bg-secondary/10">
          <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
          <p className="text-xs tracking-[0.2em] text-secondary font-medium uppercase">Available for opportunities</p>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight tracking-tight font-mono">
          <span className="text-foreground">Aman Kumar Singh</span>
          <span className="text-secondary animate-glow-pulse">_</span>
        </h1>

        <p className="text-xl md:text-2xl text-primary font-mono mb-8 min-h-[2rem] font-semibold">
          Building robust data pipelines & analytics platforms
        </p>

        <div className="max-w-3xl mx-auto mb-10 text-muted text-lg leading-relaxed">
          Transforming raw data into <span className="text-secondary font-semibold">actionable insights</span> through scalable pipelines,
          ETL processes, and cloud-native data architectures.
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-white font-medium rounded-lg hover:bg-primary hover:shadow-lg hover:shadow-secondary/40 transition-all duration-300"
          >
            View Projects <ArrowRight size={18} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-foreground/40 text-foreground font-medium rounded-lg hover:border-secondary hover:text-secondary hover:bg-secondary/10 transition-all duration-300"
          >
            <ExternalLink size={18} /> Get in Touch
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
          {[
            { label: "Primary tools", value: "Azure, Databricks, PySpark" },
            { label: "Architecture", value: "Medallion Data Lakehouse" },
            { label: "Delivery", value: "Automated CI/CD pipelines" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-3xl p-5 text-sm text-muted"
            >
              <p className="text-xs uppercase tracking-[0.24em] mb-2 text-secondary font-semibold">
                {item.label}
              </p>
              <p className="text-base font-semibold text-foreground">
                {item.value}
              </p>
            </div>
          ))}
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