import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { Link, NavLink } from 'react-router-dom'
import { FlatButton } from 'material-ui'
import { SideNav, Button, SideNavItem, Tabs, Tab } from 'react-materialize';
import { Modal, Timeline } from './index';

/**
 * COMPONENT
 */
export const Home = (props) => {
  const { email, vulges } = props;


  return (
    <div className='homeContainer'>
      {/* <div>Timeline selector placeholder...</div> */}
      <Tabs className='tab-demo z-depth-1'>
        <Tab title="Test 1" active>
          <Timeline events={vulges}></Timeline>
        </Tab>
        <Tab title="Test 2">
          <h1>A tab!</h1>
        </Tab>
        <Tab title="Test 3">
          <Timeline events={vulges}></Timeline>
        </Tab>
        <Tab title="Test 4">
          <h1>Another one!!</h1>
        </Tab>
      </Tabs>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    email: state.user.email,
    vulges: state.vulgeHistory,
  }
}


export default connect(mapState)(Home)

/**
 * PROP TYPES
 */
Home.propTypes = {
  email: PropTypes.string
}
