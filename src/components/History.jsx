import React from 'react'
import { Container, ListGroup, Stack } from 'react-bootstrap'
import HistoryCard from './HistoryCard'

export const History = ({ history }) => {
  return (
    <Container
      fluid
      className='d-flex h-75 p-0 m-3 poke-border'
      style={{ backgroundColor: 'white' }}
    >
      <Stack className='d-flex h-100 p-3 overflow-y-scroll'>
        {history.map((item, index) => (
          <HistoryCard
            key={index}
            img={item.img}
            pokemon={item.pokemon}
            categories={item.categories}
            correct={item.correct}
            skipped={item.skipped}
          />
        ))}
      </Stack>
    </Container>
  )
}
