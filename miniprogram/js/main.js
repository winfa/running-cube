// eslint-disable-next-line no-undef
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

import * as THREE from 'three';

export default class Main {
  constructor() {
    this.render();
  }

  render() {
    const render = createRenderer();
    const scene = createScene();

    renderScene(render, scene);
  }
}
