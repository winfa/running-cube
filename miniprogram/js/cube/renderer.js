import {
  PerspectiveCamera,
  Vector3,
  WebGLRenderer,
  OrbitControls,
  PointLight,
  AmbientLight,
} from '../threejs/three';

import {
  createTouchLine
} from './objects/touch-line';


export function renderScene(renderer, scene, camera, viewCenter) {
  const lights = createLights();
  createTouchLine()
    .then(touchLine => scene.add(touchLine));

  lights.forEach(light => scene.add(light));
  scene.add(createCubeGroup('front-rubik'));

  refreshScene(renderer, scene, camera, viewCenter);
}

function refreshScene(renderer, scene, camera, viewCenter) {
  renderer.clear();
  renderer.render(scene, camera);
  createOrbitController(camera, renderer, viewCenter);

  requestAnimationFrame(() => {
    refreshScene(renderer, scene, camera, viewCenter);
  });
}

export function createRenderer() {
  const renderer = new WebGLRenderer({
    antialias: true,
    canvas: canvas,
  });

  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor('#000000', 1.0);
  renderer.setPixelRatio(window.devicePixelRatio);
  //document.getElementById('retina').appendChild(renderer.domElement);

  return renderer;
}

export function createCamera(viewCenter) {
  const camera = new PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
  camera.position.set(200, 400, 600);
  camera.up.set(0, 1, 0);
  camera.lookAt(viewCenter);

  return camera;
}

export function createOrbitController(camera, renderer, viewCenter) {
  const orbitController = new OrbitControls(camera, renderer.domElement);
  orbitController.enableZoom = false;
  orbitController.rotateSpeed = 2;
  orbitController.target = viewCenter;
}

function createLights() {
  const pointLight = new PointLight(0xffffff, 1, 2000);
  pointLight.position.set(70, 112, 98);
  const ambientLight = new AmbientLight(0x333333);

  return [pointLight, ambientLight];
}
