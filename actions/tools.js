import {SET_SNACKBAR, UNSET_SNACKBAR, SET_LOAD} from '../constants/actionTypes'

// ['error', 'info', 'success', 'warning']
export const snackbarSet = (variant, message) => ({
     type: SET_SNACKBAR,
     variant, 
     message
  });

export const snackbarUnset = () => ({
     type: UNSET_SNACKBAR,
  });

export const setLoad = (load) => ({
   type: SET_LOAD,
   data: load
})

