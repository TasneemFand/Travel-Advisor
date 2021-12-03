import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  paper: {
    padding: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100px',
  },
  mapContainer: {
    height: '100ch', width: '100%',
    backgroundColor: '#f8f8f8',borderRadius: '30px', padding: '0px',
  
  },
  markerContainer: {
    position: 'absolute', transform: 'translate(-50%, -50%)', zIndex: 1, '&:hover': { zIndex: 2 },
  },

  map: {
   height: '100ch', position: 'relative', borderRadius: '30px', marginTop: '15px',
  },

  pointer: {
    cursor: 'pointer',
  },
}));