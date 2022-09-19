import React, { useEffect, useState } from "react";
import ExpenseForm from "./ExpenseForm";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import NewExpense from "./NewExpense";

function Expenses({ data }) {
  const [showForm, setshowForm] = useState(false);
  const [SelectValue, setSelectValue] = useState("");
  const [Filter, setFilter] = useState([]);
  const [Message, setMessage] = useState(false);

  useEffect(() => {
    setshowForm(showForm);
    setSelectValue(SelectValue);
    console.log(
      "expenses",
      "showForm",
      showForm,
      "select",
      SelectValue,
      "filter",
      Filter
    );
  }, [showForm, SelectValue]);

  const handleFilter = (value) => {
    setSelectValue(value);
    let temp = [""];
    temp = data.filter((item) => {
      const year = item.date.getFullYear();
      console.log(year, "year", typeof year);
      if (parseInt(value) === year) {
        return item;
      }
    });
    console.log("expenses", temp, "new filter array", value);
    setFilter([...temp]);
    if (Filter.length === 0) {
      setMessage(true);
    }
    else {
      setMessage(false);
    }
  };

  return (
    <main>
      <section className="expense-sec">
        <div className="container">
          {showForm ? (
            <ExpenseForm setshowForm={setshowForm} />
          ) : (
            <NewExpense setshowForm={setshowForm} />
          )}
          <ExpensesFilter handleFilter={handleFilter} expenses={data} />
          {Message && (
            <p className="text-white fw-bold">No expenses on {SelectValue} year</p>
          )}
          {Filter.length > 0
            ? Filter.map((item, i) => {
                return (
                  <ExpenseItem
                    key={i}
                    title={item.title}
                    amount={item.amount}
                    date={item.date}
                  />
                );
              })
            : data.map((item, i) => {
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
