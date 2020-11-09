import React, { useState } from 'react';

import { Button, FormControl, Input, InputLabel, Typography, TextField } from '@material-ui/core';

import Product from '../../api/product';

import { formStyles, globalStyles } from '../Styles';

const ProductNewPage = props => {
    const [errors, setErrors] = useState([]);

    const form = formStyles();
    const global = globalStyles();

    const createProduct = event => {
        event.preventDefault();
        const { currentTarget: form } = event;
        const fd = new FormData(form);
        setErrors([]);
        
        Product.create({
            title: fd.get("title"),
            category: fd.get("category"),
            description: fd.get("description"),
            model_number: fd.get("model_number"),
            image1: fd.get("image1"),
            image2: fd.get("image2"),
            image3: fd.get("image3")
        }).then(data => {
            if (!data.errors) {
                props.history.push(`/products/${data.id}`);
            } else {
                setErrors(data.errors);
            };
        });

        form.reset();
    };

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
        <>
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
        </>
    );
};

export default ProductNewPage;
