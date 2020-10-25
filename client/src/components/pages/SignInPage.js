import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Button, Card, Divider, Typography } from '@material-ui/core';

import Session from '../../api/session';

import FormField from '../FormField';

import { formStyles, globalStyles } from '../Styles';

const SignInPage = props => {
    const [errors, setErrors] = useState([]);

    const form = formStyles();
    const global = globalStyles();

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

    const fields = [
        {
            "type": "email",
            "text": "Email",
            "icon": "fas fa-envelope"
        },
        {
            "type": "password",
            "text": "Password",
            "icon": "fas fa-lock"
        }
    ];

    return(
        <Card className={form.card}>
            <form onSubmit={createSession} className={global.flexColumn}>
                {fields.map(field => (
                    <FormField 
                        
                        type={field.type}
                        text={field.text} 
                        icon={field.icon}
                        key={field.type}
                    />
                ))}

                <Button 
                    variant="contained" 
                    color="secondary"
                    type="submit" 
                    className={form.button}
                >
                    Sign In
                </Button>
            </form>

            <Divider />
            
            <Typography paragraph className={global.paragraph}>
                Don't have an account? <Link to='/sign-up' className={global.link}>SIGN UP</Link>.
            </Typography>
        </Card>
    );
};

export default SignInPage;
