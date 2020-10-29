import React, { useState, useEffect } from 'react';

import { Typography } from '@material-ui/core';

import Profile from '../../api/profile';

const AboutPage = () => {
    const [profile, setProfile] = useState([]);

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
        </>
    );
};

export default AboutPage;
