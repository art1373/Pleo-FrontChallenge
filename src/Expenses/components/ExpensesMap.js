import React from "react";
import ExpenseCard from "./ExpenseCard";

const ExpensesMap = props => {
  const { expenseInfo } = props;
  return (
    <React.Fragment>
      <ExpenseCard
        user={`${expenseInfo.user.first} ${expenseInfo.user.last}`}
        date={expenseInfo.date}
        merchant={expenseInfo.merchant}
        amount={expenseInfo.amount.value}
        currency={expenseInfo.amount.currency}
        photo={expenseInfo.user.image}
        reciept={expenseInfo.receipts}
      />
    </React.Fragment>
  );
};

export default ExpensesMap;
