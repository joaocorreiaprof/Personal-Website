//Component
import Scene from "../Scene";

//Images
import Html from "../../assets/images/icons/html-5.png";
import Css from "../../assets/images/icons/css-3.png";
import Git from "../../assets/images/icons/git.png";
import Js from "../../assets/images/icons/js.png";
import Mysql from "../../assets/images/icons/mysql-database.png";
import Nodejs from "../../assets/images/icons/nodejs.png";
import ReactIcon from "../../assets/images/icons/react.png";
import Database from "../../assets/images/icons/database.png";

//Styles
import "./index.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-model">
        <Scene />
      </div>
      <div className="about-text">
        <div className="about-text-me">
          <p className="about-text-description">
            By day, I write clean and efficient code. By night… well, I keep
            coding because bugs don't follow business hours.
            <br /> I'm passionate about all the things in web development, and
            in my free time, I explore robotics and emerging technologies.
            <br />
            <br />
            Life can be challenging enough, so I bring not only dedication and
            professionalism but also a good dose of humor and positivity.
          </p>
          <p className="about-text-goal">
            <strong style={{ color: "var(--highlight-color)" }}>
              My goal?
            </strong>{" "}
            To craft
            <strong> scalable</strong>, <strong> secure</strong>, and{" "}
            <strong>intuitive applications</strong> that make life easier.
          </p>
        </div>
        <div className="about-text-tools">
          <p className="tech-text">My tech stack</p>
          <div className="about-tools-icons">
            <img src={Html} alt="Html icon" className="about-icons" />
            <img src={Css} alt="Css icon" className="about-icons" />
            <img src={Js} alt="Js icon" className="about-icons" />
            <img src={ReactIcon} alt="React icon" className="about-icons" />
            <img src={Nodejs} alt="Node icon" className="about-icons" />
            <img src={Git} alt="Git icon" className="about-icons" />
            <img src={Mysql} alt="Mysql icon" className="about-icons" />
            <img src={Database} alt="Database icon" className="about-icons" />
          </div>
          <div className="about-skills-terminal">
            <p className="about-text-skills">
              <span
                style={{ color: "var(--highlight-color)", fontWeight: "bold" }}
              >
                user_dev ~ $
              </span>{" "}
              I am skilled in programming languages such as C, Python, and
              JavaScript. On the frontend, I work with HTML, CSS, and React,
              while on the backend, I utilize Node.js and Express. I have
              experience with databases like SQL, PostgreSQL, Prisma, and
              MongoDB. Additionally, I am proficient in testing with Jest.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
