import React from 'react';
import { shallow } from 'enzyme';
import { RegistrationForm } from './registration-form';

describe('<RegistrationForm />', () => {
  it('Renders without crashing', () => {
    const handleSubmit = jest.fn();
    shallow(<RegistrationForm handleSubmit={handleSubmit} />);
  });

  it('Renders the register-form', () => {
    const handleSubmit = jest.fn();
    const wrapper = shallow(<RegistrationForm handleSubmit={handleSubmit} />);
    expect(wrapper.find('form').hasClass('login-form')).toBe(true);
  });

  it('Submits data when form submits', function() {
    const onSubmit = jest.fn();
    const wrapper = shallow(<RegistrationForm handleSubmit={onSubmit} />);
    const first = 'test';
    const last = 'demo';
    const user = 'testdemo';
    const pass = 'password';
    wrapper.find('Field[name="firstName"]').value = first;
    wrapper.find('Field[name="lastName"]').value = last;
    wrapper.find('Field[name="username"]').value = user;
    wrapper.find('Field[name="password"]').value = pass;
    wrapper.find('input[name="passwordConfirm"]').value = pass;
    wrapper.simulate('submit');
    expect(onSubmit).toHaveBeenCalled();
  });
});