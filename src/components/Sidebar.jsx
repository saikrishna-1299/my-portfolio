import { useState } from "react";
import { FaGithub, FaLinkedin, FaMediumM } from "react-icons/fa";
import profileImg from "../assets/profile.jpg";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "interests", label: "Interests" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "certifications", label: "Certifications" },
  { id: "projects", label: "Projects" },
  { id: "achievements", label: "Achievements" },
  { id: "blog", label: "Blog" },
  { id: "contact", label: "Contact" },
];

function Sidebar({ activeSection }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button
        className={`hamburger-btn ${isOpen ? "hide-hamburger" : ""}`}
        onClick={() => setIsOpen(true)}
        aria-label="Open Menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {isOpen && <div className="mobile-menu-overlay" onClick={() => setIsOpen(false)}></div>}

      <aside className={`sidebar ${isOpen ? "sidebar-open" : ""}`}>
        <button
          className="close-menu-btn"
          onClick={() => setIsOpen(false)}
          aria-label="Close Menu"
        >
          ×
        </button>

        <img src={profileImg} alt="Profile" className="profile-img" />

        <h1 className="sidebar-name">Sai Krishna Gangineni</h1>
        <p className="sidebar-role">Software Engineer</p>

        <nav className="nav-menu">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={handleNavClick}
              className={activeSection === item.id ? "active" : ""}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="sidebar-socials">
          <a href="https://github.com/saikrishna-1299" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/saikrishna-gangineni" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://medium.com/@emailuvsk" aria-label="Medium">
            <FaMediumM />
          </a>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;