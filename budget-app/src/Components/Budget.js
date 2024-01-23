import React, { useContext, useState } from "react";
import { AppContext } from "../Context/AppContext";
import EditBudget from "./EditBudget";
import ViewBudget from "./ViewBudget";


const Budget = () => {
    const { budget, expenses, dispatch } = useContext(AppContext);
    const [isEditing, setIsEditing] = useState(false);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = (value) => {
        const totalExpenses = expenses.reduce((total, item) => {
            return (total += item.cost);
        }, 0);

        if (value > 20000) {
            alert("The maximum budget is 20000");
        } else if (value < totalExpenses) {
            alert("The budget cannot be lower than current spending");
        } else {
            
        dispatch({
            type: 'SET_BUDGET',
            payload: value,
        });

        setIsEditing(value > 20000 ? true : false);

        }
    }

    return (
        <div className="alert alert-secondary p-3 d-flex align-items-center justify-content-between">
            {isEditing ? (
                <EditBudget handleSaveClick={handleSaveClick} budget={budget} />

            ) : (

                <ViewBudget handleEditClick={handleEditClick} budget={budget} />
            
            )}
        </div>            
    );
};

export default Budget;