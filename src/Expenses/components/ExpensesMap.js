import React from "react";
import ExpenseCard from "./ExpenseCard";
import CardModal from "./Modal";
import { ModalContext } from "../context/ModalContext";

const ExpensesMap = props => {
  const { expenseInfo } = props;
  const ModalShow = React.useContext(ModalContext);
  return (
    <React.Fragment>
      <ExpenseCard
        user={`${expenseInfo.user.first} ${expenseInfo.user.last}`}
        date={expenseInfo.date}
        merchant={expenseInfo.merchant}
        amount={expenseInfo.amount.value}
        currency={expenseInfo.amount.currency}
        photo={expenseInfo.user.image}
      />
      <CardModal
        visible={ModalShow.showModal}
        info={expenseInfo}
        first={expenseInfo.user.first}
        last={expenseInfo.user.last}
        closeModal={() => {
          ModalShow.setShowModal(false);
        }}
      />
    </React.Fragment>
  );
};

export default ExpensesMap;
