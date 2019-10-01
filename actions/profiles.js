import {SET_USERS} from '../constants/actionTypes'
import {setLoad} from './tools'
import instance from '../api/axios';

export const getUsers = () =>async dispatch =>{
  dispatch(setLoad(true));
  return instance.get('profiles').then(res=>{
    dispatch(setUsers(res.data))
    dispatch(setLoad(false))
    return res.data
  });
}

export const setUsers = (list) => ({
  type: SET_USERS,
  list
})
