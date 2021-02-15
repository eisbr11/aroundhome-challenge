import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import ConnectionError from './index';

describe('Connection Error Component', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<ConnectionError />);

    expect(wrapper.length).toBe(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
