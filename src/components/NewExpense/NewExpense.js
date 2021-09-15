import React from 'react';
import ExpenseForm from './ExpenseForm';

import '../../styles/NewExpense.scss';

const NewExpense = () => {
    return (
        <div className="new-expense">
            <ExpenseForm />
        </div>
    );
}

export default NewExpense;