import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { GameBox } from './GameBox'
import { History } from './History'
import { Settings } from './Settings'
import { useState } from 'react'

export const Home = () => {
  const [gameHistory, setGameHistory] = useState([])

  return (
    <Container
      fluid
      className='h-100'
      style={{ backgroundColor: 'lightblue' }}
    >
      <Row className='h-100'>
        <Col className='d-flex h-100 align-items-center justify-content-center'>
          <History history={gameHistory} />
        </Col>
        <Col className='d-flex h-100 align-items-center justify-content-center'>
          <GameBox
            history={gameHistory}
            setHistory={setGameHistory}
          />
        </Col>
        <Col className='d-flex h-100 align-items-center justify-content-center'>
          <Settings />
        </Col>
      </Row>
    </Container>
  )
}
