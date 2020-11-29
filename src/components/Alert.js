import React from "react";
import { FiAlertCircle } from "react-icons/fi";

const Alert = ({ alert }) => {
  return (
    alert !== null && (
      <div className="alert">
        <FiAlertCircle className="alert-icon" size={30} />
        <p>{alert.message}</p>
        <FiAlertCircle className="alert-icon" size={30} />
      </div>
    )
  );
};

export default Alert;
