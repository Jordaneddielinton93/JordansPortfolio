import './App.scss';
import react from 'react';
import {initState,reducer} from "../reducer/reducer"
import PopupMenu from '../PopupMenu/PopupMenu';
import TopNavBar from "../TopNav/topNavBar"
import Sidebar from "../SideNav/Sidebar"
import MainPage from "../MainPage/MainPage"
import { useReducer } from "react";
import { useContext } from 'react/cjs/react.development';

export let pageWrapper = react.createContext()

function App() {

  let [state,dispatch] = useReducer(reducer,initState)

  

  return (
    <pageWrapper.Provider value={{state,dispatch}}>

    <div className="App">
      <TopNavBar/>
      <Sidebar dispatch={dispatch}/>
      <MainPage/>
      <PopupMenu PopUpWidth={state.PopUpWidth} screenShown={state.screenShown} />
    </div>
    </pageWrapper.Provider>

  );
}
export default App;
