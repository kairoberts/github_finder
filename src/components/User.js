import React, { useEffect, useContext } from "react";
import Spinner from "./Spinner";
import Repos from "../components/Repos";
import { Link } from "react-router-dom";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import { TiTick } from "react-icons/ti";
import { ImCross } from "react-icons/im";
import GithubContext from "../context/github/githubContext";

const User = ({ match }) => {
  const githubContext = useContext(GithubContext);
  const { getUser, loading, user, repos, getUserRepos } = githubContext;

  // Get the users login and matches it to the api login information
  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    //eslint-disable-next-line
  }, []);

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
  } = user;

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
          <p>
            <strong>Location:</strong> {location}
          </p>
          <p>
            <strong>Username: </strong> {login}
          </p>
          <p>
            <strong>Company: </strong> {company}
          </p>
          <p>
            <strong>Website: </strong> {blog}
          </p>
          <p>
            <strong>Hireable:</strong>
            {hireable ? (
              <TiTick size={30} style={{ color: "green" }} />
            ) : (
              <ImCross size={20} style={{ color: "red" }} />
            )}
          </p>
          <div className="btn-container">
            <a href={html_url} alt="URL" className="visit-btn">
              Visit GitHub Profile
            </a>
          </div>
        </div>
        <div className="info-container">
          <h2>Bio:</h2>
          <p>{bio}</p>
        </div>
        <div className="repo-container">
          <h3>Recent Repos:</h3>
          <Repos repos={repos} />
        </div>
      </div>

      <div className="cards">
        <div className="repos">Followers: {followers}</div>
        <div className="repos">Following: {following}</div>
        <div className="repos">Public Repos: {public_repos}</div>
        <div className="repos">Public Gists: {public_gists}</div>
      </div>
    </>
  );
};

export default User;
