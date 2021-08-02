

import {MESSAGE_POPUP_SCREEN,CONTACT_POPUP_SCREEN} from "../reducer/reducer"

const Sidebar = ({openPopUp,dispatch}) => {

  
  function helper(params) {
    
  }
  return ( 
    <aside className="aside">
      <h2 className="aside--h2" onClick={()=>dispatch({type:MESSAGE_POPUP_SCREEN})}><i className="far fa-envelope"></i></h2>
      <h2 className="aside--h2" onClick={()=>dispatch({type:CONTACT_POPUP_SCREEN})}>contact</h2>
    </aside>
   );
}
 
export default Sidebar;