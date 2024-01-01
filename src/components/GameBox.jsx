import React from 'react'
import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import {
  checkAnswer,
  addToHistory,
  generateCategories,
} from '../utility/utility'
import PokemonInput from './PokemonInput'

export const GameBox = ({ history, setHistory }) => {
  const [categories, setCategories] = useState(['Fire', 'Monotype'])
  const [answer, setAnswer] = useState('')
  const [streak, setStreak] = useState(0)

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
    }

    setHistory(addToHistory(history, answer, categories, result, false))
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
            />
            <Button type='submit'>Submit</Button>
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
