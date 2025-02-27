import React, { useState, useEffect } from "react";
import "./styles/App.css";
import Home from "./components/Home";

function App() {
  const [stars, setStars] = useState([]);
  const [menuVisible, setMenuVisible] = useState(false);

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

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
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
        <button onClick={() => scrollToSection("home")}>Home</button>
        <button onClick={() => scrollToSection("about")}>About</button>
        <button onClick={() => scrollToSection("contact")}>Contact</button>
      </nav>
      <Home />
    </div>
  );
}

export default App;
