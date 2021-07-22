import "./TileCards.scss"



import image1 from "../../images/bottle.jpg"
import jest from "../../images/JestYoutube.png"
import Blog from "../../images/blog.png"
import codewars from "../../images/codewards.png"
import day9 from "../../images/Day9.png"
import hologram from "../../images/Hologram.png"
import { useState } from "react"


const TileCards = () => {

  let [showAllCards,setShowAllCards] = useState("showAllCards")
  let [cardClassSizeing,setCardClassSizeing] = useState("CardContainer-Item")
  
  function filter(title){
    setCardClassSizeing("CardContainerBIG")
    setShowAllCards(title)
    console.log(title)
  }
  function setDefaultCardLayout(){
    setShowAllCards("showAllCards")
    setCardClassSizeing("CardContainer-Item")
  }

  

  class cardTiles{
    constructor(id,title,img,video){
      this.title = title;
      this.img = img;
      this.video = video
      this.id=id
      
    }

    makeCard(){
      return(
      <div key={this.id} 
      className={cardClassSizeing}  >
        <div className="image-Text" onClick={()=>filter(this.title)}>
          <iframe className="videos" src={`https://www.youtube.com/embed/${this.video}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>

          <img src={this.img} alt="coverphoto" className="mainImage"/>
          <h2 className="CardTitle" >{this.title}</h2>
          <div className="Cardbox__centreScreen--allCards--leafContainer">
            {/* <h6 className="leafBox-h6"></h6>
            <h6 className="leafBox-h6"></h6>
            <h6 className="leafBox-h6"></h6>
            <h6 className="leafBox-h6"></h6>
            <h6 className="leafBox-h6"></h6>
            <h6 className="leafBox-h6"></h6> */}

            
          </div>
        </div>
      </div>
      
      // this is where the card is made 🃏🎴
      )
    }
  }

let Jest=new cardTiles("id1","Jest",jest,"sUJxU-bUOZs")
let React=new cardTiles("id2","React",Blog,"Xk1qzWs65rM")
let Codewars=new cardTiles("id3","Code Wars",codewars,"SEFsIolXSYk")
let Hologram=new cardTiles("id4","Hologram",hologram,"gLqjUK0cRi0")


let UtubeCards = [
  Jest,React,Codewars,Hologram
]
// array of all the the fruit,Veg and herbs made into a card

let returnedCards =[]


  // return returnedCards=UtubeCards.showAllCards.makeCard()


switch (showAllCards) {
  case "showAllCards":
    returnedCards=UtubeCards.map((item)=>{
      return item.makeCard()
    })
    break;
  
  case "Jest":
    returnedCards = Jest.makeCard()
    break
  case "React":
    returnedCards = React.makeCard()
    break
  case "Code Wars":
    returnedCards = Codewars.makeCard()
    break
  case "Hologram":
    returnedCards = Hologram.makeCard()
    break
  default:
    break;
}

  return ( 
    <>
    <button 
      className="MenuButton" 
      style={{display:showAllCards!=="showAllCards"?"block":"none"}}
      onClick={setDefaultCardLayout}>Show all cards</button>

    <div className="CardContainer">
      {returnedCards}
    </div>
    </>
   )

}
 
export default TileCards