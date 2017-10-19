import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Timeline} from './timeline';

/**
 * COMPONENT
 */
export const UserHome = (props) => {
  const { email, vulges } = props

  return (
  <div>
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
