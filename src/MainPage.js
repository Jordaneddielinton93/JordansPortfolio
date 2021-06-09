
import Section1 from "./MainPagejs/Section1"
import Section2 from "./MainPagejs/Section2"

const MainPage = () => {
  
  window.addEventListener("scroll",(e)=>{
    let logo = document.querySelector(".nav__logo")
    let empty = document.querySelector(".nav__empty")
    let text = document.querySelector(".main__section1__heading")
    let picture = document.querySelector(".main__section1--video")
    let section2 = document.querySelector(".section2__heading__para--text")
    var scroll = window.scrollY;
    
    console.log(scroll)
    text.style.opacity = `${100-(scroll/6)}%`
    picture.style.opacity = `${100-(scroll/5)}%`
    section2.style.bottom = `${-440+(scroll/1.7)}px`
    if(scroll>0){
      logo.style.transition = `1s`
      logo.style.width = `5%`
      logo.innerText = "JL"
      logo.style.backgroundColor="white"
      logo.style.color="#464646"
      empty.style.width = `65%`
    }else{
      logo.style.backgroundColor="#464646"
      logo.style.transition = `1s`
      logo.style.width = `15%`
      logo.style.color="white"
      logo.innerText = "JordLinton"
      empty.style.width = `75%`
    }
    })
    
  return ( 

    <main className="main" id="set-height">
     <Section1/>
     <Section2/>
     <section className="main__section3"></section>
    </main>
   );
}
 
export default MainPage;