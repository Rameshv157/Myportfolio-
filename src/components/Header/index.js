// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
import "./index.css";

const Header = () => (
  <div>
    <nav className="bg-navbar">
      <p className="name">
        <Link to="/" className="link">Ramesh Vemula</Link>
      </p>
      <div>
        <Link to="/about">
          <button className="list-item">About</button>
        </Link>
        <Link to="/skills">
          <button className="list-item">Skills</button>
        </Link>
        <Link to="/projects">
          <button className="list-item">Projects</button>
        </Link>
        <Link to="/contact">
          <button className="list-item">Contact</button>
        </Link>
      </div>
    </nav>
  </div>
);

export default Header;
