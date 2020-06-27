import {
  AmbientLight,
  PointLight,
  Scene,
  PerspectiveCamera,
  OrbitControls,
} from 'three';
import {
  createRubik,
  createBasicCubes,
  createCubeGroup,
  createBasicCube,
} from './objects/rubik/index.js';

export function createScene() {
  const scene = new Scene();
  return scene;
}

export function createCamera(viewCenter) {
  const camera = new PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
  camera.position.set(0, 0, 600);
  camera.up.set(0, 1, 0);
  camera.lookAt(viewCenter);

  return camera;
}

export function createLights() {
  const pointLight = new PointLight(0xffffff, 1, 2000);
  pointLight.position.set(70, 112, 98);
  const ambientLight = new AmbientLight(0x333333);

  return [pointLight, ambientLight];
}

export function createOrbitController(camera, renderer, viewCenter) {
  const orbitController = new OrbitControls(camera, renderer.domElement);
  orbitController.enableZoom = false;
  orbitController.rotateSpeed = 2;
  orbitController.target = viewCenter;
}