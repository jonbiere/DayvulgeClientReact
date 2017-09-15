import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { SideNav, Button, SideNavItem } from 'react-materialize';

/**
 * COMPONENT
 */
export const UserHome = (props) => {
  const { email } = props

  return (
    <SideNav
      trigger={<Button><i className="material-icons">reorder</i></Button>}
      options={{ closeOnClick: true }}>
      <SideNavItem href='#!icon' icon='cloud'>First Link With Icon</SideNavItem>
      <SideNavItem href='#!second'>Second Link</SideNavItem>
      <SideNavItem divider />
      <SideNavItem subheader>Subheader</SideNavItem>
      <SideNavItem waves href='#!third'>Third Link With Waves</SideNavItem>
    </SideNav>

  )
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    email: state.user.email
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
