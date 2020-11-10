import React from 'react';

import { Button, FormControl, Input, InputLabel, Typography, TextField } from '@material-ui/core';

import { formStyles, globalStyles } from './Styles';

const ProductForm = props => {
    const { createProduct } = props;

    const form = formStyles();
    const global = globalStyles();

    const fields = [
        {
            "name": "title",
            "text": "Title"
        },
        {
            "name": "category",
            "text": "Category"
        },
        {
            "name": "description",
            "text": "Description"
        },
        {
            "name": "model_number",
            "text": "Model Number"
        }
    ];

    return(
        <form onSubmit={createProduct} className={global.flexColumn}>
            {fields.map(field => (
                <FormControl className={form.field}>
                    <TextField
                        id={field.name}
                        name={field.name}
                        placeholder={field.text}
                        multiline
                        rows={field.name === "description" ? 10 : 1}
                        variant="outlined"
                    />
                </FormControl>
            ))}

            {["1", "2", "3"].map(number => (
                <>
                <Typography paragraph>
                    {`Image ${number}`}
                </Typography>
                <Button
                    variant="contained"
                    component="label"
                >
                    <InputLabel htmlFor={`image${number}`}>Upload File</InputLabel>
                    <Input
                        type="file"
                        style={{ display: "none" }}
                    />
                </Button>
                </>
            ))}

            <Button 
                variant="contained" 
                color="secondary"
                type="submit" 
                className={form.button}
            >
                Submit
            </Button>
        </form>
    );
};

export default ProductForm;
