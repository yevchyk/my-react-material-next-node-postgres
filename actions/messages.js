import { SET_MESSAGES } from '../constants/actionTypes'
import {get, post, put} from '../api/index'

export const getMessages = () => async  dispatch =>{
   return get(`widgets`).then(res => {
	})
}

export const snackbarSet = (message) => ({
     type: SET_MESSAGES,
     message
  });
