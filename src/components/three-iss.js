import React, { useEffect, useState } from "react";
import axios from "axios";

import getVertex from "../utils/getVertex";

const ThreeIss = () => {
  const [issLocation, setIssLocation] = useState(null);

  const poll = async () => {
    try {
      const res = await axios.get("/api/get-iss-location");
      setIssLocation(res.data.iss_now);
    } catch (err) {
      console.log(err);
      throw new Error();
    }
  };

  useEffect(() => {
    const pollInterval = setInterval(() => {
      poll();
    }, 5000);

    poll();

    return () => clearInterval(pollInterval);
  }, []);

  return (
    <>
      {issLocation && (
        <mesh
          position={getVertex(issLocation.latitude, issLocation.longitude, 120)}
        >
          <sphereGeometry args={[2]} />
          <meshBasicMaterial color="#000000" />
        </mesh>
      )}
    </>
  );
};

export default ThreeIss;
