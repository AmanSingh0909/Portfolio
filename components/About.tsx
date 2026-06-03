import { Database, Cloud, Award, Code2 } from "lucide-react";

const stats = [
  { icon: Database, label: "Data Pipelines", value: "3" },
  { icon: Cloud, label: "Azure Services", value: "10+" },
  { icon: Award, label: "Certifications", value: "Azure" },
  { icon: Code2, label: "Tech Stack", value: "15+" },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-primary text-sm mb-4 font-mono tracking-[0.3em] uppercase">About Me</p>
            <h2 className="text-4xl font-bold mb-6 font-mono">
              Azure Data Engineer
            </h2>
            <p className="text-muted text-lg leading-relaxed mb-6">
              Certified Azure data engineering professional focused on building secure,
              scalable data systems that deliver analytics-ready insights.
            </p>
            <p className="text-muted text-lg leading-relaxed mb-6">
              I create reliable end-to-end data flows using PySpark, Azure Data Factory,
              Databricks, and Delta Lake. My work combines automation, governance,
              and performance tuning to help teams move from raw data to trusted outcomes.
            </p>
            <p className="text-muted text-lg leading-relaxed">
              Recent experience includes cloud pipeline design, Data Lakehouse architecture,
              CI/CD deployment, and cross-team collaboration for business-critical reporting.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="bg-surface border border-border rounded-3xl p-6 text-center glow-border hover:border-secondary/40 hover:bg-surface/80 transition-all duration-300"
              >
                <Icon className="w-8 h-8 text-primary mx-auto mb-3" />
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