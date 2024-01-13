import React from 'react'
import { Container, Image, Row, Col, Stack } from 'react-bootstrap'
import CategoryLabel from './CategoryLabel'

const HistoryCard = ({ pokemon, img, categories, correct, skipped }) => {
  const getBorderColor = (correct, skipped) => {
    if (correct) {
      return 'green'
    }

    if (skipped) {
      return 'yellow'
    }

    return 'red'
  }

  const getBackgroundColor = (correct, skipped) => {
    if (correct) {
      return 'rgba(173, 247, 193, 0.7)'
    }

    if (skipped) {
      return 'rgba(252, 186, 3, 0.7)'
    }

    return 'rgba(247, 173, 173, 0.7)'
  }

  return (
    <Container
      className='mb-3 poke-border'
      style={{
        borderLeft: `solid 5px ${getBorderColor(correct, skipped)}`,
        backgroundColor: `${getBackgroundColor(correct, skipped)}`,
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
          <span
            style={{
              fontSize: pokemon.length > 9 ? '0.8em' : '1em',
              textOverflow: 'clip',
            }}
          >
            {pokemon}
          </span>
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
