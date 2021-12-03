import React from 'react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab/Rating';
import './Map.css';
import { useMediaQuery } from '@material-ui/core';

const TravelMap = ({ setCoords, setBounds, coords, bounds, places }) => {

    const isMobile = useMediaQuery('(min-width:600px)');
    let MapIcon = leaflet.icon({ iconUrl: require('../../Assets/Images/299087_marker_map_icon.svg').default, iconSize: [40, 40] });
    let RestaurantIcon = leaflet.icon({ iconUrl: require('../../Assets/Images/restaurant-svgrepo-com.svg').default, iconSize: [40, 40] });
    let HotelIcon = leaflet.icon({ iconUrl: require('../../Assets/Images/hotel-svgrepo-com.svg').default, iconSize: [40, 40] });
    let marker = null;

    if (places) {
        places.map((place, i) => {
            !isMobile ? (
                marker = <Marker
                    position={[Number(place.latitude), Number(place.longitude)]}
                    key={i}
                    icon={RestaurantIcon}
                >
                    <Popup leaflet>
                        {place.name}<br /><Rating name="read-only" size="small" value={Number(place.rating)} readOnly />

                    </Popup>
                </Marker>
            ) : marker = (
                <Marker
                    position={[Number(place.latitude), Number(place.longitude)]}
                    key={i}
                    icon={MapIcon}
                >
                    <Popup leaflet>
                        <Paper elevation={3}>
                            <Typography variant="subtitle2" gutterBottom> {place.name}</Typography>
                            <img
                                src={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
                            />
                            <Rating name="read-only" size="small" value={Number(place.rating)} readOnly />
                        </Paper>
                    </Popup>
                </Marker>
            )
        });
    }
    return (
        <div className="mapContainer" >
            <Map className="map"
                center={coords}
                zoom={14}>
                <TileLayer
                    url="https://api.mapbox.com/styles/v1/tasnimfandakli/cktn46c4jap4s17maz4jmyau0/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoidGFzbmltZmFuZGFrbGkiLCJhIjoiY2tyM2F1MXdkMmtjeDJwbzZuYjI4em1oaSJ9.AmDhqkloJ6-Qx_YJSQvQbQ"
                />
                <Marker
                    position={coords}
                    icon={MapIcon}
                    draggable='true'
                    ondragend={(e) => {
                        console.log(e.target._latlng, "dragged");
                        setCoords({ lat: e.target._latlng.lat, lng: e.target._latlng.lng });
                    }}
                >
                    <Popup leaflet>
                        <h1 className="title">The Center</h1><br />Easily draggable to find places around it.
                    </Popup>
                </Marker>
                {marker}
            </Map>
        </div >
    );
}

export default TravelMap;
