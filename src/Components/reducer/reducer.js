// 
// 
// 
// THIS PAGE DOES NOTHING YET BUT I WILL RE FACTOR IT TO WORK WITH REDUCER I HAVE IT IN A BRANCH WORKING BUT DONT LIKE THE COLOR SCHEME



export let MESSAGE_POPUP_SCREEN = "message"
export let CONTACT_POPUP_SCREEN = "contact"
export let CHANGE_POPUP_WIDTH = "CHANGE_POPUP_WIDTH"

export const initState={
  screenShown:"",
  PopUpWidth:false
}

export function reducer(state,action){
  switch (action.type) {
    case MESSAGE_POPUP_SCREEN:
      
    return {...state,
      screenShown:MESSAGE_POPUP_SCREEN,
      PopUpWidth:state.PopUpWidth===true ? false: true,
    }

    case CONTACT_POPUP_SCREEN:
      return {...state,
        screenShown:CONTACT_POPUP_SCREEN,
        PopUpWidth:state.PopUpWidth===true ? false: true,
      }


    default:
      break;
  }
}

