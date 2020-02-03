import React, { useState } from "react";
import ReactDom from "react-dom";
import "../styles/styles.scss";

import Button from "./Button";
import { useModalState, useModalDisptach } from "../context/ModalContext";
import Axios from "axios";
import Routes from "../../api/Routes";
import Swal from "sweetalert2";

const Modal = props => {
  const [comment, setComment] = useState("");
  const dispatch = useModalDisptach();
  const modalState = useModalState();
  // -------------------------------------
  const AddComment = () => {
    Axios.post(`${Routes.AddComment}/${modalState.id}`, { comment: comment })
      .then(res => {
        console.log(res);
        let status = res.status;
        if (status === 200) {
          Swal.fire("Your Comment added!", `${res.data.comment}`, "success");
          return dispatch({ type: "HideModal" });
        }
      })
      .catch(err => {
        console.log(err.response.data);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!"
        });
      });
  };
  // ---------------------------------------------------------
  const content = (
    <React.Fragment>
      <div className="modal">
        <textarea onChange={e => setComment(e.target.value)}></textarea>
        <div className="modalBtn">
          <Button title="Submit" onClick={AddComment} />
          <Button
            title="Close Modal"
            onClick={() => dispatch({ type: "HideModal" })}
          />
        </div>
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
