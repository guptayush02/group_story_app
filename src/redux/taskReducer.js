import { AUTH_CHANGE, SAVE_ME } from "./taskTypes"

const initialState = {
  loggedIn: false,
  me: {},
}

const taskReducer = (state = initialState, action) => {
  const { loggedIn, me } = action;
  switch (action.type) {
    case AUTH_CHANGE:
    return {
      ...state,
      loggedIn
    }
    case SAVE_ME:
    return {
      ...state,
      me
    }
    default:
    return state;
  }
  
}

export default taskReducer;
