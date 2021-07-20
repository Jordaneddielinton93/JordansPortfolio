import "./TileCards.scss"



import image1 from "../../images/bottle.jpg"
import jest from "../../images/JestYoutube.png"
import Blog from "../../images/blog.png"
import codewars from "../../images/codewards.png"
import { useState } from "react/cjs/react.development"
import { useEffect } from "react"

const TileCards = ({popUpMenu}) => {



  let [showAllCards,setShowAllCards] = useState("showAllCards")
  let [cardClassSizeing,setCardClassSizeing] = useState("CardContainer-Item")
  function filter(title){
    setCardClassSizeing("CardContainerBIG")
    setShowAllCards(title)
    console.log(title)

  }

  

  class cardTiles{
    constructor(id,title,difficulty,space,indoors,time,img,video){
      this.title = title;
      this.difficulty = difficulty;
      this.space = space;
      this.indoors = indoors;
      this.time = time;
      this.img = img;
      this.video = video
      this.id=id
      
    }

    makeCard(){
      return(
      <div key={this.id} 
      className={cardClassSizeing} onClick={()=>filter(this.title)} >
        <span>
          
        </span>
  

        <iframe className="videos" src={`https://www.youtube.com/embed/${this.video}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        <img src={this.img} alt="fruit/veg" className="mainImage"/>
        <h2 className="CardTitle" >{this.title}</h2>
        <div className="Cardbox__centreScreen--allCards--leafContainer">
          <h6 className="leafBox-h6"></h6>
          <h6 className="leafBox-h6"></h6>
          <h6 className="leafBox-h6"></h6>
          <h6 className="leafBox-h6"></h6>
          <h6 className="leafBox-h6"></h6>
          <h6 className="leafBox-h6"></h6>

          
        </div>
      </div>
      // this is where the card is made 🃏🎴
      )
    }
  }

let Jest=new cardTiles("id1","Jest",2,3,false,3,jest,"sUJxU-bUOZs")
let React=new cardTiles("id2","React",1,3,false,1,Blog,"Xk1qzWs65rM")
let Codewars=new cardTiles("id3","Code wars",2,3,false,3,codewars,"SEFsIolXSYk")
let Hologram =new cardTiles("id4","Hologram",2,3,false,3,image1,"gLqjUK0cRi0")
let Card1=new cardTiles("id5","card1",1,2,true,2,image1,"sUJxU-bUOZs")
let Card2=new cardTiles("id6","card2",2,2,true,2,image1,"sUJxU-bUOZs")
let Card3=new cardTiles("id7","card3",1,2,true,2,image1,"sUJxU-bUOZs")
let Card4=new cardTiles("id8","card4",1,2,true,3,image1,"sUJxU-bUOZs")

let UtubeCards = [
  Jest,React,Codewars,Hologram,Card1,Card2,Card3,Card4
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
  case "Card1":
    returnedCards = Card1.makeCard()
    break
  case "Card2":
    returnedCards = Card2.makeCard()
    break
  case "Card3":
    returnedCards = Card3.makeCard()
    break
  case "Card4":
    returnedCards = Card4.makeCard()
    break
  




  default:
    break;
}



  return ( 
    <>
    <div className="CardContainer">
      {returnedCards}
    </div>
    </>
   )

}
 
export default TileCards