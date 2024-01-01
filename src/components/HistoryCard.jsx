import React from 'react'
import { Container, Image, Row, Col } from 'react-bootstrap'

const HistoryCard = ({ pokemon, img, categories, correct, skipped }) => {
  return (
    <Container style={{ borderLeft: `solid 5px ${correct ? 'green' : 'red'}` }}>
      <Row>
        <Col>
          <Image src={img} />
        </Col>
        <Col>
          <span>{pokemon}</span>
        </Col>
        <Col>
          <span>
            {categories[0]} | {categories[1]}
          </span>
        </Col>
      </Row>
    </Container>
  )
}

export default HistoryCard
