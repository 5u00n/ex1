// App.js
import React from 'react';
import ExpensesList from './pages/ExpensesList';

const App = () => {
  const expensesData = [
    { title: 'Groceries', description: 'Monthly grocery shopping', amount: 50, date: new Date('2024-01-28') },
    { title: 'Utilities', description: 'Electricity and water bills', amount: 100, date: new Date('2024-01-29') },
  ];

  return (
    <div>
      <h1>Expense Tracker</h1>
      <ExpensesList expenses={expensesData} />
    </div>
  );
};

export default App;
