import * as THREE from 'three';
import {
  createFaceWithColor
} from './face';

function createCubes(x, y, z, num, len, colors) {
  const leftUpX = x - (num * len / 2 - len / 2);
  const leftUpY = y + (num * len / 2 - len / 2);
  const leftUpZ = z + (num * len / 2 - len / 2);

  console.log(leftUpX, leftUpY, leftUpZ, 'xxxxxxxxx');

  let cubes = [];
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      for (let k = 0; k < num; k++) {

        const cube = createCube(colors, len);
        applyPosition(cube, leftUpX + i * len, leftUpY - j * len, leftUpZ - k * len);
        cubes.push(cube);

      }
    }
  }

  return cubes;
}

export function createCube(colors, cubeLen) {
  const materials = colors.map((faceColor) => {
    const face = createFaceWithColor(faceColor);
    const texture = new THREE.Texture(face);
    texture.needsUpdate = true;

    return new THREE.MeshLambertMaterial({
      map: texture
    });
  });

  const cubeGeo = new THREE.BoxGeometry(cubeLen, cubeLen, cubeLen);
  let cube = new THREE.Mesh(cubeGeo, materials);

  return cube;
}

export function applyPosition(cube, x, y, z) {
  cube.position.x = x;
  cube.position.y = y;
  cube.position.z = z;
}

const BasicParams = {
  x: 0,
  z: 0,
  y: 0,
  num: 3,
  len: 50,
  // 右、左、上、下、前、后
  colors: [
    '#dd422f',
    '#ffffff',
    '#ff6b02',
    '#fdcd02',
    '#3d81f7',
    '#019d53'
  ]
};

export function createBasicCubes() {
  return createCubes(BasicParams.x, BasicParams.y, BasicParams.z, BasicParams.num, BasicParams.len, BasicParams.colors);
}

export function createCubeGroup(type) {
  const cubes = createBasicCubes();
  const cubeGroup = new THREE.Group();

  cubeGroup.childType = type;
  cubes.forEach((cube) => cubeGroup.add(cube));

  return cubeGroup;
}

export function resizeHeight(cubeGroup, originHeight, percent, transformTag) {
  const minPercent = 0.25;
  if (percent < minPercent) {
    percent = minPercent;
  }
  if (percent > (1 - minPercent)) {
    percent = 1 - minPercent;
  }
  cubeGroup.scale.set(percent, percent, percent);
  cubeGroup.position.y = originHeight * (0.5 - percent / 2) * transformTag;
}
