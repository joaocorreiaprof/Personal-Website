//Components
import About from "../About";
import Contact from "../Contact";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

//Styles
import "./index.css";

//Images
import PictureOfMe from "../../assets/images/me.jpg";

const Home = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1 });
  }, [controls]);

  return (
    <div className="home-container">
      <section id="home" className="section-home">
        <div className="home-title">
          <div className="home-text">
            {["João Correia", "Full Stack", "Web developer"].map(
              (text, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={controls}
                  transition={{ duration: 2.5, delay: index * 1 }}
                >
                  {text}
                </motion.p>
              )
            )}
          </div>
          <motion.img
            src={PictureOfMe}
            alt="Your Image"
            initial={{ opacity: 0 }}
            animate={controls}
            transition={{ duration: 2, delay: 3 }}
            className="home-image"
          />
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
