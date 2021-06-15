import {useState} from "react"
import './styles/App.css';
import "./styles/popMenu.css"
import "./styles/section1.css"
import "./styles/section2.css"
import PopupMenu from './PopupMenu';
import TopNavBar from "./topNavBar"
import Sidebar from "./Sidebar"
import MainPage from "./MainPage"




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
