import React, { useState } from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem = (props) => {
     // react hook, starts with use
    const [title, setTitle] = useState(props.title);

    const changeTitle = () => {
        setTitle('updated');
    }
    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>
                    ${props.amount}</div>
            </div>
            <button onClick={changeTitle}>change title</button>
        </Card>
    );
}

export default ExpenseItem;