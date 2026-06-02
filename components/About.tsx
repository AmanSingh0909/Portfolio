"use client";

import { useEffect, useRef } from "react";
import { Database, Cloud, Award, Code2 } from "lucide-react";

const stats = [
  { icon: Database, label: "Data Pipelines", value: "3+" },
  { icon: Cloud, label: "Azure Services", value: "10+" },
  { icon: Award, label: "Certifications", value: "Azure" },
  { icon: Code2, label: "Tech Stack", value: "15+" },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionRef.current?.querySelectorAll(".stat-card, .text-content").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="text-content opacity-0">
            <p className="text-primary text-sm mb-4 font-mono">&mdash; About Me</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-mono bg-gradient-to-r from-foreground via-foreground to-muted bg-clip-text">
              Azure Data Engineer
            </h2>
            <div className="space-y-4">
              <p className="text-muted text-lg leading-relaxed">
                <span className="text-primary font-semibold">Certification Expected: May 2026</span>
              </p>
              <p className="text-muted text-lg leading-relaxed">
                Hands-on experience building large-scale data pipelines, data systems, and schema design.
                Core stack:{" "}
                <span className="text-foreground font-medium">Python, SQL, PySpark, Spark, ADF, ADLS Gen2, Databricks, Key Vault, and Azure DevOps</span>.
              </p>
              <p className="text-muted text-lg leading-relaxed">
                Skilled in big data technologies, data quality validation, and data processing optimization.
                Additional exposure to AWS Cloud and full-stack development (Node.js / React.js),
                with a focus on building secure, scalable, and business-driven data solutions.
              </p>
            </div>
            <p className="text-primary text-sm mt-8 font-mono">&mdash;</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map(({ icon: Icon, label, value }, index) => (
              <div
                key={label}
                className={`stat-card opacity-0 stagger-${index + 1} bg-surface border border-border rounded-2xl p-6 text-center hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5 group`}
              >
                <div className="w-14 h-14 mx-auto mb-4 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <div className="text-3xl font-bold font-mono text-foreground mb-1">
                  {value}
                </div>
                <div className="text-sm text-muted">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
