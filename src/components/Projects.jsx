const projects = [
  {
    title: "Texas Weather Analytics",
    desc: "Analyzed historical Texas weather data to uncover climate trends, forecast conditions, and deliver insights through interactive dashboards.",
    link: "https://github.com/saikrishna-1299/Texas_Weather_Analytics.git",
  },
  {
    title: "AI Data Analyst Copilot",
    desc: "Built an AI-powered assistant that converts natural language questions into SQL queries and generates automated analytics insights.",
    link: "https://github.com/saikrishna-1299/AI_Data_Analyst_Copilot.git",
  },
  {
    title: "AWS Lakehouse ETL Platform",
    desc: "Developed scalable AWS-based ETL pipelines for automated data ingestion, transformation, quality validation, and analytics.",
    link: "https://github.com/saikrishna-1299/AWS_Lakehouse_ETL_Platform.git",
  },
  {
    title: "Enterprise RAG & LLM Intelligence Platform",
    desc: "Created a Retrieval-Augmented Generation platform that enables intelligent document search and context-aware question answering.",
    link: "https://github.com/saikrishna-1299/Enterprise_RAG_LLM_Intelligence_Platform.git",
  },
];

function Projects() {
  return (
    <section id="projects" className="section modern-projects-section">
       <p className="section-subtitle">MY WORK</p>
      <h2 className="section-title">PROJECTS</h2>

      <div className="modern-projects-grid">
        {projects.map((project) => (
          <a
            href={project.link}
            className="modern-project-card"
            target="_blank"
            rel="noreferrer"
            key={project.title}
          >
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
            <span>View on GitHub →</span>
          </a>
        ))}
      </div>

      <a
        href="https://github.com/saikrishna-1299"
        className="github-load-more-btn"
        target="_blank"
        rel="noreferrer"
      >
        Load More on GitHub →
      </a>
    </section>
  );
}

export default Projects;