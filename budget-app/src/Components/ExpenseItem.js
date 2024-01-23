import React, { useContext } from "react";
import { TiDelete } from 'react-icons/ti';
import { AppContext } from "../Context/AppContext";


const ExpenseItem = (props) => {

    const { dispatch, currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            {props.name}
            <div>
                <span className="rounded-pill bg-primary text-white p-1 small">
                    {currency}{props.cost}
                </span>
                <TiDelete size="1.5em" onClick={handleDeleteExpense}></TiDelete>
            </div>
        </li>
    );
};

export default ExpenseItem;