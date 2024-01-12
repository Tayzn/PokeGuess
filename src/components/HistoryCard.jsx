import React from 'react'
import { Container, Image, Row, Col, Stack } from 'react-bootstrap'
import CategoryLabel from './CategoryLabel'

const HistoryCard = ({ pokemon, img, categories, correct, skipped }) => {
  return (
    <Container
      className='mb-3 poke-border'
      style={{
        borderLeft: `solid 5px ${correct ? 'green' : 'red'}`,
        backgroundColor: `${
          correct ? `rgba(173, 247, 193, 0.7)` : `rgba(247, 173, 173, 0.7)`
        }`,
        height: '80px',
      }}
    >
      <Row className='d-flex h-100 overflow-hidden'>
        <Col
          className='h-100 d-flex ps-3 align-items-center'
          xs={3}
        >
          <Image
            fluid
            src={img}
            style={{ height: '65px' }}
          />
        </Col>
        <Col className='h-100 d-flex align-items-center'>
          <span>{pokemon}</span>
        </Col>
        <Col className='h-100 d-flex justify-content-center align-items-center'>
          <Stack className='my-2 align-items-end overflow-y-scroll'>
            {categories.map((category) => (
              <CategoryLabel
                className='my-0'
                label={category}
              />
            ))}
          </Stack>
        </Col>
      </Row>
    </Container>
  )
}

export default HistoryCard
