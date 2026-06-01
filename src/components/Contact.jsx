const contactItems = [
  {
    icon: "✉️",
    text: "emailuvsk@gmail.com",
    link: "mailto:emailuvsk@gmail.com ",
  },
  {
    icon: "📞",
    text: "(972) 765-3419",
    link: "tel:+19727653419",
  },
  {
    icon: "💼",
    text: "linkedin.com/in/saikrishna-gangineni",
    link: "https://www.linkedin.com/in/saikrishna-gangineni",
  },
  {
    icon: "📍",
    text: "Dallas, Texas",
    link: "#",
  },
];

function Contact() {
  return (
    <section id="contact" className="section modern-contact-section">
      <p className="section-subtitle">GET IN TOUCH</p>

      <h2 className="contact-main-title">
        Let&apos;s <span>Connect</span>
      </h2>

      <div className="contact-card">
        <p className="contact-intro">
          I&apos;m always open to new opportunities, collaborations, or just a
          good conversation about Data Analyst, AI engineering and cloud technologies.
        </p>

        <div className="contact-items">
          {contactItems.map((item) => (
            <a
              key={item.text}
              href={item.link}
              className="modern-contact-item"
              target={item.link.startsWith("http") ? "_blank" : "_self"}
              rel={item.link.startsWith("http") ? "noreferrer" : undefined}
            >
              <span className="contact-emoji">{item.icon}</span>
              <span>{item.text}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;