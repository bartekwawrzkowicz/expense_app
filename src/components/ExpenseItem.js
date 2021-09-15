import React from 'react';
import '../styles/ExpenseItem.scss';

const ExpenseItem = props => {

    const day = props.date.toLocaleString('pl-PL', { day: '2-digit' });
    const month = props.date.toLocaleString('pl-PL', { month: 'long' });
    const year = props.date.getFullYear();

    return (
        <div className="expense-item main-column">
            <div className="expense-item__date">
                <div className="expense-item__date-day">{day}</div>
                <div className="expense-item__date-month">{month}</div>
                <div className="expense-item__date-year">{year}</div>
            </div>
            <div className="expense-item__title">
                <h2 className="expense-item__title-heading">
                    {props.title}
                </h2>
            </div>
            <div className="expense-item__price">{props.amount} PLN
            </div>
        </div>
    );
}

export default ExpenseItem;