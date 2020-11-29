import React, { Component } from "react";
import PropTypes from "prop-types";
import Spinner from "./Spinner";
import { Link } from "react-router-dom";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import { TiTick } from "react-icons/ti";
import { ImCross } from "react-icons/im";

class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
  }

  static propTypes = {
    loading: PropTypes.bool,
    user: PropTypes.object.isRequired,
    GetUser: PropTypes.func,
  };
  render() {
    const {
      name,
      avatar_url,
      location,
      bio,
      company,
      blog,
      login,
      html_url,
      followers,
      following,
      public_repos,
      public_gists,
      hireable,
    } = this.props.user;

    const { loading } = this.props;

    if (loading) return <Spinner />;

    return (
      <>
        <Link to="/">
          <IoChevronBackCircleOutline size={50} style={{ color: "black" }} />
        </Link>

        <div className="card">
          <div className="card-container">
            <img src={avatar_url} alt={login} />
            <h2>{name}</h2>
            <p>Location: {location}</p>
          </div>
          <div className="info-container">
            <h3>Bio:</h3>
            <p>{bio}</p>
            <a
              href={html_url}
              alt="URL"
              className="more"
              ref="noreferrer nofollow"
            >
              Visit GitHub Profile
            </a>
            <div className="info">
              <ul>
                <li>
                  <strong>Username: </strong> {login}
                </li>
                <li>
                  <strong>Company: </strong> {company}
                </li>
                <li>
                  <strong>Website: </strong> {blog}
                </li>
                <li>
                  Hireable:
                  {hireable ? (
                    <TiTick size={30} style={{ color: "green" }} />
                  ) : (
                    <ImCross size={20} style={{ color: "red" }} />
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="cards">
          <div>Followers: {followers}</div>
          <div>Following: {following}</div>
          <div>Public Repos: {public_repos}</div>
          <div>Public Gists: {public_gists}</div>
        </div>
      </>
    );
  }
}

export default User;
