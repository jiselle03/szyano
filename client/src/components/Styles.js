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
        textAlign: 'center'
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
    container: {
        display: 'flex',
        flexDirection: 'column',
    },
    field: {
        margin: '1rem',
    },
    row: {
        display: 'flex',
        justifyContent: 'space-between',
    }
}));
