import React, { useState, useEffect, useCallback } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import WelcomePage from './pages/WelcomePage';

const App = () => {
  return (
    <BrowserRouter>
      <header>
      </header>

      <Switch>
        <Route exact path="/" component={ WelcomePage }/>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
