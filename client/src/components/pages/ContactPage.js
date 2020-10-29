import React, { useState, useEffect } from 'react';

import { Typography } from '@material-ui/core';

import Profile from '../../api/profile';

import { globalStyles } from '../Styles';

const ContactPage = () => {
    const [profile, setProfile] = useState([]);

    const global = globalStyles();

    useEffect(() => {
        Profile.get().then(profile => {
            setProfile(profile);
        });
    }, []);

    return(
        <>
            <Typography variant='h4'>Contact Us</Typography>

            <Typography paragraph>
                {profile.name}<br />
                {profile.position}<br />
                {profile.company}<br />
                {profile.email}<br />
                {profile.phone}<br />
                {profile.address}
            </Typography>
        </>
    );
};

export default  ContactPage;
