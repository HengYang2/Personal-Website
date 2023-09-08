import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import cameraTween from '../../../tween/cameraTween';
import ReactDOM from "react-dom";
import Contact from "../../contact"

export default function LaptopView(props) {

  const setDivId = props.setDivId
  const [resumeOrEmail, setResumeOrEmail] = useState('resume');

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

  const renderResumeOrEmail = () => {
    if (resumeOrEmail == 'resume') {
      return <iframe src='../../../../public/resume/tempResume.pdf#toolbar=0' className='absolute z-50 bg-black h-100 w-100 ml-110 mt-111'></iframe>
    } else if (resumeOrEmail == 'email') {
      return (
        <Contact />
      )
    } else {
      return <></>
    }
  }

  return (
    <div className='h-screen w-screen fixed'>
      <div className='w-full h-full fixed mt-0 ml-0 bg-black opacity-50 -z-1 '></div>
      <button className=' text-black w-24 h-24  border border-black rounded-md bg-yellow-300 absolute mt-107 ml-8 z-20 hover:border hover:border-white hover:text-white button-hover-effect' onClick={() => { setIsFocused(false); setCurrentView(''); cameraTween(props.camera, props.target, '', setIsAnimationFinished); setDivId(''); }}>{"<-"}</button>
      <div className='ml-96 p-2 w-full h-full absolute flex flex-col justify-center items-center'>
        <div className='h-1/3 w-40 z-20 border-black rounded-md border flex flex-col gap-1 bg-blue-300 justify-center items-center'>
            <a href='https://www.linkedin.com/in/heng-yang-97109b1b1/' target='_blank' className='bg-white h-12 w-3/4  flex justify-center items-center border-black rounded-md border hover:border hover:border-white hover:text-white text-sm box-shadow button-hover-effect'>LinkedIn</a>
            <div onClick={() => { setResumeOrEmail('resume') }} target='_blank' className='bg-white h-12 w-3/4  flex justify-center items-center border-black rounded-md border hover:border hover:border-white hover:text-white text-sm box-shadow button-hover-effect'>Resume</div>
            <div onClick={() => { setResumeOrEmail('email') }} className='bg-white h-12 w-3/4  flex justify-center items-center border-black rounded-md border hover:border hover:border-white hover:text-white text-sm box-shadow button-hover-effect'>Send Email</div>
        </div>
      </div>
      {renderResumeOrEmail()}
    </div>
  )
}


{/* <form action="" className=' w-1/2 h-4/5 flex flex-col justify-center gap-2 items-center bg-white border border-black rounded-md p-2 text-sm'>
<h3>GET IN TOUCH</h3>
<input type="text" id="name" placeholder='name' placeh required className=' bg-green-400 p-1 text-white' />
<input type="email" id="email" placeholder='email' required className='bg-green-400 p-1 text-white'  />
<input type="text" id="phone" placeholder='phone no.' required className='bg-green-400 p-1 text-white'  />
<textarea id="message" rows="4" placeholder='How can we help you?' className='bg-green-400 p-1 text-white' ></textarea>
<button type='submit'>Send</button>
</form> */}

{/* <div className='absolute z-50 bg-blue-400 h-100 w-100 ml-110 mt-111 flex flex-col justify-center items-center'>

</div> */}