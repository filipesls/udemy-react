import React from 'react';
import { shallow } from 'enzyme';
import expensesData from '../../__mocks__/expenses';
import ExpenseForm from '../../components/ExpenseForm';

test('should render ExpenseForm correctly', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseForm with expense data', () => {
    const wrapper = shallow(<ExpenseForm expense={expensesData[2]} />);
    expect(wrapper).toMatchSnapshot();
});