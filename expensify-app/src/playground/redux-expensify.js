import { createStore, combineReducers } from 'redux';

const demoState = {
    expenses: [{
        id: 'fjdlksjfds',
        description: 'January Rent',
        note: 'This is for the final payment for that address',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', // date or amount
        startDate: undefined,
        endDate: undefined 
    }
};