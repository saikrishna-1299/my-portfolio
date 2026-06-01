import { FaPencilAlt } from "react-icons/fa";

const experiences = [
  {
    title: "Software Engineer(Data & AI) at Nenicel",
    date: "Feb 2025 - Present",
    color: "#2f98ed",
    points: [
      "As a Team designed an end-to-end development of an enterprise cloud data and analytics platform on AWS, designed to process high-volume card portfolio metrics and deliver scalable, AI-driven risk insights for a major banking client.",
      "Architected and delivered card portfolio analytics solution on AWS (S3, Glue, Redshift) processing 100k+ accounts a pattern directly analogous to designing scalable cloud data solutions for enterprise customers.",
      "Built and deployed a transaction fraud detection ML model (Logistic Regression, 88% precision) on cloud infrastructure, translating business risk requirements into a deployed AI solution.",
      "Designed self-service analytics frameworks using AWS Quick Sight and Tableau, enabling non-technical stakeholders to independently access insights — reducing ad hoc requests by 45%.",
      "Collaborated with banking client stakeholders to gather requirements and translate business risk needs into a deployed ML solution.",
      "Implemented SOX/AML compliance controls using Snowflake row-level security and AWS IAM, maintaining 100% audit readiness across two regulatory cycles.",
    ],
  },
  {
    title: "Software Engineer Intern at Holiday Channel",
    date: "Jan 2024 - Dec 2024",
    color: "#ffc13b",
    points: [
      "Partnered with product and leadership teams to define KPI requirements and deliver self-service analytics tools.",
      "Designed end-to-end ETL pipelines on AWS (Python, SQL) ingesting user behavioral data from 3+ sources, reducing data refresh latency by 55% simulating scalable data architecture for a product used by 50K+ active users.",
      "Built Power BI and Looker dashboards tracking real-time KPIs for product and leadership teams, translating complex data into actionable business intelligence.",
    ],
  },
  {
    title: "SDE at VBRS (Client: Kakatiya Energy Systems)",
    date: "Aug 2021 - June 2022",
    color: "#ef5350",
    points: [
      "Designed and engineered an enterprise IoT data platform and machine learning pipeline to monitor, analyze, and optimize time-series data across a massive distributed network of smart grid hardware.",
      "Engineered an IoT sensor data pipeline in Python processing time-series data from 10,000+ smart streetlights, demonstrating large-scale data architecture design across distributed devices.",
      "Built anomaly detection model (Isolation Forest, 87% accuracy) to proactively flag hardware failures, reducing field maintenance costs by 30% an early example of applying ML to operational problems.",
      "Quantified 55 million units of annual energy savings through Python statistical modeling, translating complex analysis into executive-level sustainability reporting.",
    ],
  },
];

const organizations = [
  {
    title: "Member at UTD AWS Organization",
    date: "Nov 2022 - Aug 2023",
    color: "#2f98ed",
    points: [
      "Led a team of 8 student volunteers to organize AWS workshops on big data analytics using S3, Glue and Athena for 50+ attendees.",
      "Conducted 20+ interview preparation workshops for AWS roles, helping students build confidence through practice sessions.",
    ],
  },
  // {
  //   title: "Finance Assistant for ANOKHA",
  //   date: "Jan 2018 - Feb 2020",
  //   color: "#ffc13b",
  //   points: [
  //     "Worked as an Assistant for Finance Committee at Amrita University.",
  //     "Audited over 30,000 pay transactions with a 95% accuracy rate and completed 10,000 disbursements and collections with no loss of funds.",
  //   ],
  // },
  // {
  //   title: "Volunteer Head for Nature Club",
  //   date: "Sep 2017 - Jun 2021",
  //   color: "#ef5350",
  //   points: [
  //     "Worked as a Volunteer Head for Nature Club at Amrita University.",
  //     "Conducted several 20+ events across Coimbatore to help frontline workers.",
  //     "Mobilized and trained a team of 8 volunteers for periodic invasive plant removal drives near Ettimadai village areas.",
  //   ],
  // },
];

function Experience() {
  return (
    <section id="experience" className="section">
      <p className="section-subtitle">EXPERIENCE</p>
      <h2 className="section-title">WORK EXPERIENCE</h2>

      <div className="timeline">
        {experiences.map((exp) => (
          <div className="timeline-item" key={exp.title}>
            <div className="timeline-icon" style={{ background: exp.color }}>
              <FaPencilAlt />
            </div>

            <div className="timeline-card">
              <h3>
                {exp.title} <span>{exp.date}</span>
              </h3>

              <ul>
                {exp.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="experience-subsection">
        <p className="section-subtitle">ORGANIZATIONS</p>
        <h2 className="section-title">POSITIONS OF RESPONSIBILITY</h2>

        <div className="timeline">
          {organizations.map((org) => (
            <div className="timeline-item" key={org.title}>
              <div className="timeline-icon" style={{ background: org.color }}>
                <FaPencilAlt />
              </div>

              <div className="timeline-card">
                <h3>
                  {org.title} <span>{org.date}</span>
                </h3>

                <ul>
                  {org.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;