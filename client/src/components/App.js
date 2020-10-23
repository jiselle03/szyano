import React, { useState, useEffect, useCallback } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { CircularProgress, CssBaseline } from '@material-ui/core';

import NavBar from './NavBar';
import WelcomePage from './pages/WelcomePage';

import useStyles from './Styles';

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const classes = useStyles();

  const getUser = useCallback(() => {
    // User.current().then(data => {
    //   typeof data.id !== "number" ? setCurrentUser(null) : setCurrentUser(data);
      setIsLoading(false);
    // });
  }, []);

  // const destroySession = () => Session.destroy().then(setCurrentUser(null));

  useEffect(() => getUser(), [getUser]);

  if (isLoading) return <CircularProgress variant="determinate" />;

  return (
    <div className={classes.root}>
      <CssBaseline />

      <BrowserRouter>
        <NavBar 
          // currentUser={currentUser} 
          // onSignOut={destroySession} 
        />

        <Switch>
          <Route exact path='/' component={ WelcomePage }/>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
