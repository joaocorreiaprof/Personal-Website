import React, { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import "./styles/App.css";
import Home from "./components/Home";

//icons
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function App() {
  const [stars, setStars] = useState([]);
  const [menuVisible, setMenuVisible] = useState(false);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const generateStars = () => {
      const starElements = [];
      for (let i = 0; i < 100; i++) {
        const top = Math.random() * 100;
        const left = Math.random() * 100;
        starElements.push(
          <div
            key={i}
            className="star"
            style={{ top: `${top}%`, left: `${left}%` }}
          ></div>
        );
      }
      setStars(starElements);
    };

    generateStars();
  }, []);

  useEffect(() => {
    document.body.className = theme === "dark" ? "" : "light-mode";
  }, [theme]);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <div className="App">
      {stars}
      <button
        className="menu-button"
        onClick={() => setMenuVisible(!menuVisible)}
        style={{ right: menuVisible ? "5%" : "10px" }}
      >
        <div></div>
        <div></div>
        <div></div>
      </button>
      <nav className={menuVisible ? "open" : ""}>
        <button onClick={toggleTheme} className="theme-toggle">
          {theme === "dark" ? (
            <Sun size={30} className="theme" />
          ) : (
            <Moon size={30} className="theme" />
          )}
        </button>
        <div className="nav-buttons">
          <button onClick={() => scrollToSection("home")}>Home</button>
          <button onClick={() => scrollToSection("about")}>About</button>
          <button onClick={() => scrollToSection("projects")}>Projects</button>
          <button onClick={() => scrollToSection("contact")}>Contact</button>
        </div>
        <div className="nav-links">
          <a
            href="https://github.com/joaocorreiaprof"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="contact-icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/jo%C3%A3o-correia-8b6588237/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="contact-icon" />
          </a>
        </div>
      </nav>
      <Home />
    </div>
  );
}

export default App;
