import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../App";

function ExpenseForm({setshowForm}) {
  const [name, setname] = useState("");
  const [amount, setamount] = useState("");
  const [date, setdate] = useState("");
  const [expenses, setexpenses] = useContext(UserContext);


  useEffect(() => {
  console.log(expenses);
}, [expenses])


  const handleSubmit = () => {
    if (!(name === "" || amount === "" || date === "")) {
        console.log(`form sumitted, name = ${name}, amount = ${amount}, date = ${new Date(date)}`);
        setname('');
        setamount('');
        setdate('');
    }
    else{
        console.log('fill all values');
    }
  };
  return (
    <form
      action="#"
      onSubmit={handleSubmit}
      className="new-expense new-expense__control mx-auto row form"
    >
      <div className="col-12 col-md-6">
        <label>Title</label>
        <input
          type="text"
          className="form-control"
          onChange={(e) => {
            setname(e.target.value);
          }}
          value={name || ""}
        />
      </div>
      <div className="col-12 col-md-6">
        <label>Amount</label>
        <input
          type="number"
          className="form-control"
          onChange={(e) => {
            setamount(e.target.value);
          }}
          value={amount || ""}
        />
      </div>
      <div className="col-12 col-md-6">
        <label>Date</label>
        <input
          type="date"
          className="form-control"
          onChange={(e) => {
            setdate(e.target.value);
          }}
          value={date || ""}
        />
      </div>
      <div className="col-12 new-expense__actions">
        <button className="alternative" onClick={()=>setshowForm(false)}>Cancle</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
