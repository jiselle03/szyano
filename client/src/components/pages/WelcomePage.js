import React from 'react';

import { Typography } from '@material-ui/core';

import useStyles from '../Styles';

const WelcomePage = () => {
    const classes = useStyles();

    return (
        <Typography paragraph>
            Welcome to my website
        </Typography>
    );
};

export default WelcomePage;
