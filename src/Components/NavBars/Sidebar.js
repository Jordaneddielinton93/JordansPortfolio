

const Sidebar = ({openPopUp}) => {

  
  function helper(params) {
    
  }
  return ( 
    <aside className="aside">
      <h2 className="aside--h2" onClick={()=>openPopUp("message")}><i className="far fa-envelope"></i></h2>
      <h2 className="aside--h2" onClick={()=>openPopUp("contact")}>contact</h2>
      <h2 className="aside--h2" onClick={helper}>helper</h2>
    </aside>
   );
}
 
export default Sidebar;