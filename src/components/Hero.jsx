import { FaFileAlt } from "react-icons/fa";
import resume from "../assets/resume.pdf";

function Hero() {
  return (
    <section id="home" className="new-hero-section">
      {/* <div className="hero-glow hero-glow-purple"></div>
      <div className="hero-glow hero-glow-green"></div> */}

      <div className="new-hero-content">
        <p className="hero-welcome">Welcome to my portfolio</p>

        <h1 className="new-hero-title">
          Sai Krishna
          <br />
          Gangineni
        </h1>

        <p className="new-hero-subtitle">
          Master&apos;s in Information Technology · UT Dallas
        </p>

        <p className="hero-role">AI/Cloud Enthusiast</p>

        <div className="hero-buttons">
          <a href={resume} className="hero-btn primary-hero-btn" download>
            <FaFileAlt />
            Download CV
          </a>

          <a href="#contact" className="hero-btn secondary-hero-btn">
            Get in Touch →
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;