import React, { createContext, useEffect, useState } from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import Expenses from "./Components/Expenses";

export const UserContext = createContext();
function App() {
  const [expenses, setexpenses] = useState([
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2022, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2020, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2019, 5, 12),
    },
  ]);
  const [Filter, setFilter] = useState([]);

  useEffect(() => {
    setexpenses(expenses);
    setFilter(Filter);
    console.log('app.js',expenses,'expense',Filter,'filter');
  }, [expenses,Filter]);

  return (
    <UserContext.Provider value={[expenses, setexpenses, setFilter]}>
      <Expenses data={Filter.length>0?Filter:expenses} />
    </UserContext.Provider>
  );
}

export default App;
