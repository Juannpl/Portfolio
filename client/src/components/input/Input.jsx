import React from "react";
import "./Input.css";

const Input = (props) => {
  return (
    <input
      type={props.wild}
      name={props.appellation}
      id={props.me}
      placeholder={props.place}
      className="inputField"
    />
  );
};

export default Input;
