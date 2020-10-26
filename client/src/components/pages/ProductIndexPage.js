import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Card, CardActions, CardContent,
         Button, Icon, IconButton, Typography
} from '@material-ui/core';

import Product from '../../api/product';

import { cardStyles, globalStyles } from '../Styles';

const ProductIndexPage = props => {
    const [products, setProducts] = useState([]);

    const card = cardStyles();
    const global = globalStyles();

    useEffect(() => {
        Product.all().then(products => { 
            setProducts(products);
          });
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
                        <IconButton aria-label='add to favorites' className={card.link}>
                            <Icon className='fas fa-heart' />
                        </IconButton>
                    </CardActions>
                    
                </Card>
                
            ))}
        </div>
    );
};

export default ProductIndexPage;
