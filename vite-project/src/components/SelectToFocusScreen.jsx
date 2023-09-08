import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import cameraTween from '../tween/cameraTween';
import ReactDom from 'react-dom';


//The purpose of this component is to display invisible divs over parts of the room;
//Which when clicked zooms the camera to focus in on that thing. Ex: the Shelf.
export default function SelectToFocusScreen(props) {

    const setDivId = props.setDivId;

    const isPortalOpenReducer = useSelector(store => store.isPortalOpenReducer);


    const dispatch = useDispatch();
    const setIsFocused = (bool) => {
        dispatch({ type: 'SET_IS_FOCUSED', payload: bool });
        return;
    }
    const setCurrentView = (selectedView) => {
        dispatch({ type: 'SET_CURRENT_VIEW', payload: selectedView });
        return;
    }
    const setIsOrbitScreenOpen = (bool) => {
        props.controls.enabled = true;
        dispatch({ type: 'SET_ORBIT_SCREEN_OPEN', payload: bool });
        return;
    }
    const setIsPortalOpenReducer = (bool) => {
        dispatch({ type: 'SET_PORTAL_OPEN', payload: bool });
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


    const renderToolTip = () => {
        // console.log(props.divId);
        if (props.divId == '') {
            return <div id="cursor"></div>
        } else {
            return <div id="cursor" className='icon-tooltip'>{props.divId}</div>
        }
    }


    if (isPortalOpenReducer == false) {
        return ReactDom.createPortal(
            <>
                <div className=' fixed flex flex-row justify-center items-center gap-1 pb-36 w-screen h-screen'>

                    <div id="laptop" className='z-20 w-24 h-44 -ml-12 hover:border-2 border-white rounded-md' onMouseEnter={(e) => { setDivId("Get In Touch") }} onMouseLeave={(e) => { setDivId("") }} onClick={() => { setIsFocused(true); setCurrentView('laptop'); cameraTween(props.camera, props.target, 'laptop', setIsAnimationFinished); }}>
                        <div className='hover:bg-blue-300 w-full h-full opacity-20'></div>
                    </div>
                    <div id="shelf" className='z-50 w-24 h-44 hover:border-2 border-white rounded-md' onMouseEnter={(e) => { setDivId("Portfolio") }} onMouseLeave={(e) => { setDivId("") }} onClick={() => { setIsFocused(true); setCurrentView('shelf'); cameraTween(props.camera, props.target, 'shelf', setIsAnimationFinished); }}>
                        <div className='hover:bg-blue-300 w-full h-full opacity-20'></div>
                    </div>
                    <div id="me" className='z-50 w-24 h-44 hover:border-2 border-white rounded-md' onMouseEnter={(e) => { setDivId("About Me") }} onMouseLeave={(e) => { setDivId("") }} onClick={() => { setIsFocused(true); setCurrentView('me'); cameraTween(props.camera, props.target, 'me', setIsAnimationFinished); }}>
                        <div className='hover:bg-blue-300 w-full h-full opacity-20'></div>
                    </div>
                    <div id="drawer" className='z-50 w-24 h-44 hover:border-2 border-white rounded-md' onMouseEnter={(e) => { setDivId("Misc") }} onMouseLeave={(e) => { setDivId("") }} onClick={() => { setIsFocused(true); setCurrentView('drawer'); cameraTween(props.camera, props.target, 'drawer', setIsAnimationFinished); }}>
                        <div className='hover:bg-blue-300 w-full h-full opacity-20'></div>
                    </div>
                </div>
                <button className=" w-24 h-16 ml-105 mt-106 text-option absolute flex justify-center items-center" onClick={() => { setIsOrbitScreenOpen(true); setIsPortalOpenReducer(false); cameraTween(props.camera, props.target, 'freeLook', setIsAnimationFinished) }}>Free-Look</button>
                {renderToolTip()}
            </>, document.getElementById('portal')
        )
    } else {
        return <></>
    }

}

// window.globalVariable.position.set(0, 2, 0); 
