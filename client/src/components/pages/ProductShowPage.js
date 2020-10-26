import React, { useState, useEffect } from 'react';

import { Typography } from '@material-ui/core';

import Product from '../../api/product';

const ProductShowPage = props => {
    const [product, setProduct] = useState({});

    useEffect(() => {
        Product.one(props.match.params.id).then(product => { 
            setProduct(product);
          });
    }, []);

    return(
        <>
            <Typography variant='h4'>{product.title}</Typography>

            <Typography paragraph>{product.description}</Typography>
            <Typography paragraph>{product.model_number}</Typography>
        </>
    );
};

export default ProductShowPage;
