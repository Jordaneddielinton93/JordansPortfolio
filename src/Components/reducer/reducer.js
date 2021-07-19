// 
// 
// 
// THIS PAGE DOES NOTHING YET BUT I WILL RE FACTOR IT TO WORK WITH REDUCER I HAVE IT IN A BRANCH WORKING BUT DONT LIKE THE COLOR SCHEME



let DAY_NIGHT_MODE = "day"

export const initState={
  nightTheme:"rgba(26,26,26,0.9)",
  day_night:true,
  logoBackGround:"#464646",
  icons:"#FAFAFA"
}

export function reducer(state,action){
  switch (action.type) {
    case DAY_NIGHT_MODE:
      if(state.day_night === true){
        console.log(state)
        return {
          ...state,
          nightTheme:"rgba(26,26,26,0.9)",
          day_night:false,
          logoBackGround:"#464646",
          icons:"1A1A1A"
        }
      }else{
        console.log(state)

        return {
          ...state,
          nightTheme:"rgba(245, 245, 245, 0.9)",
          day_night:true,
          logoBackGround:"#fafafadf",
          icons:"1A1A1A"
        }
      }

    default:
      break;
  }
}

