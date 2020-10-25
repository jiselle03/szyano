import React, { useState } from 'react';

import { Button, Card, Divider, FormControl, Icon, Input, InputAdornment, InputLabel, Typography } from '@material-ui/core';

import Session from '../../api/session';
import { formStyles } from '../Styles';

const SignInPage = props => {
    const [errors, setErrors] = useState([]);

    const classes = formStyles();

    const createSession = event => {
        event.preventDefault();
        const { currentTarget: form } = event;
        const fd = new FormData(form);
        setErrors([]);
        
        Session.create({
            email: fd.get("email"),
            password: fd.get("password")
        }).then(data => {
            if (data.status === 404) {
                setErrors([...errors, { message: "Wrong email or password"}]);
            } else {
                if (typeof props.onSignIn === "function") props.onSignIn();
                props.history.push("/");
            };
        });
    };

    return(
        <Card className={classes.card}>
            <form onSubmit={createSession} className={classes.form}>
                <FormControl className={classes.formField}>
                    <InputLabel htmlFor="email">Email</InputLabel>
                    <Input
                    id="email"
                    name="email"
                    type="email"
                    startAdornment={
                        <InputAdornment position="start">
                            <Icon className="fas fa-envelope" />
                        </InputAdornment>
                    }
                    placeholder="Email"
                    />
                </FormControl>

                <FormControl className={classes.formField}>
                    <InputLabel htmlFor="password">Password*</InputLabel>
                    <Input
                    id="password"
                    type="password"
                    name="password"
                    startAdornment={
                        <InputAdornment position="start">
                            <Icon className="fas fa-lock" />
                        </InputAdornment>
                    }
                    placeholder="Password"
                    required
                    />
                </FormControl>

                <Button 
                    variant="contained" 
                    color="secondary"
                    type="submit" 
                    className={classes.button}
                >
                    Sign In
                </Button>
            </form>

            <Divider />

            <Typography paragraph>
                Don't have an account? SIGN UP.
            </Typography>
        </Card>
    );
};

export default SignInPage;
