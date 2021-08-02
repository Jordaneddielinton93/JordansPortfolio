import "./section2.scss"

import {useState} from "react"
const Section2 = () => {
  let [screenDisplay,setDisplay] = useState("")
  let [links,setLinks]=useState("")
  let [projectName,setProjectName]=useState("Project")
  
  function changedisplay(params) {
    
    switch (params) {
      case "one":
        
        setDisplay("section2__heading__folder__screen--content1")
        setLinks("https://team-grow-pro.netlify.app/")
        setProjectName("GroupProject")
        break;
      case "two":
        setDisplay("section2__heading__folder__screen--content2")
        setLinks("https://jordansrecipe.netlify.app/")
        console.log("hi")
        setProjectName("Resturant")
        break;
      case "three":
        setDisplay("section2__heading__folder__screen--content3")
        setLinks("https://lordofthepokeballwars.netlify.app/")
        console.log("hi")
        setProjectName("GroupProject2")
        break;
      case "four":
        setDisplay("section2__heading__folder__screen--content4")
        setLinks("https://chatapp-social.netlify.app/")
        console.log("hi")
        setProjectName("Social Media")
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
              <a className="section2__heading__folder__header--h1"  href={links} target="_blank" rel="noreferrer">Click To Vist</a>
              <h2 className="section2__heading__folder__header--h1" onClick={()=>changedisplay("one")}>GroupProject2</h2>
              <h2 className="section2__heading__folder__header--h1" onClick={()=>changedisplay("two")}>ResturantApp</h2>
              <h2 className="section2__heading__folder__header--h1" onClick={()=>changedisplay("three")}>GroupProject1</h2>
              <h2 className="section2__heading__folder__header--h1" onClick={()=>changedisplay("four")}>Social media</h2>
              
           </header>
           <div className="section2__heading__folder__screen">
              <div className={screenDisplay} role="img" aria-label="[image of projects]">

              </div>
           </div>

         </main>
         <div className="section2__heading__para">
           
          <h1 className="section2__heading__para--text">{projectName}</h1>
          
         </div>
         
         
       </div>

     </section>
   );
}
 
export default Section2;