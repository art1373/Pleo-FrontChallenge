import React, { useContext } from "react";
import "../styles/styles.scss";
import { ExpenseContext } from "../../Expenses/context/ExpensesContext";

const Header = props => {
  const ExpenseProvider = useContext(ExpenseContext);

  return (
    <div className="container">
      <div className="content">
        <p>Total Expenses: {ExpenseProvider.expenses.length}</p>
        <p>
          £
          {ExpenseProvider.expenses.reduce((total, exp) => {
            return exp.amount.currency === "GBP"
              ? Math.round(Number(total) + Number(exp.amount.value))
              : Math.round(Number(total));
          }, 0)}
        </p>
        <p>
          €
          {ExpenseProvider.expenses.reduce((total, exp) => {
            return exp.amount.currency === "EUR"
              ? Math.round(Number(total) + Number(exp.amount.value))
              : Math.round(Number(total));
          }, 0)}
        </p>
        <p>
          Kr.
          {ExpenseProvider.expenses.reduce((total, exp) => {
            return exp.amount.currency === "DKK"
              ? Math.round(Number(total) + Number(exp.amount.value))
              : Math.round(Number(total));
          }, 0)}
        </p>
      </div>
    </div>
  );
};

export default Header;
