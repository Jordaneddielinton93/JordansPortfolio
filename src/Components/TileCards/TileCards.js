import "./TileCards.scss"

import image1 from "../../images/bottle.jpg"


const TileCards = ({popUpMenu}) => {

  class Vegetables{
    constructor(id,title,difficulty,space,indoors,time,img){
      this.title = title;
      this.difficulty = difficulty;
      this.space = space;
      this.indoors = indoors;
      this.time = time;
      this.img = img;
      this.id=id
      
    }

    makeCard(){
      return(
      <div key={this.id} 
      className="CardContainer-Item" >
        <span>
          
        </span>
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


let Potato=new Vegetables("id1","card1",1,3,false,1,image1)
let Tomato=new Vegetables("id2","card1",2,3,false,3,image1)
let Carrot=new Vegetables("id3","card1",2,3,false,3,image1)
let Onion =new Vegetables("id4","card1",2,3,false,3,image1)
let Strawberry=new Vegetables("id5","card1",1,2,true,2,image1)
let Blueberry=new Vegetables("id6","card1",2,2,true,2,image1)
let Raspberry=new Vegetables("id7","card1",1,2,true,2,image1)
let Lime=new Vegetables("id8","card1",1,2,true,3,image1)

let ArrayOfFruitAndVeg = [
  Tomato,Potato,Carrot,Onion,Strawberry,Blueberry,Raspberry,Lime
]
// array of all the the fruit,Veg and herbs made into a card




  return ( 
    <>
    <div className="CardContainer">
      {ArrayOfFruitAndVeg.map((item)=>{
        return item.makeCard()
      })}
    </div>
    </>
   );
}
 
export default TileCards