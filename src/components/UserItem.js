import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  return (
    <div className="users">
      <img src={avatar_url} alt={login} />
      <h3>{login}</h3>
      <div className="user-btn-container">
        <Link to={`/user/${login}`} alt={login} className="more">
          Profile
        </Link>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
