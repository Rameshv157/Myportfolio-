import { Link } from "react-router-dom";
import { useState } from "react";
import "./index.css";

// React Mobile Menu Icons
import { TbMenuDeep } from "react-icons/tb";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const [isTrue, setIsTrue] = useState(false);

  const toggleMenu = () => {
    setIsTrue(!isTrue);
  };

  // const navLink = isTrue ? "list-items" : "list-itemss";

  return (
    <>
      <nav className="bg-navbar">
        <Link to="/" className="link">
          <p className="name">Ramesh Vemula</p>
        </Link>
        {/* Mobile Menu */}
        <div className="mobile-menu">
          <button type="button" onClick={toggleMenu}>
            {isTrue ? (
              <IoClose style={{ fontSize: "30px" }} />
            ) : (
              <TbMenuDeep style={{ fontSize: "30px" }} />
            )}
          </button>
          {isTrue ? (
            <div className="mobile-menu-tabs-container">
              <ul>
                <Link to="/" className="link">
                  <li>Home</li>
                </Link>
                <Link to="/about" className="link">
                  <li>About</li>
                </Link>
                <Link to="/skills" className="link">
                  <li>Skills</li>
                </Link>
                <Link to="/projects" className="link">
                  <li>Projects</li>
                </Link>
                <Link to="/contact-me" className="link">
                  <li>Contact Me</li>
                </Link>
              </ul>
            </div>
          ) : (
            ""
          )}
        </div>
        {/* Large Diplay Menu */}
        <div className="large-display-menu">
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
            <Link to="/contact-me">
              <button className="list-item">Contact Me</button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Header;
