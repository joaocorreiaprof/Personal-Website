import { useRef } from "react";
import emailjs from "@emailjs/browser";

//icons
import { SiGitconnected } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

//styles
import "./index.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        () => {
          console.log("success");
          e.target.reset();
        },
        (error) => {
          console.log("Message failed! " + error.text);
        }
      );
  };

  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Me</h1>
      <SiGitconnected className="icon" />
      <p>Have a question or want to work together?</p>
      <p>Feel free to contact me through any of the methods listed below.</p>
      <div className="contact-links">
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
      <p>
        You can also leave me a message in here and i'll replay via email as
        soon as possible
      </p>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};

export default Contact;
