import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  user: require('./user.js').default,
  vulgeHistory: require('./vulgeHistory.js').default,
})

export default rootReducer
