import React, { useState, useEffect } from 'react';

import { Fab, Icon, Typography } from '@material-ui/core';

import Post from '../../api/post';

import { globalStyles } from '../Styles';

const NewsShowPage = props => {
    const [post, setPost] = useState({});

    const global = globalStyles();
    
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

            <Fab color="secondary" aria-label="edit" className={global.fab}>
                <Icon className="fas fa-pen" />
            </Fab>
        </>
    );
};

export default NewsShowPage;
