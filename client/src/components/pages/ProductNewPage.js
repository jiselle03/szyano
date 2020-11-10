import React, { useState } from 'react';

import { Typography } from '@material-ui/core';

import Product from '../../api/product';

import ProductForm from '../ProductForm';

const ProductNewPage = props => {
    const [errors, setErrors] = useState([]);

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
            <Typography variant="h4">
                Add Product
            </Typography>
            <ProductForm handleSubmit={createProduct} />
        </>
    );
};

export default ProductNewPage;
