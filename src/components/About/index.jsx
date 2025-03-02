//Component
import Scene from "../Scene";

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
          <p className="about-text-title">Hello, I'm João Correia</p>
          <p>
            By day, I write clean and efficient code. By night… well, I keep
            coding becasue bugs don't follow business hours. I'm passionate
            about all the things in web development, and in my free time, I
            explore robotics and emerging technologies. Life can be challenging
            enough, so I bring not only dedication and professionalism but also
            a good dose of humor and positivity.
          </p>
          <p>
            My goal? To craft scalable, secure, and intuitive applications that
            make life easier.
          </p>
        </div>
        <div className="about-text-tools">
          <p>I use this tech</p>
        </div>
      </div>
    </div>
  );
};

export default About;
