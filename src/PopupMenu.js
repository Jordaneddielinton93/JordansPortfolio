
const PopupMenu = ({width}) => {
  
  let popUpContainer
  let TophalfofPopup
  let TopHalfText
  let BottomHalfPopup

  if(width){
    popUpContainer = "PopupMenuOpen"
    TophalfofPopup="PopupMenuOpen__topHalfOpen"
    TopHalfText = "PopupMenuOpen__topHalfOpen--text"
    BottomHalfPopup="PopupMenuOpen__bottomHalfOpen"
    
    
  }else{
    popUpContainer = "PopupMenuClosed"
    TophalfofPopup="PopupMenuClosed__topHalfClosed"
    TopHalfText = "PopupMenuClosed__topHalfClosed--text"
    BottomHalfPopup="PopupMenuClosed__bottomHalfClosed"
  }
  
  return ( 
    <div className={popUpContainer}>
      <div className={TophalfofPopup}>
        <h2 className={TopHalfText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quis fugiat itaque doloremque reiciendis quas nulla cumque, possimus architec</h2>
      </div>
      <div className={BottomHalfPopup}></div>
    </div>
   );
}
 
export default PopupMenu;