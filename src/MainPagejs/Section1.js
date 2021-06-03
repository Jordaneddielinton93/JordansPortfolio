import triedtest from "../images/triedtest.mp4"
const Section1 = () => {

  let frameNumber = 0,
  playbackConst = 80;
  
  let listOfLanguages = [
    "HTML",
    "CSS",
    "SASS",
    "JavaScript",
    "REACT" ,
    "Bootstrap",
    "changehere"
  ]
  function ChangeLanguages(){
    listOfLanguages.forEach((letter, i) => {
      setTimeout(() => {
        let getLang = document.querySelector(".language")
        getLang.innerText = letter
        if(letter == "changehere"){
          ChangeLanguages()
        }
        switch (letter) {
          case "HTML":
            getLang.style.color = "orange"
            break;
          case "CSS":
            getLang.style.color = "blue"
            break;
          case "SASS":
            getLang.style.color = "pink"
            break;
          case "JavaScript":
            getLang.style.color = "yellow"
            break;
          case "REACT":
            getLang.style.color = "lightblue"
            // getLang.innerHTML+= <i className="fab fa-react"></i>
            
            break;
          case "Bootstrap":
            getLang.style.color = "blue"
            break;
        
          default:
            break;
        }
        
      }, i * 2000);
    });
  }
  ChangeLanguages()

  
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
          Hi! im Jordan <br />
           A web developer who spend's his whole day, practically everyday, experimenting with.
             <div className="language"></div>
 
        </h1>
      </div> 
    </section>
     )

}
 
export default Section1;