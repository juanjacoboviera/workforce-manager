import React from 'react'
import { GoogleMap, LoadScript, Marker  } from '@react-google-maps/api';

function Map({employee}) {
  const {latitude, longitude} = employee;
 
  const containerStyle = {
    width: '100%',
    height: '120px'
  };
  
  const center = {
    lat: parseFloat(latitude),
    lng: parseFloat(longitude)
  };

  return (
    <LoadScript
      googleMapsApiKey={process.env.REACT_APP_MAP_API_KEY}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={4}
      >
        <Marker position={center} />
        <></>
      </GoogleMap>
    </LoadScript>
  )
}

export default Map