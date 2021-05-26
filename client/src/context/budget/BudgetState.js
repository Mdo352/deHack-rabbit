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
                city: 'Dorchester, MA',
                money: '$100,000',
                email: 'house@yahoo.com',
                website: 'massHousing.com',
                bio: 'Housing is one of the biggest challenges that we face—looking at affordable housing.'
            },
            {
                id: 2,
                name: 'Side Walks',
                city: 'Everett, MA',
                money: '$230,000',
                email: 'facilities@mass.gov',
                website: 'bostonpublicworks.com',
                bio: 'Residents can vote to get sidewalks, alleys and streets resurfaced. Look at what projects we are working on.'
            },
            {
                id: 3,
                name: 'Street Maintenence',
                city: 'Roxbury, MA',
                money: '$140,000',
                email: 'sanitation@boston.com',
                website: 'streetsweep.com',
                bio: 'We know that protecting the safety and well-being of all of our communities means investing in safe roads'
            },
            {
                id: 4,
                name: 'Public Restrooms',
                city: 'Boston, MA',
                money: '$150,000',
                email: 'sanitation@boston.com',
                website: 'streetsweep.com',
                bio: 'This proposal aims to build a third standalone outdoor public toilet in a high foot traffic area.'
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
    const updateBudget = budget => {
        dispatch({ type:UPDATE_BUDGET, payload: budget });
    };

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
                clearCurrent,
                updateBudget
            }}
        >
            { props.children}
        </BudgetContext.Provider>
    )
};

export default BudgetState;