import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
import {logout} from '../reducers/user'
import { SideNav, Button, SideNavItem, Navbar, NavItem, Icon } from 'react-materialize';

/**
 * COMPONENT
 *  The Main component is our 'picture frame' - it displays the navbar and anything
 *  else common to our entire app. The 'picture' inside the frame is the space
 *  rendered out by the component's `children`.
 */
const Main = (props) => {
  const {children, logout, isLoggedIn} = props

  return (
    <div>
      <Navbar brand="logo" left>
        <NavItem>
            <SideNav
            trigger={<Button><i className="material-icons">reorder</i></Button>}
              options={{ closeOnClick: true }}>
              <SideNavItem href='#!icon' icon='cloud'>First Link With Icon</SideNavItem>
              <SideNavItem href='#!second'>Second Link</SideNavItem>
              <SideNavItem divider />
              <SideNavItem subheader>Subheader</SideNavItem>
              <SideNavItem waves href='#!third'>Third Link With Waves</SideNavItem>
            </SideNav>
        </NavItem>      
        {
          isLoggedIn
            ?
            <div className="loggedin-nav-btns">
              {/* The navbar will show these links after you log in */}
              <NavItem><Icon>move_to_inbox</Icon></NavItem>
              <NavItem><Icon>view_module</Icon></NavItem>
              <NavItem onClick={logout}><Icon>refresh</Icon></NavItem>
              <NavItem><Icon>more_vert</Icon></NavItem>
            </div>
            : <div className="login-signup">
              {/* The navbar will show these links before you log in */}
              <div className="login-button">
                <Link to='/login'>Login</Link>
              </div>
               <h5 className="or">OR</h5>
              <div className="signup-button">
                <Link to='/signup'>Sign Up</Link>
              </div>
              
            </div>
        }
      </Navbar>
      {children}
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    isLoggedIn: !!state.user.id
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
  logout: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
}
