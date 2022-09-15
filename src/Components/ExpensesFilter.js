import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../App";

function ExpensesFilter() {
  const [SelectValue, setSelectValue] = useState("");

  useEffect(() => {
    console.log(SelectValue);
  }, [SelectValue]);

  const [expenses, setFilter] = useContext(UserContext);

  const handleFilter = (e) => {
    setSelectValue(e.target.value);
    let temp = [""];

    temp = expenses.filter((item) => {
      const year = item.date.getFullYear();
      console.log(year, "year", typeof year);
      if (parseInt(e.target.value) === year) {
        return item;
      }
    });
    setFilter([...temp]);
    console.log(
      temp,
      "temp",
      e.target.value,
      typeof e.target.value,
    );
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label className="m-0">Filter by year</label>
        <select onChange={(e) => handleFilter(e)} value={SelectValue || ""}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
}

export default ExpensesFilter;
