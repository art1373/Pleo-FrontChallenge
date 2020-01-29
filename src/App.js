import React from "react";
import "./App.css";

import { ExpenseProivder } from "./Expenses/context/ExpensesContext";
import { ModalProvider } from "./Expenses/context/ModalContext";
import UserExpenses from "./Expenses/containers/userExpenses";

function App() {
  return (
    <div className="App">
      <ModalProvider>
        <ExpenseProivder>
          <UserExpenses />
        </ExpenseProivder>
      </ModalProvider>
    </div>
  );
}

export default App;
