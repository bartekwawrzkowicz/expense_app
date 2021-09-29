import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';

import '../../styles/NewExpense.scss';

const NewExpense = props => {
    const [isEditing, setIsEditing] = useState(false);

    const saveExpenseDataHandler = enteredExpenseData => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
    }

    const startEditingHandler = () => {
        setIsEditing(true);
    }

    const stopEditing = () => {
        setIsEditing(false)
    }

    return (
        <div className="new-expense">
            {!isEditing && <button onClick={startEditingHandler}>Dodaj nowe wydatki</button>}
            {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} stopEditing={stopEditing} />}
        </div>
    );
}

export default NewExpense;