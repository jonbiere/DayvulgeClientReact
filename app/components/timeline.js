import React from 'react';
import { Row, Col, Collapsible, CollapsibleItem } from 'react-materialize';



export const Timeline = (props) => {
    const { events } = props
    return (
    <Row>
    <Col offset="s1" s={10}>
    <ul className="timeline timeline-centered">

    {events.map(function(post){
        return (
        <li className="timeline-item">
            <div className="timeline-info">
                <span>{post.date || 'March 12, 2016'}</span>
            </div>
            <div className="timeline-marker"></div>

            <div className="timeline-content">
                <h5 className="timeline-title">{post.title || 'Post Title'}</h5>
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
        </li> */
    }
    </ul>
    </Col>
    </Row>
)
}