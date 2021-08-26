import React, { Fragment, useState, useEffect } from "react";
import { GeoJsonGeometry } from "three-geojson-geometry";
import axios from "axios";

const ThreeGeo = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [geoMesh, setGeoMesh] = useState(null);

  const fetchGeoMesh = async () => {
    try {
      const { data } = await axios.get(
        "https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_admin_0_countries.geojson"
      );
      setIsLoading(false);
      setGeoMesh(data);
    } catch (err) {
      console.log(err);
      throw new Error();
    }
  };

  useEffect(() => {
    fetchGeoMesh();
  }, []);

  return (
    <>
      {!isLoading && (
        <Fragment>
          {geoMesh.features.map(({ geometry }, i) => (
            <lineSegments key={i} geometry={new GeoJsonGeometry(geometry, 100)}>
              <lineBasicMaterial color="#6b46e8" />
            </lineSegments>
          ))}
        </Fragment>
      )}
    </>
  );
};

export default ThreeGeo;
