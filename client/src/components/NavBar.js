import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { AppBar, Divider, Drawer, Hidden, Icon, IconButton,
         List, ListItem, ListItemIcon, ListItemText, 
         Toolbar, Typography 
       } from '@material-ui/core';

import Profile from '../api/profile';

import { globalStyles, navStyles } from './Styles';

const NavBar = props => {
    const { currentUser, onSignOut } = props;

    const [open, setOpen] = useState(false);
    const [menuOptions, setMenuOptions] = useState([]);
    const [hotline, setHotline] = useState("");

    const container = document.body;
    const global = globalStyles();
    const nav = navStyles();
    const toggleDrawer = () => setOpen(!open);

    const options = [
        {
            'text': 'Catalog',
            'icon': 'fas fa-book-open',
            'target': '/products'
        },
        {
            'text': 'About',
            'icon': 'fas fa-building',
            'target': '/about'
        },
        {
            'text': 'News',
            'icon': 'fas fa-newspaper',
            'target': '/news'
        },
        {
            'text': 'Contact Us',
            'icon': 'fas fa-question-circle',
            'target': '/contact'
        },
    ];

    const checkUser = currentUser => {
        if (currentUser) { 
            setMenuOptions([
                { 'text': 'Account', 'icon': 'fas fa-user-circle', 'target': '/account' }, 
                { 'text': 'Sign Out', 'icon': 'fas fa-sign-out-alt', 'target': '/' },
                ...options]);
        } else {
            setMenuOptions([
                {'text': 'Sign In', 'icon': 'fas fa-sign-in-alt', 'target': '/sign-in'},
                {'text': 'Sign Up', 'icon': 'fas fa-user-plus', 'target': '/sign-up'},
                ...options]);
        };
    };

    useEffect(() => {
        checkUser(currentUser);
        Profile.get().then(profile => {
            setHotline(profile.hotline);
        });
    }, [currentUser]);

    const drawer = (
        <div>
          <div className={global.toolbar} />

          <Divider />
          
          <List>
            {menuOptions.map(option => (
                <ListItem 
                    button 
                    component='a' 
                    href={option.target} 
                    onClick={option.target === '/' ? onSignOut : null} 
                    key={option.text}
                >
                    <ListItemIcon><Icon style={{'width': 'auto'}} className={option.icon} /></ListItemIcon>
                    <ListItemText primary={option.text} />
                </ListItem>
            ))}
          </List>
        </div>
    );

    return(
        <>
            <AppBar position="fixed" className={nav.appBar}>
                <Toolbar>
                    <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={toggleDrawer}
                    className={nav.menuButton}
                    >
                    <Icon className="fas fa-bars" />
                    </IconButton>
                    <header className={global.flexRow}>
                        <Typography variant="h4" noWrap>
                            <Link to="/" className={nav.header}>
                                    SZ Yano
                            </Link>
                        </Typography>
                        
                        <Typography paragraph style={{margin: 'auto 0'}}>
                            Hotline: {hotline}
                        </Typography>
                    </header>
                </Toolbar>
            </AppBar>
            <nav className={nav.drawer}>
                <Hidden mdUp implementation="css">
                    <Drawer
                        container={container}
                        variant="temporary"
                        anchor={'left'}
                        open={open}
                        onClose={toggleDrawer}
                        classes={{ paper: nav.drawerPaper }}
                        ModalProps={{ keepMounted: true }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>

                <Hidden xsDown implementation="css">
                    <Drawer
                        classes={{ paper: nav.drawerPaper }}
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
