import React from 'react';
import { shallow } from 'enzyme';
import { AddExpensivePage } from '../../components/AddExpensivePage';
import expenses from '../../__mocks__/expenses';

let addExpenseSpy, historySpy, wrapper;

beforeEach(() => {
    addExpenseSpy = jest.fn();
    historySpy = { push: jest.fn() };
    wrapper = shallow(<AddExpensivePage addExpense={addExpenseSpy} history={historySpy} />);
});

test('should render AddExpensivePage correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should render onSubmit', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(historySpy.push).toHaveBeenLastCalledWith('/');
    expect(addExpenseSpy).toHaveBeenLastCalledWith(expenses[1]);
});