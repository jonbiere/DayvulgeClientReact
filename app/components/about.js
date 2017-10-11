import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from 'react-materialize';

/**
 * COMPONENT
 */
export class About extends React.Component {
  constructor(props){
    super(props)
    const { } = props

  }


  render(){
    return (
    <div>
    <section id="carousel">
      <div id="carousel-text">
        <h1>Write your own History</h1>
      </div>
      <img className="carousel-image" src="images/img3.jpg" />
    </section>

    <section id="about">
      <h2>About</h2>
      <div className="flex">
        <p>
        This is a space that was created on the premise that you should be able to write your own history.

        History is an emergent property of the collective people. It’s the record and ledger where we note what has happened, what is important, and what should be remembered.

        Sadly, the recording of history will never be perfect. There will always be bias. Even the simple recording of a single event, done as honestly as possible, inherently excludes all others. It’s limited in its scope.

        However, for a majority of our time on this earth, history has been written by the few and the privileged. It was often written by the winners of wars and the powerful to manipulate the artifacts left to following generations.

        And what can we know about those who came before us other than what was recorded?

        Too often, the perception that our history is being written by others and that it is out of our control can lead us into apathy.

        Writing history may never be perfect. But we believe when we can put that power into the hands of more people, that it will become better.

        This is a place where you can write your own history and it it will live on.

        This is your life. Decide what is important - what makes today worth remembering. And write your own history.
        </p>
      </div>
    </section>

    <section id="carousel">
      <div id="carousel-text">
        <h1>Make Today Worth Remembering</h1>
      </div>
      <img className="carousel-image" src="images/img6.jpg" />
    </section>
    </div>
    )

  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {}
}


/**
 * PROP TYPES
 */
