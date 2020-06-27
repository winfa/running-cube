import {
  Vector3,
  WebGLRenderer,
} from 'three';

import {
  createTouchLine,
  initTouchLineEvent,
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

  const originHeight = Math.tan(22.5 / 180 * Math.PI) * camera.position.z * 2;
  const originWidth = originHeight * camera.aspect;

  createTouchLine(originWidth, originHeight)
    .then((touchLine) => {
      scene.add(touchLine);
      initTouchLineEvent(touchLine, {
        frontRubik,
        endRubik
      }, originHeight);
    });

  const frontRubik = createCubeGroup('front-rubik');
  scene.add(frontRubik);
  resizeHeight(frontRubik, originHeight, 0.5, 1);
  frontRubik.rotateY(45 / 180 * Math.PI);
  frontRubik.rotateOnAxis(new Vector3(1, 0, 1), 25 / 180 * Math.PI);

  const endRubik = createCubeGroup('end-rubik');
  scene.add(endRubik);
  resizeHeight(endRubik, originHeight, 0.5, -1);
  endRubik.rotateY((270 - 45) / 180 * Math.PI);
  endRubik.rotateOnAxis(new Vector3(1, 0, 1), 25 / 180 * Math.PI);

  // createOrbitController(camera, renderer, viewCenter);
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