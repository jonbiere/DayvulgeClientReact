import React from 'react';
import { SideNav, Button, SideNavItem, Icon } from 'react-materialize';

/**
 * COMPONENT
 */
export const HiddenNav = (props) => {
  const { email, logout } = props

  return (
    <SideNav
      trigger={<Button>Menu</Button>}
      options={{ closeOnClick: true, edge: 'right' }}>

      <SideNavItem href='/' icon='home'>Home</SideNavItem>
      <SideNavItem href='/about' icon='announcement'>About Us</SideNavItem>
      <SideNavItem onClick={logout} icon='logout'>Logout</SideNavItem>
      <SideNavItem divider />
      <SideNavItem subheader>Subheader</SideNavItem>
      <SideNavItem waves href='#!third'>Third Link With Waves</SideNavItem>
    </SideNav>

  )
}
