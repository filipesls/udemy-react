import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../../__mocks__/expenses';
import { EditExpensivePage } from '../../components/EditExpensivePage';

let editExpenseSpy, removeExpenseSpy, historySpy, wrapper;

beforeEach(() => {
    editExpenseSpy = jest.fn();
    removeExpenseSpy = jest.fn();
    historySpy = { push: jest.fn() };
    wrapper = shallow(
        <EditExpensivePage
            editExpense={editExpenseSpy}
            removeExpense={removeExpenseSpy}
            history={historySpy}
            expense={expenses[2]}
        />
    );
});


test('should render EditExpensivePage correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle editExpense', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
    expect(historySpy.push).toHaveBeenLastCalledWith('/');
    expect(editExpenseSpy).toHaveBeenLastCalledWith(expenses[2].id, expenses[2]);
});

test('should handle removeExpense', () => {
    wrapper.find('button').simulate('click');
    expect(historySpy.push).toHaveBeenLastCalledWith('/');
    expect(removeExpenseSpy).toHaveBeenLastCalledWith({ id: expenses[2].id });
});
