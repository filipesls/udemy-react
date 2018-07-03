import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { addExpense} from '../actions/expenses';

const AddExpensivePage = (props) => (
    <div>
        <h1>Add Expense</h1>
        <ExpenseForm 
            onSubmit={(expense) => {
                props.dispatch(addExpense(expense));
                props.history.push('/');
                console.log(expense);
            }}
        />
    </div>
);

export default connect()(AddExpensivePage);