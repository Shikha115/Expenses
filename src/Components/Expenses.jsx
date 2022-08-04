import React from "react";
import ExpenseItem from "./ExpenseItem";

function Expenses({ data }) {
  return (
    <main>
      <section className="expense-sec">
        <div className="container">
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
