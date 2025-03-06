import { useRef, useEffect } from "react";

//styles
import "./index.css";

//Videos
import BinaryVideo from "../../assets/videos/binary-buzz.mp4";
import AlphaVideo from "../../assets/videos/alpha-video.mp4";
import MilesVideo from "../../assets/videos/miles-in-mind.mp4";
import FileVideo from "../../assets/videos/file-uploader.mp4";
import BookVideo from "../../assets/videos/book-minder.mp4";
import CvVideo from "../../assets/videos/cv.mp4";
import FreakyVideo from "../../assets/videos/freaky.mp4";
import WaldoVideo from "../../assets/videos/waldo.mp4";

const Projects = () => {
  const VideoComponent = ({ src }) => {
    const videoRef = useRef(null);

    useEffect(() => {
      if (videoRef.current) {
        videoRef.current.play();
      }
    }, []);

    return (
      <video width="850" height="350" ref={videoRef} loop autoPlay muted>
        <source src={src} type="video/mp4" />
      </video>
    );
  };

  const projects = [
    {
      title: "Alpha",
      subtitle: "Social network",
      description:
        "A social media application made using React on the front end. The back end is a REST API built with Node.js and Express, using Google OAuth and Json Web Tokens for authentication",
      videoSrc: AlphaVideo,
      liveLink: "https://alpha-production-e8ae.up.railway.app/",
      codeLink: "https://github.com/joaocorreiaprof/Alpha",
    },
    {
      title: "Binary Buzz",
      subtitle: "Messaging App",
      description:
        "A messaging application developed using React for the UI, featuring a REST API built with Node.js and Express, which queries a PostgreSQL database.",
      videoSrc: BinaryVideo,
      liveLink: "https://binary-buzz-production.up.railway.app",
      codeLink: "https://github.com/joaocorreiaprof/Binary-Buzz",
    },
    {
      title: "Miles in Mind",
      subtitle: "Blog API",
      description:
        "A blogging application developed with React, Node.js, and Express. The backend features a JWT authentication REST API that connects to a PostgreSQL database.",
      videoSrc: MilesVideo,
      liveLink: "https://blog-api-production-3f1e.up.railway.app/",
      codeLink: "https://github.com/joaocorreiaprof/Miles-in-Mind",
    },
    {
      title: "File Uploader",
      subtitle: "File storage drive",
      description:
        "A file storage drive application built with EJS for the front end and Node.js with Express for the back end.",
      videoSrc: FileVideo,
      liveLink: "https://file-uploader-production-1ba7.up.railway.app/",
      codeLink: "https://github.com/joaocorreiaprof/File-Uploader",
    },
    {
      title: "BookMinder",
      subtitle: "Book Inventory",
      description:
        "A book inventory application designed with React for the front end and powered by Node.js and Express on the back end, enabling efficient management and tracking of book collections.",
      videoSrc: BookVideo,
      liveLink: "https://inventory-application-production-3863.up.railway.app/",
      codeLink: "https://github.com/joaocorreiaprof/Inventory-Application",
    },
    {
      title: "CV Maker",
      subtitle: "Build professional CV application",
      description:
        "A CV Builder React Application that allows the user to generate a CV based on inputted data.",
      videoSrc: CvVideo,
      liveLink: "https://cv-aplication-top.netlify.app/",
      codeLink: "https://github.com/joaocorreiaprof/CV-Application",
    },
    {
      title: "Freaky",
      subtitle: "Clothing Store",
      description:
        "A bold and unconventional clothing store front end built with React, delivering a visually striking and dynamic shopping experience.",
      videoSrc: FreakyVideo,
      liveLink: "https://getfreaky.netlify.app/",
      codeLink: "https://github.com/joaocorreiaprof/Shopping-Cart",
    },
    {
      title: "Where's Waldo Game",
      subtitle: "Photo Tagging Application",
      description:
        "A 'Where's Wally' photo-tagging game, featuring a React front end and an Express, Node.js back end designed to manage and character coordinates.",
      videoSrc: WaldoVideo,
      liveLink:
        "https://where-s-waldo-a-photo-tagging-ap-production.up.railway.app/",
      codeLink:
        "https://github.com/joaocorreiaprof/Where-s-Waldo-A-Photo-Tagging-App-",
    },
  ];

  return (
    <div className="projects-container">
      <p className="projects-container-title">Projects</p>
      <div className="all-projects">
        {projects.map((project, index) => (
          <div
            className={`project-container ${
              index % 2 === 0 ? "left" : "right"
            }`}
            key={index}
          >
            <div className="project">
              <VideoComponent src={project.videoSrc} />
            </div>
            <div className="project-info">
              <p className="project-title">{project.title}</p>
              <p className="project-subtitle">{project.subtitle}</p>
              <p className="project-description">{project.description}</p>
              <div className="project-links">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Preview
                </a>
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
