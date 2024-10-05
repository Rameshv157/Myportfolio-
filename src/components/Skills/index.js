// import { TbRosetteDiscountCheckFilled } from "react-icons/tb";

// import bootstrap from "bootstrap";
// import { Container, Row, Col } from "react-bootstrap";
import "./index.css";

const images = {
  react: "./react.png",
  html: "./html-img.png",
  css: "./css-image.png",
  bootstrap: "./bootstrap.png",
  javascript: "./javascript.png",
  tailwind: "./tailwind.png",
  github: "./github.png",
  wordpress: "./wordpress.png",
  redux: "./redux.png",
};

const names = {
  react: "React JS",
  bootstrap: "Bootstrap",
  css: "CSS 3",
  html: "HTML 5",
  javascript: "JavaScript",
  tailwind: "Tailwind CSS",
  github: "Git Hub",
  wordpress: "WordPress",
  redux: "Redux",
};

const Skills = () => (
  <div style={{ height: "100vh" }}>
    <div className="page-heading">
      <p>Explore My</p>
      <h1>Skills</h1>
    </div>
    <div className="technologies-cards">
      {/* Frontend Technologies */}
      <div className="skills-container">
        <h3>Frontend Technologies</h3>
        <div className="skills-card">
          {/* {React card - 1} */}
          <div className="skill-card">
            <img src={images.react} alt={names.react} />
            <p>{names.react}</p>
          </div>
          {/* {JavaScript card - 2} */}
          <div className="skill-card">
            <img src={images.javascript} alt={names.javascript} />
            <p>{names.javascript}</p>
          </div>
          {/* {CSS card - 3} */}
          <div className="skill-card">
            <img src={images.css} alt={names.css} />
            <p>{names.css}</p>
          </div>
          {/* {HTML card - 4} */}
          <div className="skill-card">
            <img src={images.html} alt={names.html} />
            <p>{names.html}</p>
          </div>
          {/* {Bootstrap card - 5} */}
          <div className="skill-card">
            <img src={images.bootstrap} alt={names.bootstrap} />
            <p>{names.bootstrap}</p>
          </div>
          {/* {github card - 5} */}
          <div className="skill-card">
            <img src={images.github} alt={names.github} />
            <p>{names.github}</p>
          </div>
        </div>
      </div>
      {/* Basic knowladge Technologies */}
      <div className="skills-container">
        <h3>Frontend Basic Knowledge Technologies</h3>
        <div className="skills-card">
          {/* {Tailwind card - 1} */}
          <div className="skill-card">
            <img src={images.tailwind} alt={names.tailwind} />
            <p>{names.tailwind}</p>
          </div>
          {/* {Wordpress card - 2} */}
          <div className="skill-card">
            <img src={images.wordpress} alt={names.wordpress} />
            <p>{names.wordpress}</p>
          </div>
          {/* {Redux card - 3} */}
          <div className="skill-card">
            <img src={images.redux} alt={names.redux} />
            <p>{names.redux}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Skills;
