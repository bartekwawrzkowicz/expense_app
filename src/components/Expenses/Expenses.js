import React, { useState } from 'react';

import ExpensesFilter from './ExpensesFilter';
import ExpenseItem from './ExpenseItem';

const Expenses = props => {

    const [filteredYear, setFilteredYear] = useState('2021')

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = props.items.filter(item => {
        return item.date.getFullYear().toString() === filteredYear;
    });

    const filteredExpenseItems = filteredExpenses.map(item => <ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date} />)

    return (
        <div className="expenses">
            <ExpensesFilter selected={filteredYear} onFilterChange={filterChangeHandler} />
            {filteredExpenseItems}
        </div>
    );
}

export default Expenses;