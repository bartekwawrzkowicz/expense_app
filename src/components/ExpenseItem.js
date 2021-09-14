import React from 'react';
import '../styles/ExpenseItem.scss';

const ExpenseItem = props => {

    const day = props.date.toLocaleString('en-US', { month: 'long' });
    const month = props.date.toLocaleString('en-US', { day: '2-digit' });
    const year = props.date.getFullYear();

    console.log(day, month, year)



    return (
        <div className="expense-item main-column">
            <div className="expense-item__date">
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className="expense-item__title">
                <h2 className="expense-item__title-heading">
                    {props.title}
                </h2>
            </div>
            <div className="expense-item__price">$
            </div>
        </div>
    );
}

export default ExpenseItem;