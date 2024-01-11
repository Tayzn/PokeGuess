import React from 'react'
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Image,
  Stack,
  Ratio,
} from 'react-bootstrap'
import { useState, useEffect } from 'react'
import {
  checkAnswer,
  addToHistory,
  smartGenerateCategories,
  getImage,
} from '../utility/utility'
import PokemonInput from './PokemonInput'

import pokeball from '../assets/images/pokeball.png'
import run from '../assets/images/run.png'
import preview from '../assets/images/preview.png'
import incorrect from '../assets/images/incorrect.png'
import correct from '../assets/images/correct.png'
import invalidregion from '../assets/images/invalidregion.png'

const indicatorKey = {
  correct: correct,
  incorrect: incorrect,
  invalidregion: invalidregion,
}

export const GameBox = ({
  history,
  setHistory,
  disabledCategories,
  disabledRegions,
}) => {
  const [categories, setCategories] = useState(['Fire', 'Monotype'])
  const [answer, setAnswer] = useState('')
  const [streak, setStreak] = useState(0)
  const [shake, setShake] = useState(false)
  const [showResult, setShowResult] = useState(false)
  const [resultMessage, setResultMessage] = useState('correct')

  useEffect(() => {
    changeCategories()
  }, [disabledCategories, disabledRegions])

  const displayResult = (reason) => {
    setResultMessage(reason)
    setShowResult(true)
    setTimeout(() => setShowResult(false), 500)
  }

  const changeCategories = () => {
    const newCategories = smartGenerateCategories(
      disabledCategories,
      disabledRegions
    )
    setCategories(newCategories)
  }

  const shakeInput = () => {
    setShake(true)
    setTimeout(() => setShake(false), 500)
  }

  const check = (e) => {
    e.preventDefault()

    const result = checkAnswer(categories, answer, disabledRegions)

    if (result === true) {
      setStreak((previous) => {
        return previous + 1
      })
      changeCategories()
      displayResult('correct')
      setHistory(addToHistory(history, answer, categories, result, false))
    } else if (result === 'INVALID') {
      shakeInput()
    } else if (result === 'NOT_SELECTED') {
      shakeInput()
      displayResult('invalidregion')
    } else {
      setStreak(0)
      shakeInput()
      displayResult('incorrect')
      setHistory(addToHistory(history, answer, categories, result, false))
    }
  }

  const skip = (e) => {
    e.preventDefault()

    changeCategories()
    setStreak(0)
    shakeInput()
    displayResult('incorrect')
  }

  if (categories.length <= 0) {
    return (
      <Container
        className='d-flex justify-content-center align-items-center h-25'
        style={{ backgroundColor: '#FF355E' }}
      >
        <span
          className='p-3'
          style={{ border: 'solid 2px black', backgroundColor: 'white' }}
        >
          There are no valid solution sets for these settings!
        </span>
      </Container>
    )
  }

  return (
    <Container
      className='d-flex justify-content-center align-items-center poke-border'
      style={{
        backgroundColor: 'white',
      }}
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
        <Row className='d-flex mt-4 align-items-center justify-content-center'>
          <Stack
            className='m-0 p-0'
            style={{ maxWidth: '100px' }}
          >
            <Ratio
              aspectRatio={'1x1'}
              style={{ width: '100px' }}
            >
              <>
                <Image
                  fluid
                  roundedCircle
                  className='p-2'
                  style={{
                    backgroundImage: `url(${preview})`,
                  }}
                  src={getImage(answer)}
                />
                <Container
                  fluid
                  roundedCircle
                  className={
                    showResult ? 'indicator-shown' : 'indicator-hidden'
                  }
                  style={{
                    backgroundImage: `url(${indicatorKey[resultMessage]})`,
                  }}
                />
              </>
            </Ratio>
          </Stack>

          <Form
            className='d-flex w-75'
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
          <span className='d-flex justify-content-center mb-3'>
            Streak: {streak}
          </span>
        </Row>
      </Col>
    </Container>
  )
}
