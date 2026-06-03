"use client";

import { useEffect, useRef, useState } from "react";
import { FolderOpen, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Netflix Azure Medallion Data Pipeline",
    description:
      "End-to-end Netflix data pipeline on Azure using Medallion Architecture (Bronze → Silver → Gold) with Databricks, ADLS Gen2, and Delta Lake.",
    bullets: [
      "Automated data ingestion from GitHub to Azure Blob Storage using Azure Data Factory pipelines with validation, metadata tracking, and ForEach activity loops.",
      "Developed incremental data transformation layers using PySpark and Databricks Autoloader, implementing schema inference, null handling, and feature engineering across Bronze and Silver Delta tables.",
      "Created declarative Gold layer streaming pipelines with Databricks Delta Live Tables (SDP), enforcing data quality rules and building a Star Schema serving layer.",
      "Integrated GitHub with Azure Data Factory for CI/CD-based pipeline deployment and version control.",
    ],
    tech: ["Azure Data Factory", "Databricks", "Delta Lake", "PySpark", "ADLS Gen2", "Delta Live Tables", "Azure Synapse", "Power BI", "Unity Catalog", "GitHub"],
    github: "#",
    live: null,
  },
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
  const sectionRef = useRef<HTMLElement>(null);
  const [showAll, setShowAll] = useState(false);

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

    sectionRef.current?.querySelectorAll<HTMLElement>(".project-card").forEach((el, index) => {
      el.style.opacity = "0";
      el.classList.add(`stagger-${(index % 5) + 1}`);
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projects" ref={sectionRef} className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary text-sm mb-4 font-mono">&mdash; Projects</p>
          <h2 className="text-4xl md:text-5xl font-bold font-mono mb-4">Featured Work</h2>
          <p className="text-muted mt-4 max-w-2xl mx-auto text-lg leading-relaxed">
            Showing the top three data engineering projects first. Click the + button below to reveal the full portfolio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project) => (
            <div
              key={project.title}
              className="project-card opacity-0 bg-surface border border-border rounded-2xl p-6 hover:border-secondary/40 hover:bg-surface/95 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-secondary/10 group"
            >
              {/* Card header with icon */}
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <FolderOpen className="w-6 h-6 text-primary" />
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted text-sm mb-4 leading-relaxed line-clamp-3">
                {project.description}
              </p>
              <ul className="space-y-2 mb-4">
                {project.bullets.map((bullet, i) => (
                  <li
                    key={i}
                    className="text-muted text-xs leading-relaxed flex items-start gap-2"
                  >
                    <span className="text-primary mt-0.5 flex-shrink-0">▹</span>
                    {bullet}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 bg-primary/10 border border-primary/20 text-primary text-xs rounded-full font-mono hover:bg-primary/20 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 pt-4 border-t border-border">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors group-hover:hover:text-primary"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                  Code
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

        <div className="flex justify-center mt-10">
          <button
            type="button"
            onClick={() => setShowAll((current) => !current)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-secondary text-secondary hover:bg-secondary/10 hover:text-white transition-colors"
          >
            {showAll ? "Show fewer projects" : "View more projects +"}
          </button>
        </div>
      </div>
    </section>
  );
}
