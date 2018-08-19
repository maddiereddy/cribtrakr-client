import React from 'react';
import { shallow } from 'enzyme';
import  RentalCard  from './rental-card';

describe('<RentalCard />', () => {
  it('Renders without crashing', () => {
    const dispatch = jest.fn();
    const wrapper = shallow(<RentalCard key={1} link={`/edit-rental`} {...dispatch} />);
    expect(wrapper.exists()).toBe(true);
  });
});