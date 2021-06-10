import {useState} from "react"
const Section2 = () => {
  let [screenDisplay,setDisplay] = useState("")
  let [links,setLinks]=useState("")
  let [projectName,setProjectName]=useState("Project")
  
  function changedisplay(params) {
    
    switch (params) {
      case "one":
        setDisplay("section2__heading__folder__screen--content1")
        setLinks("https://lordofthepokeballwars.netlify.app/")
        setProjectName("GroupProject")
        break;
      case "two":
        setDisplay("section2__heading__folder__screen--content2")
        console.log("hi")
        setProjectName("Resturant")
        break;
      case "three":
        setDisplay("section2__heading__folder__screen--content3")
        console.log("hi")
        setProjectName("ShoppingList")
        break;
      case "four":
        setDisplay("section2__heading__folder__screen--content4")
        console.log("hi")
        setProjectName("Lorem")
        break;
        
      default:
        break;
    }
  }
  
  return ( 
    <section className="section2">

       <div className="section2__heading">
         <main className="section2__heading__folder">
           <header className="section2__heading__folder__header">
              <h2 className="section2__heading__folder__header--h1">On Display</h2>
              <h2 className="section2__heading__folder__header--h1" onClick={()=>changedisplay("one")}>GroupProject</h2>
              <h2 className="section2__heading__folder__header--h1" onClick={()=>changedisplay("two")}>ResturantApp</h2>
              <h2 className="section2__heading__folder__header--h1" onClick={()=>changedisplay("three")}>ShoppingList</h2>
              <h2 className="section2__heading__folder__header--h1" onClick={()=>changedisplay("four")}>LOREM</h2>
              
           </header>
           <div className="section2__heading__folder__screen">
              <div className={screenDisplay}>

              </div>
           </div>

         </main>
         <div className="section2__heading__para">
           <div className="section2__heading__para--underline"></div>
          <a className="section2__heading__para--text" href={links}>
          {projectName}
          </a>
          
         </div>
         
         
       </div>

     </section>
   );
}
 
export default Section2;