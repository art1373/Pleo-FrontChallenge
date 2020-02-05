import React, { useState, useContext } from "react";
import { ExpenseContext } from "../context/ExpensesContext";

import ExpensesMap from "../components/ExpensesMap";
import { BoxLoading } from "react-loadingg";
import "../styles/styles.scss";
import search from "../../assets/Icons/search.svg";

const UserExpenses = props => {
  const [filter, setFilter] = useState("");
  const expensesContext = useContext(ExpenseContext);

  return (
    <React.Fragment>
      <div>
        <input id="fltr" onChange={e => setFilter(e.target.value)} />
        <img className="searchIcon" src={search} alt={"search"}/>
      </div>
      {expensesContext.expenses.length !== 0 ? (
        expensesContext.expenses.map(exp => {
          if (
            exp.user.first.toUpperCase().startsWith(filter.toUpperCase()) ||
            exp.user.last.toUpperCase().startsWith(filter.toUpperCase()) ||
            exp.amount.currency.toUpperCase() === filter.toUpperCase() ||
            exp.merchant.toUpperCase().includes(filter.toUpperCase())
          ) {
            return (
              <div key={exp.id} className="Exp-container">
                <ExpensesMap expenseInfo={exp} />
              </div>
            );
          }
        })
      ) : (
        <BoxLoading color="#f36" />
      )}
    </React.Fragment>
  );
};

export default UserExpenses;
