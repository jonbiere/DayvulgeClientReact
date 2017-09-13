import React from 'react';
import { connect } from 'react-redux';


export const Vulge = (props) => {

  return (
    <div />
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

export default connect(mapState)(Vulge)

