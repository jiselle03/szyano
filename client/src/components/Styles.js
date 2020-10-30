import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;
const primary = '#3f51b5';
const secondary = '#f50057';

export const globalStyles = makeStyles(theme => ({
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        minHeight: '100vh',
    },
    link: {
        textDecoration: 'inherit',
        color: primary,
        fontWeight: 700,
    },
    flexColumn: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    flexRow: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
    },
    flexWrap: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    paragraph: {
        margin: '1rem 0',
        textAlign: 'center'
    },
    toolbar: theme.mixins.toolbar,
}));

export const navStyles = makeStyles(theme => ({
    appBar: {
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0,
        },
    },
    drawerPaper: {
        width: drawerWidth,
    },
    header: {
        textDecoration: 'inherit',
        color: 'inherit',
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
        display: 'none',
        },
    },
}));

export const formStyles = makeStyles(() => ({
    button: {
        margin: '1rem auto 2rem auto',
        width: '50%',
    },
    card: {
        padding: '3vh 5vw',
        width: '50vw',
        margin: 'auto',
    },
    field: {
        margin: '1rem',
    },
}));

export const cardStyles = makeStyles(theme => ({
    container: {
        margin: '1rem',
        padding: '1rem',
        [theme.breakpoints.down('sm')]: {
            width: '80%',
        },
        [theme.breakpoints.up('md')]: {
            width: '45%',
        },
        [theme.breakpoints.up('lg')]: {
            width: '30%',
        },
    },
    link: {
        textDecoration: 'inherit',
        fontWeight: 700,
    },
    liked: {
        textDecoration: 'inherit',
        color: secondary,
    },
    unliked: {
        textDecoration: 'inherit',
        color: 'inherit',
    },
}));
