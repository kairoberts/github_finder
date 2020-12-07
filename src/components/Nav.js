import React from "react";
import PropTypes from "prop-types";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Nav = ({ icon, title }) => {
  return (
    <header>
      <h1>
        <Link to="/" className="logo">
          {icon}
          {title}
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/" className="nav-items">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="nav-items">
            About
          </Link>
        </li>
      </ul>
    </header>
  );
};

Nav.defaultProps = {
  title: "GitHub Finder",
  icon: <FaGithub size={40} className="icon" />,
};

Nav.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
};

export default Nav;
