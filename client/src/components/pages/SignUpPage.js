import React from 'react';

import User from '../../api/user';

const SignUpPage = props => {
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

    return(
        <form onSubmit={createUser}>
        </form>
    );
};

export default SignUpPage;
