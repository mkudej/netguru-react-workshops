import React, { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
import { getArticles } from "../services/wikipedia";

const Map = () => {
  const gdanskCenterPoint = {
    lat: 54.3478088,
    lng: 18.6598646,
  };
  const defaultZoom = 10;

  useEffect(() => {
    const fetchArticles = async () => {
      const articles = await getArticles(gdanskCenterPoint);
      console.log(articles);
    };
    fetchArticles();
  }, []);

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
