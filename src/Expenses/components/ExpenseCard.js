import React, { useState } from "react";
import "../styles/styles.scss";
import dateLogo from "../../assets/Icons/history.svg";
import merchant from "../../assets/Icons/credit-card.svg";
import moment from "moment";
import Button from "./Button";
import { ModalContext } from "../context/ModalContext";

const ExpenseCard = props => {
  const ModalShow = React.useContext(ModalContext);
  const [reciept, setReciept] = useState([]);

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
        <div>
          {reciept.length === 0 ? (
            <p>No Reciepts Uploaded!</p>
          ) : (
            <img src={reciept} alt={reciept} />
          )}
        </div>
      </div>
      <div className="btnContainer">
        <Button title="Add Comment" onClick={() => {}} />
        <div>
          <label>
            <Button title="Upload Reciept" />
            <input
              accept="image/*"
              type="file"
              style={{ display: "none" }}
              onChange={async e =>
                await setReciept(URL.createObjectURL(e.target.files[0]))
              }
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default ExpenseCard;
