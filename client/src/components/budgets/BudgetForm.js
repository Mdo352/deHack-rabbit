import React, { useState, useContext } from 'react';
import BudgetContext from '../../context/budget/budgetContext';

const BudgetForm = () => {
    const budgetContext = useContext(BudgetContext);

    const [budget, setBudget] = useState({
        name: '',
        email: '',
        website: ''
    });

    const { name, email, website } = budget;

    const onChange = e => setBudget({...budget, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        budgetContext.addBudget(budget);
        setBudget({
            name: '',
            email: '',
            website: ''
        });
    };

    return (
        <form onSubmit={onSubmit}>
            <h2 className='text-primary'>Add Budget</h2>
            <input type='text' placeholder='Name' name='name' value={name} onChange={onChange} />
            <input type='email' placeholder='Email' name='email' value={email} onChange={onChange} />
            <input type='text' placeholder='Website' name='website' value={website} onChange={onChange} />
            <div>
                <input type='submit' value='Add Budget' className='btn btn-primary' />
            </div>
        </form>
    )
}

export default BudgetForm;