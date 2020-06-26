import {
  BoxGeometry,
  Mesh,
  MeshLambertMaterial
} from '../../threejs/three';

export function createCube() {
  const geometry = new BoxGeometry(100, 100, 100);
  const material = new MeshLambertMaterial({
    color: 0xff0000
  });
  const cube = new Mesh(geometry, material);
  cube.position.set(0, 0, 0);
  cube.name = 'cube';

  return cube;
}