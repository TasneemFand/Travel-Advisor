import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1), minWidth: 120, marginBottom: '30px',color: 'rgb(65 62 62 / 87%)',
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    loading: {
        height: '600px', display: 'flex', justifyContent: 'center', alignItems: 'center',
    },
    container: {
        padding: '25px',
    },
    marginBottom: {
        marginBottom: '30px',
    },
    list: {
        height: '70ch', overflow: 'auto', position: 'relative',
    },
}));
