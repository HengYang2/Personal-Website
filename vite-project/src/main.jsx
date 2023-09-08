


import React, { useEffect, useReducer, useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { easing } from 'maath'
import * as TWEEN from '@tweenjs/tween.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import * as THREE from 'three';
//Import orbit controls to make the scene more interactive:
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
//redux
import { Provider } from 'react-redux';
import store from './redux/store';
import { render } from 'react-dom'


//Camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(14, 7, 14);

//Scene - like a containter that holds all objects, cameras and lights
const scene = new THREE.Scene();

//Load background:
const backgroundTexture = new THREE.TextureLoader().load('../public/skyPhoto1.jpg');
scene.background = backgroundTexture;
scene.backgroundIntensity = 0.3;
scene.backgroundBlurriness = 0.5;


//Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
// renderer.shadowMapEnabled = true;

renderer.render(scene, camera);

// const axesHelper = new THREE.AxesHelper(8);
// scene.add(axesHelper)

//Target: 
const target = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.5, 0.5), new THREE.MeshStandardMaterial({ color: 0xFF6347, wireframe: false }).transparent = false)
target.position.set(0, 2, 0)
scene.add(target)


//Scene Lights:
const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(0, 3, 0)
pointLight.intensity = 2;

const ambientLight = new THREE.AmbientLight(0xffffff);
ambientLight.intensity = 2;

const hemisphereLight = new THREE.HemisphereLight(0x87CEEB, 0x32CD32, 0.05);

const directionalLight = new THREE.DirectionalLight(0xFFFF00, 0.25);
directionalLight.position.set(0,15,-5);
directionalLight.target.position.set(0,2,0);



//Add the light to the scene
scene.add(pointLight, ambientLight, hemisphereLight, directionalLight);

//Light helper shows where the light is and its position:
// const lightHelper = new THREE.PointLightHelper(pointLight);
// scene.add(lightHelper);
//Grid helper creates a 2D grid:
// const gridHelper = new THREE.GridHelper(200, 50);
// scene.add(gridHelper)


//Room Model:
const gltfLoader = new GLTFLoader();
gltfLoader.load('../public/bedroomMODIFIED2.gltf', (gltfscene) => {

  scene.add(gltfscene.scene);
  console.log("gltfscene", scene.getObjectByName("Scene"));
  //Load in indivdual meshes from the gltfscene.scene and add them as properties
  //to the global window object, to make the meshes from the scene, global
  //variables as well.
  window.blueBook = scene.getObjectByName("Scene").getObjectByName("blueBook");
  window.greenBook = scene.getObjectByName("Scene").getObjectByName("greenBook");
  window.redBook = scene.getObjectByName("Scene").getObjectByName("redBook");
  window.yellowBook = scene.getObjectByName("Scene").getObjectByName("yellowBook");
  window.orangeBook = scene.getObjectByName("Scene").getObjectByName("orangeBook");
  window.purpleBook = scene.getObjectByName("Scene").getObjectByName("purpleBook");
  window.brownBook = scene.getObjectByName("Scene").getObjectByName("brownBook");
  window.blackBook = scene.getObjectByName("Scene").getObjectByName("blackBook");
  window.limeGreenBook = scene.getObjectByName("Scene").getObjectByName("limeGreenBook");
  window.magentaBook = scene.getObjectByName("Scene").getObjectByName("magentaBook");
  window.pinkBook = scene.getObjectByName("Scene").getObjectByName("pinkBook");
  window.cyanBook = scene.getObjectByName("Scene").getObjectByName("cyanBook");
 
  window.project1 = scene.getObjectByName("Scene").getObjectByName("project1");
  window.project2 = scene.getObjectByName("Scene").getObjectByName("project2");
  window.project3 = scene.getObjectByName("Scene").getObjectByName("project3");
  window.project4 = scene.getObjectByName("Scene").getObjectByName("project4");
  window.project5 = scene.getObjectByName("Scene").getObjectByName("project5");

});



//OrbitControls: This listens to DOM events on the mouse and positions the camera accordingly:
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
// controls.dampingFactor = 0.05;


//ensure tween is running
const animate = (t) => {
  controls.update();
  TWEEN.update(t);
  requestAnimationFrame(animate);
  camera.lookAt(target.position);
  renderer.render(scene, camera);
  // scene.getObjectByName("Scene").getObjectByName("Cube042").position.set(0,0,0);
  // console.log("window var", window.globalVariable);
  
}
animate();




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App target={target} camera={camera} scene={scene} controls={controls}/>
    </Provider>
  </React.StrictMode>,
)

//In the index.js, load only the react root div.
  //inside the root div, render the canvas and other elements.
  //have the canvas have regular z-index.
  //load other compontnetns conditionally, with higher z-index when I need to press on other divs.
