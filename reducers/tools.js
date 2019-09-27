import { UNSET_SNACKBAR, SET_SNACKBAR, SET_LOAD} from '../constants/actionTypes'

export const initialState = {
  snackbar: {
    display: false,
    variant: 'warning', 
    message: 'warning',
  },
  isLoad: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_SNACKBAR: {
      return Object.assign({}, state, {
        ...state,
        snackbar : {
          display: true,
          variant: action.variant,
          message: action.message,
        }
      })
    }

    case UNSET_SNACKBAR: {
      return Object.assign({}, state, {
        ...state,
        snackbar : {
          ...state.snackbar,
          display: false,
        }
      })
    }

    case SET_LOAD: {
      return Object.assign({}, state, {
        ...state,
        isLoad: action.data,
      })
    }

    default: {
      return state
    }
  }
}
