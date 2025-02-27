//Components
import About from "../About";
import Contact from "../Contact";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

//Styles
import "./index.css";

const Home = () => {
  const controls = useAnimation();
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollY > 100) {
      controls.start({ opacity: 0 });
    } else {
      controls.start({ opacity: 1 });
    }
  }, [scrollY, controls]);

  return (
    <div className="home-container">
      <section id="home" className="section-home">
        <div className="home-title">
          {["João Correia", "Full Stack", "Web developer"].map(
            (text, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0 }}
                animate={controls}
                transition={{ duration: 2, delay: index * 0.5 }}
              >
                {text}
              </motion.p>
            )
          )}
        </div>
      </section>
      <section id="about" className="section-about">
        <About />
      </section>
      <section id="contact" className="section-contact">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
