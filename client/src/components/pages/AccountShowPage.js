import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Accordion, AccordionDetails, AccordionSummary, 
         Box, Icon, Paper, Typography,
         Table, TableBody, TableCell, TableContainer, TableRow
} from '@material-ui/core';

import { globalStyles } from '../Styles';

const AccountShowPage = props => {
    const { first_name, last_name, company, email, phone, favorites } = props.currentUser;

    const global = globalStyles();

    const profile = [
        {
            "title": "Name",
            "info": `${first_name} ${last_name}`
        },
        {
            "title": "Company",
            "info": company
        },
        {
            "title": "Email",
            "info": email
        },
        {
            "title": "Phone",
            "info": phone
        }
    ];

    console.log(favorites[0])

    return(
        <>
            <Typography variant="h4">Hello, {first_name}!</Typography>

            <Accordion>
                <AccordionSummary
                    expandIcon={<Icon className="fas fa-chevron-down" />}
                    aria-controls="profile-content"
                    id="profile-header"
                >
                    <Typography variant="h6">Account Details & Security</Typography>
                </AccordionSummary>
                <AccordionDetails className={global.flexColumn}>
                    <TableContainer component={Paper}>
                        <Table>
                            <TableBody>
                            {profile.map(row => (
                                <TableRow key={row.title}>
                                    <TableCell>
                                        <Box fontWeight={700}>{row.title}: </Box> 
                                    </TableCell>
                                    <TableCell>
                                        {row.info}
                                    </TableCell>
                                </TableRow>    
                            ))}
                            </TableBody>
                        </Table>
                    </TableContainer>

                    <Typography paragraph>Edit your profile or change your password here.</Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<Icon className="fas fa-chevron-down" />}
                    aria-controls="profile-content"
                    id="profile-header"
                >
                    <Typography variant="h6">Favorites</Typography>
                </AccordionSummary>
                <AccordionDetails className={global.flexColumn}>
                    {!favorites && (
                        <Typography paragraph>You do not have any favorites yet. <Link className={global.link} to='/products'>Browse our catalog</Link> to get started.</Typography>
                    )}
                    {favorites && (
                        favorites.map(favorite => (
                            <div key={favorite.product.id}>
                                <Typography variant='h6'>{favorite.product.title}</Typography>
                                <Typography paragraph>{favorite.product.description}</Typography>
                            </div>
                        ))
                    )}
                </AccordionDetails>
            </Accordion>
        </>
    );
};

export default AccountShowPage;
