import React from 'react';
import { shallow } from 'enzyme';
import Input from './input';

describe('<Input />', () => {
  it('Renders without crashing', () => {
    shallow(<Input type="text" input={{ name: 'username' }} meta={{ touched: false, error: null }} />);
  });

  it('Renders error feedback when there is an error', () => {
    const error = 'dummyError';
    const wrapper = shallow(<Input type="text" input={{ name: 'username' }} meta={{ touched: true, error }} />);
    expect(wrapper.contains(<div className="form-error">{error}</div>)).toEqual(true);
  });
});