import React from 'react';
import { SideNav, Button, SideNavItem } from 'react-materialize';

/**
 * COMPONENT
 */
export const HiddenNav = (props) => {
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
