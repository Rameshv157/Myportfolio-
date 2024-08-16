// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
// import { useState } from "react";
import "./index.css";

const Header = () => {
  // const [isTrue, setIsTrue] = useState(true);

  // const onCliked = () => {
  //   setIsTrue(!true);
  // };

  // const navLink = isTrue ? "list-items" : "list-itemss";

  return (
    <div>
      <nav className="bg-navbar">
        <p className="name">
          <Link to="/" className="link">
            Ramesh Vemula
          </Link>
        </p>
        <div>
          <Link to="/">
            <button className="list-item ">Home</button>
          </Link>

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
};
export default Header;
