import React, { useState } from 'react';

import { AppBar, Divider, Drawer, Hidden, Icon, IconButton,
         List, ListItem, ListItemIcon, ListItemText, 
         Toolbar, Typography 
       } from '@material-ui/core';

import useStyles from './Styles';

const NavBar = props => {
    // const { currentUser, onSignOut } = props;
    const [open, setOpen] = useState(false);

    const container = document.body;
    const classes = useStyles();
    const handleDrawerToggle = () => setOpen(!open);

    const menuOptions = [
        {
            "text": "Account", 
            "icon": "fas fa-user-circle"
        },
        {
            "text": "Products",
            "icon": "fas fa-book-open"
        },
        {
            "text": "About",
            "icon": "fas fa-building"
        },
        {
            "text": "News",
            "icon": "fas fa-newspaper"
        },
        {
            "text": "Support",
            "icon": "fas fa-question-circle"
        },
    ];

    const drawer = (
        <div>
          <div className={classes.toolbar} />

          <Divider />
          
          <List>
            {menuOptions.map(option => (
              <ListItem button key={option.text}>
                <ListItemIcon><Icon className={option.icon} /></ListItemIcon>
                <ListItemText primary={option.text} />
              </ListItem>
            ))}
          </List>
        </div>
    );

    return(
        <>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    className={classes.menuButton}
                    >
                    <Icon className="fas fa-bars" />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        SZ Yano
                    </Typography>
                </Toolbar>
            </AppBar>
            <nav className={classes.drawer}>
                <Hidden mdUp implementation="css">
                    <Drawer
                        container={container}
                        variant="temporary"
                        anchor={'left'}
                        open={open}
                        onClose={handleDrawerToggle}
                        classes={{ paper: classes.drawerPaper }}
                        ModalProps={{ keepMounted: true }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>

                <Hidden xsDown implementation="css">
                    <Drawer
                        classes={{ paper: classes.drawerPaper }}
                        variant="permanent"
                        open
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
        </>
    );
};

export default NavBar;
