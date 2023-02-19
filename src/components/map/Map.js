import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import config from "../../config";


function Map({employee}) {
  const {latitude, longitude} = employee;

  const containerStyle = {
    width: '120px',
    height: '120px'
  };
  
  const center = {
    lat: latitude,
    lng: longitude
  };

  return (
    <LoadScript
      googleMapsApiKey={config.apiKey}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={3}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    </LoadScript>
  )
}

export default Map