// ExpensesList.js
import React from 'react';
import ExpenseItem from '../components/ExpenseItem';
import './ExpensesList.css';

const ExpensesList = ({ expenses }) => {
  return (
    <div className="expenses">
      <h2>Expenses List</h2>
      {expenses.map((expense, index) => (
        <ExpenseItem key={index} expense={expense} />
      ))}
    </div>
  );
};

export default ExpensesList;
