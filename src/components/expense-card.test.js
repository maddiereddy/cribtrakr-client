import React from 'react';
import { shallow } from 'enzyme';
import  ExpenseCard  from './expense-card';

describe('<ExpenseCard />', () => {
  it('Renders without crashing', () => {
    const dispatch = jest.fn();
    const wrapper = shallow(<ExpenseCard key={1} link={`/edit-expense`} {...dispatch} />);
    expect(wrapper.exists()).toBe(true);
  });
});