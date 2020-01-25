import React from "react";

const ExpenseCard = props => {
  return (
    <div>
      <ul key={props.id}>
        <li>{props.firstName}</li>
        <li>{props.lastName}</li>
        <li>{props.email}</li>
      </ul>
    </div>
  );
};

export default ExpenseCard;
