import React from 'react'
import { Container, Col, Form, Button } from 'react-bootstrap'
import { useState } from 'react'
import { checkAnswer } from '../utility/utility'
import PokemonInput from './PokemonInput'

export const GameBox = () => {
  const [categories, setCategories] = useState(['Fire', 'Monotype'])
  const [answer, setAnswer] = useState('')

  const check = (e) => {
    e.preventDefault()
    const result = checkAnswer(categories, answer)
    console.log(result)
  }

  return (
    <Container
      className='d-flex justify-content-center align-items-center h-25'
      style={{ backgroundColor: 'white' }}
    >
      <Col className='d-flex flex-column m-4 align-items-center h-100'>
        <a>
          {categories[0]} and {categories[1]}
        </a>
        <Form
          className='d-flex'
          onSubmit={(e) => check(e)}
        >
          <PokemonInput
            inputValue={answer}
            setInputValue={setAnswer}
          />
          <Button type='submit'>Submit</Button>
        </Form>

        <a>Streak: 5</a>
      </Col>
    </Container>
  )
}
