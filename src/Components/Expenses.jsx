import React, { useEffect, useState } from "react";
import ExpenseForm from "./ExpenseForm";
import ExpenseItem from "./ExpenseItem";
import NewExpense from "./NewExpense";

function Expenses({ data }) {
  const [showForm, setshowForm] = useState(false);
  useEffect(() => {
    setshowForm(showForm);
    console.log(showForm);
  }, [showForm])
  
  return (
    <main>
      <section className="expense-sec">
        <div className="container">
          {showForm?<ExpenseForm setshowForm={setshowForm} />:<NewExpense setshowForm={setshowForm} />}
          {data.map((item, i) => {
            return (
              <ExpenseItem
                key={i}
                title={item.title}
                amount={item.amount}
                date={item.date}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
}

export default Expenses;
