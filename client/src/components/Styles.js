import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

export const appStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
}));

export const navStyles = makeStyles(theme => ({
    appBar: {
        [theme.breakpoints.up('md')]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        },
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    drawer: {
        [theme.breakpoints.up('md')]: {
        width: drawerWidth,
        flexShrink: 0,
        },
    },
    drawerPaper: {
        width: drawerWidth,
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
        display: 'none',
        },
    },
    toolbar: theme.mixins.toolbar,
}));

export const formStyles = makeStyles(theme => ({
    button: {
        margin: '1rem auto',
        width: '50%',
    },
    card: {
        // margin: '10% 25%',
        padding: '3% 10%',
        position: 'fixed',
        top: '25vh',
        bottom: '25vh',
        left: '40%',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        // padding: '10% 0'
    },
    formField: {
        margin: '1rem 0'
    },
}));
