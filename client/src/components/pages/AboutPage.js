import React, { useState, useEffect } from 'react';

import { Fab, Icon, Typography } from '@material-ui/core';

import Profile from '../../api/profile';

import { globalStyles } from '../Styles';

const AboutPage = () => {
    const [profile, setProfile] = useState([]);

    const global = globalStyles();

    useEffect(() => {
        Profile.get().then(profile => {
            setProfile(profile.about.split("//"));
        });
    }, []);

    return(
        <>
            <Typography variant='h5'>About Us</Typography>

            {profile.map((paragraph, i) => (
                <Typography paragraph key={i}>{paragraph}</Typography>
            ))}

            <Fab color="secondary" aria-label="edit" className={global.fab}>
                <Icon className="fas fa-pen" />
            </Fab>
        </>
    );
};

export default AboutPage;
