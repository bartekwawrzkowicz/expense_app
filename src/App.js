import React from 'react';
import ExpenseItem from './components/ExpenseItem';


const App = () => {

  const expenses = [
    {
      id: 1,
      title: 'Ubezpieczenie',
      amount: 294.73,
      date: new Date(2021, 6, 11),
    },
    {
      id: 2,
      title: 'Alkohol',
      amount: 54.24,
      date: new Date(2021, 2, 23),
    },
    {
      id: 3,
      title: 'Papierosy',
      amount: 102.86,
      date: new Date(2021, 4, 7),
    },
  ]


  return (
    <div className="main-column">
      <p className="main-heading">WYDATKI</p>
      <p className="main-heading__decoration">***** ***</p>
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date} />

      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date} />

      <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date} />
    </div>
  );
}

export default App;
