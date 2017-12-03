import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
import {logout} from '../reducers/user'
import { Navbar, NavItem, Icon, Button, Dropdown, Badge } from 'react-materialize';
import { HiddenNav } from './index.js'

/**
 * COMPONENT
 *  The Main component is our 'picture frame' - it displays the navbar and anything
 *  else common to our entire app. The 'picture' inside the frame is the space
 *  rendered out by the component's `children`.
 */
const Main = (props) => {
  const {children, logout, user, isLoggedIn} = props;

  return (
    <div className="mainContainer">
      <Navbar brand="logo" right>
        {isLoggedIn && <NavItem>
          <Dropdown
            trigger={
              <NavItem className="hoverStyleMenuItem profileDropdown">
                <span>{user.email}<Icon right>arrow_drop_down</Icon></span>
              </NavItem>
            }>
            <NavItem>
              Profile
            </NavItem>

            <NavItem onClick={logout}>
              Logout
            </NavItem>
          </Dropdown>
        </NavItem>}

        {!isLoggedIn && <NavItem>
        <div className="login-button">
          <Link to='/login'>Login</Link>
        </div>
        </NavItem>}
        {!isLoggedIn && <NavItem>
          <div className="signup-button">
            <Link to='/signup'>Sign Up</Link>
          </div>
        </NavItem>}
        <NavItem><HiddenNav/></NavItem>
      </Navbar>
      {children}
      <div>Footer...</div>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    isLoggedIn: !!state.user.id,
    user: state.user
  }
}

const mapDispatch = (dispatch) => {
  return {
    logout: ()=>{
      dispatch(logout())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Main))

/**
 * PROP TYPES
 */
Main.propTypes = {
  children: PropTypes.object,
  user: PropTypes.object,
  logout: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
}
