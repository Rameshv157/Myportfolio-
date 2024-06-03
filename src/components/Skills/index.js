import Header from "../Header";

import { TbRosetteDiscountCheckFilled } from "react-icons/tb";

import "./index.css";

const Skills = () => (
  <div className="all-slills-main-container">
    <Header />
    <div className="skills-main-bg-container">
      <p className="explore-heading">
        Explore My <br /> <span className="explore-topic-name">Skills</span>
      </p>
      <div className="both-skils-containers">
        <div className="skills-main-container">
          <h2 className="development">Frontend Development</h2>
          <div className="skills-container">
            <div className="skills-name-item">
              <TbRosetteDiscountCheckFilled className="icon-course" />
              <div className="skills">
                <p className="course-name">
                  HTML <br />
                  <span className="course-level">Advance</span>
                </p>
              </div>
            </div>
            <div className="skills-name-item">
              <TbRosetteDiscountCheckFilled className="icon-course" />
              <div className="skills">
                <p className="course-name">
                  CSS <br />
                  <span className="course-level">Advance</span>
                </p>
              </div>
            </div>
            <div className="skills-name-item">
              <TbRosetteDiscountCheckFilled className="icon-course" />
              <div className="skills">
                <p className="course-name">
                  JAVA SCRIPT <br />
                  <span className="course-level">Advance</span>
                </p>
              </div>
            </div>
            <div className="skills-name-item">
              <TbRosetteDiscountCheckFilled className="icon-course" />
              <div className="skills">
                <p className="course-name">
                  REACT JS <br />
                  <span className="course-level">Advance</span>
                </p>
              </div>
            </div>
            <div className="skills-name-item">
              <TbRosetteDiscountCheckFilled className="icon-course" />
              <div className="skills">
                <p className="course-name">
                  BOOTSTRAP <br />
                  <span className="course-level">Advance</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="skills-main-container">
          <h2 className="development">Backend Development</h2>
          <div className="skills-container">
            <div className="skills-name-item">
              <TbRosetteDiscountCheckFilled className="icon-course" />
              <div className="skills">
                <p className="course-name">
                  Python <br />
                  <span className="course-level">Intermediate</span>
                </p>
              </div>
            </div>
            <div className="skills-name-item">
              <TbRosetteDiscountCheckFilled className="icon-course" />
              <div className="skills">
                <p className="course-name">
                  MySql <br />
                  <span className="course-level">Intermediate</span>
                </p>
              </div>
            </div>
            <div className="skills-name-item">
              <TbRosetteDiscountCheckFilled className="icon-course" />
              <div className="skills">
                <p className="course-name">
                  Mongo DB <br />
                  <span className="course-level">Intermediate</span>
                </p>
              </div>
            </div>
            <div className="skills-name-item">
              <TbRosetteDiscountCheckFilled className="icon-course" />
              <div className="skills">
                <p className="course-name">
                  Node js <br />
                  <span className="course-level">Advance</span>
                </p>
              </div>
            </div>
            <div className="skills-name-item">
              <TbRosetteDiscountCheckFilled className="icon-course" />
              <div className="skills">
                <p className="course-name">
                  Express js <br />
                  <span className="course-level">Advance</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Skills;
