import React from 'react';
import { shallow } from 'enzyme';
import { AddRentalForm } from './add-rental-form';

describe('<AddRentalForm />', () => {
  it('Renders without crashing', () => {
    const dispatch = jest.fn();
    const username = 'foo';
    const wrapper = shallow(<AddRentalForm username={username} handleSubmit={dispatch} />);
    expect(wrapper.exists()).toBe(true);
  });
});