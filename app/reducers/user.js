import axios from 'axios';
import {BaseApiUrl} from '../constants';
import history from '../history';


/**
 * ACTION TYPES
 */
const GET_USER = 'GET_USER'
const REMOVE_USER = 'REMOVE_USER'

/**
 * INITIAL STATE
 */
const defaultUser = {}

/**
 * ACTION CREATORS
 */
const getUser = (user) => ({type: GET_USER, user})
const removeUser = () => ({type: REMOVE_USER})


let setHeadersAndLocalStorage= (token) => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  localStorage.setItem('auth_token', token);
}

/**
 * THUNK CREATORS
 */
export const me = () =>
  (dispatch) =>
    axios.get(`${BaseApiUrl}/auth/me`)
      .then(res =>{
        dispatch(getUser(res.data || defaultUser));
      })    
      .catch(err => console.log(err))

export const auth = (email, password, method) =>
  (dispatch) =>
    axios.post(`${BaseApiUrl}/auth/${method}`, { email, password })
      .then(res => {
        setHeadersAndLocalStorage(res.data.token);
        dispatch(getUser(res.data.user));
        history.push('/');
      })
      .catch((error) => {
        error = error.response && error.response.data;
        dispatch(getUser({error}))
        //history.push('/');
      });

export const authProvider = (providerName, providerToken) => 
(dispatch) =>
    axios.post(`${BaseApiUrl}/auth/${providerName}`, {token: providerToken})
      .then((res) =>{
        setHeadersAndLocalStorage(res.data.token);
        dispatch(getUser(res.data.user));
        history.push('/');
      });

export const logout = () =>
  (dispatch) =>
    axios.get(`${BaseApiUrl}/auth/logout`)
      .then(res => {
        localStorage.removeItem('auth_token');
        dispatch(removeUser());
        history.push('/login')
      })
      .catch(err => console.log(err))

/**
 * REDUCER
 */
export default function (state = defaultUser, action) {
  switch (action.type) {
    case GET_USER:
      return action.user
    case REMOVE_USER:
      return defaultUser
    default:
      return state
  }
}
