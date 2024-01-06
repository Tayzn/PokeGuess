import React from 'react'
import { Container, Form, Row, Col } from 'react-bootstrap'

const typeCategories = [
  'Normal',
  'Fire',
  'Water',
  'Electric',
  'Grass',
  'Ice',
  'Fighting',
  'Poison',
  'Ground',
  'Flying',
  'Psychic',
  'Bug',
  'Rock',
  'Ghost',
  'Dragon',
  'Dark',
  'Steel',
  'Fairy',
]

const regionCategories = [
  'Kanto',
  'Johto',
  'Hoenn',
  'Sinnoh',
  'Unova',
  'Kalos',
  'Alola',
  'Galar',
  'Paldea',
]

export const Settings = ({ disabledCategories, setDisabledCategories }) => {
  const checkChanged = ({ target: { checked, value } }) => {
    if (checked) {
      setDisabledCategories(disabledCategories.filter((c) => c !== value))
    } else {
      setDisabledCategories([...disabledCategories, value])
    }
  }

  const checkChangedTypes = ({ target: { checked } }) => {
    if (checked) {
      setDisabledCategories(
        disabledCategories.filter((c) => !typeCategories.includes(c))
      )
    } else {
      setDisabledCategories([...disabledCategories].concat(typeCategories))
    }
  }

  const checkChangedRegions = ({ target: { checked } }) => {
    if (checked) {
      setDisabledCategories(
        disabledCategories.filter((c) => !regionCategories.includes(c))
      )
    } else {
      setDisabledCategories([...disabledCategories].concat(regionCategories))
    }
  }

  return (
    <Container
      className='d-flex justify-content-center align-items-center h-50'
      style={{ backgroundColor: 'lightgray' }}
    >
      <Form>
        <Form.Label>Categories</Form.Label>
        <Row>
          <Col xs={6}>
            <Form.Check
              label='Types'
              value='Types'
              checked={!disabledCategories.includes('Normal')}
              onChange={checkChangedTypes}
            ></Form.Check>
            <Form.Check
              label='Monotypes'
              value='Monotype'
              checked={!disabledCategories.includes('Monotype')}
              onChange={checkChanged}
            ></Form.Check>
            <Form.Check
              label='Regions'
              value='Regions'
              checked={!disabledCategories.includes('Kanto')}
              onChange={checkChangedRegions}
            ></Form.Check>
            <Form.Check
              label='Megas'
              value='Mega'
              checked={!disabledCategories.includes('Mega')}
              onChange={checkChanged}
            ></Form.Check>
          </Col>
          <Col xs={6}>
            <Form.Check
              label='Babies'
              value='Baby'
              checked={!disabledCategories.includes('Baby')}
              onChange={checkChanged}
            ></Form.Check>
            <Form.Check
              label='Ultrabeasts'
              value='Ultrabeast'
              checked={!disabledCategories.includes('Ultrabeast')}
              onChange={checkChanged}
            ></Form.Check>
            <Form.Check
              label='Legendaries'
              value='Legendary'
              checked={!disabledCategories.includes('Legendary')}
              onChange={checkChanged}
            ></Form.Check>
            <Form.Check
              label='Mythicals'
              value='Mythical'
              checked={!disabledCategories.includes('Mythical')}
              onChange={checkChanged}
            ></Form.Check>
          </Col>
        </Row>

        <Form.Label className='mt-5'>Regions</Form.Label>
        <Row>
          <Col xs={4}>
            <Form.Check label='Kanto'></Form.Check>
            <Form.Check label='Johto'></Form.Check>
            <Form.Check label='Hoenn'></Form.Check>
          </Col>
          <Col xs={4}>
            <Form.Check label='Sinnoh'></Form.Check>
            <Form.Check label='Unova'></Form.Check>
            <Form.Check label='Kalos'></Form.Check>
          </Col>
          <Col xs={4}>
            <Form.Check label='Alola'></Form.Check>
            <Form.Check label='Galar'></Form.Check>
            <Form.Check label='Paldea'></Form.Check>
          </Col>
        </Row>
      </Form>
    </Container>
  )
}
