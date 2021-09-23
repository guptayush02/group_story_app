import { AUTH_CHANGE, SAVE_ME } from "./taskTypes"

export const authenticate = () => ({
  type: AUTH_CHANGE,
  loggedIn: true,
})

export const unauthenticated = () => ({
  type: AUTH_CHANGE,
  loggedIn: false,
})

export const saveMe = (me) => ({
  type: SAVE_ME,
  me
})
