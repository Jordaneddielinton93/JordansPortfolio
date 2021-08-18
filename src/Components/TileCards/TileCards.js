import "./TileCards.scss"



import jest from "../../images/JestYoutube.png"
import Blog from "../../images/blog.png"
import codewars from "../../images/codewards.png"
import UseContext from "../../images/useContext.png"
import UseReducer from "../../images/useReducer.png"
import UseEffect from "../../images/useEffect.png"
import UseState from "../../images/usestate.png"
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
    constructor(id,title,img,video,build){
      this.title = title;
      this.img = img;
      this.video = video
      this.id=id
      this.build=build
      
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
            <h3 className="descript-tile">Build-Type</h3>
            <h3 className="descript-tile">{this.build}</h3>  
          </div>
        </div>
      </div>
      
      // this is where the card is made 🃏🎴
      )
    }
  }

let Jest=new cardTiles("id1","Jest",jest,"sUJxU-bUOZs","React")
let React=new cardTiles("id2","React",Blog,"Xk1qzWs65rM","React")
let Codewars=new cardTiles("id3","Code Wars",codewars,"SEFsIolXSYk","YouTube")
let Hologram=new cardTiles("id4","Hologram",hologram,"gLqjUK0cRi0","Python")
let useContext=new cardTiles("id4","useContext",UseContext,"Zw_Pl0kHemI","React")
let useReducer=new cardTiles("id4","useReducer",UseReducer,"Q3-l8zmP9Xk","React")
let useEffect=new cardTiles("id4","useEffect",UseEffect,"3KuRSYjHX18","React")
let uSeState=new cardTiles("id4","useState",UseState,"5zYBeaUq86U","React")


let UtubeCards = [
  uSeState,useContext,useReducer,useEffect,Jest,React,Codewars,Hologram
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
  case "useContext":
    returnedCards = useContext.makeCard()
    break
  case "useReducer":
    returnedCards = useReducer.makeCard()
    break
  case "useEffect":
    returnedCards = useEffect.makeCard()
    break
  case "useState":
    returnedCards = uSeState.makeCard()
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