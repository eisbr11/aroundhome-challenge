import React from 'react';
import { shallow } from 'enzyme';

import { ThemeProvider } from 'react-jss';
import codingChallengeTheme from 'themes/codingChallenge.theme';
import Footer from './index';

describe('Footer Component', () => {
  it('should render correctly', () => {
    const testText = 'Some Test Text';
    const wrapper = shallow(
      <ThemeProvider theme={codingChallengeTheme}>
        <Footer>{testText}</Footer>
      </ThemeProvider>,
    );

    expect(wrapper.length).toBe(1);
  });
});
