import React from 'react';
import { ThemeProvider } from 'react-jss';

import CompaniesContextProvider from 'context/CompaniesContextProvider.component';
import codingChallengeTheme from 'themes/codingChallenge.theme';
import useStyles from 'styles/global.styles';
import AroundHomeRouter from 'components/AroundHomeRouter';
import ChosenTimeRangesContextProvider from './context/ChosenTimeRangesContextProvider.component';

function App() {
  useStyles();
  return (
    <CompaniesContextProvider>
      <ThemeProvider theme={codingChallengeTheme}>
        <ChosenTimeRangesContextProvider>
          <AroundHomeRouter />
        </ChosenTimeRangesContextProvider>
      </ThemeProvider>
    </CompaniesContextProvider>
  );
}

export default App;
