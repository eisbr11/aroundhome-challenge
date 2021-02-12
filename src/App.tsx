import React from 'react';

import CompaniesContextProvider from 'context/CompaniesContextProvider.component';
import TimeSlotsScreen from 'screens/TimeSlots.screen';

import codingChallengeTheme from 'themes/codingChallenge.theme';
import useStyles from 'styles/global.styles';
import { ThemeProvider } from 'react-jss';

function App() {
  useStyles();
  return (
    <CompaniesContextProvider>
      <ThemeProvider theme={codingChallengeTheme}>
        <TimeSlotsScreen />
      </ThemeProvider>
    </CompaniesContextProvider>
  );
}

export default App;
