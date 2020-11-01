import React, { useState, useEffect } from 'react';

import { Icon, IconButton } from '@material-ui/core';

import Favorite from '../api/favorite';

import { cardStyles } from './Styles';

const ProductFavorite = props => {
    const { currentUser, resetFavorites, favorites, productID } = props;

    const [isFaved, setIsFaved] = useState(false);

    const card = cardStyles();

    const handleFavorite = event => {
        event.preventDefault();
        const id = parseInt(event.target.parentNode.parentNode.dataset.id);
        const favorite = currentUser.favorites.filter(fave => fave.product.id === id)[0];

        const params = {
            product_id: id,
            user_id: currentUser.id
        };

        console.log(currentUser.favorites, id)
        if (favorites.includes(id)) {
            Favorite.destroy(favorite.id);
            const filteredFaves = favorites.filter(productId => productId !== parseInt(id));
            resetFavorites(filteredFaves);
        } else {
            Favorite.create(id, params);
            resetFavorites([...favorites, parseInt(id)]);
        };
        
        setIsFaved(!isFaved);
    };

    useEffect(() => {
        setIsFaved(favorites.includes(productID));
    }, [isFaved]);

    return(
        <IconButton 
            aria-label='add to favorites' 
            onClick={event => handleFavorite(event)}
            className={isFaved ? card.liked : card.unliked}
            data-id={productID}
        >
            <Icon className='fas fa-heart' />
        </IconButton>
    );
};

export default ProductFavorite;
