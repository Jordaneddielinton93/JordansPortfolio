
import triedtest from "../images/triedtest.mp4"
const Section1 = () => {
  // let listOfLanguages = [
  //   "HTML",
  //   "CSS",
  //   "SASS",
  //   "JavaScript",
  //   "REACT",
  //   "Python",
  //   "Bootstrap"
  // ]
  let frameNumber = 0,
  playbackConst = 80;

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