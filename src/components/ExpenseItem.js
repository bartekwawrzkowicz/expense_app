import React from 'react';

const ExpenseItem = () => {
    return (
        <div className="expense-item main-column">
            <div className="expense-item__date">
                Date
                </div>
            <div className="expense-item__title">
                <h2 className="expense-item__title-heading">Title</h2>
            </div>
            <div className="expense-item__amount">
                Amount
                </div>
        </div>
    );
}

export default ExpenseItem;