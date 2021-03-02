import React from 'react';

import { TimeSlotsScreen, TimeSlotsSubmitFormScreen } from 'screens';

import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';

const AroundHomeRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/submit">
        <TimeSlotsSubmitFormScreen />
      </Route>
      <Route path="/">
        <TimeSlotsScreen />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default AroundHomeRouter;
