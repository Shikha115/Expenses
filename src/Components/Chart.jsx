import React from "react";
import ChartBar from "./ChartBar";

function Chart({ chartData }) {
  return (
    <div className="chart">
      {chartData.map((item,i) => (
        <ChartBar key={i} value={item.value} maxValue={null} label={item.label} />
      ))}
    </div>
  );
}

export default Chart;
