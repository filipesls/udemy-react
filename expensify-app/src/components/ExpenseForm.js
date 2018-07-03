import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/initialize';

import 'react-dates/lib/css/_datepicker.css';

class ExpenseForm extends React.Component {
    state = {
        description: '',
        amount: '',
        note: '',
        createdAt: moment(),
        calendarFocused: false
    };

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    };

    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note }));
    }

    onAmountChange = (e) => {
        const amount = e.target.value;

        if (amount.match(/^\d*(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }));
        }
    };

    onDateChange = (createdAt) => {
        this.setState(() => ({ createdAt }))
    }

    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused}))
    }

    render(){
        return (
            <div>
                <form action="">
                    <input type="text" placeholder="Description" autoFocus value={this.state.description} onChange={this.onDescriptionChange} />
                    <br/>
                    <input type="text" placeholder="Amount" value={this.state.amount} onChange={this.onAmountChange} />
                    <br/>
                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                    <br/>
                    <textarea cols="30" rows="10" placeholder="Add a note for your expense (optional)" value={this.state.note} onChange={this.onNoteChange}></textarea>
                    <br/>
                    <button>Add Expense</button>
                </form>
            </div>
        )
    };
}

export default ExpenseForm;