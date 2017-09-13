import React from 'react';
import { connect } from 'react-redux';


export const Vulge = (props) => {

  return (
    <div className="col-lg-3 col-md-6 mb-4">
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">Card title</h4>
          <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>
        </div>
        <div className="card-footer">
          <a href="#" className="btn btn-primary">Find Out More!</a>
        </div>
      </div>
    </div>
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

