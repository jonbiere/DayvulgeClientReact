import React from 'react'
import { Modal } from './index'
import { Form, TextArea } from 'semantic-ui-react';

const personalTimeline = (props) => {
    const {events} = props;



  /*
  ****************************************************
  PersonalTimeline is basically exactly the same as the
  regular timeline other than the first element that is
  rendered (before it starts looping over the events and
  creating a new list element for each) it first renders
  a <Form> element for the users input for that day.

  Will have to be updated in the future with some logic
  to see if they have already posted for that day. But
  for now, just created a different timeline element
  for the personal timeline because I felt like they
  would eventually diverge enough to necessitate
  having two different types of timelines anyway.
  ****************************************************
  */
  return (
    <div className="timelineContainer">
        <ul className="timeline timeline-centered">

        <li className="timeline-item">
                <div className="timeline-info">
                    <span>{'March 12, 2016'}</span>
                </div>
                <div className="timeline-marker"></div>

                <div className="timeline-content">
                    <h5 className="timeline-title">{/*<Modal post={post}/>*/}</h5>
                    <Form>
                        <TextArea autoHeight placeholder='What defined today?' />
                    </Form>
                </div>
            </li>

        {events.map(function(post){
            return (
            <li className="timeline-item">
                <div className="timeline-info">
                    <span>{post.createdAt || 'March 12, 2016'}</span>
                </div>
                <div className="timeline-marker"></div>

                <div className="timeline-content">
                    <h5 className="timeline-title">{<Modal post={post}/>}</h5>
                    <p>{post.content}</p>
                    <p>Up Votes: {post.upVotes}</p>
                    <p>Down Votes: {post.downVotes}</p>
                </div>
            </li>
            )
        })}

        {/*
        ****************************************************
        This 'timeline-item-period is for big BREAKS in timeline
        with large date. SAVE FOR IMPLEMENTING LATER!
        ****************************************************
        */}

        {/* <li className="timeline-item period">
            <div className="timeline-info"></div>
            <div className="timeline-marker"></div>
            <div className="timeline-content">
                <h2 className="timeline-title">April 2016</h2>
            </div>
        </li> */}


        </ul>
  </div>
    )
}

export default personalTimeline
