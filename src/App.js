import React, { Component } from "react";
import "./style.css";
import axios from "axios";
import Nav from "./components/Nav";
import Users from "./components/Users";
import Search from "./components/Search";

class App extends Component {
  state = {
    users: [],
    loading: false,
  };

  // Search any user from github
  searchUsers = async (text) => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_SECRET_ID}`
    );
    this.setState({ users: res.data.items, loading: false });
  };

  // Clears the ui from any users
  clearUsers = () => this.setState({ users: [], loading: false });

  render() {
    const { users, loading } = this.state;
    return (
      <div className="App">
        <div>
          <Nav />
          <div className="container">
            <Search
              searchUsers={this.searchUsers}
              clearUsers={this.clearUsers}
              clearButton={users.length > 0 ? true : false}
            />
            <Users loading={loading} users={users} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
