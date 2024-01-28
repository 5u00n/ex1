import React from 'react';

const ExpenseItem = ({ expense }) => {
  return (
    <div className="expense-item">
      <div className="expense-details">
        <div className="date">
          <span className="month-year">{expense.date.toLocaleString('en-us', { month: 'long', year: 'numeric' })}</span>
          <span className="day">{expense.date.getDate()}</span>
        </div>
        <div className="title">{expense.title}</div>
      </div>
      <div className="amount">${expense.amount}</div>
    </div>
  );
};

export default ExpenseItem;
