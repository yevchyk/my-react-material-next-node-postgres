import { SET_ROOMS } from '../constants/actionTypes'

export const initialState = {
  roomList: [],
  room: {},
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ROOMS: {
      return Object.assign({}, state, {
        ...state,
        roomList: action.rooms
      })
    }
    default: {
      return state
    }
  }
}
