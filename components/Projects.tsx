import { FolderOpen, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Data Lakehouse Pipeline",
    description:
      "End-to-end Medallion Architecture pipeline (Bronze → Silver → Gold) on Azure Databricks using PySpark and Delta Lake for large-scale data processing.",
    bullets: [
      "Ingested raw data from ADLS Gen2 via ADF, landing in Bronze layer with automated data validation checks.",
      "Applied data quality validations, deduplication, and schema enforcement in Silver layer using PySpark.",
      "Developed Gold layer aggregations using Spark SQL to produce business-ready KPIs and reports.",
      "Orchestrated full pipeline using Databricks Workflows and managed data governance via Unity Catalog.",
    ],
    tech: ["Databricks", "PySpark", "Delta Lake", "ADF", "ADLS Gen2", "Spark SQL", "Unity Catalog"],
    github: "#",
    live: null,
  },
  {
    title: "Azure Data Pipeline with CI/CD",
    description:
      "Full end-to-end ADF pipeline to ingest CSV files from ADLS Gen2 and load into Azure SQL Database with schema mapping, validation, and CI/CD automation.",
    bullets: [
      "Designed and implemented ADF pipeline with Get Metadata and ForEach activities for dynamic multi-file processing using parameterized, reusable templates.",
      "Automated data ingestion using storage event triggers; configured Linked Services and Datasets for seamless integration.",
      "Secured all credentials and connection strings using Azure Key Vault.",
      "Delivered CI/CD automation via Azure DevOps with self-hosted agent and ARM template deployments.",
    ],
    tech: ["ADF", "ADLS Gen2", "Azure SQL", "Azure DevOps", "Key Vault", "ARM Templates"],
    github: "#",
    live: null,
  },
  {
    title: "Enterprise Data Warehouse",
    description:
      "Built enterprise data warehouse using Azure Synapse Analytics Dedicated SQL Pool with star schema to support business-critical large-scale data systems.",
    bullets: [
      "Built enterprise data warehouse using Synapse Dedicated SQL Pool with star schema (10+ fact & dimension tables) to support business-critical large-scale data systems.",
      "Developed data ingestion pipelines from ADLS Gen2 with data validation procedures, achieving sub 1-hour refresh SLA.",
      "Optimized data processing workflows — reduced query execution time by 40% using distribution strategies and columnar indexing.",
    ],
    tech: ["ADLS Gen2", "Azure Synapse Analytics", "Dedicated SQL Pool"],
    github: "#",
    live: null,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary text-sm mb-4">&mdash;</p>
          <h2 className="text-4xl font-bold font-mono">Featured Work</h2>
          <p className="text-muted mt-4 max-w-2xl mx-auto">
            Selected projects showcasing my expertise in data engineering
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-surface border border-border rounded-xl p-6 glow-border hover:border-primary/30 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5"
            >
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                {project.title}
              </h3>
              <p className="text-muted text-sm mb-4 leading-relaxed">
                {project.description}
              </p>
              <ul className="space-y-1 mb-4">
                {project.bullets.map((bullet, i) => (
                  <li key={i} className="text-muted text-xs leading-relaxed flex items-start gap-2">
                    <span className="text-primary mt-0.5">▹</span>
                    {bullet}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-primary/10 text-primary text-xs rounded font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors"
                >
                  <FolderOpen size={16} /> Code
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-muted hover:text-primary transition-colors"
                  >
                    <ExternalLink size={16} /> Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
              </div>
    </section>
  );
}