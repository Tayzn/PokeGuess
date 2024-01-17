import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { GameBox } from './GameBox'
import { History } from './History'
import { Settings } from './Settings'
import { useState } from 'react'

export const Home = () => {
  const [gameHistory, setGameHistory] = useState([])
  const [disabledCategories, setDisabledCategories] = useState([])
  const [disabledRegions, setDisabledRegions] = useState([])

  return (
    <Container
      fluid
      style={{
        fontFamily: 'Pokemon',
        height: '94%',
      }}
    >
      <Row className='h-100'>
        <Col
          xs={3}
          className='d-flex h-100 p-0 align-items-center justify-content-center'
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
            disabledRegions={disabledRegions}
          />
        </Col>

        <Col className='d-flex h-100 align-items-center justify-content-center'>
          <Settings
            disabledCategories={disabledCategories}
            setDisabledCategories={setDisabledCategories}
            disabledRegions={disabledRegions}
            setDisabledRegions={setDisabledRegions}
          />
        </Col>
      </Row>
    </Container>
  )
}
