import React from "react";
import { elastic as Menu } from "react-burger-menu";

export default props => {
  return (
    // Pass on our props
    <Menu {...props}>
      <a className="menu-item" href="/">
        Home
      </a>

      <a className="menu-item" href="/expenses">
        Expenses
      </a>

      <a className="menu-item" href="/Cards">
        Virtual Cards
      </a>

      <a className="menu-item" href="/About">
        About Pleo
      </a>
    </Menu>
  );
};
