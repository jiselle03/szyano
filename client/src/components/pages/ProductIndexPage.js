import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Button, Card, CardActions, CardContent, Typography } from '@material-ui/core';

import Product from '../../api/product';

import ProductFavorite from '../ProductFavorite';

import { cardStyles, globalStyles } from '../Styles';

const ProductIndexPage = props => {
    const { currentUser } = props;
    const [products, setProducts] = useState([]);
    const [favorites, setFavorites] = useState([]);

    const card = cardStyles();
    const global = globalStyles();

    useEffect(() => {
        Product.all().then(products => setProducts(products));
    }, []);

    useEffect(() => {
        if (currentUser) {
            currentUser.favorites.map(fave => setFavorites([...favorites, fave.product_id]));
        };
    }, [currentUser]);

    return(
        <div className={global.flexWrap}>
            {products.map(product => (
                <Card key={product.title} className={`${global.flexColumn} ${card.container}`}>
                    <CardContent>
                        <Typography variant='h6'>{product.title}</Typography>

                        <Typography paragraph>{product.description}</Typography>
                    </CardContent>

                    <CardActions className={`${global.flexRow}`}>
                        <Link to={`/products/${product.id}`} className={card.link}>
                            <Button>View Product</Button>
                        </Link>
                        
                        <ProductFavorite currentUser={currentUser} favorites={favorites} productID={product.id} />
                    </CardActions>
                </Card>
                
            ))}
        </div>
    );
};

export default ProductIndexPage;
