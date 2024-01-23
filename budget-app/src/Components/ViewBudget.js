import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";

const ViewBudget = (props) => {
    const { currency } = useContext(AppContext);

    return (
        <>
            <span>Budget {currency}{props.budget}</span>
            <button type='button' className="btn btn-primary" onClick={props.handleEditClick}>Edit</button>
        </>
    );
};

export default ViewBudget;