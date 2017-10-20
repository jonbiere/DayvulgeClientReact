import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { Link, NavLink } from 'react-router-dom'
import { FlatButton } from 'material-ui'
import { SideNav, Button, SideNavItem } from 'react-materialize';
import { Modal, Timeline } from './index';

/**
 * COMPONENT
 */
export const Home = (props) => {
  const { email, vulges } = props;


  return (
    <div className='homeContainer'>
      <div>Timeline selector placeholder...</div>
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
