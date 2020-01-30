import React, { useContext } from "react";
import { ExpenseContext } from "../context/ExpensesContext";

import ExpensesMap from "../components/ExpensesMap";
import { BoxLoading } from "react-loadingg";
import "../styles/styles.scss";

const UserExpenses = props => {
  const expensesContext = useContext(ExpenseContext);
  return (
    <React.Fragment>
      {expensesContext.expenses.length !== 0 ? (
        expensesContext.expenses.map(exp => {
          return (
            <div key={exp.id} className="Exp-container">
              <ExpensesMap expenseInfo={exp} />
            </div>
          );
        })
      ) : (
        <BoxLoading color="#f36" />
      )}
    </React.Fragment>
  );
};

export default UserExpenses;
