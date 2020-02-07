import React, { useState } from "react";
import "../styles/styles.scss";
import Swal from "sweetalert2";
import dateLogo from "../../assets/Icons/history.svg";
import merchant from "../../assets/Icons/credit-card.svg";
import moment from "moment";
import Button from "./Button";
import { useModalDisptach } from "../context/ModalContext";
import Axios from "axios";
import Routes from "../../api/Routes";

const ExpenseCard = props => {
  const [reciept, setReciept] = useState([]);
  const [previewImg, setPreviewImage] = useState("");
  const dispatch = useModalDisptach();

  const handleRecieptChange = e => {
    let id = props.id;
    e.preventDefault();
    let reciept = e.target.files[0];
    setReciept(reciept);
    let reader = new FileReader();
    if (reciept) {
      reader.readAsDataURL(reciept);
    }
    let formData = new FormData();
    formData.append("receipt", reciept);
    Axios.post(`${Routes.AddReciept}${id}`, formData)
      .then(res => {
        console.log(res);
        Swal.fire({
          title: "Receipt Uploaded Succesfully",
          html: `<img class="recieptImg" src='` + reader.result + `' />`
        }).then(result => {
          if (result.value) {
            setPreviewImage(reader.result);
          }
        });
      })
      .catch(err => {
        console.log(err.response);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!"
        });
      });
  };
  // ------------------------------------
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
          <img
            className="reciept"
            src={
              props.reciept[0] === undefined
                ? null
                : `http://localhost:3000${props.reciept[0].url}`
            }
            alt={reciept}
          />
        </div>
        <div>
          {previewImg !== "" ? (
            <img className="reciept" src={previewImg} alt={"preview"} />
          ) : null}
        </div>
      </div>

      <div className="avatar-comment">
        {props.comment !== "" ? `Comments: ${props.comment}` : "No Comments!"}
      </div>

      <div className="btnContainer">
        <Button
          title="Add Comment"
          onClick={() => {
            dispatch({ type: "ShowModal", payload: props.id });
          }}
        />
        <div>
          <label>
            <Button title="Upload Reciept" />
            <input
              accept="image/*"
              type="file"
              style={{ display: "none" }}
              onChange={e => handleRecieptChange(e)}
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default ExpenseCard;
