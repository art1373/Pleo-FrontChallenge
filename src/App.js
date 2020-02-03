import React from "react";
import "./App.scss";

import CardModal from "./Expenses/components/Modal";
import Header from "./Header/containers/Header";

import { ExpenseProivder } from "./Expenses/context/ExpensesContext";
import { ModalProvider } from "./Expenses/context/ModalContext";
import UserExpenses from "./Expenses/containers/userExpenses";
import SideBar from "./SideBar/containers/SideBar";

function App() {
  return (
    <div className="App">
      <ExpenseProivder>
        <ModalProvider>
          <Header />
          <SideBar />
          <UserExpenses />
          <CardModal />
        </ModalProvider>
      </ExpenseProivder>
    </div>
  );
}

export default App;
