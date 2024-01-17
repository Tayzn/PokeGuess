import React from 'react'
import { Container, Form, Row, Col } from 'react-bootstrap'
import { typeCategories } from '../data/pokemon'

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

export const Settings = ({
  disabledCategories,
  setDisabledCategories,
  disabledRegions,
  setDisabledRegions,
}) => {
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

  const regionsChanged = ({ target: { checked, value } }) => {
    if (checked) {
      setDisabledRegions(disabledRegions.filter((c) => c !== value))
    } else {
      setDisabledRegions([...disabledRegions, value])
    }
  }

  return (
    <Container
      fluid
      className='d-flex justify-content-center align-items-center h-100 m-0 p-0 flex-column'
    >
      <Container
        className='poke-border text-center m-3 p-2'
        style={{ backgroundColor: 'white' }}
      >
        <span>Settings</span>
      </Container>
      <Container
        className='d-flex justify-content-center align-items-center h-50 poke-border'
        style={{ backgroundColor: 'white' }}
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
              <Form.Check
                label='Kanto'
                value='Kanto'
                checked={!disabledRegions.includes('Kanto')}
                onChange={regionsChanged}
              ></Form.Check>
              <Form.Check
                label='Johto'
                value='Johto'
                checked={!disabledRegions.includes('Johto')}
                onChange={regionsChanged}
              ></Form.Check>
              <Form.Check
                label='Hoenn'
                value='Hoenn'
                checked={!disabledRegions.includes('Hoenn')}
                onChange={regionsChanged}
              ></Form.Check>
            </Col>
            <Col xs={4}>
              <Form.Check
                label='Sinnoh'
                value='Sinnoh'
                checked={!disabledRegions.includes('Sinnoh')}
                onChange={regionsChanged}
              ></Form.Check>
              <Form.Check
                label='Unova'
                value='Unova'
                checked={!disabledRegions.includes('Unova')}
                onChange={regionsChanged}
              ></Form.Check>
              <Form.Check
                label='Kalos'
                value='Kalos'
                checked={!disabledRegions.includes('Kalos')}
                onChange={regionsChanged}
              ></Form.Check>
            </Col>
            <Col xs={4}>
              <Form.Check
                label='Alola'
                value='Alola'
                checked={!disabledRegions.includes('Alola')}
                onChange={regionsChanged}
              ></Form.Check>
              <Form.Check
                label='Galar'
                value='Galar'
                checked={!disabledRegions.includes('Galar')}
                onChange={regionsChanged}
              ></Form.Check>
              <Form.Check
                label='Paldea'
                value='Paldea'
                checked={!disabledRegions.includes('Paldea')}
                onChange={regionsChanged}
              ></Form.Check>
            </Col>
          </Row>
        </Form>
      </Container>
    </Container>
  )
}
