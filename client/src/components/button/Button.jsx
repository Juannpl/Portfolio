import React from "react";
import "./Button.css";

const Button = (props) => {
  return (
    <button className="btn" onClick={props.action}>
      {props.name}
    </button>
  );
};

export default Button;
