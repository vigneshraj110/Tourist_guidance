import React, {  useState } from "react";
import Map, {
  Marker,
} from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import location from "../../assests/location.png";

function CustomMap({lat,lng}) {


  return (
    <div>
      <h4>Location</h4>
      <Map
        mapboxAccessToken="pk.eyJ1Ijoia2lydXRoaWthZyIsImEiOiJjbDkydzlnMmQxMHhmM29xaDNscDI3NzYwIn0.7nG-L0LTVEcxQPUfQaze3g"
        style={{
          width: "80vw",
          height: "80vh",
          overflow:"hidden"
        }}
        initialViewState={{
          longitude: lng,
          latitude: lat,
          zoom: 11,
        }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      >
        <Marker longitude={lng} latitude={lat} >
          <img src={location} height="20px" width="20px " />
        </Marker>
      </Map> 
    </div>
  );
}
export default CustomMap;