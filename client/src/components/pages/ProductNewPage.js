import React from 'react';

import { Button, Typography } from '@material-ui/core';

import Product from '../../api/product';

import FormField from '../FormField';

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

    return(
        <>
            <form onSubmit={createProduct} className={global.flexColumn}>
                <Button
                    variant="contained"
                    component="label"
                >
                Upload File
                <input
                    type="file"
                    style={{ display: "none" }}
                />
                </Button>
            </form>
        </>
    );
};

export default ProductNewPage;
