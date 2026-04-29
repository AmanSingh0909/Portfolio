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
            <p className="text-primary text-sm mb-4">&mdash;</p>
            <h2 className="text-4xl font-bold mb-6 font-mono">
              Azure Data Engineer
            </h2>
            <p className="text-muted text-lg leading-relaxed mb-4">
              Certification Expected: May 2026
            </p>
            <p className="text-muted text-lg leading-relaxed mb-6">
              Hands-on experience building large-scale data pipelines, data systems, and schema design.
              Core stack: Python, SQL, PySpark, Spark, ADF, ADLS Gen2, Databricks, Key Vault, and Azure DevOps.
            </p>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Skilled in big data technologies, data quality validation, and data processing optimization.
              Additional exposure to AWS Cloud and full-stack development (Node.js / React.js),
              with a focus on building secure, scalable, and business-driven data solutions.
            </p>
            <p className="text-primary text-sm">&mdash;</p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="bg-surface border border-border rounded-xl p-6 text-center glow-border hover:border-primary/50 transition-all"
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