import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { LoginForm } from './login-form';

describe('<LoginForm />', () => {
  it('Renders without crashing', () => {
    const handleSubmit = jest.fn();
    shallow(<LoginForm handleSubmit={handleSubmit} />);
  });

  it('Renders the login-form', () => {
    const handleSubmit = jest.fn();
    const wrapper = shallow(<LoginForm handleSubmit={handleSubmit} />);
    expect(wrapper.find('form').hasClass('login-form')).toBe(true);
  });

  it('Submits data', function() {
    const onSubmit = jest.fn();
    const wrapper = shallow(<LoginForm handleSubmit={onSubmit} />);
    const user = 'testdemo';
    const pass = 'password';
    wrapper.find('Field[id="username"]').value = user;
    wrapper.find('Field[id="password"]').value = pass;
    wrapper.simulate('submit');
    expect(onSubmit).toHaveBeenCalled();
  });
});