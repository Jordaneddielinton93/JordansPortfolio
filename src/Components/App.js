import {useState} from "react"
import './App.scss';

import PopupMenu from './PopupMenu/PopupMenu';
import TopNavBar from "./NavBars/topNavBar"
import Sidebar from "./NavBars/Sidebar"
import MainPage from "./MainPage/MainPage"
import {Popupinfo} from "./PopupMenu/PopupMenu";

function App() {


  function openPopup(params){
    console.log(params)
    width===true ? getwidth(false): getwidth(true)
    if(params === "message"){
      setscreenShown(params)
    }
  }
  const [screenShown,setscreenShown]= useState()
  const [width,getwidth] = useState(false)
  return (
    <div className="App">
      
      <TopNavBar/>
      <Sidebar openPopUp={openPopup}/>
      <MainPage/>
      <PopupMenu width={width} screenShown={screenShown} />
    </div>
  );
}
export default App;
