import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Icon, IconButton } from '@material-ui/core';

import Favorite from '../api/favorite';

import { cardStyles, globalStyles } from './Styles';

const ProductFavorite = props => {
    const { currentUser, favorites, productID } = props;
    const [isFaved, setIsFaved] = useState(false);

    const card = cardStyles();
    const global = globalStyles();

    const handleFavorite = event => {
        event.preventDefault();
        const product = parseInt(event.target.parentNode.parentNode.dataset.product);
        const favorite = currentUser.favorites.filter(fave => fave.product_id === product)[0];

        const params = {
            product_id: productID,
            user_id: currentUser.id
        };

        isFaved ? Favorite.destroy(favorite.id) : Favorite.create(productID, params);
        setIsFaved(!isFaved);
    };

    useEffect(() => {
        const isFaved = favorites.includes(productID);
        setIsFaved(isFaved);
    }, [isFaved]);

    return(
        <IconButton 
            aria-label='add to favorites' 
            onClick={event => handleFavorite(event)}
            className={isFaved ? card.liked : card.unliked}
            data-product={productID}
        >
            <Icon className='fas fa-heart' />
        </IconButton>
    );
};

export default ProductFavorite;
