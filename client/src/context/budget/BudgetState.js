import React, { useReducer } from 'react';
import {v4 as uuid} from 'uuid';
import BudgetContext from './budgetContext';
import budgetReducer from './budgetReducer';
import {
    ADD_BUDGET,
    DELETE_BUDGET,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_BUDGET,
    FILTER_BUDGETS,
    CLEAR_FILTER
} from '../types';

const BudgetState = props => {
    const initialState = {
        budgets: [
            {
                id: 1,
                name: 'Housing',
                email: 'house@yahoo.com',
                website: 'massHousing.com'
            },
            {
                id: 2,
                name: 'Canibis',
                email: 'ccb@mass.gov',
                website: 'stoned.com'
            },
            {
                id: 3,
                name: 'Food',
                email: 'nomnomnom@eat.com',
                website: 'snickers.com'
            }
        ],
        current: null
    };

    const [state, dispatch] = useReducer(budgetReducer, initialState);

    // Add Budget
    const addBudget = budget => {
        budget.id = uuid();
        dispatch({ type:ADD_BUDGET, payload: budget });
    };
    
    // Delete Budget
    const deleteBudget = id => {
        dispatch({ type:DELETE_BUDGET, payload: id });
    };

    // Set Current Budget
    const setCurrent = budget => {
        dispatch({ type:SET_CURRENT, payload: budget });
    };

    // Clear Current Budget
    const clearCurrent = () => {
        dispatch({ type:CLEAR_CURRENT });
    };

    // Update Budget

    // Filter Budgets

    // Clear Filter

    return (
        <BudgetContext.Provider
            value= {{
                budgets : state.budgets,
                current : state.current,
                addBudget,
                deleteBudget,
                setCurrent,
                clearCurrent
            }}
        >
            { props.children}
        </BudgetContext.Provider>
    )
};

export default BudgetState;