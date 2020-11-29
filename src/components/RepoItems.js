import React from "react";
import PropTypes from "prop-types";

const RepoItems = ({ repo }) => {
  return (
    <div className="repo-cards">
      <a href={repo.html_url} className="more">
        {repo.name}
      </a>
    </div>
  );
};

RepoItems.propTypes = {
  repo: PropTypes.object.isRequired,
};

export default RepoItems;
