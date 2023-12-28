import React from 'react'
import { Container, Col } from 'react-bootstrap'

export const GameBox = () => {
  return (
    <Container
      className='d-flex justify-content-center align-items-center h-25'
      style={{ backgroundColor: 'white' }}
    >
      <Col className='d-flex flex-column m-4 align-items-center'>
        <a>Fire and Grass</a>
        <input placeholder='Test'></input>
        <a>Streak: 5</a>
      </Col>
    </Container>
  )
}
