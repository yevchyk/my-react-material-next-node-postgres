import { SET_MESSAGES, SET_ROOMS} from '../constants/actionTypes'
import {snackbarSet, snackbarUnset, setLoad} from './tools'
import instance from '../api/axios';

export const getRooms = () => async  dispatch =>{
   dispatch(setLoad(true))
   return instance.get('/messages').then(res=>{
     dispatch(setRooms(res.data.list));
     dispatch(setLoad(false))
     return res
   });
}

export const setRooms = (rooms) => ({
     type: SET_ROOMS,
     rooms
  });
