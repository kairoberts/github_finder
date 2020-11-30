import React, { useContext, useState } from "react";
import GithubContext from "../context/github/githubContext";
import AlertContext from "../context/alert/alertContext";

const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);

  const [text, setText] = useState(" ");
  const onChange = (e) => setText(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === " ") {
      alertContext.setAlert("Please Enter Something!");
    } else {
      githubContext.searchUsers(text);
      setText(" ");
    }
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          className="search-bar"
          type="text"
          name="text"
          placeholder="Search Users..."
          value={text}
          onChange={onChange}
        />
        <input type="submit" value="Search" className="input-search" />
      </form>
      {githubContext.users.length > 0 && (
        <button onClick={githubContext.clearUsers}>Clear</button>
      )}
    </>
  );
};

export default Search;
