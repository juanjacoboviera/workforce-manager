import React from "react";
import GoogleMaps from 'simple-react-google-maps'
import config from "../../config";


const Map = ({employee}) => {
    const {location: {coordinates: {latitude, longitude}}} = employee
  return (
    <div className="">
        <GoogleMaps
        apiKey={config.apiKey}
        style={{height: '100px', width: "100%"}}
        zoom={3}
        center={{
            lat: parseInt(latitude) ,
            lng: parseInt(longitude),
        }}
        markers={{lat: parseInt(latitude),lng: parseInt(longitude),}}
        options={{
        }}
        />
    </div>
  )
}

export default Map