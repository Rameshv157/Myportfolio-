import "./index.css";

import { FaShareSquare } from "react-icons/fa";

const ProjectComponent = (props) => {
  const { projects } = props;
  const { projectName, projectTitile, projectsourcelink, projectImage } =
    projects;
  return (
    <div className="project-container">
      <img src={projectImage} alt={projectName} />
      <div className="project-details-container">
        <a href={projectsourcelink} target="_blank" rel="noreferrer">
          <FaShareSquare className="project-link" />
        </a>
        <h2>{projectName}</h2>
        <p>{projectTitile}</p>
      </div>
    </div>
  );
};

export default ProjectComponent;
