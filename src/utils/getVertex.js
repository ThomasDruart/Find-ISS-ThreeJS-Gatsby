import * as THREE from "three";

const getVertex = (latidude, longitude, radius) => {
  const vector = new THREE.Vector3().setFromSpherical(
    new THREE.Spherical(
      radius,
      THREE.MathUtils.degToRad(90 - latidude),
      THREE.MathUtils.degToRad(longitude)
    )
  );
  return vector;
};

export default getVertex;
