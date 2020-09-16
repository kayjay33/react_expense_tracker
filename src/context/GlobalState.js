// we want createContext to create the context API we need, and useReducer because we need our usual reducer
import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial State - any global state would go in this object
// In this case, all we need is transactions because as long as we have access to the transactions,
// in certain components we can do our calculations (balance, etc.)
const initialState = {
    transactions: []
        // these were the  dummy transactions to test code (from VJS repo)
        // expenses are negative, income is positive                   
}

// Create context
export const GlobalContext = createContext(initialState); // allows us to use in other files

// In order for our other components to access the GlobalContext, we need what's called a 'provider'
// We need to wrap all our components in the provider component

// Provider component
// we use destructuring for the children because the components we're wrapping are technically children 
export const GlobalProvider = ({ children }) => { 
    // this is where we use the useReducer because we need access to the state and dispatch
    // whenever we call a reducer action, we need to use the dispatch key
    // useReducer then takes the file (which we haven't made yet) and the initialState
    const[state, dispatch] = useReducer(AppReducer, initialState);
    // This is our provider - it provides our state or any actions to the components that it's wrapped around

    // Actions
    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }

    return (<GlobalContext.Provider value={{
        transactions: state.transactions, // this is how you access the initialState above (where our dummy code lives)
        deleteTransaction,
        addTransaction
    }}>
        {/* then we pass in the children prop */}
        {children}
    </GlobalContext.Provider>);
}

