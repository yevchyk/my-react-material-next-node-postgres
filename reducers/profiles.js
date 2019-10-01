import { SET_USERS} from '../constants/actionTypes'

export const initialState = {
  profileList: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS: {
      return Object.assign({}, state, {
        ...state,
        profileList: action.list,
      })
    }
    default: {
      return state
    }
  }
}
