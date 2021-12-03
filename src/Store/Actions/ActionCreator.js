import * as ActionsType from './ActionsType';
import axios from 'axios';


export const Getlocations = () =>{

    return (dispatch) => {
        axios.get('https://real-estate-d090f-default-rtdb.firebaseio.com/locations.json').then( response => {
            if ( response ) {
                dispatch(getData(response.data));
            }
    }).catch( error => { console.error(error); });

    }        
};

const getData = (locations) =>{
    return {
        type: ActionsType.GET_DATA,
        locations: locations

    };

};