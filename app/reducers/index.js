import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  user: require('./user.js').default,
  // sample2: require('./sample2').default
})

export default rootReducer
