import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem({ title, amount, date }) {
  const [data, setdata] = useState(title)
  return (
    <div className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{data}</h2>
        <div className="d-flex align-items-center gap-3">
          <div className="expense-item__price">${amount}</div>
          <button className="expense-item__price" onClick={()=>setdata('New Title')}>Change Title</button>
        </div>
      </div>
    </div>
  );
}

export default ExpenseItem;
