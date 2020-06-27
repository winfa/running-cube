import {
  TextureLoader,
  PlaneGeometry,
  MeshBasicMaterial,
  Mesh,
} from 'three';
import {
  canvas
} from '../../libs/adapter/window';

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
};

export function createTouchLine() {
  const width = 350;
  const height = width / 750 * 64;

  return loadResource('images/touch-line.png')
    .then((texture) => {
      const geometry = new PlaneGeometry(width, height);
      const material = new MeshBasicMaterial({
        map: texture,
        transparent: true
      });
      const plane = new Mesh(geometry, material);
      plane.position.set(0, 0, 0);

      return plane;
    });
}