// ------------------------------------
// Constants
// ------------------------------------

const SAVE_ME = 'SAVE_ME'
const AUTH_CHANGE = 'AUTH_CHANGE'
const INCREMENT_RESERVATIONNO = 'INCREMENT_RESERVATIONNO'

const initialState = {
  checked: false,
  loggedIn: false,
  me: {},
  reservationNo: 0
}

// ------------------------------------
// Actions
// ------------------------------------

// TODO: check the user's login state
export const authenticate = () => dispatch => dispatch({
  type: AUTH_CHANGE,
  loggedIn: true,
  checked: true,
})

export const unauthenticated = () => dispatch => dispatch({
  type: AUTH_CHANGE,
  loggedIn: false,
  checked: true,
})

export const saveMe = me => dispatch => dispatch({
  type: SAVE_ME,
  me,
})

export const incrementReservartionNo = () => (dispatch, getState) => {
  dispatch({
    type: INCREMENT_RESERVATIONNO,
    reservationNo: getState().app.reservationNo + 1,
  })
}

export const actions = {
  authenticate,
  saveMe,
  unauthenticated,
  incrementReservartionNo
}

// ------------------------------------
// Action Handlers
// ------------------------------------

const ACTION_HANDLERS = {
  [AUTH_CHANGE]: (state, { loggedIn, checked }) => ({
    ...state,
    loggedIn,
    checked,
  }),
  [SAVE_ME]: (state, { me }) => ({
    ...state,
    me,
  }),
  [INCREMENT_RESERVATIONNO]: (state, { reservationNo }) => ({
    ...state,
    reservationNo,
  })
}

// ------------------------------------
// Reducer
// ------------------------------------

export default function reducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
