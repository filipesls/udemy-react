import { addExpense, removeExpense, editExpense } from '../../actions/expenses'

// REMOVE_EXPENSE
test('Should setup remove expense action object.', () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

// EDIT_EXPENSE
test('Should setup edit expense action object.', () => {
    const action = editExpense('123abc', { note: 'New note value' });
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {note: 'New note value'}
    });
});

// ADD_EXPENSE
test('Should setup add expense action object with provided values.', () => {
    const expenseData = {
        description: 'Coffee',
        note: 'Coffee in StarBucks',
        amount: 275,
        createdAt: 1000
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});

// ADD_EXPENSE
test('Should setup add expense action object with no data.', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            note: '',
            amount: 0,
            createdAt: 0
        }
    });
});