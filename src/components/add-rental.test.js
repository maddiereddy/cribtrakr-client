import React from 'react';
import { shallow } from 'enzyme';
import { AddRental } from './add-rental';
import { MemoryRouter } from 'react-router-dom';

describe('<AddRental />', () => {
  it('Renders without crashing', () => {
    shallow(
      <MemoryRouter>
        <AddRental />
      </MemoryRouter>
    );
  });
  it('Renders the Header and AddRentalForm components', () => {
    const dispatch = jest.fn();
    const wrapper = shallow(<AddRental dispatch={dispatch}/>);
    expect(wrapper.find(`Header`).length).toBe(1);
  });
});