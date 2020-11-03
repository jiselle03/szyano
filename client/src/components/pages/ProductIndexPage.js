import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Button, Card, CardActions, CardContent, Fab, Icon, Typography } from '@material-ui/core';

import Product from '../../api/product';

import ProductFavorite from '../ProductFavorite';

import { cardStyles, globalStyles } from '../Styles';

const ProductIndexPage = props => {
    const { currentUser } = props;

    const [products, setProducts] = useState([]);
    const [favorites, setFavorites] = useState([]);

    const ids = currentUser.favorites.map(fave => fave.product.id);

    const card = cardStyles();
    const global = globalStyles();

    const resetFavorites = favorites => setFavorites(favorites);

    useEffect(() => {
        Product.all().then(products => setProducts(products));
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
                        
                        <ProductFavorite 
                            currentUser={currentUser} 
                            resetFavorites={resetFavorites} 
                            favorites={favorites} 
                            productID={product.id} 
                        />
                    </CardActions>
                </Card>
            ))}
            <Fab color="secondary" aria-label="add" className={global.fab}>
                <Icon className="fas fa-plus" />
            </Fab>
        </div>
    );
};

export default ProductIndexPage;
