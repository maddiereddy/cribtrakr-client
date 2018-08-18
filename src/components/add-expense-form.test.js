import React from 'react';
import { shallow } from 'enzyme';
import { AddExpenseForm } from './add-expense-form';

describe('<AddExpenseForm />', () => {
  it('Renders without crashing', () => {
    const dispatch = jest.fn();
    const username = 'foo';
    const wrapper = shallow(<AddExpenseForm username={username} handleSubmit={dispatch} />);
    expect(wrapper.exists()).toBe(true);
  });
});