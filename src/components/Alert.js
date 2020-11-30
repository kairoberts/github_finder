import React, { useContext } from "react";
import { FiAlertCircle } from "react-icons/fi";
import AlertContext from "../context/alert/alertContext";

const Alert = () => {
  const alertContext = useContext(AlertContext);
  const { alert } = alertContext;

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
