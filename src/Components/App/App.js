import {useState} from "react"
import './App.scss';
import {initState,reducer} from "../reducer/reducer"
import PopupMenu from '../PopupMenu/PopupMenu';
import TopNavBar from "../TopNav/topNavBar"
import Sidebar from "../SideNav/Sidebar"
import MainPage from "../MainPage/MainPage"
import { useReducer } from "react";


function App() {



  let [state,dispatch] = useReducer(reducer,initState)

  return (
    <div className="App">
      
      <TopNavBar/>
      <Sidebar dispatch={dispatch}/>
      <MainPage/>
      <PopupMenu PopUpWidth={state.PopUpWidth} screenShown={state.screenShown} />
    </div>
  );
}
export default App;
