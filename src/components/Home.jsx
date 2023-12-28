import React from 'react'
import { Container, Row, Col, Collapse } from 'react-bootstrap'
import { GameBox } from './GameBox'
import { History } from './History'
import { Settings } from './Settings'

export const Home = () => {
  return (
    <Container fluid className='h-100' style={{ backgroundColor: 'lightblue' }}>
      <Row className='h-100'>
        <Col className='d-flex h-100 align-items-center justify-content-center'>
          <History />
        </Col>
        <Col className='d-flex h-100 align-items-center justify-content-center'>
          <GameBox />
        </Col>
        <Col className='d-flex h-100 align-items-center justify-content-center'>
          <Settings />
        </Col>
      </Row>
    </Container>
  )
}
