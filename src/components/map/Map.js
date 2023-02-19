import React from "react";
import GoogleMaps from 'simple-react-google-maps'
import config from "../../config";

const Map = ({employee}) => {
    const {latitude, longitude} = employee
    console.log(parseFloat(latitude), parseFloat(longitude))
  return (
    <div className="">
        <GoogleMaps
        apiKey={config.apiKey}
        style={{height: '120px', width: "100%"}}
        zoom={3}
        center={{
            lat: parseFloat(latitude) ,
            lng: parseFloat(longitude),
        }}
        markers={{lat: parseFloat(latitude),lng: parseFloat(longitude),}}
        options={{
        }}
        />
    </div>
  )
}

export default Map