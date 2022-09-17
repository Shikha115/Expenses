import React, { useState } from "react";

function ExpensesFilter({ handleFilter, expenses }) {
  const [arrayType, setarrayType] = useState([])
//   const setArray=()=>{
//     let temp=[];
//     let store=temp.filter
//     for(let i=0;i<expenses.length;i++){
// expenses[i].push
//     }
//   }
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label className="m-0">Filter by year</label>
        <select onChange={(e) => xdleFilter(e.target.value)}>
          <option selected disabled hidden>
            Filter
          </option>
          {expenses.map((item) => {
            return(<option value="2019">{item.date.getFullYear()}</option>);
          })}
        </select>
      </div>
    </div>
  );
}

export default ExpensesFilter;
