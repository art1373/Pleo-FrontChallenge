import React, { useState, useEffect } from "react";
import "./App.css";

import { ExpenseContext } from "./Expenses/context/ExpensesContext";
import UserExpenses from "./Expenses/containers/userExpenses";
import Axios from "axios";
import Routes from "./api/Routes";

function App() {
  const [expenses, setExpenses] = useState([]);
  useEffect(() => {
    Axios.get(`${Routes.GetExpenses}`)
      .then(res => {
        let json = res.data.expenses;
        setTimeout(() => {
          return setExpenses(json);
        }, 2000);
      })
      .catch(err => {
        console.log(err.response);
      });
  }, []);

  return (
    <div className="App">
      <ExpenseContext.Provider value={{ expenses }}>
        <UserExpenses />
      </ExpenseContext.Provider>
    </div>
  );
}

export default App;
