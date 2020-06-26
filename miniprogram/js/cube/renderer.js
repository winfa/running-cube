import {
  PerspectiveCamera,
  Vector3,
  WebGLRenderer,
  OrbitControls,
} from '../threejs/three';


export function renderScene(renderer, scene, camera, viewCenter) {
  renderer.clear();
  renderer.render(scene, camera);
  createOrbitController(camera, renderer, viewCenter);

  requestAnimationFrame(() => {
    renderScene(renderer, scene, camera);
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
