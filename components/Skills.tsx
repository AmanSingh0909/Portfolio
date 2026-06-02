import {
  Code2,
  Cloud,
  Database,
  Settings,
  Server
} from "lucide-react";

const skillCategories = [
  {
    title: "Cloud - Azure",
    icon: Cloud,
    skills: ["Azure Data Factory", "ADLS Gen2", "Azure SQL Database", "Azure Databricks", "Azure Key Vault", "Blob Storage", "VNet", "Roles & Permissions"],
  },
  {
    title: "Cloud - AWS",
    icon: Cloud,
    skills: ["EC2", "S3", "RDS", "Lambda", "IAM", "VPC", "CloudWatch", "SNS", "SQS"],
  },
  {
    title: "Data Engineering",
    icon: Database,
    skills: ["ETL/ELT Pipelines", "Data Modeling", "Schema Design", "Data Quality", "Event-Driven Ingestion", "Stored Procedures"],
  },
  {
    title: "Programming & Scripting",
    icon: Code2,
    skills: ["Python", "SQL", "JavaScript", "Node.js", "React.js"],
  },
  {
    title: "Big Data",
    icon: Server,
    skills: ["Apache Spark/PySpark", "Delta Lake", "Medallion Architecture", "Hadoop (conceptual)"],
  },
  {
    title: "DevOps & Tools",
    icon: Settings,
    skills: ["Azure DevOps", "ARM Templates", "Git", "CI/CD Pipelines", "Self-Hosted Agents"],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["PostgreSQL", "Azure SQL Database", "Azure SQL Server"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-surface/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary text-sm mb-4">&mdash;</p>
          <h2 className="text-4xl font-bold font-mono">Tech Stack</h2>
          <p className="text-muted mt-4 max-w-2xl mx-auto">
            The tools and technologies I use to build robust data solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map(({ title, icon: Icon, skills }) => (
            <div
              key={title}
              className="bg-surface border border-border rounded-xl p-6 glow-border hover:border-primary/30 transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">{title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-background border border-border rounded-full text-sm text-muted hover:border-primary/50 hover:text-primary transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
              </div>
    </section>
  );
}