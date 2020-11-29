import React from "react";
import PropTypes from "prop-types";

const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  return (
    <div className="users">
      <img src={avatar_url} alt={login} />
      <h3>{login}</h3>
      <div className="container">
        <a href={html_url} alt={login}>
          More
        </a>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
