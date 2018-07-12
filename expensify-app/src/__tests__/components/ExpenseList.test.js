import React from 'react';
import { shallow } from 'enzyme';
import expensesData from '../../__mocks__/expenses';
import { ExpenseList } from '../../components/ExpenseList';

test('should render ExpenseList with expenses', () => {
    const wrapper = shallow(<ExpenseList expenses={ expensesData } />);
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseList with empty message', () => {
    const wrapper = shallow(<ExpenseList expenses={ [] } />);
    expect(wrapper).toMatchSnapshot();
});
