import React from "react";
import ReactDom from "react-dom";
import "../styles/styles.scss";

const Modal = props => {
  const content = (
    <React.Fragment>
      <div className="modal">
        <h1>{props.first}</h1>
        <h1>{props.last}</h1>
      </div>
    </React.Fragment>
  );
  return ReactDom.createPortal(content, document.getElementById("modal-hook"));
};

const CardModal = props => {
  return (
    <React.Fragment>
      {props.visible === true && (
        <div onClick={props.closeModal}>
          <Modal {...props} />
        </div>
      )}
    </React.Fragment>
  );
};

export default CardModal;
