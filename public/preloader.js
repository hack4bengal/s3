"use strict";
/* globals THREE, $, TweenLite, Power3, TimelineMax  */

let camera, scene, renderer;
let plane;
let willAnimate = true;
//let closingtime = 85;
let raycaster = new THREE.Raycaster();
let normalizedMouse = {
  x: 0,
  y: -180,
};

let darkBlue = {
  r: 7,
  g: 11,
  b: 18,
};

let baseColorRGB = darkBlue;
let baseColor =
  "rgb(" + baseColorRGB.r + "," + baseColorRGB.g + "," + baseColorRGB.b + ")";
let nearStars, farStars, farthestStars;

function init() {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  renderer = new THREE.WebGLRenderer();

  // Scene initialization
  camera.position.z = 50;

  renderer.setClearColor("#000000", 1.0);
  renderer.setSize(window.innerWidth - 7, window.innerHeight - 7);
  renderer.setPixelRatio(window.devicePixelRatio);

  document.body.appendChild(renderer.domElement);

  // Lights
  let topLight = new THREE.DirectionalLight(0xff0000, 1);
  topLight.position.set(0, 1, 1).normalize();
  scene.add(topLight);

  let bottomLight = new THREE.DirectionalLight(0xfb0000, 0.4);
  bottomLight.position.set(1, -1, 1).normalize();
  scene.add(bottomLight);

  let skyLightRight = new THREE.DirectionalLight(0xfa0000, 0.2);
  skyLightRight.position.set(-1, -1, 0.2).normalize();
  scene.add(skyLightRight);

  let skyLightCenter = new THREE.DirectionalLight(0x666666, 0.2);
  skyLightCenter.position.set(-0, -1, 0.2).normalize();
  scene.add(skyLightCenter);

  let skyLightLeft = new THREE.DirectionalLight(0x666666, 0.2);
  skyLightLeft.position.set(1, -1, 0.2).normalize();
  scene.add(skyLightLeft);

  // Mesh creation
  let geometry = new THREE.PlaneGeometry(400, 400, 70, 70);
  let darkBlueMaterial = new THREE.MeshPhongMaterial({
    color: 0xffffff,
    shading: THREE.FlatShading,
    side: THREE.DoubleSide,
    vertexColors: THREE.FaceColors,
  });

  geometry.vertices.forEach(function (vertice) {
    vertice.x += (Math.random() - 0.5) * 4;
    vertice.y += (Math.random() - 0.5) * 4;
    vertice.z += (Math.random() - 0.5) * 4;
    vertice.dx = Math.random() - 0.5;
    vertice.dy = Math.random() - 0.5;
    vertice.randomDelay = Math.random() * 5;
  });

  for (var i = 0; i < geometry.faces.length; i++) {
    geometry.faces[i].color.setStyle(baseColor);
    geometry.faces[i].baseColor = baseColorRGB;
  }

  plane = new THREE.Mesh(geometry, darkBlueMaterial);
  scene.add(plane);
}

let timer = 0;

function render() {
  if (willAnimate) {
    requestAnimationFrame(render);
  }

  timer += 0.01;
  let vertices = plane.geometry.vertices;

  for (let i = 0; i < vertices.length; i++) {
    // Ease back to original vertice position while still maintaining sine wave
    vertices[i].x -=
      (Math.sin(timer + vertices[i].randomDelay) / 40) * vertices[i].dx;
    vertices[i].y +=
      (Math.sin(timer + vertices[i].randomDelay) / 40) * vertices[i].dy;
    // ((vertices[i].x - vertices[i].originalPosition.x) * 0.1) +
  }

  // Determine where ray is being projected from camera view
  raycaster.setFromCamera(normalizedMouse, camera);

  // Send objects being intersected into a variable
  let intersects = raycaster.intersectObjects([plane]);

  if (intersects.length > 0) {
    let faceBaseColor = intersects[0].face.baseColor;

    plane.geometry.faces.forEach(function (face) {
      face.color.r *= 255;
      face.color.g *= 255;
      face.color.b *= 255;

      face.color.r += (faceBaseColor.r - face.color.r) * 0.01;
      face.color.g += (faceBaseColor.g - face.color.g) * 0.01;
      face.color.b += (faceBaseColor.b - face.color.b) * 0.01;

      let rInt = Math.floor(face.color.r);
      let gInt = Math.floor(face.color.g);
      let bInt = Math.floor(face.color.b);

      let newBasecol = "rgb(" + rInt + "," + gInt + "," + bInt + ")";
      face.color.setStyle(newBasecol);
    });
    plane.geometry.colorsNeedUpdate = true;

    intersects[0].face.color.setStyle("#aaa");
    plane.geometry.colorsNeedUpdate = true;
  }

  plane.geometry.verticesNeedUpdate = true;
  plane.geometry.elementsNeedUpdate = true;

  renderer.render(scene, camera);
}

init();

window.addEventListener("resize", function () {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

window.addEventListener("mousemove", function (event) {
  // Normalize mouse coordinates
  normalizedMouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  normalizedMouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
});

let introContainer = $(".intro-container");
let skyContainer = $(".sky-container");
let roo = $("#root");
let canv = document.getElementsByTagName("canvas");

$(".shift-camera-button").click(function () {
  let introTimeline = new TimelineMax();

  introTimeline.add([
    TweenLite.fromTo(
      introContainer,
      0.5,
      { opacity: 1 },
      { opacity: 0, ease: Power3.easeIn }
    ),
    TweenLite.to(camera.rotation, 3, {
      x: Math.PI / 2,
      ease: Power3.easeInOut,
    }),
    TweenLite.to(camera.position, 2.5, { z: 20, ease: Power3.easeInOut }),
    TweenLite.to(camera.position, 3, { y: 120, ease: Power3.easeInOut }),
    TweenLite.to(plane.scale, 3, { x: 2, y: 0, ease: Power3.easeInOut }),
  ]);

  introTimeline.add([
    TweenLite.to(skyContainer, 0.1, {
      opacity: 1,
      display: "block",
      position: "sticky",
      ease: Power3.easeInOut,
    }),
    TweenLite.to(root, 0.1, {
      opacity: 1,
      display: "block",
      ease: Power3.easeInOut,
    }),
    TweenLite.to(canv, 0.1, {
      display: "none",
      ease: Power3.easeInOut,
    }),
  ]);
  setTimeout(() => (willAnimate = false), 3000);
});

//any keyboard keydown
document.addEventListener("keydown", function (event) {
  if (event.key == "Enter") {
    let introTimeline = new TimelineMax();

    introTimeline.add([
      TweenLite.fromTo(
        introContainer,
        0.5,
        { opacity: 1 },
        { opacity: 0, ease: Power3.easeIn }
      ),
      TweenLite.to(camera.rotation, 3, {
        x: Math.PI / 2,
        ease: Power3.easeInOut,
      }),
      TweenLite.to(camera.position, 2.5, { z: 20, ease: Power3.easeInOut }),
      TweenLite.to(camera.position, 3, { y: 120, ease: Power3.easeInOut }),
      TweenLite.to(plane.scale, 3, { x: 2, y: 0, ease: Power3.easeInOut }),
    ]);

    introTimeline.add([
      TweenLite.to(skyContainer, 0.1, {
        opacity: 1,
        display: "block",
        position: "sticky",
        ease: Power3.easeInOut,
      }),
      TweenLite.to(root, 0.1, {
        opacity: 1,
        display: "block",
        ease: Power3.easeInOut,
      }),
      TweenLite.to(canv, 0.1, {
        display: "none",
        ease: Power3.easeInOut,
      }),
    ]);
  }
  setTimeout(() => (willAnimate = false), 3000);
});

render();
