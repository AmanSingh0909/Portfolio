import { Award, Cloud } from "lucide-react";

const certifications = [
  {
    title: "SQL (Intermediate) Certificate",
    provider: "HackerRank",
    period: "Completed Feb 2026",
    icon: Award,
    bullets: [
      "Credential ID: C8BE9CC4F7C9",
      "Completed SQL fundamentals with queries, joins, aggregations, and data manipulation.",
    ],
  },
  {
    title: "Azure Data Engineer Training",
    provider: "Naresh i Technologies | Hyderabad",
    period: "Completed Apr 2026",
    icon: Award,
    bullets: [
      "Hands-on training completed.",
      "Covered ADF, ADLS Gen2, Azure Databricks, Synapse Analytics, Microsoft Fabric, and end-to-end data pipeline architecture.",
      "Delivered projects on ETL design, data quality, cloud security with Key Vault, CI/CD automation, and data processing performance optimization.",
    ],
  },
  {
    title: "AWS Cloud Practitioner",
    provider: "Self-Study | Exam planned post-Azure certification",
    period: "Planned",
    icon: Cloud,
    bullets: [
      "Covered all AWS foundational domains: compute (EC2, Lambda), storage (S3, EBS), databases (RDS, DynamoDB), networking (VPC, Route 53), security (IAM, KMS), and monitoring (CloudWatch, CloudTrail).",
    ],
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-16 bg-surface/50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-primary text-sm mb-4 font-mono tracking-[0.35em] uppercase">Credentials</p>
          <h2 className="text-4xl font-bold font-mono mb-3">Training & Certifications</h2>
          <p className="text-muted max-w-2xl mx-auto text-lg">
            Continuous learning and professional development
          </p>
        </div>

        <div className="space-y-6">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            const isCompleted = cert.period.includes("Completed");
            const statusColor = isCompleted 
              ? "text-green-400 border-green-400/50 bg-green-500/20" 
              : "text-purple-400 border-purple-400/50 bg-purple-500/20";
            const statusLabel = isCompleted
              ? (cert.provider.includes("HackerRank") ? "Certified" : "Training Completed")
              : "Upcoming";
            return (
              <div
                key={index}
                className="bg-surface/95 border border-border rounded-2xl p-6 hover:border-secondary/40 hover:bg-surface/80 transition-all duration-300 flex gap-6"
              >
                <div className="p-4 bg-primary/20 rounded-xl flex-shrink-0 h-fit">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="text-lg font-semibold text-foreground">
                      {cert.title}
                    </h3>
                    <div className={`text-xs font-bold tracking-wider uppercase px-3 py-1.5 rounded-full border-2 flex-shrink-0 whitespace-nowrap ${statusColor}`}>
                      {isCompleted ? "✓" : "◆"} {statusLabel}
                    </div>
                  </div>
                  <p className="text-secondary text-sm mb-1">{cert.provider}</p>
                  <p className="text-primary text-xs mb-3 font-mono">{cert.period}</p>
                  <ul className="space-y-2">
                    {cert.bullets.map((bullet, i) => (
                      <li
                        key={i}
                        className="text-muted text-sm leading-relaxed flex items-start gap-2"
                      >
                        <span className="text-secondary mt-0.5 flex-shrink-0">▹</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}