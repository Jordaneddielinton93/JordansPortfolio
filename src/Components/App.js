import {useState} from "react"
import './App.scss';

import PopupMenu from './PopupMenu/PopupMenu';
import TopNavBar from "./NavBars/topNavBar"
import Sidebar from "./NavBars/Sidebar"
import MainPage from "./MainPage/MainPage"


function App() {


  function openPopup(params){
    console.log(params)
    width===true ? getwidth(false): getwidth(true)
    setscreenShown(params)
    console.log(params)
  
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
