import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareFromSquare } from "@fortawesome/free-solid-svg-icons";

import Header from "../Header";

const Projects = () => (
  <div>
    <Header />
    <div className="project-page">
      <h1 className="project-heading">My Projects</h1>
      <div className="project-container">
        <div className="card">
          <img src="todolist.png" alt="todolist" className="image" />
          <div className="card-body">
            <h1 className="card-heading">Todos</h1>
            <p className="para">
              Todos List was built using HTML, CSS, Flex-box. Todos List is a
              Responsive Todos App.
            </p>
            <a
              href="https://todoramesh.ccbp.tech/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faShareFromSquare}
                className="share-icon"
              />
            </a>
          </div>
        </div>
        <div className="card">
          <img
            src="https://res.cloudinary.com/dffu1ungl/image/upload/v1709380071/38833_1_apfnyy.jpg"
            alt="todolist"
            className="image"
          />
          <div className="card-body">
            <h1 className="card-heading">Food Much</h1>
            <p className="para">
              Food Much was built using HTML, CSS, Flex-box. Food Much is a
              Responsive Food Delivery App.
            </p>
            <a
              href="https://foodmuchr.ccbp.tech/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faShareFromSquare}
                className="share-icon"
              />
            </a>
          </div>
        </div>
        <div className="card">
          <img
            src="https://static.startuptalky.com/2021/07/wikipedia-StartupTalky.jpg"
            alt="wikipedia"
            className="image"
          />
          <div className="card-body">
            <h1 className="card-heading">Todos</h1>
            <p className="para">
              Food Much was built using HTML, CSS, Flex-box. Food Much is a
              Responsive Food Delivery App.
            </p>
            <a
              href="https://wikisearchrv.ccbp.tech/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faShareFromSquare}
                className="share-icon"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Projects;
