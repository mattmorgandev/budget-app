import React, { useContext, useState } from "react";
import { AppContext } from "../Context/AppContext";

const ExpenseTotal = () => {
    const { expenses, currency, dispatch } = useContext(AppContext);

    // We create this function so we can call upon it below with {totalExpenses}
    // We brought in { expenses } from AppContext so we could use the reduce function
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const [selectedCurrency, setSelectedCurrency] = useState(currency);

    const handleCurrencyChange = (newCurrency) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: newCurrency,
        });

        setSelectedCurrency(newCurrency);
    };

    return (
        <div className="alert alert-primary p-4 d-flex align-items-center justify-content-between">
            <span>Spent so far: {selectedCurrency === '$' ? '$' : selectedCurrency === '£' ? '£' : selectedCurrency === '€' ? '€' : '₹'}{totalExpenses}</span>

            <select
                id="currencySelect"
                onChange={(e) => handleCurrencyChange(e.target.value)}
                value={selectedCurrency}
                style={{ backgroundColor: '#badbcc' }}>
                        <option value="$">Dollar ($)</option>
                        <option value="£">Pound (£)</option>
                        <option value="€">Euro (€)</option>
                        <option value="₹">Ruppee (₹)</option>
            </select>
        </div>
    );
};

export default ExpenseTotal;