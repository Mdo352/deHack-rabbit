import React, { useState, useContext, useEffect } from 'react';
import BudgetContext from '../../context/budget/budgetContext';

const BudgetForm = () => {
    const budgetContext = useContext(BudgetContext);

    const {addBudget, clearCurrent, updateBudget, current} = budgetContext;

    useEffect(() =>{
        if(current !== null){
            setBudget(current);
        }else{
            setBudget({
                name: '',
                city: '',
                money: '',
                email: '',
                website: '',
                bio: ''
            });
        }
    }, [budgetContext, current] )

    const [budget, setBudget] = useState({
        name: '',
        city: '',
        money: '',
        email: '',
        website: '',
        bio: ''
    });

    const { name, city, money, email, website, bio } = budget;

    const onChange = e => setBudget({...budget, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        if(current === null){
            addBudget(budget)
        }else{
            updateBudget(budget);
        }

        clearAll();
        // setBudget({
        //     name: '',
        //     city: '',
        //     money: '',
        //     email: '',
        //     website: '',
        //     bio: '',
        // });
    };

    const clearAll = () => {
        clearCurrent();
    }

    return (
        <form onSubmit={onSubmit}>
            <h2 className='text-primary'>{current ? 'Edit Budget' : 'Add Budget'}</h2>
            <input type='text' placeholder='Name' name='name' value={name} onChange={onChange} />
            <input type='text' placeholder='City, ST' name='city' value={city} onChange={onChange} />
            <input type='text' placeholder='Budget Allocation' name='money' value={money} onChange={onChange} />
            <input type='email' placeholder='Email' name='email' value={email} onChange={onChange} />
            <input type='text' placeholder='Website' name='website' value={website} onChange={onChange} />
            <input type='text' placeholder='Bio' name='bio' value={bio} onChange={onChange} />
            <div>
                <input type='submit' value={current ? 'Update Budget' : 'Add Budget'} className='btn btn-primary' />
            </div>
            {current && <div>
                <button className='btn btn-light btn-block' onClick={clearAll}>Clear</button>
            </div>}
        </form>
    )
}

export default BudgetForm;