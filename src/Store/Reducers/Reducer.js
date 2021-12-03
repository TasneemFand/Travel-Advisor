import * as ActionsType from '../Actions/ActionsType';

const InitState = {
    locations: []

};

const Reducer = (state=InitState , action) =>{

    switch(action.type) {

        case ActionsType.GET_DATA:
            return {
                ...state,
                locations: action.locations

            };
        default:
            return state; 
    }

}

export default Reducer;