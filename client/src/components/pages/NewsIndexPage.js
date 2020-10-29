import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Button, Card, CardActions, CardContent, Typography } from '@material-ui/core';

import Post from '../../api/post';

import { cardStyles, globalStyles } from '../Styles';

const NewsIndexPage = props => {
    const { currentUser } = props;

    const [posts, setPosts] = useState([]);

    const card = cardStyles();
    const global = globalStyles();

    useEffect(() => {
        Post.all().then(posts => {
            setPosts(posts);
        });
    }, []);

    return(
        <div className={global.flexWrap}>
            {posts.map(post => (
                <Card key={post.title} className={`${global.flexColumn} ${card.container}`}>
                    <CardContent>
                        <Typography variant='h6'>{post.title}</Typography>

                        <Typography paragraph>{post.description}</Typography>
                    </CardContent>

                    <CardActions className={`${global.flexRow}`}>
                        <Link to={`/news/${post.id}`} className={card.link}>
                            <Button>Read More</Button>
                        </Link>
                    </CardActions>
                </Card>    
            ))}
        </div>
    );
};

export default NewsIndexPage;
