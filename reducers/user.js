import { SET_USER, SET_TOKEN, REMOVE_TOKEN, REMOVE_USER} from '../constants/actionTypes'
import Cookies from 'js-cookie'

export const initialState = {
  data: {
    firstName: '',
    lastName: '',
    email: '',
  },
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USER: {
      return Object.assign({}, state, {
        ...state,
        data: {...action.user},
      })
    }
    case SET_TOKEN: {
      return Object.assign({}, state, {
        ...state,
        token: action.token
      })
    }
    case REMOVE_TOKEN: {
      return Object.assign({}, state, {
        ...state,
        token: '',
      })
    }
    case REMOVE_USER: {
      return Object.assign({}, state, {
        ...state,
        data: {},
      })
    }
    default: {
      return state
    }
  }
}
