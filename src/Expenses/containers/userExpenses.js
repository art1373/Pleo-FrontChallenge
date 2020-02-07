import React, { useState, useContext } from "react";
import { ExpenseContext } from "../context/ExpensesContext";
import { useSpring, animated } from "react-spring";
import ExpensesMap from "../components/ExpensesMap";
import { BoxLoading } from "react-loadingg";
import "../styles/styles.scss";
import search from "../../assets/Icons/search.svg";

const UserExpenses = props => {
  const [filter, setFilter] = useState("");
  const [select, setSelect] = useState("");
  const expensesContext = useContext(ExpenseContext);
  const spring = useSpring({
    from: { padding: 150 },
    to: { padding: 2, transition: "all 1s" }
  });
  const colorful = useSpring({
    from: { background: "#f36" },
    to: {
      transition: "all 1s",
      background: "#eee",
      width: "50%",
      borderRadius: 15,
      outline: "none",
      border: "none",
      height: "2rem",
      textAlign: "center",
      fontFamily: "TwCent",
      fontSize: "1rem",
      color: "#f36",
      margin: "auto"
    }
  });

  return (
    <animated.div style={spring}>
      <animated.div style={colorful}>
        <input id="fltr" onChange={e => setFilter(e.target.value)} />
        <img className="searchIcon" src={search} alt={"search"} />
      </animated.div>
      <select id="Currency" onChange={e => setSelect(e.target.value)}>
        <option value="all">All Currencies</option>
        <option value="GBP">GBP</option>
        <option value="EUR">EUR</option>
        <option value="DKK">DKK</option>
      </select>
      {expensesContext.expenses.length !== 0 ? (
        expensesContext.expenses.map(exp => {
          if (
            (select !== "all" &&
              exp.amount.currency.includes(select) &&
              (exp.user.first.toUpperCase().startsWith(filter.toUpperCase()) ||
                exp.user.last.toUpperCase().startsWith(filter.toUpperCase()) ||
                exp.merchant.toUpperCase().includes(filter.toUpperCase()))) ||
            (select === "all" &&
              (exp.user.first.toUpperCase().startsWith(filter.toUpperCase()) ||
                exp.user.last.toUpperCase().startsWith(filter.toUpperCase()) ||
                exp.merchant.toUpperCase().includes(filter.toUpperCase())))
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
    </animated.div>
  );
};

export default UserExpenses;
