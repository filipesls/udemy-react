import React from 'react';
import { shallow } from 'enzyme';
import { AddExpensivePage } from '../../components/AddExpensivePage';
import expenses from '../../__mocks__/expenses';

let onSubmitSpy, historySpy, wrapper;

beforeEach(() => {
    onSubmitSpy = jest.fn();
    historySpy = { push: jest.fn() };
    wrapper = shallow(<AddExpensivePage onSubmit={onSubmitSpy} history={historySpy} />);
});

test('should render AddExpensivePage correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should render onSubmit', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(historySpy.push).toHaveBeenLastCalledWith('/');
    expect(onSubmitSpy).toHaveBeenLastCalledWith(expenses[1]);
});

// test('xxxx', () => {
//     const wrapper = shallow(<ExpenseForm />);
// });
