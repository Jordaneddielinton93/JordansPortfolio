import { useEffect } from "react"
import { useState } from "react/cjs/react.development"
import "./popMenu.scss"

let popUpContainer
  let TophalfofPopup
  let TopHalfText
  let BottomHalfPopup
  let showForm

export let Popupinfo = {
  message:<>
  <div className={TophalfofPopup} >
    <section className={TopHalfText}>
      <form action="https://formsubmit.co/27349118230b4e3485bd1f210c8efaa9" method="POST" style={{display:showForm}}>
        <textarea type="text" name="message" required placeholder="message" rows="4" cols="50"/>
        <input type="email" name="email" required placeholder="Your Email"/>
        
        <input type="hidden" name="_next" value="#"></input>
        <input type="hidden" name="_captcha" value="false"></input>
        <button type="submit">Send</button>
      </form>
    </section>
  </div>
  <div className={BottomHalfPopup}>
  
  </div>

</>,

  contact:<>hello</>

}



const PopupMenu = ({width,screenShown}) => {
  
  
  if(width){
    showForm = "flex"
    popUpContainer = "PopupMenuOpen"
    TophalfofPopup="PopupMenuOpen__topHalfOpen"
    TopHalfText = "PopupMenuOpen__topHalfOpen--text"
    BottomHalfPopup="PopupMenuOpen__bottomHalfOpen"
    
    
  }else{
    showForm = "none"
    popUpContainer = "PopupMenuClosed"
    TophalfofPopup="PopupMenuClosed__topHalfClosed"
    TopHalfText = "PopupMenuClosed__topHalfClosed--text"
    BottomHalfPopup="PopupMenuClosed__bottomHalfClosed"
  }

  let [shownJsx,setShownJsx] = useState(Popupinfo.message)

  useEffect(()=>{

    if (screenShown === "message"){
      setShownJsx(Popupinfo.message)
  }
  if (screenShown === "contact"){
    setShownJsx(Popupinfo.contact)
  }


  },[screenShown])
  
  
  return ( 
    <div className={popUpContainer}>
     
      {shownJsx}
      <div className={BottomHalfPopup}>
        
      </div>
    </div>
   );
}
 
export default PopupMenu;