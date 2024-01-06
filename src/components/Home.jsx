import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { GameBox } from './GameBox'
import { History } from './History'
import { Settings } from './Settings'
import { useState } from 'react'

export const Home = () => {
  const [gameHistory, setGameHistory] = useState([])
  const [disabledCategories, setDisabledCategories] = useState([])

  return (
    <Container
      fluid
      className='h-100'
      style={{ backgroundColor: '#ebe6e6', fontFamily: 'Pokemon' }}
    >
      <Row className='h-100'>
        <Col
          xs={3}
          className='d-flex h-100 p-0'
          style={{ backgroundColor: 'white', borderRight: '3px solid gray' }}
        >
          <History history={gameHistory} />
        </Col>
        <Col
          xs={6}
          className='d-flex h-100 align-items-center justify-content-center'
        >
          <GameBox
            history={gameHistory}
            setHistory={setGameHistory}
            disabledCategories={disabledCategories}
          />
        </Col>

        <Col className='d-flex h-100 align-items-center justify-content-center'>
          <Settings
            disabledCategories={disabledCategories}
            setDisabledCategories={setDisabledCategories}
          />
        </Col>
      </Row>
    </Container>
  )
}
