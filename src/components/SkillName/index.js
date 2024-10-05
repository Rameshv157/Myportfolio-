import "./index.css";

const SkillName = (props) => {
  const { skillData } = props;
  const { images, names } = skillData;
  return (
    <li className="skill-container">
      <div>
        <img src={images} alt="html-logo" className="icon-course" />
      </div>
      <div className="skills">
        <p className="course-name">
          {names} <br />
          <span className="course-level">Advance</span>
        </p>
      </div>
    </li>
  );
};

export default SkillName;
