import Header from "../Header";

import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import "./index.css";

const Home = () => (
  <div>
    <Header />
    <div className="container1">
      <div className="about-container">
        <img
          src="Untitleddesign(1)Cropped.png"
          alt="name"
          className="profile-image"
        />
        <div className="about-details">
          <p>Hello I'm</p>
          <h3 className="profile-name">Ramesh Vemula</h3>
          <p className="frontend">Frontend Developer</p>

          <div>
            <button type="button" className="download-button btn1">
              <a
                className="hyper-link"
                href="Resume.pdf"
                download="RameshVemulaResume.pdf"
              >
                Download Resume
              </a>
            </button>
            <button className="contact-button btn2">
              <a href="/contact" className="hyper-links">
                Contact Info
              </a>
            </button>
          </div>
          <div className="icons-container">
            <a
              href="https://www.linkedin.com/in/rameshvemula/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="icon" />
            </a>
            <a
              href="https://github.com/dashboard"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
