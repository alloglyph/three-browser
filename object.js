const THREE = require("three");

let icosahedronGeometry = new THREE.IcosahedronGeometry(5);
let icosahedronMaterial = new THREE.MeshLambertMaterial({
  color: 0x994d00,
  emissive: 0x000000,
  wireframeLinewidth: 1,
  reflectivity: 1,
  refractionRatio: 0.98
});

let icosahedron = new THREE.Mesh(icosahedronGeometry, icosahedronMaterial);
let rotationGroup = new THREE.Group();
rotationGroup.add(icosahedron);

module.exports = {rotationGroup: rotationGroup};
