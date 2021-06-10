const TopNavBar = () => {

  let handleMouseOver = (e)=>{
    e.target.style.width = "20%"
    e.target.style.backgroundColor = "background-image: linear-gradient(15deg, #1a1a1af6 0%, #1a1a1a 46%, #1a1a1a 100%";
    e.target.style.transition = "0.5s"
    document.querySelector(".nav__empty").style.width = "55%"
  }
  let handleMouseOut = (e)=>{
    e.target.style.width = "10%"
    e.target.style.backgroundColor = "transparent";
    e.target.style.transition = "0.5s"
  }

  let myId = "1375399596625694721"

  async function getLatestTweet(){
    const response = await fetch(`https://api.twitter.com/2/tweets/:id=${myId}`);
    const data = response.json()
    console.log(data)
  }

  return ( 
    <nav className="nav">
      <div className="nav__logo" >JordLinton</div>
      <div className="nav__empty">
         <a href="https://github.com/Jordaneddielinton93"><i className="fab fa-github"></i></a>
         <a href="www.linkedin.com/in/jordan-linton-38541820a"><i className="fab fa-linkedin"></i></a>
         <a href="https://twitter.com/JordanLinton93"><i className="fab fa-twitter"></i></a>
      </div>
      <div className="nav__menu" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Menu</div>
      <div className="nav__profile"><i className="fas fa-user-astronaut"></i></div>

    </nav>
   );
}
 
export default TopNavBar;