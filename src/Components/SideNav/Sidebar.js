

import {MESSAGE_POPUP_SCREEN,CONTACT_POPUP_SCREEN} from "../reducer/reducer"
import { pageWrapper } from "../App/App";
import { useContext } from "react";
const Sidebar = () => {

  let stateObj = useContext(pageWrapper)
  
  return ( 
    <aside className="aside">

      <h2 className="aside--h2" onClick={()=>stateObj.dispatch({type:MESSAGE_POPUP_SCREEN})}>
        <i className="far fa-envelope"></i>
      </h2>

      <h2 className="aside--h2" onClick={()=>stateObj.dispatch({type:CONTACT_POPUP_SCREEN})}>
        contact
      </h2>
      
    </aside>
   );
}
 
export default Sidebar;