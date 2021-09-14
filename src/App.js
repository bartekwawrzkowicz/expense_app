import React from 'react';
import ExpenseItem from './components/ExpenseItem';


const App = () => {
  const expenses = [
    { id: 1, title: 'Car Insuranse', amount: 294.73, date: new Date(2021, 8, 14), },
    { id: 2, title: 'Alkohol', amount: 54.24, date: new Date(2021, 8, 10), },
    { id: 3, title: 'Cigarettes', amount: 102.86, date: new Date(2021, 4, 21), },
  ]


  return (
    <div className="main-column">
      Expenses
      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date} />
      <ExpenseItem />
    </div>
  );
}

export default App;
