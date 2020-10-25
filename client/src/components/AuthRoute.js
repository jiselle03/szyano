import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const AuthRoute = props => {
    const { isAuthenticated, component: Component, currentUser } = props;

    if (!isAuthenticated) {
        return <Redirect to="/sign_in" />;
    } else {
        return <Route render={routeProps => <Component {...routeProps} currentUser={currentUser} />} />
    };
};

export default AuthRoute;
