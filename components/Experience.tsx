"use client";

import { useEffect, useRef } from "react";
import { Building, MapPin, Calendar } from "lucide-react";

const experiences = [
  {
    role: "Data Engineer Intern",
    company: "Navanta AI",
    location: "Hyderabad, India",
    period: "Dec 2025 – Mar 2026",
    bullets: [
      "Designed and implemented relational database schemas and data models aligned with application-layer requirements, ensuring data integrity, scalability, and data quality across large-scale data systems.",
      "Built end-to-end ETL pipelines to extract, transform, and load data across multiple systems, implementing data validation and testing procedures to reduce manual data handling efforts.",
      "Developed and optimized stored procedures on PostgreSQL to serve as an efficient API interface layer, improving data processing performance between the application and the database.",
      "Collaborated with cross-functional teams to identify and prioritize project requirements, translating data flow needs into robust, maintainable pipeline solutions.",
    ],
    technologies: ["PostgreSQL", "ETL", "Python", "Data Modeling"],
  },
];

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add("animate-fade-in-up");
            (entry.target as HTMLElement).style.opacity = "1";
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionRef.current?.querySelectorAll<HTMLElement>(".timeline-item").forEach((el, index) => {
      el.style.opacity = "0";
      el.classList.add(`stagger-${(index % 5) + 1}`);
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="py-24 bg-surface/30 relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary text-sm mb-4 font-mono">&mdash; Experience</p>
          <h2 className="text-4xl md:text-5xl font-bold font-mono">Work History</h2>
        </div>

        <div className="relative">
          {/* Timeline line with gradient */}
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-border to-border" />

          <div className="space-y-12 pl-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="timeline-item opacity-0 relative group"
              >
                {/* Timeline dot with pulse */}
                <div className="absolute -left-[2.75rem] top-6 w-5 h-5 rounded-full bg-primary border-4 border-background shadow-lg shadow-primary/30 group-hover:scale-125 transition-transform" />

                <div className="bg-surface border border-border rounded-2xl p-6 hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                    <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                      <Building className="w-5 h-5 text-primary" />
                      {exp.role}
                    </h3>
                    <span className="inline-flex items-center gap-2 text-sm text-secondary font-mono bg-secondary/10 px-3 py-1 rounded-full">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-primary text-sm font-medium mb-2">{exp.company}</p>
                  {exp.location && (
                    <p className="text-muted text-xs mb-4 flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </p>
                  )}
                  <div className="space-y-3 mb-4">
                    {exp.bullets.map((bullet, i) => (
                      <li
                        key={i}
                        className="text-muted text-sm leading-relaxed flex items-start gap-3 list-none"
                      >
                        <span className="text-primary mt-1 flex-shrink-0">▹</span>
                        {bullet}
                      </li>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 bg-primary/10 border border-primary/20 text-xs text-primary rounded-full font-mono hover:bg-primary/20 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
