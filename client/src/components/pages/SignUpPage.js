import React from 'react';
import { Link } from 'react-router-dom';

import { Button, Card, Divider, Typography } from '@material-ui/core';

import User from '../../api/user';

import FormField from '../FormField';

import { formStyles, globalStyles } from '../Styles';

const SignUpPage = props => {
    const form = formStyles();
    const global = globalStyles();

    const createUser = event => {
        event.preventDefault();
        const { currentTarget: form } = event;
        const fd = new FormData(form);
        const newUser = {
            user:{
                first_name: fd.get("first_name"),
                last_name: fd.get("last_name"),
                company: fd.get("company"),
                email: fd.get("email"),
                phone: fd.get("phone"),
                password: fd.get("password"),
                password_confirmation: fd.get("password_confirmation")
            }
        };
        
        User.create(newUser).then(res => {
            if (res.id) {
                if (typeof props.onSignUp === "function") props.onSignUp();
                props.history.push("/");
            };
        });
    };

    const fields = [
        [{
            "type": "text",
            "name": "first_name",
            "text": "First Name",
            "icon": "fas fa-user-circle"
        },
        {
            "type": "text",
            "name": "last_name",
            "text": "Last Name",
            "icon": "fas fa-user-circle"
        }],
        [{
            "type": "text",
            "name": "company",
            "text": "Company",
            "icon": "fas fa-building"
        },
        {
            "type": "email",
            "name": "email",
            "text": "Email",
            "icon": "fas fa-envelope"
        }],
        [{
            "type": "password",
            "name": "password",
            "text": "Password",
            "icon": "fas fa-lock"
        },
        {
            "type": "password",
            "name": "password_confirmation",
            "text": "Password Confirmation",
            "icon": "fas fa-lock"
        }]
    ];

    return(
        <Card className={form.card}>
            <form onSubmit={createUser} className={global.flexColumn}>
                {fields.map((row, i) => (
                    <div key={i} className={global.flexRow}>
                        {row.map(field => (
                            <FormField 
                                key={field.name}
                                type={field.type}
                                name={field.name}
                                text={field.text} 
                                icon={field.icon}
                            />
                        ))}
                    </div>
                ))}

                <Button 
                    variant="contained" 
                    color="secondary"
                    type="submit" 
                    className={form.button}
                >
                    Sign Up
                </Button>
            </form>

            <Divider />
            
            <Typography paragraph className={global.paragraph}>
                Already have an account? <Link to='/sign-in' className={global.link}>SIGN IN</Link>.
            </Typography>
        </Card>
    );
};

export default SignUpPage;
