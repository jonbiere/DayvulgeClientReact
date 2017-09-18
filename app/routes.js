import React, {Component} from 'react'
import {connect} from 'react-redux'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types';
import {Main, Login, Signup, UserHome} from './components'
import {me} from './reducers/user'

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount () {
    this.props.loadInitialData()
  }

  render () {
    const {isLoggedIn} = this.props

    return (
      <BrowserRouter>
        <Main>
          <Switch>
            {/* Routes placed here are available to all visitors */}
            <Route exact path='/login' component={Login} />
            <Route exact path='/signup' component={Signup} />
            {
              isLoggedIn &&
                <Switch>
                  {/* Routes placed here are only available after logging in */}
                  <Route exact path='/home' component={UserHome} />
                  {/* <Route path="" component={} /> */}
                </Switch>
            }
            {/* Displays our Login component as a fallback */}
            
          </Switch>
        </Main>
      </BrowserRouter>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: true//!!state.user.id
  }
}

const mapDispatch = (dispatch) => {
  return {
    loadInitialData () {
      dispatch(me())
    }
  }
}

export default connect(mapState, mapDispatch)(Routes)

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
