import ExpenseDate from './ExpenseDate';
import '../styles/ExpenseItem.scss';

const ExpenseItem = props => {

    return (
        <div className="expense-item main-column">
            <ExpenseDate date={props.date} />
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