import React, { useEffect, useState } from 'react';
import { CssBaseline, Grid } from '@material-ui/core';
import Header from '../../Components/Header/Header';
import List from '../../Components/List/List';
import TravelMap from '../../Components/Map/Map';
import './App.css';
import { getPlacesData } from '../../api/index';


const App = () => {

  const [places, setPlaces] = useState([]);
  const [coords, setCoords] = useState(null);
  const [bounds, setBounds] = useState({});

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      setCoords({ lat: latitude, lng: longitude });
      var L = window.L;
      var coordinates = L.latLng(latitude, longitude);
      var corner1 = L.latLng(latitude + 2, longitude + 2),
        boundaries = L.latLngBounds(coordinates, corner1);
      boundaries = boundaries.extend(corner1);

      setBounds(boundaries);
    });
    // return function cleanup() {
    //   setBounds({});
    //   setCoords(null);
    // };

  }, []);

  useEffect(() => {
    console.log(coords);
    getPlacesData(bounds._southWest, bounds._northEast)
      .then((data) => {
        console.log(data);
        setPlaces(data);
      });
      // return function cleanup() {
      //   setPlaces([]);
      // };  

  }, [coords, bounds]);

  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: '100%' }}>
        <Grid item xs={12} md={4}>
          <List places={places} />
        </Grid>
        <Grid item xs={12} md={8}>
          <TravelMap
            setCoords={setCoords}
            setBounds={setBounds}
            coords={coords}
            bounds={bounds}
            places={places}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
