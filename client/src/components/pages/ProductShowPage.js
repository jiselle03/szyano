import React, { useState, useEffect } from 'react';

import { Fab, Icon, Typography } from '@material-ui/core';

import Product from '../../api/product';

import ProductFavorite from '../ProductFavorite';

import { globalStyles } from '../Styles';

const ProductShowPage = props => {
    const { currentUser } = props;

    const [product, setProduct] = useState({});
    const [favorites, setFavorites] = useState([]);

    const ids = currentUser.favorites.map(fave => fave.product.id);

    const resetFavorites = favorites => setFavorites(favorites);

    const global = globalStyles();

    useEffect(() => {
        Product.one(props.match.params.id).then(product => setProduct(product));
        if (currentUser) setFavorites(ids);
    }, [props.match.params.id]);

    return(
        <>
            <div className={global.flexRow}>
                <Typography variant='h4'>{product.title}</Typography>
                <ProductFavorite 
                    resetFavorites={resetFavorites} 
                    favorites={favorites} 
                    productID={product.id}
                />
            </div>

            <Typography paragraph>{product.description}</Typography>
            <Typography paragraph>{product.model_number}</Typography>

            <Fab color="secondary" aria-label="edit" className={global.fab}>
                <Icon className="fas fa-pen" />
            </Fab>
        </>
    );
};

export default ProductShowPage;
