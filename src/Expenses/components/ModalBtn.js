import React from "react";
import "../styles/styles.scss";

const Button = props => {
  return (
    <div>
      <span className="btn-modal" onClick={props.onClick}>
        <div className="btn-modal">{props.title}</div>
      </span>
    </div>
  );
};

export default Button;
