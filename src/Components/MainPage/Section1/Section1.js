import "./section1.scss"

import {useState,useEffect} from "react"
import SoCLogo from "../../../images/socLogo.png"

import triedtest from "../../../images/triedtest1.mp4"
const Section1 = () => {
  let frameNumber = 0,
  playbackConst = 80;

  

  
  let languages = ["HTML","Css","JavaScript","React","Sass","Jest"]
  let lanIcons = ["fab fa-html5","fab fa-css3","fab fa-js-square","fab fa-react","fab fa-sass","fas fa-cogs"]
  

  let [lang,setLang]= useState("HTML")
  let [icons,setIcons]= useState("fab fa-html5")
  let [shownlang,setShownLang] = useState("flex")
  let [langCounter,setLangCounter] = useState(1)


  let arrayAboutMe = [

  <>Hi! im Jordan <br/> A web developer who spend's his whole day, practically everyday, experimenting with.</>,

  <>Experience i hear you ask!<br/><h4><a target="_blank" href="https://www.schoolofcode.com/" rel="noreferrer">The School Of Code Bootcamp</a></h4>Is where knowledge happens!! <img src={SoCLogo} alt="School Of Code"/><h6><q>achieved 85% employment</q></h6> </>,

  <>A real passion!!<br/>for making beautiful responsive websites and web applications. As well as youtube videos, coding challenges, python Arduino's and much more.</>

  
  ]


  let [text1,setText1]= useState(arrayAboutMe[0])

  


  function changeIntroWords(){
    setLangCounter(langCounter+1)
    setText1(arrayAboutMe[langCounter]);
    

    if(langCounter == 0){
      setShownLang("flex")
    }else{
      setShownLang("none")
    }
    if(langCounter == arrayAboutMe.length-1){
      setLangCounter(0)
    }
    
  }


  useEffect(() => {
    let counter = 0
    const timer = setInterval(() => {
      setIcons(lanIcons[counter])
      setLang(languages[counter])
      counter++;
      if(counter > languages.length-1){
        counter=0
      }
    }, 2000);
    
    
  }, []);




     return(
      <section className="main__section1">

      <video id="v0" className="main__section1--video"  tabIndex="0" autobuffer="" preload=""onLoadedMetadata={(e)=>{
        e.target.style.height = Math.floor(e.target.duration) * playbackConst + "px"
         function scrollPlay(){
           frameNumber  = window.pageYOffset/playbackConst;
           e.target.currentTime  = frameNumber;
           window.requestAnimationFrame(scrollPlay);
           }
         window.requestAnimationFrame(scrollPlay);
         }}>
        <source src={triedtest} type="video/mp4"/>
      </video>


      <div className="main__section1__heading">

        <h1 className="main__section1__heading--text">
          
           {text1}
             <li className={lang} style={{display:shownlang}}>{lang} <i className={icons}></i></li>
        </h1>

        
        
      </div> 
      <h2>
          <button className={lang} onClick={changeIntroWords}>More ABOUT ME !!</button>
      </h2>
    </section>
     )

}
export default Section1;