import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'

const ModalCard = (props) => {
  return (
  <Modal trigger={<Button>Post Title Here</Button>}>
    <Modal.Header>Submitted by: </Modal.Header>
    <Modal.Content image>
      <Image wrapped size='medium' src='images/default-user.png' />
      <Modal.Description>
        <Header>Post Title</Header>
        <p>{props.post.content}</p>
        <p>Up Votes: {props.post.upVotes}</p>
        <p>Down Votes: {props.post.downVotes}</p>
      </Modal.Description>
    </Modal.Content>
  </Modal>
)
}

export default ModalCard
