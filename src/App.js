import React, { createContext, useState } from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import Expenses from "./Components/Expenses";

const UserContext = createContext();
function App() {
  // =======================================================================
  const [name, setname] = useState("");
  const [amount, setamount] = useState("");
  const [date, setdate] = useState("");
  // =======================================================================

  const [expenses, setexpenses] = useState([
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ]);

  return (
    <UserContext.Provider value={{name:[name, setname],amount:[amount, setamount],date:[date, setdate]}}>
      <Expenses data={expenses} />
    </UserContext.Provider>
  );
}

export default App;
