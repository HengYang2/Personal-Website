import React from 'react'
//Import all the differnt views:
import LaptopView from './FocusViews/LaptopView'
import ShelfView from './FocusViews/ShelfView'
import MeView from './FocusViews/MeView'
import DrawerView from './FocusViews/DrawerView'
import { useSelector } from 'react-redux'
import ReactDom from 'react-dom'


export default function FocusedInScreen(props) {

  const setDivId = props.setDivId
  const currentViewReducer = useSelector(store => store.currentViewReducer);

  //Conditionally render views based on passed (currentView) prop:
  const renderCurrentView = () => {
    switch (currentViewReducer) {
      case 'laptop':
        return <LaptopView camera={props.camera} target={props.target} setDivId={setDivId}/>;
        break;
      case 'shelf':
        return <ShelfView camera={props.camera} target={props.target} setDivId={setDivId}/>;
        break;
      case 'me':
        return <MeView camera={props.camera} target={props.target} setDivId={setDivId}/>;
        break;
      case 'drawer':
        return <DrawerView camera={props.camera} target={props.target} setDivId={setDivId}/>;
        break;
      default:
        console.log("Error: Unknown currentView prop passed in.")
        break;
    }
  }


  return ReactDom.createPortal(
    <>
      {renderCurrentView()}
    </>, document.getElementById('portal')
  )
}

{/* <div id="cursor"></div>  <----- PUT THIS IN EACH VIEW COMPONENET! */}