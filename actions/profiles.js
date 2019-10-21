import {SET_USERS} from '../constants/actionTypes'
import {setLoad} from './tools'
import {post, get, put} from '../api'


export const getUsers = () =>async dispatch =>{
  dispatch(setLoad(true));
  return get('profiles').then(res=>{
    dispatch(setUsers(res.data))
    dispatch(setLoad(false))
    return res.data
  });
}

export const setUsers = (list) => ({
  type: SET_USERS,
  list
})
