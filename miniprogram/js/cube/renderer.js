import {
  PerspectiveCamera,
  Vector3,
  WebGLRenderer,
  OrbitControls,
  PointLight,
  AmbientLight,
} from 'three';

import {
  createTouchLine
} from './objects/touch-line';

import {
  createCubeGroup,
  resizeHeight
} from './objects/rubik/cube';

import {
  createLights,
  createOrbitController,
  createCamera
} from './scene';


export function renderScene(renderer, scene) {
  const viewCenter = new Vector3(0, 0, 0);
  const camera = createCamera(viewCenter);
  const lights = createLights();

  lights.forEach((light) => scene.add(light));

  createTouchLine()
    .then((touchLine) => scene.add(touchLine));

  const frontRubik = createCubeGroup('front-rubik');
  scene.add(frontRubik);
  resizeHeight(frontRubik, 0.5, 1);

  const endRubik = createCubeGroup('end-rubik');
  scene.add(endRubik);
  resizeHeight(endRubik, 0.5, -1);

  createOrbitController(camera, renderer, viewCenter);
  refreshScene(renderer, scene, camera, viewCenter);
}

function refreshScene(renderer, scene, camera, viewCenter) {
  renderer.clear();
  renderer.render(scene, camera);

  requestAnimationFrame(() => {
    refreshScene(renderer, scene, camera, viewCenter);
  });
}

export function createRenderer() {
  const renderer = new WebGLRenderer({
    antialias: true,
    // eslint-disable-next-line no-undef
    canvas: canvas,
  });

  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor('#000000', 1.0);
  renderer.setPixelRatio(window.devicePixelRatio);

  return renderer;
}