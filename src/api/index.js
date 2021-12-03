
import axios from 'axios';

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';


export const getPlacesData = async (sw, ne) => {
    try {
        const { data: { data } } = await axios.get(URL, {
            params: {
                bl_latitude: sw.lat,
                tr_latitude: ne.lat,
                bl_longitude: sw.lng,
                tr_longitude: ne.lng,
                //latitude: sw.lat,
                //longitude: sw.lng,

            },
            headers: {
                'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
                'x-rapidapi-key': '496145d000msh2d62cfa20b73b59p1596b3jsnb6021042ff3e'
            }
        });

        return data;

    } catch (error) {

        console.log(error);

    }
}