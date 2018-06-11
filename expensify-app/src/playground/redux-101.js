import { createStore } from 'redux';

const store = createStore((state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + 1
            };
            break;
        case 'DECREMENT':
            return {
                count: state.count - 1
            };
            break;
        case 'RESET':
            return {
                count: 0
            };
            break;
        default:
            return state
            break;
    }
});

console.log(store.getState());

// Actions - than an object that gets sent to the store

// Increment the count
store.dispatch({
    type: 'INCREMENT'
});

console.log(store.getState());

store.dispatch({
    type: 'INCREMENT'
});

console.log(store.getState());

store.dispatch({
    type: 'RESET'
});

console.log(store.getState());

store.dispatch({
    type: 'DECREMENT'
});

console.log(store.getState());
