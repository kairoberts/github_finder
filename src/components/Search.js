import React, { useState } from "react";
import PropTypes from "prop-types";

const Search = ({ searchUsers, clearUsers, clearButton, setAlert }) => {
  const [text, setText] = useState(" ");
  const onChange = (e) => setText(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === " ") {
      setAlert("Please Enter Something!");
    } else {
      searchUsers(text);
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
      {clearButton && <button onClick={clearUsers}>Clear</button>}
    </>
  );
};

Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  clearButton: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired,
};

export default Search;
