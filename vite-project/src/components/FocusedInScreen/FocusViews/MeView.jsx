import React from 'react'
import { useDispatch } from "react-redux";
import cameraTween from '../../../tween/cameraTween';
import { useState } from 'react';

import imageModule from './modules/imageModule';
import responseModule from './modules/responseModule';
import useTypingEffect from '../../../hooks/typingEffect';

export default function MeView(props) {

  const setDivId = props.setDivId

  //UseState for toggling talking options:
  const [questionsVisable, setQuestionsVisable] = useState(false)

  const [textCollection, setTextCollection] = useState(responseModule(''));

  const [collectionIndex, setCollectionIndex] = useState(0);

  const defaultTextSpeedValue = 10
  const spedUpTextSpeedValue = 0.0005
  const [textSpeed, setTextSpeed] = useState(defaultTextSpeedValue);

  const [indicatorVisible, setIndicatorVisible] = useState(false);

  const [clickBlockerDiv, setClickBlockerDiv] = useState(false);

  const text = useTypingEffect(textCollection, collectionIndex, textSpeed, setIndicatorVisible, setQuestionsVisable, setClickBlockerDiv)


  const [selectedQuestion, setSelectedQuestion] = useState('')

  const dispatch = useDispatch();
  const setIsFocused = (bool) => {
    dispatch({ type: 'SET_IS_FOCUSED', payload: bool });
    return;
  }
  const setCurrentView = (selectedView) => {
    dispatch({ type: 'SET_CURRENT_VIEW', payload: selectedView });
    return;
  }
  const setIsAnimationFinished = (bool) => {
    dispatch({ type: 'SET_IS_ANIMATION_FINISHED', payload: bool });
    return;
  }


  //For handling user clicks and conditional rendering of components:
  function nextText() {
    if (indicatorVisible == true) {
      console.log("Speed set to 25");
      if (collectionIndex != textCollection.length - 1) {
        setCollectionIndex(collectionIndex + 1)
      }
      setIndicatorVisible(false)
      setTextSpeed(defaultTextSpeedValue)
    } else {
      console.log("Speed set to 0.0005");
      setTextSpeed(spedUpTextSpeedValue)
    }
  }

  //Conditionally render indicator to click the div (this appears after text finishes typing out):
  function conditionalIndicator() {
    return indicatorVisible ? <h2 className='bg-yellow-300 border border-black rounded-md w-16 h-8 text-xs absolute z-30 text-center ml-101 mt-102 animate-upDown1' onClick={() => { nextText(); }}>{'Click To Continue'}</h2> : <></>;
  }

  //Conditionally render questions based on the questionsVisable useState:
  function toggleQuestionsVisable() {
    return questionsVisable ?
      <div className='w-40 h-36 ml-90 mt-40 absolute flex flex-col justify-center gap-1 items-center'>
        <div className='bg-blue-400 absolute w-full h-full border border-black rounded-md box-shadow animate-subtlePulse -z-1 opacity-70'></div>
        <button className='text-option' id='option1' onClick={e => { setQuestionsVisable(false); setSelectedQuestion('option1'); setTextCollection(responseModule('option1')); setCollectionIndex(0); setTextSpeed(defaultTextSpeedValue); setClickBlockerDiv(false) }}>Who are you?</button>
        <button className='text-option' id='option2' onClick={e => { setQuestionsVisable(false); setSelectedQuestion('option2'); setTextCollection(responseModule('option2')); setCollectionIndex(0); setTextSpeed(defaultTextSpeedValue); setClickBlockerDiv(false) }}>Where am I?</button>
        <button className='text-option' id='option3' onClick={e => { setQuestionsVisable(false); setSelectedQuestion('option3'); setTextCollection(responseModule('option3')); setCollectionIndex(0); setTextSpeed(defaultTextSpeedValue); setClickBlockerDiv(false) }}>What do you do for fun?</button>
      </div> :
      <></>;
  }

  //Conditionally render clickBlockerDiv:
  function clickBlocker() {
    return clickBlockerDiv ? <div className='absolute ml-0 mt-0 bg-blue-600 w-full h-full z-50 opacity-0'></div> : <></>;
  }

  return (
    <div className='h-full w-full fixed'>
      <div className='absolute top-0 left-0 w-full h-full pt-16'>
        {conditionalIndicator()}
        {toggleQuestionsVisable()}
        <div className='relative w-3/4 h-44 ml-40 mt-80 flex flex-row justify-center gap-2 z-10'>
          {clickBlocker()}
          <div className='bg-blue-400 absolute w-full h-full border border-black rounded-md box-shadow animate-subtlePulse z-10 opacity-70'></div>
          <div className='left-.5 top-1.5 h-32 w-32 relative'>
            {imageModule(selectedQuestion)}
            <h1 className='bg-white border border-black relative rounded-md mt-1.5 text-center box-shadow z-20'>Heng Yang</h1>
          </div>
          <p onClick={() => { nextText() }} className='relative bg-white left-0 w-4/5 top-1.5 h-40 p-2 border border-black rounded-md box-shadow z-20'>{text}</p>
        </div>
      </div>
      <button className=' text-black w-24 h-24  border border-black rounded-md bg-yellow-300 absolute mt-107 ml-8 z-20 hover:border hover:border-white hover:text-white button-hover-effect opacity-100' onClick={() => { setIsFocused(false); setCurrentView(''); cameraTween(props.camera, props.target, '', setIsAnimationFinished); setDivId(''); }}>{"<-"}</button>
    </div>
  )
}