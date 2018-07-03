import React from 'react';

class ExpenseForm extends React.Component {
    state = {
        description: '',
        amount: '',
        note: ''
    };

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description })) // is the same -> ({ description: description }))
    };

    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note }));
    }

    // Another option to change the state, it's necessary to persist e to use in the call back of function
    // onNoteChange = (e) => {
    //     e.persist();
    //     this.setState(() => ({ note: e.target.value }));
    // }

    onAmountChange = (e) => {
        const amount = e.target.value;

        if (amount.match(/^\d*(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }));
        }
    };

    render(){
        return (
            <div>
                <form action="">
                    <input type="text" placeholder="Description" autoFocus value={this.state.description} onChange={this.onDescriptionChange} />
                    <br/>
                    <input type="text" placeholder="Amount" value={this.state.amount} onChange={this.onAmountChange} />
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