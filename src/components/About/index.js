import { MdCastForEducation } from "react-icons/md";
import "./index.css";

const About = () => (
  <div>
    <div className="about-page-heading">
      <p>
        Get To Know More <br />
        <span>About Me</span>
      </p>
    </div>

    <div className="image-about-container">
      <div>
        <img src="Untitled_design__.png" alt="my-pic" className="my-pic" />
      </div>
      <div className="education-about-content-container">
        <div className="education-card">
          <MdCastForEducation />
          <p>
            <br />
            Education
            <br />
            <span>
              Bachelor of Technology<small>(Civil)</small>
            </span>
          </p>
        </div>
        <div className="about-paragraph">
          <p>
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
