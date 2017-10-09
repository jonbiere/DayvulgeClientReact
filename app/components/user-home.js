import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { SideNav, Button, SideNavItem } from 'react-materialize';
import {Timeline} from './timeline';

/**
 * COMPONENT
 */
export const UserHome = (props) => {
  const { email, vulges } = props

  return (
  <div>
      <SideNav
        trigger={<Button><i className="material-icons">reorder</i></Button>}
        options={{ closeOnClick: true }}>
        <SideNavItem href='#!icon' icon='cloud'>First Link With Icon</SideNavItem>
        <SideNavItem href='#!second'>Second Link</SideNavItem>
        <SideNavItem divider />
        <SideNavItem subheader>Subheader</SideNavItem>
        <SideNavItem waves href='#!third'>Third Link With Waves</SideNavItem>
      </SideNav>

    <Timeline events={vulges}></Timeline>

  </div>
  )
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    email: state.user.email,
    vulges: state.vulgeHistory
  }
}


export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
