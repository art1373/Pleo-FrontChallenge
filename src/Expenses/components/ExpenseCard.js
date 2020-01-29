import React from "react";
import "../styles/styles.scss";
import dateLogo from "../../assets/Icons/history.svg";
import merchant from "../../assets/Icons/credit-card.svg";
import moment from "moment";
import Button from "./Button";
import { ModalContext } from "../context/ModalContext";


const ExpenseCard = props => {
  const ModalShow = React.useContext(ModalContext);

  return (
    <div className="card-container">
      <div className="card-heading">
        <div className="merchant">
          <img
            style={{ paddingRight: "1rem", paddingLeft: "5px" }}
            src={merchant}
            alt="dateIco"
          />
          Payment to : {props.merchant}
        </div>
        <div className="dateTime">
          <img
            style={{ paddingRight: "1rem", paddingLeft: "5px" }}
            src={dateLogo}
            alt="dateIco"
          />
          {moment(props.date).format("LLLL")}
        </div>
      </div>
      <div className="card-body">
        <img className="avatar" src={props.photo} alt="user-avatar" />
        <div className="user-amount">
          {props.user}
          <br />
          {props.amount}&nbsp;
          {props.currency}
        </div>
      </div>
      <div className="btnContainer">
        <Button
          title="Add Comment"
          onClick={() => {
            ModalShow.setShowModal(true)
          }}
        />
        <Button
          title="Upload Reciept"
          onClick={() => {
            alert("click");
          }}
        />
      </div>
    </div>
  );
};

export default ExpenseCard;
