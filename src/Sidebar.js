

const Sidebar = ({width,getwidth}) => {

  function changeWidth() {
    width===true ? getwidth(false): getwidth(true);
  }
  function helper(params) {
    
  }
  return ( 
    <aside className="aside">
      <h2 className="aside--h2" onClick={changeWidth}><i className="far fa-envelope"></i></h2>
      <h2 className="aside--h2">contact</h2>
      <h2 className="aside--h2" onClick={helper}>helper</h2>
    </aside>
   );
}
 
export default Sidebar;