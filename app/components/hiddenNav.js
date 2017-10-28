import React from 'react';
import { SideNav, Button, NavItem, SideNavItem, Icon } from 'react-materialize';

/**
 * COMPONENT
 */
export const HiddenNav = (props) => {
  const { email } = props

  return (
    <SideNav
      trigger={<NavItem className="hoverStyleMenuItem"><Icon>menu</Icon></NavItem>}
      options={{ closeOnClick: true, edge: 'right' }}>

      <SideNavItem href='/' icon='home'>Home</SideNavItem>
      <SideNavItem href='/about' icon='announcement'>About Us</SideNavItem>
      <SideNavItem divider />
      <SideNavItem subheader>Subheader</SideNavItem>
      <SideNavItem waves href='#!third'>Third Link With Waves</SideNavItem>
    </SideNav>

  )
}
