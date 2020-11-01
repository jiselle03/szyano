import React, { useState, useEffect } from 'react';

import { Typography } from '@material-ui/core';

import Product from '../../api/product';

import ProductFavorite from '../ProductFavorite';

const ProductShowPage = props => {
    const { currentUser } = props;

    const [product, setProduct] = useState({});
    const [favorites, setFavorites] = useState([]);

    const ids = currentUser.favorites.map(fave => fave.product.id);

    const resetFavorites = favorites => setFavorites(favorites);

    useEffect(() => {
        Product.one(props.match.params.id).then(product => setProduct(product));
        if (currentUser) setFavorites(ids);
    }, [props.match.params.id]);

    return(
        <>
            <Typography variant='h4'>{product.title}</Typography>

            <Typography paragraph>{product.description}</Typography>
            <Typography paragraph>{product.model_number}</Typography>

            <ProductFavorite 
                resetFavorites={resetFavorites} 
                favorites={favorites} 
                productID={product.id}
            />
        </>
    );
};

export default ProductShowPage;
