import React, { useState, useEffect, createContext } from "react";
import Axios from "axios";
import Routes from "../../api/Routes";

export const ExpenseContext = createContext();

export const ExpenseProivder = props => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    Axios.get(`${Routes.GetExpenses}`)
      .then(res => {
        let json = res.data.expenses;
        setTimeout(() => {
          console.log(json);
          return setExpenses(json);
        }, 2000);
      })
      .catch(err => {
        console.log(err.response);
      });
  }, []);

  return (
    <ExpenseContext.Provider value={{ expenses, setExpenses }}>
      {props.children}
    </ExpenseContext.Provider>
  );
};
