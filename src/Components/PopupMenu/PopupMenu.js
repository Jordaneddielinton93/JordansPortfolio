import "./popMenu.scss"
import bottle from "../../images/bottle.jpg"
const PopupMenu = ({width, screenShown}) => {
  
  let popUpContainer
  let TophalfofPopup
  let TopHalfText
  let BottomHalfPopup
  let showForm
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
  
  return screenShown==="message"? ( 
    <div className={popUpContainer} >
      <div className={TophalfofPopup} >
        <section className={TopHalfText}>
          <form action="https://formsubmit.co/27349118230b4e3485bd1f210c8efaa9" method="POST" style={{display:showForm}}>
            <textarea type="text" name="message" required placeholder="message" rows="4" cols="50"/>
            <input type="email" name="email" required placeholder="Your Email"/>
            
            <input type="hidden" name="_next" value="#"></input>
            <input type="hidden" name="_captcha" value="false"></input>
            <input type="hidden" name="_next" value="/"></input>
            <button type="submit">Send</button>
          </form>
        </section>
      </div>
      <div className={BottomHalfPopup}>
        <img className="bottleImage" src={bottle} alt="" />
      
      </div>
    </div>
   ):<div className={popUpContainer} >



     <div className={TophalfofPopup} >
     <section className={TopHalfText}>
       <h1>Contact Me</h1>
       <h1>@</h1>
     </section>
        

     </div>

     <div className={BottomHalfPopup}>



     </div>
   </div>
}
 
export default PopupMenu;