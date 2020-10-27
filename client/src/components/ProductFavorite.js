import React, { useState, useEffect } from 'react';

import { Icon, IconButton } from '@material-ui/core';

import { cardStyles } from './Styles';

const ProductFavorite = props => {
    const { favoriteProduct, favorites, productID } = props;

    const [isFaved, setIsFaved] = useState(false);

    const card = cardStyles();

    const handleFavorite = event => {
        favoriteProduct(event);
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
            data-id={productID}
        >
            <Icon className='fas fa-heart' />
        </IconButton>
    );
};

export default ProductFavorite;
