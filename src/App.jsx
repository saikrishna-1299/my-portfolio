import { useEffect, useState } from "react";

import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import About from "./components/About";
import Interests from "./components/Interests";
import StatsCounter from "./components/StatsCounter";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Blog from "./components/Blog";
import Contact from "./components/Contact";

const sectionIds = [
  "home",
  "about",
  "interests",
  "skills",
  "education",
  "experience",
  "certifications",
  "projects",
  "achievements",
  "blog",
  "contact",
];

function App() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);

        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app">
      <Sidebar activeSection={activeSection} />

      <main className="main">
        <Hero />
        <About />
        <Interests />
        <StatsCounter />
        <Skills />
        <Education />
        <Experience />
        <Certifications />
        <Projects />
        <Achievements />
        <Blog />
        <Contact />
      </main>
    </div>
  );
}

export default App;