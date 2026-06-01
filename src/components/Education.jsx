const education = [
  {
    degree: "Masters in Information Technology and Management",
    school: "University of Texas at Dallas",
    score: "GPA: 3.39 / 4.0",
    years: "2022 – 2024",
  },
  {
    degree: "Bachelor of Technology – Computer Science Engineering",
    school: "KL University, Guntur",
    score: "GPA: 3.30 / 4.0",
    years: "2017 – 2021",
  },
  // {
  //   degree: "XII (Senior Secondary)",
  //   school: "Sri Chaitanya Junior College, Vijayawada",
  //   score: "Score: 93.2%",
  //   years: "2015 – 2017",
  // },
];

function Education() {
  return (
    <section id="education" className="section modern-education-section">
      
      <p className="section-subtitle">ACADEMIC BACKGROUND</p>
      <h2 className="section-title">EDUCATION</h2>

      <div className="modern-education-list">
        {education.map((item) => (
          <div className="modern-education-card" key={item.degree}>
            <div className="education-card-content">
              <h3>{item.degree}</h3>
              <p className="education-school">{item.school}</p>
              <p className="education-score">{item.score}</p>
            </div>

            <span className="education-year-pill">{item.years}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;