import React from 'react';
import './NewExpense.css';
import ExpenseFrom from './ExpenseForm';

const NewExpense = (props) => {
    const onSaveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    }
    return (
        <div className="new-expense">
            <ExpenseFrom onSaveExpenseData = {onSaveExpenseDataHandler} />
        </div>
    );
};

export default NewExpense;