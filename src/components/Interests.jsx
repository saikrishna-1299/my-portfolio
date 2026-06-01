const interests = [
  {
    icon: "🧩",
    title: "Problem Solving",
  },
  {
  icon: "🤖",
  title: "AI",
},
  {
    icon: "☁️",
    title: "Cloud Technologies",
  },
  {
    icon: "📊",
    title: "Big Data",
  },
  {
    icon: "💼",
    title: "Projects",
  },
  {
    icon: "🏢",
    title: "Organizations",
  },
];

function Interests() {
  return (
    <section id="interests" className="section modern-interests-section">
      <p className="section-subtitle">WHAT I LOVE</p>
      <h2 className="section-title">INTERESTS</h2>
      

      <div className="modern-interest-grid">
        {interests.map((item) => (
          <div className="modern-interest-card" key={item.title}>
            <div className="modern-interest-icon">{item.icon}</div>
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Interests;