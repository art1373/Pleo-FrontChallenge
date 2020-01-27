import React from "react";
import "../styles/styles.scss";

const Button = props => {
  return (
    <div>
      <span className="btn" onClick={props.onClick}>
        <div className="btntxt">{props.title}</div>
      </span>
    </div>
  );
};

export default Button;
