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
  return (
    <section id="experience" className="py-24 bg-surface/50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary text-sm mb-4">&mdash;</p>
          <h2 className="text-4xl font-bold font-mono">Work History</h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-border" />

          <div className="space-y-12 pl-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div className="absolute -left-[2.6rem] top-1 w-4 h-4 rounded-full bg-primary border-4 border-background" />

                <div className="bg-surface border border-border rounded-xl p-6 glow-border hover:border-primary/30 transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <h3 className="text-xl font-semibold text-foreground">
                      {exp.role}
                    </h3>
                    <span className="text-sm text-secondary font-mono">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-primary text-sm mb-2">{exp.company}</p>
                  {exp.location && <p className="text-muted text-xs mb-3">{exp.location}</p>}
                  <div className="space-y-2 mb-4">
                    {exp.bullets.map((bullet, i) => (
                      <li key={i} className="text-muted text-sm leading-relaxed flex items-start gap-2">
                        <span className="text-primary mt-1.5">▹</span>
                        {bullet}
                      </li>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-background text-xs text-muted rounded font-code"
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