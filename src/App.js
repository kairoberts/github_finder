import React, { useState } from "react";
import "./style.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import axios from "axios";
import Nav from "./components/Nav";
import Users from "./components/Users";
import User from "./components/User";
import Search from "./components/Search";
import Alert from "./components/Alert";
import About from "./components/About";

const App = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);

  // Search any user from github
  const searchUsers = async (text) => {
    setLoading(true);
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_SECRET_ID}`
    );
    setUsers(res.data.items);
    setLoading(false);
  };

  // Get single user
  const getUser = async (username) => {
    setLoading(true);
    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_SECRET_ID}`
    );
    setUser(res.data);
    setLoading(false);
  };

  // Get Users Repos
  const getUserRepos = async (username) => {
    setLoading(true);
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc& client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_SECRET_ID}`
    );
    setRepos(res.data);
    setLoading(false);
  };

  // Clears the ui from any users
  const clearUsers = () => {
    setUsers([]);
    setLoading(false);
  };

  // Setting Alerts
  const showAlert = (message) => {
    setAlert({ message });
    setTimeout(() => setAlert(null), 4000);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <div>
          <Nav />
          <div className="container">
            <Alert alert={alert} />
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => (
                  <>
                    <Search
                      searchUsers={searchUsers}
                      clearUsers={clearUsers}
                      clearButton={users.length > 0 ? true : false}
                      setAlert={showAlert}
                    />
                    <Users loading={loading} users={users} />
                  </>
                )}
              />
              <Route exact path="/about" component={About} />
              <Route
                exact
                path="/user/:login"
                render={(props) => (
                  <User
                    {...props}
                    getUser={getUser}
                    getUserRepos={getUserRepos}
                    user={user}
                    repos={repos}
                    loading={loading}
                  />
                )}
              />
            </Switch>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
