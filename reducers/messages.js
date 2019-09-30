import { SET_ROOMS } from '../constants/actionTypes'
import Cookies from 'js-cookie'

export const initialState = {
  roomList: {},
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
