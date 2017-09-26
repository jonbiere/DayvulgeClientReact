import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { SideNav, Button, SideNavItem } from 'react-materialize';

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


    <div className="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2">
      <ul className="timeline timeline-centered">

        {/* single item */}
        <li className="timeline-item">
            <div className="timeline-info">
                <span>March 12, 2016</span>
            </div>
            <div className="timeline-marker"></div>

            <div className="timeline-content">
                <h5 className="timeline-title">Event Title</h5>
                <p>Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Donec vitae sapien ut libero venenatis faucibus. ullam dictum felis
                    eu pede mollis pretium. Pellentesque ut neque.</p>
            </div>
        </li>

        {/* single item */}
        <li className="timeline-item">
            <div className="timeline-info">
                <span>March 23, 2016</span>
            </div>
            <div className="timeline-marker"></div>
            <div className="timeline-content">
                <h5 className="timeline-title">Event Title</h5>
                <p>Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Donec vitae sapien ut libero venenatis faucibus. ullam dictum felis
                    eu pede mollis pretium. Pellentesque ut neque. </p>
            </div>
        </li>

        {/* This 'timeline-item-period is for big breaks in timeline with large date */}
        <li className="timeline-item period">
            <div className="timeline-info"></div>
            <div className="timeline-marker"></div>
            <div className="timeline-content">
                <h2 className="timeline-title">April 2016</h2>
            </div>
        </li>

        {/* single item */}
        <li className="timeline-item">
            <div className="timeline-info">
                <span>April 02, 2016</span>
            </div>
            <div className="timeline-marker"></div>
            <div className="timeline-content">
                <h5 className="timeline-title">Event Title</h5>
                <p>Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Donec vitae sapien ut libero venenatis faucibus. ullam dictum felis
                    eu pede mollis pretium. Pellentesque ut neque. </p>
            </div>
        </li>

        {/* single item */}
        <li className="timeline-item">
            <div className="timeline-info">
                <span>April 28, 2016</span>
            </div>
            <div className="timeline-marker"></div>
            <div className="timeline-content">
                <h5 className="timeline-title">Event Title</h5>
                <p>Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Donec vitae sapien ut libero venenatis faucibus. ullam dictum felis
                    eu pede mollis pretium. Pellentesque ut neque. </p>
            </div>
        </li>

      </ul>
    </div>

  </div>

  )
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    email: state.user.email,
    vulges: state.vulges
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
