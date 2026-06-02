"use client";

import { useEffect, useRef } from "react";
import { Award, Cloud, CheckCircle } from "lucide-react";

const certifications = [
  {
    title: "SQL (Intermediate) Certificate",
    provider: "HackerRank",
    period: "Issued Feb 2026",
    icon: Award,
    status: "Certified",
    credentialId: "C8BE9CC4F7C9",
    bullets: [
      "Demonstrated proficiency in SQL fundamentals including queries, joins, aggregations, and data manipulation.",
    ],
  },
  {
    title: "Azure Data Engineer Training",
    provider: "Naresh i Technologies | Hyderabad",
    period: "Feb 2026 – Apr 2026",
    icon: Award,
    status: "Training Completed",
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
    status: "Upcoming",
    bullets: [
      "Covered all AWS foundational domains: compute (EC2, Lambda), storage (S3, EBS), databases (RDS, DynamoDB), networking (VPC, Route 53), security (IAM, KMS), and monitoring (CloudWatch, CloudTrail).",
    ],
  },
];

export default function Certifications() {
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

    sectionRef.current?.querySelectorAll<HTMLElement>(".cert-card").forEach((el, index) => {
      el.style.opacity = "0";
      el.classList.add(`stagger-${(index % 5) + 1}`);
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="certifications" ref={sectionRef} className="py-24 bg-surface/30 relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary text-sm mb-4 font-mono">&mdash; Certifications</p>
          <h2 className="text-4xl md:text-5xl font-bold font-mono mb-4">Training & Certifications</h2>
          <p className="text-muted mt-4 max-w-2xl mx-auto text-lg">
            Continuous learning and professional development
          </p>
        </div>

        <div className="space-y-6">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <div
                key={index}
                className="cert-card opacity-0 bg-surface border border-border rounded-2xl p-6 hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5 group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                      <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                        {cert.title}
                      </h3>
                      <span
                        className={`inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1 rounded-full w-fit ${
                          cert.status === "Certified" || cert.status === "Training Completed"
                            ? "bg-green-500/10 text-green-500 border border-green-500/20"
                            : "bg-secondary/10 text-secondary border border-secondary/20"
                        }`}
                      >
                        <CheckCircle className="w-3.5 h-3.5" />
                        {cert.status}
                      </span>
                    </div>
                    <p className="text-primary text-sm mb-1 font-medium">{cert.provider}</p>
                    {cert.credentialId && (
                      <p className="text-muted text-xs font-mono mb-2">Credential ID: <span className="text-foreground">{cert.credentialId}</span></p>
                    )}
                    <p className="text-secondary text-xs font-mono mb-4">{cert.period}</p>
                    <ul className="space-y-2">
                      {cert.bullets.map((bullet, i) => (
                        <li
                          key={i}
                          className="text-muted text-sm leading-relaxed flex items-start gap-2"
                        >
                          <span className="text-primary mt-0.5 flex-shrink-0">▹</span>
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
      </div>
    </section>
  );
}
