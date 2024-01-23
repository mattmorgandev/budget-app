// Need to import React to use basics, and need to import useContext to be able to use this feature in this component
import React, { useContext } from "react";

// Need to get the budget and expenses out of context
import { AppContext } from "../Context/AppContext";

const Remaining = () => {
    // This brings the expenses and budget from context and assigns them their own variables in this component
    const { expenses, budget, currency } = useContext(AppContext);

    // Use reduce function to take total cost of expenses in expenses array and add together
    const totalExpenses = expenses.reduce((total, item)=>{
        return ( total = total + item.cost);
    }, 0);

    // This variable holds a conditional to decide whether to display success(still remaining balance) or danger(over budget)
    const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';

    return (
        <div className={`alert p-4 ${alertType}`}>
            <span>Remaining: {currency}{budget - totalExpenses}</span>
        </div>
    );
};

export default Remaining;