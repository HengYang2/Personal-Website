import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import cameraTween from '../../../tween/cameraTween';
import bookTween from '../../../tween/bookTween';
import trophyTween from '../../../tween/trophyTween';

export default function ShelfView(props) {

  const setDivId = props.setDivId
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

  //For cursor following:
  window.addEventListener("mousemove", (event) => {

    const cursor = document.getElementById("cursor");

    if (cursor) {
      // console.log('coords', event.clientX + " + " + event.clientY)
      const x = event.clientX;
      const y = event.clientY;
      cursor.style.left = x + 10 + "px";
      cursor.style.top = y + "px";
    } else {
      return
    }
  })


  const [hoveredDiv, setHoveredDiv] = useState('');

  const renderToolTip = () => {
    if (hoveredDiv == '') {
      return <div id="cursor"></div>
    } else {
      return <div id="cursor" className='icon-tooltip'>{hoveredDiv}</div>
    }
  }

  return (
    <div className='h-full w-full fixed '>
      <button className=' text-black w-24 h-24  border border-black rounded-md bg-yellow-300 absolute mt-107 ml-8 z-20 hover:border hover:border-white hover:text-white button-hover-effect' onClick={() => { setIsFocused(false); setCurrentView(''); cameraTween(props.camera, props.target, '', setIsAnimationFinished); setDivId(''); }}>{"<-"}</button>
      <div className='w-full h-full flex flex-col justify-center items-center '>
        <div className='w-3/5 h-full  flex flex-col justify-center items-center opacity-25 pb-28'>
          <div className='w-full h-1/2 mt-5 flex flex-row justify-center items-center opacity-60'>
            <a className='h-full w-1/5 ' href='https://whispering-wildwood-53168-a5c709a25715.herokuapp.com/' target='_blank' onMouseEnter={(e) => { trophyTween(project1); setHoveredDiv('Solo Project: Know Your Hours'); }} onMouseLeave={(e) => { setHoveredDiv('') }}></a>
            <div className='h-full w-1/5 ' onMouseEnter={(e) => { trophyTween(project2); setHoveredDiv('In Progress'); }} onMouseLeave={(e) => { setHoveredDiv('') }}></div>
            <div className='h-full w-1/5 ' onMouseEnter={(e) => { trophyTween(project3); setHoveredDiv('In Progress'); }} onMouseLeave={(e) => { setHoveredDiv('') }}></div>
            <div className='h-full w-1/5 ' onMouseEnter={(e) => { trophyTween(project4); setHoveredDiv('In Progress'); }} onMouseLeave={(e) => { setHoveredDiv('') }}></div>
            <div className='h-full w-1/5 ' onMouseEnter={(e) => { trophyTween(project5); setHoveredDiv('In Progress'); }} onMouseLeave={(e) => { setHoveredDiv('') }}></div>
          </div>
          <div className='w-4/5 h-1/4 mt-5 flex flex-row justify-center items-center gap-12 opacity-60 pb-8'>
            <div className='h-full w-60 mt-5 flex flex-row justify-center items-center opacity-90'>

              {/* books passed into bookTween() are global variables that are attached to the 'window' object */}
              <div className='h-full w-1/12' onMouseEnter={(e) => { bookTween(blueBook); setHoveredDiv('React'); }} onMouseLeave={(e) => { setHoveredDiv('') }}></div>
              <div className='h-full w-1/12' onMouseEnter={(e) => { bookTween(greenBook); setHoveredDiv('Redux / Sagas'); }} onMouseLeave={(e) => { setHoveredDiv('') }}></div>
              <div className='h-full w-1/12' onMouseEnter={(e) => { bookTween(redBook); setHoveredDiv('Javascript'); }} onMouseLeave={(e) => { setHoveredDiv('') }}></div>
              <div className='h-full w-1/12' onMouseEnter={(e) => { bookTween(yellowBook); setHoveredDiv('Jquery'); }} onMouseLeave={(e) => { setHoveredDiv('') }}></div>
              <div className='h-full w-1/12' onMouseEnter={(e) => { bookTween(orangeBook); setHoveredDiv('Node.js'); }} onMouseLeave={(e) => { setHoveredDiv('') }}></div>
              <div className='h-full w-1/12' onMouseEnter={(e) => { bookTween(purpleBook); setHoveredDiv('Git / Github'); }} onMouseLeave={(e) => { setHoveredDiv('') }}></div>
              <div className='h-full w-1/12' onMouseEnter={(e) => { bookTween(brownBook); setHoveredDiv('SQL'); }} onMouseLeave={(e) => { setHoveredDiv('') }}></div>
              <div className='h-full w-1/12' onMouseEnter={(e) => { bookTween(blackBook); setHoveredDiv('Postgres'); }} onMouseLeave={(e) => { setHoveredDiv('') }}></div>
              <div className='h-full w-1/12' onMouseEnter={(e) => { bookTween(limeGreenBook); setHoveredDiv('Heroku'); }} onMouseLeave={(e) => { setHoveredDiv('') }}></div>
              <div className='h-full w-1/12' onMouseEnter={(e) => { bookTween(magentaBook); setHoveredDiv('AWS'); }} onMouseLeave={(e) => { setHoveredDiv('') }}></div>
              <div className='h-full w-1/12' onMouseEnter={(e) => { bookTween(pinkBook); setHoveredDiv('Tailwind CSS'); }} onMouseLeave={(e) => { setHoveredDiv('') }}></div>
              <div className='h-full w-1/12' onMouseEnter={(e) => { bookTween(cyanBook); setHoveredDiv('Three.js'); }} onMouseLeave={(e) => { setHoveredDiv('') }}></div>

            </div>
            <div className='w-1/4 h-full mt-5 flex flex-row justify-center items-center opacity-60'>

            </div>
          </div>
        </div>
      </div>
      {renderToolTip()}
    </div>
  )
}

// For easy copy and paste of colored divs
// <div className='h-full w-1/12 bg-white' onMouseEnter={(e) => { bookTween(blueBook); }}></div>
// <div className='h-full w-1/12'></div>
// <div className='h-full w-1/12 bg-white'></div>
// <div className='h-full w-1/12 '></div>
// <div className='h-full w-1/12 bg-white'></div>
// <div className='h-full w-1/12 '></div>
// <div className='h-full w-1/12 bg-white'></div>
// <div className='h-full w-1/12 '></div>
// <div className='h-full w-1/12 bg-white'></div>
// <div className='h-full w-1/12'></div>
// <div className='h-full w-1/12 bg-white'></div>
// <div className='h-full w-1/12 '></div>

{/* <div className='h-full w-1/5 bg-black' onMouseEnter={(e) => { bookTween(blueBook); }}></div>
<div className='h-full w-1/5 bg-green-500' onMouseEnter={(e) => { bookTween(blueBook); }}></div>
<div className='h-full w-1/5 bg-black' onMouseEnter={(e) => { bookTween(blueBook); }}></div>
<div className='h-full w-1/5 bg-green-500' onMouseEnter={(e) => { bookTween(blueBook); }}></div>
<div className='h-full w-1/5 bg-black' onMouseEnter={(e) => { bookTween(blueBook); }}></div> */}