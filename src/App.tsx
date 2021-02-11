import React from 'react';

import CompanyContextProvider from 'context/CompanyContextProvider.component';
import Layout from 'components/Layout/Layout.component';
import useStyles from 'styles/global.styles';

function App() {
  useStyles();
  return (
    <CompanyContextProvider>
      <Layout />
    </CompanyContextProvider>
  );
}

export default App;
