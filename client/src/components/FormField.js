import React from 'react';

import { FormControl, Icon, Input, InputAdornment, InputLabel, TextField } from '@material-ui/core';

import { formStyles } from './Styles';

const FormField = props => {
    const { type, name, text, icon } = props;

    const form = formStyles();

    return(
        <FormControl className={form.field}>
            <InputLabel htmlFor={type}>{text}</InputLabel>
            <Input
            id={name}
            name={name}
            type={type}
            startAdornment={
                <InputAdornment position="start">
                    <Icon className={icon} />
                </InputAdornment>
            }
            placeholder={text}
            />
        </FormControl>
    );
};

export default FormField;
