import { MdCastForEducation } from "react-icons/md";
import "./index.css";

const About = () => (
  <div>
    <div className="about-bg-container">
      <div className="heading-container">
        <p className="main-heading">
          Get To Know More <br />
          <span className="about-heading">About Me</span>
        </p>
      </div>

      <div className="skills-container">
        <div >
          <img src="Untitled_design__.png" alt="my-pic" className="my-pic" />
        </div>
        <div className="containerrr">
          <div className="education-container">
            <MdCastForEducation className="icon" />
            <p>
              <br />
              Education
              <br />
              <span>
                Bachelor of Technology<small>(Civil)</small>
              </span>
            </p>
          </div>

          <p className="para">
            <big>A</big>spiring React JS and JavaScript developer with a strong
            foundation in front-end development. Eager to contribute to
            developing robust front-end solutions, creating responsive user
            interfaces, and implementing scalable REST APIs as part of the
            Infosys team. Committed to high customer satisfaction and continuous
            learning.
          </p>
        </div>
      </div>
    </div>
  </div>
);
export default About;
