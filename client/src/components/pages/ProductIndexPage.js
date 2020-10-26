import React, { useState, useEffect } from 'react';

import { Card, Divider } from '@material-ui/core';

import Product from '../../api/product';

import { globalStyles } from '../Styles';

const ProductIndexPage = props => {
    const [products, setProducts] = useState([]);

    const global = globalStyles();

    useEffect(() => {
        Product.all().then(products => { 
            setProducts(products);
          });
    }, []);

    return(
        <div className={global.flexWrap}>
            {products.map(product => (
                <Card key={product.title} className={global.card}>
                    {product.title}
                    <Divider />
                    {product.description}
                </Card>
            ))}
        </div>
    );
};

export default ProductIndexPage;
