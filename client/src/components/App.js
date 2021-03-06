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
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ProductIndexPage from './pages/ProductIndexPage';
import ProductShowPage from './pages/ProductShowPage';
import ProductNewPage from './pages/ProductNewPage';
import ProductEditPage from './pages/ProductEditPage';
import NewsIndexPage from './pages/NewsIndexPage';
import NewsShowPage from './pages/NewsShowPage';
import NewsNewPage from './pages/NewsNewPage';
import NewsEditPage from './pages/NewsEditPage';
import NotFoundPage from './pages/NotFoundPage';

import { globalStyles } from './Styles';

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const global = globalStyles();

  const getUser = useCallback(() => {
    User.current().then(user => {
      typeof user.id !== "number" ? setCurrentUser(null) : setCurrentUser(user);
      setIsLoading(false);
    });
  }, []);

  const destroySession = () => Session.destroy().then(setCurrentUser(null));

  useEffect(() => getUser(), [getUser]);

  if (isLoading) return <CircularProgress variant="determinate" />;

  return (
    <div className={global.flexRow}>
      <CssBaseline />

      <BrowserRouter>
        <NavBar 
          currentUser={currentUser} 
          onSignOut={destroySession} 
        />

        <main className={global.content}>
          <div className={global.toolbar} />
          <Switch>
            <Route exact path='/' component={WelcomePage}/>
            <AuthRoute 
              exact path='/account'
              isAuthenticated={!!currentUser}
              render={routeProps => <AccountShowPage {...routeProps} currentUser={currentUser} />}
            />
            <Route 
              path='/sign-in'
              render={routeProps => <SignInPage {...routeProps} onSignIn={getUser} />}  
            />
            <Route 
              path='/sign-up'
              render={routeProps => <SignUpPage {...routeProps} onSignUp={getUser} />}  
            />
            <Route exact path='/about' component={AboutPage} />
            <Route exact path='/contact' component={ContactPage} />
            <Route 
              exact path='/products' 
              render={routeProps => <ProductIndexPage {...routeProps} currentUser={currentUser} />} />
            <Route exact path='/products/new' component={ProductNewPage} />
            <Route exact path='/products/:id' 
              render={routeProps => <ProductShowPage {...routeProps} currentUser={currentUser} />} />
            <Route exact path='/products/:id/edit' component={ProductEditPage} />
            <Route 
              exact path='/news' 
              render={routeProps => <NewsIndexPage {...routeProps} currentUser={currentUser} />} />
            <Route exact path='/news/new' component={NewsNewPage} />
            <Route exact path='/news/:id' component={NewsShowPage} />
            <Route exact path='/news/:id/edit' component={NewsEditPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
};

export default App;
