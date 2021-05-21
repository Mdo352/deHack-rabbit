import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import BudgetContext from '../../context/budget/budgetContext';

const BudgetItem = ({budget}) => {
    const budgetContext = useContext(BudgetContext);

    const { deleteBudget, setCurrent, clearCurrent } = budgetContext;

    const {id, name, website, email} = budget;

    const onDelete = () => {
        deleteBudget(id);
        clearCurrent();
    };

    return (
        <div className='card bg-light'>
            <h3 className='text-primary text-left'>
                {name} {' '}
            </h3>
            <ul className='list'>
                {email && (<li>
                    <i className='fas fa-envelope-open'></i> {email}
                </li>)}
                {website && (<li>
                    <i className='fas fa-desktop'></i> {website}
                </li>)}
            </ul>
            <p>
                <button className='btn btn-dark btn-sm' onClick={()=> setCurrent(budget)}>Edit</button>
                <button className='btn btn-danger btn-sm' onClick={onDelete}>Delete</button>
            </p>
        </div>
    )
}

BudgetItem.propTypes = {
    budget: PropTypes.object.isRequired
}

export default BudgetItem;