import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const AuthRoute = props => {
    const { isAuthenticated, component: Component, ...routeProps } = props;

    if (!isAuthenticated) {
        return <Redirect to="/sign_in" />;
    } else {
        return <Route {...routeProps} component={Component} />;
    };
};

export default AuthRoute;
