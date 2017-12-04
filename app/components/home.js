import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { Link, NavLink } from 'react-router-dom'
import { FlatButton } from 'material-ui'
import { SideNav, Button, SideNavItem } from 'react-materialize';
import { Modal, Timeline, PersonalTimeline } from './index';
import { List, Label, Tab } from 'semantic-ui-react'

/*
 *********************************************************************************************
 Work in progress

 There are two different versions of tabs below. One is commented out. You can play with
 settings to see the two different versions of the tabs. Unfortunately the react-materialize
 one is slow to render the tabs content for some reason and I can't figure out why.

 But semantic-ui tabs are working great and those are the ones that are currently active.
 *********************************************************************************************


 */
export const Home = (props) => {
  const { email, vulges } = props;

  /*
  Below panes array is for semantic-ui version of tabs. It needs an array of the tab content
  declared here and then the <Tab> element in the returned JSX below calls accepts this array
  in its props for the items it needs to render.

  Content renders much quicker than the react-materialize tabs. Basically instant. And you can
  nest DOM elements within the content of the tabs so its really easy to nest different timelines
  with different content, or whatever we want really.
  */
  const panes = [
    { menuItem: 'Personal', pane: { key: 'tab1',
      content:
      <PersonalTimeline events={vulges}></PersonalTimeline> } },

    { menuItem: 'Cat', pane: { key: 'tab2',
      content:
      <img src="http://78.media.tumblr.com/5d933dbea55d887f28bb467c67bcb356/tumblr_mojk1em3ew1r4xjo2o1_500.gif" />,
      textAlign: 'center' } },

    { menuItem: 'Global', pane: { key: 'tab3',
      content:
      <Timeline events={vulges}></Timeline> } },
    { menuItem: 'Stuff',
      pane: (
        <Tab.Pane key='tab4'>
          <p>This tab has a complex content</p>

          <List>
            <List.Item>Apples</List.Item>
            <List.Item>Pears</List.Item>
            <List.Item>Oranges</List.Item>
          </List>
        </Tab.Pane>
      ) },
  ]



  return (
    <div className='homeContainer'>
      {/* <div>Timeline selector placeholder...</div> */}

    <Tab panes={panes} renderActiveOnly={false} />

      {/*
        *********************************************************************************************
        BELOW IS REACT-MATERIALIZE VERSION OF TABS.
        Looks great visually, but having problems with tab content loading. Has to refresh to reflect
        accurate content, so I am trying out Semantic-UI tabs above as a possible alternate.

        To use React-Materialize again, uncomment code below, and add imports of Tabs, and Tab to
        'react-materialize'.
        *********************************************************************************************

      */}
      {/* <Tabs className='tab-demo z-depth-2 tab-header'>

        <Tab title="Test 1" active>
          <Timeline events={vulges}></Timeline>
        </Tab>

        <Tab title="Test 2">
          <img src="http://78.media.tumblr.com/5d933dbea55d887f28bb467c67bcb356/tumblr_mojk1em3ew1r4xjo2o1_500.gif" />
        </Tab>

        <Tab title="Test 3">
          <Timeline events={vulges}></Timeline>
        </Tab>

        <Tab title="Test 4">
          <img src="http://78.media.tumblr.com/57f55afee7406c89ae445a428de5af12/tumblr_nn6od9rYpQ1r4xjo2o1_250.gif" />
        </Tab>

      </Tabs> */}
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
