import { Award, Cloud } from "lucide-react";

const certifications = [
  {
    title: "Azure Data Engineer Training",
    provider: "Naresh i Technologies | Hyderabad",
    period: "Feb 2026 – Apr 2026 (Expected)",
    icon: Award,
    bullets: [
      "Hands-on training covering Azure Data Factory, ADLS Gen2, Azure Databricks, Synapse Analytics, Microsoft Fabric, and end-to-end data pipeline architecture.",
      "Practical projects on ETL design, data quality validation, cloud security with Key Vault, CI/CD automation with Azure DevOps, and data processing performance optimization.",
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
    <section id="certifications" className="py-24 bg-surface/50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary text-sm mb-4">&mdash;</p>
          <h2 className="text-4xl font-bold font-mono">Training & Certifications</h2>
        </div>

        <div className="space-y-8">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <div
                key={index}
                className="bg-surface border border-border rounded-xl p-6 glow-border hover:border-primary/30 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h3 className="text-xl font-semibold text-foreground">
                        {cert.title}
                      </h3>
                      <span className="text-sm text-secondary font-mono">
                        {cert.period}
                      </span>
                    </div>
                    <p className="text-primary text-sm mb-3">{cert.provider}</p>
                    <ul className="space-y-2">
                      {cert.bullets.map((bullet, i) => (
                        <li
                          key={i}
                          className="text-muted text-sm leading-relaxed flex items-start gap-2"
                        >
                          <span className="text-primary mt-0.5">▹</span>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <p className="text-primary text-sm mt-12 text-center">&mdash;</p>
      </div>
    </section>
  );
}