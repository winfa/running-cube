const Context = canvas.getContext('webgl');
import {
  createRenderer,
  createCamera
} from '../js/cube/renderer';
import {
  createScene
} from './cube/scene';
import {
  renderScene
} from './cube/renderer';
import 'threejs/OrbitControls.js';

import * as THREE from './threejs/three';

export default class Main {
  constructor() {
    const viewCenter = new THREE.Vector3(0, 0, 0);

    renderScene(createRenderer(), createScene(), createCamera(viewCenter), viewCenter);
  }
}
