import React, { useState } from 'react';

function ChartBar({value,maxValue,label}) {
    const [barFill, setbarFill] = useState('0%')
    return ( 
       <div className="chart-bar">
        <div className="chart-bar__inner">
            <div className="chart-bar__fill"></div>
        </div>
            <div className="chart-bar__label">{label}</div>
       </div>
     );
}

export default ChartBar;