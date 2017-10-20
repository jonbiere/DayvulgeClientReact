import React from 'react'
import { Modal } from './index'

const Timeline = (props) => {
    const {events} = props;
    
  return (
    <div className="timelineContainer">
        <ul className="timeline timeline-centered">

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

        {/* This 'timeline-item-period is for big BREAKS in timeline with large date. SAVE FOR IMPLEMENTING LATER! */}

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

export default Timeline
