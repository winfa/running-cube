import {
  AmbientLight,
  PointLight,
  Scene
} from '../threejs/three';
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
