import React, { useEffect, useState } from "react";

function ExpensesFilter({ handleFilter, expenses }) {
  const [arrayType, setarrayType] = useState([]);
  let temp = [];
  const AddArrayItems = () => {
    for (let i = 0; i < expenses.length; i++) {
      if (temp.includes(expenses[i].date)===false) {
        temp.push(expenses[i].date.getFullYear());
      }
    }
    console.log("expense filter", temp, "new array");
  };
  useEffect(() => {
    AddArrayItems();
  }, []);

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label className="m-0">Filter by year</label>
        <select onChange={(e) => handleFilter(e.target.value)}>
         <option selected hidden disabled>Filter</option>
          {expenses.map((item,i) => {
            return <option key={`filter_${i}`} value={item.date.getFullYear()}>{item.date.getFullYear()}</option>;
          })}
        </select>
      </div>
    </div>
  );
}

export default ExpensesFilter;
