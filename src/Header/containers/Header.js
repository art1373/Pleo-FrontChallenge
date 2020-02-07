import React, { useContext } from "react";
import "../styles/styles.scss";
import { ExpenseContext } from "../../Expenses/context/ExpensesContext";

import { MdRefresh } from "react-icons/md";
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
        <div style={{ marginTop: "10px" }}>
          <MdRefresh
            size={20}
            style={{ cursor: "pointer" }}
            onClick={() => window.location.reload()}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
