import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;
const primary = '#3f51b5';
const secondary = '#f50057';

export const globalStyles = makeStyles(theme => ({
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    link: {
        textDecoration: 'inherit',
        color: primary,
        fontWeight: 700,
    },
    root: {
        display: 'flex',
    },
    paragraph: {
        margin: '1rem 0',
    },
    toolbar: theme.mixins.toolbar,
}));

export const navStyles = makeStyles(theme => ({
    appBar: {
        [theme.breakpoints.up('md')]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        },
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
    container: {
        display: 'flex',
        flexDirection: 'column',
        // padding: '10% 0'
    },
    formField: {
        margin: '1rem 0'
    },
}));
