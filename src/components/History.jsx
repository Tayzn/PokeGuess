import React from 'react'
import { Container, ListGroup, Stack } from 'react-bootstrap'
import HistoryCard from './HistoryCard'

export const History = ({ history }) => {
  return (
    <Container
      fluid
      className='d-flex h-100 p-0 m-0'
    >
      <Stack
        gap={3}
        className='d-flex h-100 p-0 m-0'
      >
        <span
          className='d-flex justify-content-center'
          style={{ backgroundColor: 'gray' }}
        >
          Your Guesses
        </span>
        <Container
          fluid
          className='h-100 overflow-y-scroll'
        >
          <ListGroup>
            {history.map((item, index) => (
              <ListGroup.Item
                key={index}
                style={{
                  backgroundColor: `${
                    item.correct
                      ? `rgba(173, 247, 193, 0.7)`
                      : `rgba(247, 173, 173, 0.7)`
                  }`,
                }}
              >
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
      </Stack>
    </Container>
  )
}
