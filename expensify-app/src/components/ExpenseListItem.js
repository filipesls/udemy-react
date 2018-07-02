import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';

/* Using Props - My way */
const ExpenseListItem = (props) => (
    <div>
        <h3>{props.description}</h3>
        <p>{props.amount} - {props.createdAt}</p>
        <button onClick={(e) => {
            props.dispatch(removeExpense({ id: props.id }));
        }}>Remove</button>
    </div>
);

/* Using Object - How they did on video */
// const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }) => (
//     <div>
//         <h3>{description}</h3>
//         <p>{amount} - {createdAt}</p>
//         <button onClick={(e) => {
//             dispatch(removeExpense({ id }));
//         }}>Remove</button>
//     </div>
// );

export default connect()(ExpenseListItem);