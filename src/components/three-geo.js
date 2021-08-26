import React, { Fragment, useState, useEffect } from "react";
import { GeoJsonGeometry } from "three-geojson-geometry";
import axios from "axios";

const ThreeGeo = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [geoJson, setGeoJson] = useState(null);

  //todo : axios geoJson

  useEffect(() => {}, []);

  return <>{!isLoading && <Fragment></Fragment>}</>;
};

export default ThreeGeo;
