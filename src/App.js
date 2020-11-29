import React, { Component } from "react";
import "./style.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import axios from "axios";
import Nav from "./components/Nav";
import Users from "./components/Users";
import User from "./components/User";
import Search from "./components/Search";
import Alert from "./components/Alert";
import About from "./components/About";

class App extends Component {
  state = {
    users: [],
    user: {},
    loading: false,
    alert: null,
  };

  // Search any user from github
  searchUsers = async (text) => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_SECRET_ID}`
    );
    this.setState({ users: res.data.items, loading: false });
  };

  // Get single user
  getUser = async (username) => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_SECRET_ID}`
    );
    this.setState({ user: res.data, loading: false });
  };

  // Clears the ui from any users
  clearUsers = () => this.setState({ users: [], loading: false });

  // Setting Alerts
  setAlert = (message) => {
    this.setState({ alert: { message } });
    setTimeout(() => this.setState({ alert: null }), 4000);
  };

  render() {
    const { users, loading, user } = this.state;
    return (
      <BrowserRouter>
        <div className="App">
          <div>
            <Nav />
            <div className="container">
              <Alert alert={this.state.alert} />
              <Switch>
                <Route
                  exact
                  path="/"
                  render={(props) => (
                    <>
                      <Search
                        searchUsers={this.searchUsers}
                        clearUsers={this.clearUsers}
                        clearButton={users.length > 0 ? true : false}
                        setAlert={this.setAlert}
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
                      getUser={this.getUser}
                      user={user}
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
  }
}

export default App;
