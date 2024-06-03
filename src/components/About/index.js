import { MdCastForEducation } from "react-icons/md";
import "./index.css";
import Header from "../Header";

const About = () => (
  <div>
    <Header />
    <div className="about-bg-container">
      <div className="heading-container">
        <p className="main-heading">
          Get To Know More <br />
          <span className="about-heading">About Me</span>
        </p>
      </div>

      <div className="skills-container">
        <img src="Untitled design (2).png" alt="my-pic" className="my-pic" />
        <div className="containerrr">
          <div className="education-container">
            <p>
              <MdCastForEducation className="icon" />
              <br />
              Education
              <br />
              <span>
                Bachelor of Technology<small>(Civil)</small>
              </span>
            </p>
          </div>

          <p className="para">
            As a graduate in bachelor of technology, who studied cutting edge
            designing technologies as part of curriculum, I am actively looking
            for opportunities into Web development (frontend).
          </p>
        </div>
      </div>
    </div>
  </div>
);
export default About;
