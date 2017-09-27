import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from 'react-materialize';

/**
 * COMPONENT
 */
export const About = (props) => {
  const { } = props

  return (
    <div>
      <p>SAN JUAN, PUERTO RICO — Matt Lozon became trapped, marooned, stuck in a holding pattern at the international airport here. He slept every night on the floor in Terminal D, part of a horde of travelers hoping to score a precious ticket on a flight off the island. He lives in Idaho, which might as well be on a different planet.

      “I just feel like there’s no hope,” he said late Monday. “Why can’t we get out of here? Why won’t they get us out of here?”

      Getting off Puerto Rico and other storm-ravaged Caribbean islands has been an exercise in frustration, often culminating in despair, rage, and another grim night in a sweltering airport with no air conditioning and the steady boil of angry voices.

      While travel within the U.S. territory remains perilous — with washed-out and debris-strewn roads and damaged bridges — airports are gradually reopening. But Hurricane Maria severely damaged the radar system in the island’s capital of San Juan, and, with limited air traffic control, there are safety concerns that limit the pace of arrivals and departures.
      </p>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {}
}


export default connect(mapState)(About)

/**
 * PROP TYPES
 */
