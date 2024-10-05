import "./index.css";
import ProjectComponent from "../ProjectComponent";

const projects = [
  {
    id: 1,
    projectName: "Todos Application",
    projectTitile:
      "Todos List was built using HTML, CSS, Flex-box. Todos List is a Responsive Todos App.",
    projectsourcelink: "https://todoramesh.ccbp.tech/",
    projectImage: "todolist.png",
  },
  {
    id: 2,
    projectName: "Food Much",
    projectTitile:
      "Food Much was built using HTML, CSS, Flex-box. Food Much is a Responsive Food Delivery App.",
    projectsourcelink: "https://foodmuchr.ccbp.tech/",
    projectImage:
      "https://res.cloudinary.com/dffu1ungl/image/upload/v1709380071/38833_1_apfnyy.jpg",
  },
  {
    id: 3,
    projectName: "Wiki Search",
    projectTitile:
      "Food Much was built using HTML, CSS, Flex-box. Food Much is a Responsive Food Delivery App.",
    projectsourcelink: "https://wikisearchrv.ccbp.tech/",
    projectImage:
      "https://rahlegal.in/wp-content/uploads/2015/10/Wikipedia-Profile.jpg",
  },
];

const Projects = () => (
  <div className="project-page-container">
    <h1 className="text-center project-page-title">Latest Projects</h1>
    <div className="projects-list-container">
      <ul>
        {projects.map((project) => (
          <ProjectComponent key={project.id} projects={project} />
        ))}
      </ul>
    </div>
  </div>
);

export default Projects;
