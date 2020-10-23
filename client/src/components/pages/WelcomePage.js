import React from 'react';

import { Typography } from '@material-ui/core';

import useStyles from '../Styles';

const WelcomePage = () => {
    const classes = useStyles();

    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />

            <Typography paragraph>
                Welcome to my website
            </Typography>
        </main>
    );
};

export default WelcomePage;
