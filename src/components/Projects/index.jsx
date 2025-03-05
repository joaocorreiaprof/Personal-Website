import { useRef, useEffect } from "react";

//styles
import "./index.css";

//Images
import BinaryImage from "../../assets/images/projects/binary-buzz.png";
import AlphaImage from "../../assets/images/projects/alpha.png";
import MilesImage from "../../assets/images/projects/miles-in-mind.png";
import FileImage from "../../assets/images/projects/file-uploader.png";
import BookImage from "../../assets/images/projects/book-minder.png";
import CvImage from "../../assets/images/projects/cv.png";
import FreakyImage from "../../assets/images/projects/freaky.png";
import WaldoImage from "../../assets/images/projects/waldo.jpg";

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
  const VideoComponent = ({ src, playbackRate }) => {
    const videoRef = useRef(null);

    useEffect(() => {
      if (videoRef.current) {
        videoRef.current.playbackRate = playbackRate;
        videoRef.current.play();
      }
    }, [playbackRate]);

    useEffect(() => {
      if (videoRef.current) {
        videoRef.current.play();
      }
    }, []);

    return (
      <video width="750" height="500" ref={videoRef} loop>
        <source src={src} type="video/mp4" />
      </video>
    );
  };

  const handleMouseEnter = (videoRef) => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = (videoRef) => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div className="projects-container">
      <h1>Projects</h1>
      <div className="all-projects">
        <div className="project-container">
          <div className="project-image-video">
            <div
              className="project"
              onMouseEnter={(e) =>
                handleMouseEnter(e.currentTarget.querySelector("video"))
              }
              onMouseLeave={(e) =>
                handleMouseLeave(e.currentTarget.querySelector("video"))
              }
            >
              <div className="project-inner">
                <div className="project-front">
                  <img
                    src={BinaryImage}
                    alt="Project binary image"
                    className="project-image"
                  />
                </div>
                <div className="project-back">
                  <VideoComponent src={BinaryVideo} playbackRate={2} />
                </div>
              </div>
            </div>
          </div>
          <div className="project-info">
            <p className="project-title">Binary Buzz</p>
            <p className="project-subtitle">Social network</p>
            <p className="project-description">
              A social media application made using React and CSS on the front
              end. The back end is a REST API built with Node.js and Express,
              using Google OAuth and Json Web Tokens for authentication
            </p>
            <div className="project-links">
              <a
                href="https://alpha-production-e8ae.up.railway.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Preview
              </a>
              <a
                href="https://github.com/joaocorreiaprof/Alpha"
                target="_blank"
                rel="noopener noreferrer"
              >
                Code
              </a>
            </div>
          </div>
        </div>
        <div className="project-container">
          <div className="project-image-video">
            <div
              className="project"
              onMouseEnter={(e) =>
                handleMouseEnter(e.currentTarget.querySelector("video"))
              }
              onMouseLeave={(e) =>
                handleMouseLeave(e.currentTarget.querySelector("video"))
              }
            >
              <div className="project-inner">
                <div className="project-front">
                  <img
                    src={AlphaImage}
                    alt="Project alpha image"
                    className="project-image"
                  />
                </div>
                <div className="project-back">
                  <VideoComponent src={AlphaVideo} playbackRate={2} />
                </div>
              </div>
            </div>
          </div>
          <div className="project-info">
            <p className="project-title">Alpha</p>
            <p className="project-subtitle">Social network</p>
            <p className="project-description">
              A social media application made using React and CSS on the front
              end. The back end is a REST API built with Node.js and Express,
              using Google OAuth and Json Web Tokens for authentication
            </p>
            <div className="project-links">
              <a
                href="https://alpha-production-e8ae.up.railway.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Preview
              </a>
              <a
                href="https://github.com/joaocorreiaprof/Alpha"
                target="_blank"
                rel="noopener noreferrer"
              >
                Code
              </a>
            </div>
          </div>
        </div>
        <div className="project-container">
          <div className="project-image-video">
            <div
              className="project"
              onMouseEnter={(e) =>
                handleMouseEnter(e.currentTarget.querySelector("video"))
              }
              onMouseLeave={(e) =>
                handleMouseLeave(e.currentTarget.querySelector("video"))
              }
            >
              <div className="project-inner">
                <div className="project-front">
                  <img
                    src={MilesImage}
                    alt="Project miles in mind image"
                    className="project-image"
                  />
                </div>
                <div className="project-back">
                  <VideoComponent src={MilesVideo} playbackRate={2} />
                </div>
              </div>
            </div>
          </div>
          <div className="project-info">
            <p className="project-title">Waldo</p>
            <p className="project-subtitle">A game</p>
            <p className="project-description">Description</p>
            <div className="project-icons">
              <p>Icons</p>
            </div>
            <div className="project-links">
              <p>links</p>
            </div>
          </div>
        </div>
        <div className="project-container">
          <div className="project-video-image">
            <div
              className="project"
              onMouseEnter={(e) =>
                handleMouseEnter(e.currentTarget.querySelector("video"))
              }
              onMouseLeave={(e) =>
                handleMouseLeave(e.currentTarget.querySelector("video"))
              }
            >
              <div className="project-inner">
                <div className="project-front">
                  <img
                    src={FileImage}
                    alt="Project file uploader image"
                    className="project-image"
                  />
                </div>
                <div className="project-back">
                  <VideoComponent src={FileVideo} playbackRate={2} />
                </div>
              </div>
            </div>
          </div>
          <div className="project-info">
            <p className="project-title">Waldo</p>
            <p className="project-subtitle">A game</p>
            <p className="project-description">Description</p>
            <div className="project-icons">
              <p>Icons</p>
            </div>
            <div className="project-links">
              <p>links</p>
            </div>
          </div>
        </div>
        <div className="project-container">
          <div className="project-video-image">
            <div
              className="project"
              onMouseEnter={(e) =>
                handleMouseEnter(e.currentTarget.querySelector("video"))
              }
              onMouseLeave={(e) =>
                handleMouseLeave(e.currentTarget.querySelector("video"))
              }
            >
              <div className="project-inner">
                <div className="project-front">
                  <img
                    src={BookImage}
                    alt="Project book minder image"
                    className="project-image"
                  />
                </div>
                <div className="project-back">
                  <VideoComponent src={BookVideo} playbackRate={2} />
                </div>
              </div>
            </div>
          </div>
          <div className="project-info">
            <p className="project-title">Waldo</p>
            <p className="project-subtitle">A game</p>
            <p className="project-description">Description</p>
            <div className="project-icons">
              <p>Icons</p>
            </div>
            <div className="project-links">
              <p>links</p>
            </div>
          </div>
        </div>
        <div className="project-container">
          <div className="project-video-image">
            <div
              className="project"
              onMouseEnter={(e) =>
                handleMouseEnter(e.currentTarget.querySelector("video"))
              }
              onMouseLeave={(e) =>
                handleMouseLeave(e.currentTarget.querySelector("video"))
              }
            >
              <div className="project-inner">
                <div className="project-front">
                  <img
                    src={CvImage}
                    alt="Project CV image"
                    className="project-image"
                  />
                </div>
                <div className="project-back">
                  <VideoComponent src={CvVideo} playbackRate={2} />
                </div>
              </div>
            </div>
          </div>
          <div className="project-info">
            <p className="project-title">Waldo</p>
            <p className="project-subtitle">A game</p>
            <p className="project-description">Description</p>
            <div className="project-icons">
              <p>Icons</p>
            </div>
            <div className="project-links">
              <p>links</p>
            </div>
          </div>
        </div>
        <div className="project-container">
          <div className="project-video-image">
            <div
              className="project"
              onMouseEnter={(e) =>
                handleMouseEnter(e.currentTarget.querySelector("video"))
              }
              onMouseLeave={(e) =>
                handleMouseLeave(e.currentTarget.querySelector("video"))
              }
            >
              <div className="project-inner">
                <div className="project-front">
                  <img
                    src={FreakyImage}
                    alt="Project freaky image"
                    className="project-image"
                  />
                </div>
                <div className="project-back">
                  <VideoComponent src={FreakyVideo} playbackRate={2} />
                </div>
              </div>
            </div>
          </div>
          <div className="project-info">
            <p className="project-title">Waldo</p>
            <p className="project-subtitle">A game</p>
            <p className="project-description">Description</p>
            <div className="project-icons">
              <p>Icons</p>
            </div>
            <div className="project-links">
              <p>links</p>
            </div>
          </div>
        </div>
        <div className="project-container">
          <div className="project-image-video">
            <div
              className="project"
              onMouseEnter={(e) =>
                handleMouseEnter(e.currentTarget.querySelector("video"))
              }
              onMouseLeave={(e) =>
                handleMouseLeave(e.currentTarget.querySelector("video"))
              }
            >
              <div className="project-inner">
                <div className="project-front">
                  <img
                    src={WaldoImage}
                    alt="Project waldo image"
                    className="project-image"
                  />
                </div>
                <div className="project-back">
                  <VideoComponent src={WaldoVideo} playbackRate={2} />
                </div>
              </div>
            </div>
          </div>
          <div className="project-info">
            <p className="project-title">Waldo</p>
            <p className="project-subtitle">A game</p>
            <p className="project-description">Description</p>
            <div className="project-icons">
              <p>Icons</p>
            </div>
            <div className="project-links">
              <p>links</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
