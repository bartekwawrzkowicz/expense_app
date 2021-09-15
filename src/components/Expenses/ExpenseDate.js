import React from 'react';
import '../../styles/ExpenseDate.scss';

const ExpenseDate = props => {

    const day = props.date.toLocaleString('pl-PL', { day: '2-digit' });
    const month = props.date.toLocaleString('pl-PL', { month: 'long' });
    const year = props.date.getFullYear();

    return (
        <div className="expense-item__date">
            <div className="expense-item__date-day">{day}</div>
            <div className="expense-item__date-month">{month}</div>
            <div className="expense-item__date-year">{year}</div>
        </div>
    );
}

export default ExpenseDate;