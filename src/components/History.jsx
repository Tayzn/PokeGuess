import React from 'react'
import { Container, ListGroup } from 'react-bootstrap'
import HistoryCard from './HistoryCard'

export const History = ({ history }) => {
  return (
    <Container className='d-flex justify-content-center align-items-center h-75 overflow-y-scroll'>
      <Container
        fluid
        className='my-auto'
      >
        <ListGroup>
          {history.map((item, index) => (
            <ListGroup.Item key={index}>
              <HistoryCard
                img={item.img}
                pokemon={item.pokemon}
                categories={item.categories}
                correct={item.correct}
                skipped={item.skipped}
              />
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Container>
    </Container>
  )
}
