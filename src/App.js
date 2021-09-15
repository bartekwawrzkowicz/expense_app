import React from 'react';
import ExpenseItem from './components/ExpenseItem';


const App = () => {

  const expenses = [
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


  return (
    <div className="main-column">
      <p className="main-heading">WYDATKI</p>
      <p className="main-heading__decoration">***** ***</p>
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date} />

      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date} />

      <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date} />

      <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date} />
    </div>
  );
}

export default App;
