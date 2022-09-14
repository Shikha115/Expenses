import React from 'react';

function NewExpense({setshowForm}) {
    return ( 
        <div className="new-expense">
            <button onClick={()=>setshowForm(true)}>Add New Expenses</button>
        </div>
     );
}

export default NewExpense;