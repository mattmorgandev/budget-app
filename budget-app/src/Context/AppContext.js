import { createContext, useReducer } from "react";

const AppReducer = (state, action) => {
    switch(action.type){
        case 'ADD_EXPENSE':
            return {
                // ...state copies the existing state
                ...state,
                // expenses will = the existing state of expenses + the action payload
                expenses: [...state.expenses, action.payload],
            };
        case 'DELETE_EXPENSE':
            return {
                ...state,
                // We need to override existing expenses with new expenses
                // We need to use id from action.payload ADD_EXPENSE and filter out that same id and then return that new list
                // This should return a new array with the expense we deleted not included
                expenses: state.expenses.filter(
                    (expenses)=> expenses.id !== action.payload),
            };
        case 'SET_BUDGET':
            action.type = 'DONE';
            state.budget = action.payload;

            return{
                ...state,
            };
        case 'CHG_CURRENCY':
            action.type = "DONE";
            state.currency = action.payload;
            return {
                ...state,
            };
        

        default:
            return state;
    }
};

const initialState = {
    budget: 2000,
    expenses: [
        { id: 12, name: 'shopping', cost: 40 },
        { id: 13, name: 'holiday', cost: 400 },
    ],
    currency: '$'
};

export const AppContext = createContext();

// After an action occurs like the ADD_EXPENSE, this updates the state in the AppProvider because the state has changed.
// The values in AppProvider have then changed which tells all the components to re-render with the new data

export const AppProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return (
        <AppContext.Provider 
            value={{
                budget: state.budget,
                expenses: state.expenses,
                dispatch,
                currency: state.currency
            }}>
                {props.children}   
        </AppContext.Provider>
    );
    
};


