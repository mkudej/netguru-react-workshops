import React from "react";
import GoogleMapReact from "google-map-react";

const Map = () => {
  const gdanskCenterPoint = {
    lat: 54.3478088,
    lng: 18.6598646,
  };
  const defaultZoom = 10;

  return (
    <>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_KEY }}
        defaultCenter={gdanskCenterPoint}
        defaultZoom={defaultZoom}
      ></GoogleMapReact>
    </>
  );
};

export default Map;
