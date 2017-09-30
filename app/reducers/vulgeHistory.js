import axios from 'axios';
import {BaseApiUrl} from '../constants';
import history from '../history';


/**
 * ACTION TYPES
 */
const GET_VULGE_HISTORY = 'GET_VULGE_HISTORY'

/**
 * INITIAL STATE
 */
const defaultHistory = [];

/**
 * ACTION CREATORS
 */
const getVulgeHistory = (payload) => ({type: GET_VULGE_HISTORY, payload})

/**
 * THUNK CREATORS
 */
export const retrieveVulges = () =>
  (dispatch) =>
    axios.get(`${BaseApiUrl}/api/vulge/collection/1`)
      .then(res =>{
        dispatch(getVulgeHistory(res.data || defaultHistory))
        console.log('response from data api', res.data)
      })
      .catch(err => console.log(err))


/**
 * REDUCER
 */
export default function (state = defaultHistory, action) {
  switch (action.type) {
    case GET_VULGE_HISTORY:
      return action.payload
    default:
      return state
  }
}
