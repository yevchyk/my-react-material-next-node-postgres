import {SET_USER, REMOVE_TOKEN, SET_TOKEN, REMOVE_USER} from '../constants/actionTypes'
import {snackbarSet, snackbarUnset, setLoad} from './tools'
import instance from '../api/axios';
import Cookies from 'js-cookie'

export const signUp = (user) =>async dispatch =>{
  dispatch(setLoad(true))
  return instance.post('auth/register', user).then(res=>{
    dispatch(setToken(res.data.token))
    dispatch(setUser(res.data.user))
    dispatch(setLoad(false))
    return res
  });
}

export const logIn = ({email ,password}) => async dispatch =>{
  dispatch(setLoad(true))
  const body = {email, password}
  return instance.post('auth/login', body).then(res=>{
    dispatch(setToken(res.data.token))
    dispatch(setUser(res.data.user))
    dispatch(setLoad(false))
    return res
  });
}

export const refresh = (token = Cookies.get('token', token)) => async dispatch =>{
  dispatch(setLoad(true))
  return instance.get(`auth/refresh/${token}`).then(res=>{
    dispatch(setToken(res.data.token));
    dispatch(setUser(res.data.user));
    dispatch(setLoad(false))
    return res
  });
}

export const logOut = () => async dispatch =>{
  dispatch(removeUser());
  dispatch(removeToken());
}

export const setUser = (user) => ({
  type: SET_USER,
  user
});

export const setToken = (token) => { 
Cookies.set('token', token)
  return {
    type: SET_TOKEN,
    token
  }
};

export const setServerToken = token => {
  return {
    type: SET_TOKEN,
    token
  }
}

export const removeToken = (data) => {
  Cookies.remove('token');
  return {
    type: REMOVE_TOKEN,
  }
};

export const removeUser = () => ({
  type: REMOVE_USER,
})
