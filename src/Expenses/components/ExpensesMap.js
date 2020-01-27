import React from "react";
import ExpenseCard from "./ExpenseCard";

const ExpensesMap = props => {
  const { expenseInfo } = props;

  return (
    <ExpenseCard
      user={`${expenseInfo.user.first}' '${expenseInfo.user.last}`}
      date={expenseInfo.date}
      merchant={expenseInfo.merchant}
      amount={expenseInfo.amount.value}
      currency={expenseInfo.amount.currency}
      photo={expenseInfo.user.image}
    />
  );
};

export default ExpensesMap;
