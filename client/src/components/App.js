import React, { useState, useEffect, useCallback } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { CircularProgress, CssBaseline } from '@material-ui/core';

import User from '../api/user';
import Session from '../api/session';

import AuthRoute from './AuthRoute';
import NavBar from './NavBar';

import WelcomePage from './pages/WelcomePage';
import AccountShowPage from './pages/AccountShowPage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';

import { globalStyles } from './Styles';

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const global = globalStyles();

  const getUser = useCallback(() => {
    User.current().then(data => {
      typeof data.id !== "number" ? setCurrentUser(null) : setCurrentUser(data);
      setIsLoading(false);
    });
  }, []);

  const destroySession = () => Session.destroy().then(setCurrentUser(null));

  useEffect(() => getUser(), [getUser]);

  if (isLoading) return <CircularProgress variant="determinate" />;

  return (
    <div className={global.root}>
      <CssBaseline />

      <BrowserRouter>
        <NavBar 
          currentUser={currentUser} 
          onSignOut={destroySession} 
        />

        <main className={global.content}>
          <div className={global.toolbar} />
          <Switch>
            <Route exact path='/' component={ WelcomePage }/>
            <AuthRoute 
              exact path="/account"
              isAuthenticated={!!currentUser}
              component={AccountShowPage}
            />
            <Route 
              path="/sign-in"
              render={routeProps => <SignInPage {...routeProps} onSignIn={getUser} />}  
            />
            <Route 
              path="/sign-up"
              render={routeProps => <SignUpPage {...routeProps} onSignUp={getUser} />}  
            />
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
};

export default App;
