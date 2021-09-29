import React, { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const EXPENSES = [
  {
    id: 1,
    title: 'Mieszkanie',
    amount: 490.73,
    date: new Date(2021, 6, 11),
  },
  {
    id: 2,
    title: 'Kablówka + Internet',
    amount: 212.54,
    date: new Date(2021, 2, 23),
  },
  {
    id: 3,
    title: 'Telefon',
    amount: 65.86,
    date: new Date(2021, 4, 7),
  },
  {
    id: 4,
    title: 'Gaz',
    amount: 230.50,
    date: new Date(2020, 1, 2),
  },
]

const App = () => {
  const [expenses, setExpenses] = useState(EXPENSES);

  const addExpenseHandler = expense => {
    setExpenses(prevState => {
      return [expense, ...prevState];
    });
  }


  return (
    <div className="main-column">
      <p className="main-heading">WYDATKI</p>
      <p className="main-heading__decoration">***** ***</p>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />

    </div>
  );
}

export default App;