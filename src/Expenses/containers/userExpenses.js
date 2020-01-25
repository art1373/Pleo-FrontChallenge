import React, { useContext } from "react";
import { ExpenseContext } from "../context/ExpensesContext";
import ExpensesMap from "../components/ExpensesMap";

const UserExpenses = props => {
  const expensesContext = useContext(ExpenseContext);

  return (
    <React.Fragment>
      {expensesContext.expenses.map(exp => {
        return (
          <div key={exp.id}>
            <ExpensesMap expenseInfo={exp} />
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default UserExpenses;
