import {
  AmbientLight,
  PointLight,
  Scene
} from '../threejs/three';
import {
  createRubik,
  createBasicCubes,
  createBasicCube,
} from './objects/rubik/index.js';

export function createScene() {
  const lights = createLights();
  const scene = new Scene();

  lights.forEach(light => scene.add(light));
  createBasicCubes().forEach(cube => scene.add(cube));

  return scene;
}

function createLights() {
  const pointLight = new PointLight(0xffffff, 1, 2000);
  pointLight.position.set(70, 112, 98);
  const ambientLight = new AmbientLight(0x333333);

  return [pointLight, ambientLight];
}
