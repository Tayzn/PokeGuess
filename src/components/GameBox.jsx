import React from 'react'
import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import {
  checkAnswer,
  addToHistory,
  generateCategories,
} from '../utility/utility'
import PokemonInput from './PokemonInput'
import pokeball from '../assets/images/pokeball.png'
import run from '../assets/images/run.png'

export const GameBox = ({ history, setHistory }) => {
  const [categories, setCategories] = useState(['Fire', 'Monotype'])
  const [answer, setAnswer] = useState('')
  const [streak, setStreak] = useState(0)
  const [shake, setShake] = useState(false)

  useEffect(() => {
    setCategories(generateCategories())
  }, [])

  const check = (e) => {
    e.preventDefault()
    const result = checkAnswer(categories, answer)

    if (result) {
      setStreak((previous) => {
        return streak + 1
      })
      setCategories(generateCategories())
    } else {
      setStreak(0)
      setShake(true)
      setTimeout(() => setShake(false), 500)
    }

    setHistory(addToHistory(history, answer, categories, result, false))
  }

  const skip = (e) => {
    e.preventDefault()
    setCategories(generateCategories())
    setStreak(0)
    setShake(true)
    setTimeout(() => setShake(false), 500)
  }

  return (
    <Container
      className='d-flex justify-content-center align-items-center h-25'
      style={{ backgroundColor: 'white' }}
    >
      <Col>
        <Row className='d-flex m-4 align-items-center'>
          {categories.map((category, index) => (
            <Col
              className='d-flex justify-content-center'
              style={{ border: 'solid 1px' }}
              key={index}
            >
              <span>{category}</span>
            </Col>
          ))}
        </Row>
        <Row className='d-flex m-4 align-items-center'>
          <Form
            className='d-flex'
            onSubmit={(e) => check(e)}
          >
            <PokemonInput
              inputValue={answer}
              setInputValue={setAnswer}
              shake={shake}
            />
            <Button
              type='submit'
              variant='success'
              className='d-flex align-items-center p-2 me-1'
            >
              <Image
                fluid
                src={pokeball}
              />
            </Button>
            <Button
              variant='warning'
              className='d-flex align-items-center p-2'
              onClick={skip}
            >
              <Image
                fluid
                src={run}
              />
            </Button>
          </Form>
        </Row>
        <Row>
          <span className='d-flex justify-content-center'>
            Streak: {streak}
          </span>
        </Row>
      </Col>
    </Container>
  )
}
