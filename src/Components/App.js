import {useState} from "react"
import './App.scss';

import PopupMenu from './PopupMenu/PopupMenu';
import TopNavBar from "./NavBars/topNavBar"
import Sidebar from "./NavBars/Sidebar"
import MainPage from "./MainPage/MainPage"


function App() {
  const [width,getwidth] = useState(false)
  return (
    <div className="App">
      
      <TopNavBar/>
      <Sidebar width={width} getwidth={getwidth}/>
      <MainPage/>
      <PopupMenu width={width}/>
    </div>
  );
}
export default App;
