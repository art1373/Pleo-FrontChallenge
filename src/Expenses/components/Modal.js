import React from "react";
import ReactDom from "react-dom";
import "../styles/styles.scss";

import Button from "./Button";
import { useModalState, useModalDisptach } from "../context/ModalContext";

const Modal = props => {
  const dispatch = useModalDisptach();
  const modalState = useModalState();
  const content = (
    <React.Fragment>
      <div className="modal">
        <p>{modalState.id}</p>
        <textarea></textarea>
        <Button
          title="Submit"
          onClick={() => dispatch({ type: "HideModal" })}
        />
      </div>
    </React.Fragment>
  );
  return ReactDom.createPortal(content, document.getElementById("modal-hook"));
};

const CardModal = props => {
  const modalState = useModalState();
  return (
    <React.Fragment>
      {modalState.modalVisible === true && (
        <div>
          <Modal {...props} />
        </div>
      )}
    </React.Fragment>
  );
};

export default CardModal;
