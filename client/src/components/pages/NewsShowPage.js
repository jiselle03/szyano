import React, { useState, useEffect } from 'react';

import { Typography } from '@material-ui/core';

import Post from '../../api/post';

const NewsShowPage = props => {
    const [post, setPost] = useState({});
    
    useEffect(() => {
        Post.one(props.match.params.id).then(post => { 
            setPost(post);
          });
    }, [props.match.params.id]);
    
    return(
        <>
            <Typography variant='h4'>{post.title}</Typography>

            <Typography paragraph>{post.category}</Typography>
            <Typography paragraph>{post.body}</Typography>
        </>
    );
};

export default NewsShowPage;
