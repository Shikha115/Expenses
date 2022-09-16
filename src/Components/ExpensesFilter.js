import React from "react";

function ExpensesFilter({handleFilter}) {

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label className="m-0">Filter by year</label>
        <select onChange={(e) => handleFilter(e.target.value)}>
          <option selected disabled hidden>Filter</option>
          <option value="2019">2025</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
        </select>
      </div>
    </div>
  );
}

export default ExpensesFilter;
