import React from 'react'
import { Container, ListGroup, Stack } from 'react-bootstrap'
import HistoryCard from './HistoryCard'

export const History = ({ history }) => {
  return (
    <Container
      fluid
      className='d-flex flex-column h-100 p-0 m-3 justify-content-center align-items-center'
    >
      <Container
        className='poke-border text-center m-3 p-2'
        style={{ backgroundColor: 'white' }}
      >
        <span>History</span>
      </Container>
      <Container
        fluid
        className='d-flex h-75 p-0 m-0 poke-border'
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
    </Container>
  )
}
