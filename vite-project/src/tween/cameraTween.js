import React from 'react'
import * as TWEEN from '@tweenjs/tween.js'
import { useSelector, useDispatch } from 'react-redux';


//Needs to accept: 
//Camera position
//reducer state is given:
export default function cameraTween(camera, target, selectedTarget, func) {


  const zoomInSpeed = 2000;
  const zoomOutSpeed = 2000;
  func(false);
 
  // const dispatch = useDispatch();
  // const setIsAnimationFinished = (bool) => {
  //   dispatch({ type: 'SET_IS_ANIMATION_FINISHED', payload: bool });
  //   return;
  // }


  const tweenFreeLook = () => {

    const tweenCamera = new TWEEN.Tween({ x: camera.position.x, y: camera.position.y, z: camera.position.z })
      .to({ x: 10, y: 6, z: 10 }, zoomOutSpeed)
      .onUpdate((coords) => {
        camera.position.x = coords.x
        camera.position.y = coords.y
        camera.position.z = coords.z
      })
      .easing(TWEEN.Easing.Exponential.InOut)
      .repeat(0)
      .delay(10);

    const tweenTarget = new TWEEN.Tween({ x: target.position.x, y: target.position.y, z: target.position.z })
      .to({ x: 0, y: 2, z: 0 }, zoomOutSpeed)
      .onUpdate((coords) => {
        target.position.x = coords.x
        target.position.y = coords.y
        target.position.z = coords.z
      })
      .easing(TWEEN.Easing.Exponential.InOut)
      .repeat(0)
      .delay(10);

    tweenCamera.start();
    tweenTarget.start();
    tweenCamera.onComplete(()=>{func(true)});
  }

  const tweenLaptop = () => {

    const tweenCamera = new TWEEN.Tween({ x: camera.position.x, y: camera.position.y, z: camera.position.z })
      .to({ x: -3, y: 2.5, z: 2.76 }, zoomInSpeed)
      .onUpdate((coords) => {
        camera.position.x = coords.x
        camera.position.y = coords.y
        camera.position.z = coords.z
      })
      .easing(TWEEN.Easing.Exponential.InOut)
      .repeat(0)
      .delay(10);

    const tweenTarget = new TWEEN.Tween({ x: target.position.x, y: target.position.y, z: target.position.z })
      .to({ x: -4.9, y: 2.5, z: 2.76 }, zoomInSpeed)
      .onUpdate((coords) => {
        target.position.x = coords.x
        target.position.y = coords.y
        target.position.z = coords.z
      })
      .easing(TWEEN.Easing.Exponential.InOut)
      .repeat(0)
      .delay(10);

    tweenCamera.start();
    tweenTarget.start();
    tweenCamera.onComplete(()=>{func(true)});
  }


  const tweenShelf = () => {

    const tweenCamera = new TWEEN.Tween({ x: camera.position.x, y: camera.position.y, z: camera.position.z })
      .to({ x: -2.5, y: 5, z: -.83}, zoomInSpeed)
      .onUpdate((coords) => {
        camera.position.x = coords.x
        camera.position.y = coords.y
        camera.position.z = coords.z
      })
      .easing(TWEEN.Easing.Exponential.InOut)
      .repeat(0)
      .delay(10);

    const tweenTarget = new TWEEN.Tween({  x: target.position.x, y: target.position.y, z: target.position.z })
      .to({ x: -6, y: 1.5, z: -.83}, zoomInSpeed)
      .onUpdate((coords) => {
        target.position.x = coords.x
        target.position.y = coords.y
        target.position.z = coords.z
      })
      .easing(TWEEN.Easing.Exponential.InOut)
      .repeat(0)
      .delay(10);


    tweenCamera.start();
    tweenTarget.start();
    tweenCamera.onComplete(()=>{func(true)});
  }


  const tweenMe = () => {

    const tweenCamera = new TWEEN.Tween({ x: camera.position.x, y: camera.position.y, z: camera.position.z })
      .to({ x: -1.4, y: 3.25, z: 1 }, zoomInSpeed)
      .onUpdate((coords) => {
        camera.position.x = coords.x
        camera.position.y = coords.y
        camera.position.z = coords.z
      })
      .easing(TWEEN.Easing.Exponential.InOut)
      .repeat(0)
      .delay(10);

    const tweenTarget = new TWEEN.Tween({ x: target.position.x, y: target.position.y, z: target.position.z })
      .to({ x: -1.4, y: 0.5, z: -5 }, zoomInSpeed)
      .onUpdate((coords) => {
        target.position.x = coords.x
        target.position.y = coords.y
        target.position.z = coords.z
      })
      .easing(TWEEN.Easing.Exponential.InOut)
      .repeat(0)
      .delay(10);


    tweenCamera.start();
    tweenTarget.start();
    tweenCamera.onComplete(()=>{func(true)});
  }


  const tweenDrawer = () => {

    const tweenCamera = new TWEEN.Tween({ x: camera.position.x, y: camera.position.y, z: camera.position.z })
    .to({ x: 1.25, y: 4.5, z: -1.5}, zoomInSpeed)
    .onUpdate((coords) => {
      camera.position.x = coords.x
      camera.position.y = coords.y
      camera.position.z = coords.z
    })
    .easing(TWEEN.Easing.Exponential.InOut)
    .repeat(0)
    .delay(10);

    const tweenTarget = new TWEEN.Tween({ x: target.position.x, y: target.position.y, z: target.position.z })
      .to({ x: 1.25, y: 1, z: -4.5 }, zoomInSpeed)
      .onUpdate((coords) => {
        target.position.x = coords.x
        target.position.y = coords.y
        target.position.z = coords.z
      })
      .easing(TWEEN.Easing.Exponential.InOut)
      .repeat(0)
      .delay(10);


    tweenCamera.start();
    tweenTarget.start();
    tweenCamera.onComplete(()=>{func(true)});
  }


  const tweenBack = () => {

    const tweenCamera = new TWEEN.Tween({ x: camera.position.x, y: camera.position.y, z: camera.position.z })
    .to({x: 6, y: 4.5, z: 6  }, zoomOutSpeed)
    .onUpdate((coords) => {
      camera.position.x = coords.x
      camera.position.y = coords.y
      camera.position.z = coords.z
    })
    .easing(TWEEN.Easing.Exponential.InOut)
    .repeat(0)
    .delay(10);

    const tweenTarget = new TWEEN.Tween({ x: target.position.x, y: target.position.y, z: target.position.z })
      .to({ x: 0, y: 1, z: 0 }, zoomOutSpeed)
      .onUpdate((coords) => {
        target.position.x = coords.x
        target.position.y = coords.y
        target.position.z = coords.z
      })
      .easing(TWEEN.Easing.Exponential.InOut)
      .repeat(0)
      .delay(10);


    tweenCamera.start();
    tweenTarget.start();
    tweenCamera.onComplete(()=>{func(true)});
  }
  


  switch (selectedTarget) {
    case 'freeLook':
      return tweenFreeLook();
      break;
    case 'laptop':
      return tweenLaptop();
      break;
    case 'shelf':
      return tweenShelf();
      break;
    case 'me':
      return tweenMe();
      break;
    case 'drawer':
      return tweenDrawer();
      break;
    default:
      return tweenBack();
      break;
  }
}
