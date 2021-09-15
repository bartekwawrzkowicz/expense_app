import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import '../styles/ExpenseItem.scss';

const ExpenseItem = props => {

    const [title, setTitle] = useState(props.title);

    const buttonHandler = () => {
        setTitle('nowy title');
    }

    return (
        <div className="expense-item main-column">
            <ExpenseDate date={props.date} />
            <div className="expense-item__title">
                <h2 className="expense-item__title-heading">
                    {title}
                </h2>
            </div>
            <div className="expense-item__price">{props.amount} PLN
            </div>
            <button onClick={buttonHandler}>Change</button>
        </div>
    );
}

export default ExpenseItem;