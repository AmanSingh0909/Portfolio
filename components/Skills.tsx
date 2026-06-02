"use client";

import { useEffect, useRef } from "react";
import {
  Code2,
  Cloud,
  Database,
  Settings,
  Server,
  Zap
} from "lucide-react";

const skillCategories = [
  {
    title: "Cloud - Azure",
    icon: Cloud,
    color: "from-blue-500 to-cyan-500",
    skills: ["Azure Data Factory", "ADLS Gen2", "Azure SQL Database", "Azure Databricks", "Azure Key Vault", "Blob Storage", "VNet", "Roles & Permissions", "VM"],
  },
  {
    title: "Cloud - AWS",
    icon: Cloud,
    color: "from-orange-500 to-amber-500",
    skills: ["EC2", "S3", "RDS", "Lambda", "IAM", "VPC", "CloudWatch", "SNS", "SQS", "etc. (70+ services)"],
  },
  {
    title: "Data Engineering",
    icon: Database,
    color: "from-purple-500 to-pink-500",
    skills: ["ETL/ELT Pipelines", "Data Modeling", "Schema Design", "Data Quality", "Event-Driven Ingestion", "Stored Procedures"],
  },
  {
    title: "Programming & Scripting",
    icon: Code2,
    color: "from-green-500 to-emerald-500",
    skills: ["Python", "SQL", "JavaScript", "Node.js", "React.js"],
  },
  {
    title: "Big Data",
    icon: Server,
    color: "from-red-500 to-orange-500",
    skills: ["Apache Spark/PySpark", "Delta Lake", "Medallion Architecture", "Hadoop (conceptual)"],
  },
  {
    title: "DevOps & Tools",
    icon: Settings,
    color: "from-indigo-500 to-blue-500",
    skills: ["Azure DevOps", "ARM Templates", "Git", "CI/CD Pipelines", "Self-Hosted Agents"],
  },
  {
    title: "Databases",
    icon: Database,
    color: "from-teal-500 to-cyan-500",
    skills: ["PostgreSQL", "Azure SQL Database", "Azure SQL Server"],
  },
];

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add("animate-scale-in");
            (entry.target as HTMLElement).style.opacity = "1";
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionRef.current?.querySelectorAll<HTMLElement>(".skill-card").forEach((el, index) => {
      el.style.opacity = "0";
      el.classList.add(`stagger-${(index % 5) + 1}`);
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-24 bg-surface/30 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="text-primary text-sm mb-4 font-mono">&mdash; Skills</p>
          <h2 className="text-4xl md:text-5xl font-bold font-mono mb-4">Tech Stack</h2>
          <p className="text-muted mt-4 max-w-2xl mx-auto text-lg">
            The tools and technologies I use to build robust data solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map(({ title, icon: Icon, color, skills }) => (
            <div
              key={title}
              className="skill-card opacity-0 bg-surface border border-border rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/5 group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2.5 rounded-xl bg-gradient-to-br ${color} bg-opacity-10`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-semibold text-foreground text-lg">{title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-background border border-border rounded-full text-sm text-muted hover:border-primary/50 hover:text-primary hover:bg-primary/5 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Quick stats bar */}
        <div className="mt-16 p-6 bg-surface border border-border rounded-2xl flex flex-wrap justify-center gap-8">
          <div className="flex items-center gap-3">
            <Zap className="w-5 h-5 text-primary" />
            <span className="text-muted">Always learning new technologies</span>
          </div>
          <div className="flex items-center gap-3">
            <Database className="w-5 h-5 text-primary" />
            <span className="text-muted">Data-first mindset</span>
          </div>
          <div className="flex items-center gap-3">
            <Cloud className="w-5 h-5 text-primary" />
            <span className="text-muted">Cloud-native solutions</span>
          </div>
        </div>
      </div>
    </section>
  );
}
