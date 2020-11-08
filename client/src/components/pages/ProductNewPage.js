import React, { useState } from 'react';

import { Button, FormControl, Input, InputLabel, Typography } from '@material-ui/core';

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
            "type": "title",
            "text": "Title"
        },
        {
            "type": "category",
            "text": "Category"
        },
        {
            "type": "description",
            "text": "Description"
        },
        {
            "type": "model_number",
            "text": "Model Number"
        }
    ];

    return(
        <>
            <form onSubmit={createProduct} className={global.flexColumn}>
                {fields.map(field => (
                    <FormControl className={form.field}>
                        <InputLabel htmlFor={field.type}>{field.text}</InputLabel>
                        <Input
                            id={field.type}
                            name={field.type}
                            type={field.type}
                            placeholder={field.text}
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
                        <input
                            type={`image${number}`}
                            style={{ display: "none" }}
                        />
                    </Button>
                    </>
                ))}
            </form>
        </>
    );
};

export default ProductNewPage;
