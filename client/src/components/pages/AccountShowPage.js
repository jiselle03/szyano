import React from 'react';

import { Box, Paper, Typography,
         Table, TableBody, TableCell, TableContainer, TableRow
} from '@material-ui/core';

import { globalStyles } from '../Styles';

const AccountShowPage = props => {
    const { first_name, last_name, company, email, phone } = props.currentUser;

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

    return(
        <>
            <Typography variant="h6">Profile</Typography>

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

            <Typography variant="h6">Security</Typography>

            <Paper className={global.paper}><Typography paragraph>Change your password.</Typography></Paper>

            <Typography variant="h6">Favorites</Typography>
            <Paper className={global.paper}>&nbsp;</Paper>
        </>
    );
};

export default AccountShowPage;
