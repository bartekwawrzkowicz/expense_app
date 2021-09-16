import React, { useState } from 'react';

import ExpensesFilter from './ExpensesFilter';
import ExpenseItem from './ExpenseItem';

const Expenses = props => {

    const [filteredYear, setFilteredYear] = useState('2021')

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    }

    const filteredExpenseItems = props.items.map(item => <ExpenseItem title={item.title} amount={item.amount} date={item.date} />)

    return (
        <div className="expenses">
            <ExpensesFilter selected={filteredYear} onFilterChange={filterChangeHandler} />
            {filteredExpenseItems}
        </div>
    );
}

export default Expenses;