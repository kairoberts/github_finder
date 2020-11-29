import React from "react";
import PropTypes from "prop-types";
import { FaGithub } from "react-icons/fa";

const Nav = ({ icon, title }) => {
  return (
    <header>
      <h1>
        {icon}
        {title}
      </h1>
    </header>
  );
};

Nav.defaultProps = {
  title: "Github Finder",
  icon: <FaGithub size={40} className="icon" />,
};

Nav.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
};

export default Nav;
