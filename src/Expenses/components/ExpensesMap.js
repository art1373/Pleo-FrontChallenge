import React from "react";
import ExpenseCard from "./ExpenseCard";

const ExpensesMap = props => {
  const { expenseInfo } = props;

  return (
    <ExpenseCard
      firstName={expenseInfo.user.first}
      lastName={expenseInfo.user.last}
      email={expenseInfo.user.email}
    />
  );
};

export default ExpensesMap;
