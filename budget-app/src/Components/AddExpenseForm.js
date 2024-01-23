import React, { useContext, useState } from "react";
import { AppContext } from "../Context/AppContext";
import {v4 as uuidv4 } from 'uuid';

const AddExpenseForm = () => {
    const { dispatch } = useContext(AppContext);
    const [name, setName] = useState('');
    const [cost, setCost] = useState('');

    const onSubmit = (event) => {
        // This stops the page from reloading when the button is clicked
        event.preventDefault();


        // when form is submitted a new expense object is created the properties we need: name and cost (with a unique id)
        const expense = {
            id: uuidv4 (),
            name: name,
            cost: parseInt(cost),       
        };

        // and this action is dispatched with the payload being the expense we just created through AppContext per the Reducer
        dispatch ({
            type: 'ADD_EXPENSE',
            payload: expense,
        });
    };

    return (
        // Whenever the form is submitted, call the onSubmit function that we created above (const onSubmit)
        <form onSubmit={onSubmit}>
            <div className="row">
                <div className="col-sm">
                <label for='name'>Name</label>
                <input 
                    required='required' 
                    type='text' 
                    className="form-control" 
                    id="name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                ></input>
            </div>
            <div className="col-sm">
                <label for="cost">Cost</label>
                <input
                   required='required' 
                   type='text' 
                   className="form-control" 
                   id="cost"
                   value={cost}
                   onChange={(event) => setCost(event.target.value)}
                ></input>                
            </div>
            <div className="col-sm">
                <button 
                    type="submit" 
                    className="btn btn-primary mt-4">
                        Save
                </button>
            </div>
            </div>
        </form>
    );
};

export default AddExpenseForm;