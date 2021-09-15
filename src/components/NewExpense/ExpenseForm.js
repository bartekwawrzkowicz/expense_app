import React, { useState } from 'react';
import '../../styles/ExpenseForm.scss';

const ExpenseForm = () => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = event => {
        setEnteredTitle(event.target.value);
    }

    const amountChangeHandler = event => {
        setEnteredAmount(event.target.value);
    }

    const dateChangeHandler = event => {
        setEnteredDate(event.target.value);
    }

    const dataSubmitHandler = event => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate),
        }

    }

    return (
        <form onSubmit={dataSubmitHandler} >
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>nazwa</label>
                    <input type="text" onChange={titleChangeHandler} />
                </div>

                <div className="new-expense__control">
                    <label>kwota</label>
                    <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} />
                </div>

                <div className="new-expense__control">
                    <label>data</label>
                    <input type="date" min="2018-01-01" max="2022-12-31" onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Dodaj</button>
            </div>
        </form>
    );
}

export default ExpenseForm;