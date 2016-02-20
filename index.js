const THREE = require("three");
const {rotationGroup} = require("./object.js");

const mm = 0.1;
const cm = 1.0;

let mode = "+pitch";

let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
let renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

scene.add(rotationGroup);

let ambientLight = new THREE.AmbientLight(0x404040);
let lights = [];
lights[0] = new THREE.PointLight( 0xffffff, 1, 0 );
lights[1] = new THREE.PointLight( 0xffffff, 1, 0 );
lights[2] = new THREE.PointLight( 0xffffff, 1, 0 );

lights[0].position.set( 0, 200, 0 );
lights[1].position.set( 100, 200, 100 );
lights[2].position.set( -100, -200, -100 );

scene.add(lights[0])
scene.add(lights[1])
scene.add(lights[2])

camera.position.z = 13; // the camera is 13 cm from the origin on the z axis

let render = function() {
  requestAnimationFrame(render);

  switch (mode) {
      case "+pitch":
          rotationGroup.rotation.x += 0.01;
          break;
      case "-pitch":
          rotationGroup.rotation.x -= 0.01;
          break;
      case "+roll":
          rotationGroup.rotation.y += 0.01;
          break;
      case "-roll":
          rotationGroup.rotation.y -= 0.01;
          break;
      case "+yaw":
          rotationGroup.rotation.z += 0.01;
          break;
      case "-yaw":
          rotationGroup.rotation.z -= 0.01;
          break;
      default:
          break;
  }
  renderer.render(scene, camera);
};

render();

["pitch", "yaw", "roll"].forEach((axis) => {
    document.getElementById(`${axis}-button`).addEventListener('click', () => {
        switch (mode) {
            case `+${axis}`:
                mode = `-${axis}`; break;
            case `-${axis}`:
                mode = ""; break;
            default:
                mode = `+${axis}`; break;
        }
    });
});
