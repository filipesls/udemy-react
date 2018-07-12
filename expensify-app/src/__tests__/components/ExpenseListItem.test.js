import React from 'react';
import { shallow } from 'enzyme';
import expensesData from '../../__mocks__/expenses';
import ExpenseListItem from '../../components/ExpenseListItem';

test('should render ExpenseListItem with expenses', () => {
    const wrapper = shallow(<ExpenseListItem {...expensesData[0]} />);
    expect(wrapper).toMatchSnapshot();
});