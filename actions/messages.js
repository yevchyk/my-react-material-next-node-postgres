import {SET_ROOM, SET_ROOMS} from '../constants/actionTypes'
import {snackbarSet, snackbarUnset, setLoad} from './tools'
import instance from '../api/axios';

export const getRooms = () => async  dispatch =>{
   dispatch(setLoad(true))
   return instance.get('/messages').then(res=>{
     dispatch(setRooms(res.data.list));
     dispatch(setLoad(false))
     return res.data
   });
}

export const getRoom = (id) => async  dispatch =>{
   dispatch(setLoad(true))
   return instance.get(`/messages/${id}`).then(res=>{
     dispatch(setRoom(res.data));
     dispatch(setLoad(false))
     return res.data
   });
}

export const setRoom = (room) => ({
     type: SET_ROOMS,
     room
});

export const setRooms = (rooms) => ({
     type: SET_ROOMS,
     rooms
});
