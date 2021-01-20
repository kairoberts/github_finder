import React from "react";
import spinner from "../images/spinner.gif";

const Spinner = () => {
  return (
    <>
      <img
        src={spinner}
        alt="Loading..."
        style={{
          width: "80px",
          margin: "auto",
          display: "block",
          marginBottom: "1rem",
          borderRadius: "50%",
        }}
      />
    </>
  );
};

export default Spinner;
