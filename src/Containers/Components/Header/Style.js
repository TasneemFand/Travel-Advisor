import { alpha, makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    title: {
        [theme.breakpoints.up('md')]: {
            display: 'block',
            fontSize: '1.25rem',
        },
        fontSize: '20px',
        fontWeight: '600',

        [theme.breakpoints.down('md')]: {
            fontSize: '20px',
        },

        [theme.breakpoints.down('xs')]: {
            display: 'none',
        },


    },
    Secondtitle: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: '8px',
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': { backgroundColor: alpha(theme.palette.common.white, 0.25) },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: { marginLeft: theme.spacing(3), width: 'auto' },
    },
    searchIcon: {
        padding: theme.spacing(0, 2), height: '100%', position: 'absolute', display: 'flex', alignItems: 'center', justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit', height: '40px',
    },
    inputInput: {
        '&:focus': { width: '30ch' },
        padding: theme.spacing(1, 1, 1, 0), paddingLeft: `calc(1em + ${theme.spacing(4)}px)`, transition: theme.transitions.create('width'), width: '100%', [theme.breakpoints.up('md')]: { width: 'auto' },
        [theme.breakpoints.down('sm')]: {
            width: '8ch', '&:focus': { width: '13ch' },
        },
    },
    RightIcons: {
        display: 'flex', alignItems: 'center', right: '40px', marginLeft: '20px', [theme.breakpoints.down('sm')]: { marginLeft: '0', marginRight: '12px', width: 'auto' },
    },
    IconBar: {
        height: '100%', pointerEvents: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: '8px',
        [theme.breakpoints.down('sm')]: { marginLeft: '6px', padding: '4px' }, [theme.breakpoints.down('xs')]: { marginLeft: '2px', padding: '2px' },
    },
    true: {
        display: 'none',
    },
    ButtonRoot: {
        color: 'unset', padding: '8px', cursor: 'pointer', pointerEvents: 'visible', '&:hover': { backgroundColor: 'rgba(255,255,255,.2)' },
    },
    sideNav: {
        marginTop: '-60px',
        zIndex: 3,
        marginRight: '0px',
        position: 'fixed',
    },
    link: {
        color: 'black',
        textDecoration: 'none',
    },

    toolbar: {
        display: 'flex', justifyContent: 'space-between',
    },
    AppBar: {
        backgroundColor: 'rgb(51,103,214)'
    }
}));
