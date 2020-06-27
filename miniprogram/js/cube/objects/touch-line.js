import {
  TextureLoader,
  PlaneGeometry,
  MeshBasicMaterial,
  Mesh,
} from 'three';
import {
  canvas
} from '../../libs/adapter/window';

import {
  resizeHeight
} from './rubik/cube';

const realHeight = 64;
const realWidth = 750;

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

export function createTouchLine(originalWidth) {
  const width = originalWidth;
  const height = originalWidth / realWidth * realHeight;

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

const screenRect = {
  width: window.innerWidth,
  height: realHeight * window.innerWidth / realWidth,
};
screenRect.left = 0;
screenRect.top = window.innerHeight / 2 - screenRect.height / 2;

function isTouchLineHover(touchEvent) {
  const {
    clientX,
    clientY
  } = touchEvent.touches[0];

  let isHover = false;
  if (clientY >= (screenRect.top - screenRect.height) && clientY <= screenRect.top + screenRect.height + screenRect.height &&
    clientX >= screenRect.left && clientX <= screenRect.left + screenRect.width) {
    isHover = true;
  }
  return isHover;
}

export function initTouchLineEvent(touchLine, {
  frontRubik,
  endRubik
}, originHeight) {
  wx.onTouchMove(function (event) {
    if (!isTouchLineHover(event)) {
      return;
    }

    onTouchLineMove(touchLine, {
      frontRubik,
      endRubik
    }, originHeight, event);
  });
}

function onTouchLineMove(touchLine, {
  frontRubik,
  endRubik
}, originHeight, touchEvent) {
  const {
    clientY
  } = touchEvent.touches[0];
  const minPercent = 0.25;

  moveTouchLine(touchLine, minPercent, screenRect, originHeight, clientY);

  resizeHeight(frontRubik, originHeight, clientY / window.innerHeight, 1);
  resizeHeight(endRubik, originHeight, 1 - clientY / window.innerHeight, -1);
}

function moveTouchLine(touchLine, minPercent, screenRect, originHeight, y) {
  if (y < window.innerHeight * minPercent || y > window.innerHeight * (1 - minPercent)) {
    if (y < window.innerHeight * minPercent) {
      y = window.innerHeight * minPercent;
    } else {
      y = window.innerHeight * (1 - minPercent);
    }
  }

  const len = screenRect.top + screenRect.height / 2 - y;
  const percent = len / window.innerHeight;
  const len2 = originHeight * percent;

  touchLine.position.y += len2;
  screenRect.top = y - screenRect.height / 2;
}
