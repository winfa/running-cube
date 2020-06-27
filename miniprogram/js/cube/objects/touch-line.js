import {
  TextureLoader,
  PlaneGeometry,
  MeshBasicMaterial,
  Mesh,
} from '../../threejs/three';

const loadResource = function (source) {
  const loader = new TextureLoader();

  return new Promise((resolve, reject) => {
    loader.load(source, function (texture) {
      resolve(texture);
    }, function (xhr) {
      console.log((xhr.loaded / xhr.total * 100) + '% loaded');
    }, function (xhr) {
      reject(xhr);
    });
  });
}

export function createTouchLine() {
  return loadResource('images/touch-line.png')
    .then(texture => {
      const geometry = new PlaneGeometry(750, 64);
      const material = new MeshBasicMaterial({ map: texture, transparent: true });
      const plane = new Mesh(geometry, material);
      plane.position.set(0, 0, 0);

      return plane;
    });
}
