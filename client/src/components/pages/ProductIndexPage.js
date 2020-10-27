import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Button, Card, CardActions, CardContent, Typography } from '@material-ui/core';

import Product from '../../api/product';
import Favorite from '../../api/favorite';

import ProductFavorite from '../ProductFavorite';

import { cardStyles, globalStyles } from '../Styles';

const ProductIndexPage = props => {
    const { currentUser } = props;

    const [products, setProducts] = useState([]);
    const [favorites, setFavorites] = useState([]);

    const ids = currentUser.favorites.map(fave => fave.product.id);

    const card = cardStyles();
    const global = globalStyles();

    const favoriteProduct = event => {
        event.preventDefault();
        const id = parseInt(event.target.parentNode.parentNode.dataset.id);
        const favorite = currentUser.favorites.filter(fave => fave.product.id === id)[0];

        const params = {
            product_id: id,
            user_id: currentUser.id
        };

        if (favorites.includes(id)) {
            Favorite.destroy(favorite.id);
            const filteredFaves = favorites.filter(productId => productId !== parseInt(id));
            setFavorites(filteredFaves);
        } else {
            Favorite.create(id, params);
            setFavorites([...favorites, parseInt(id)]);
        };
    };

    useEffect(() => {
        Product.all().then(products => {
            setProducts(products);
        });
        if (currentUser) setFavorites(ids);
    }, []);

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
                        
                        <ProductFavorite favoriteProduct={favoriteProduct} favorites={favorites} productID={product.id} />
                    </CardActions>
                </Card>
                
            ))}
        </div>
    );
};

export default ProductIndexPage;
