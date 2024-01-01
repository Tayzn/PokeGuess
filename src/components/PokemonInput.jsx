import React from 'react'
import { pokemon } from '../data/pokemon'
import { useState } from 'react'
import { Form, Container, ListGroup, Image } from 'react-bootstrap'
import { useCombobox } from 'downshift'
import { capitalizeFirstLetter, getImage } from '../utility/utility'

const PokemonInput = ({ inputValue, setInputValue, shake }) => {
  const [items, setItems] = useState(pokemon)

  const {
    isOpen,
    getMenuProps,
    getInputProps,
    highlightedIndex,
    getItemProps,
  } = useCombobox({
    onInputValueChange({ inputValue }) {
      let filtered = pokemon.filter((poke) =>
        poke.includes(inputValue.toUpperCase())
      )
      setItems(filtered)
      setInputValue(inputValue)
    },
    items,
    itemToString(item) {
      return capitalizeFirstLetter(item)
    },
  })

  return (
    <Container className='h-100'>
      <Form.Control
        type='text'
        placeholder='Pikachu'
        {...getInputProps()}
        className={shake ? 'wrong' : ''}
      />
      <ListGroup
        as='ul'
        className={`position-absolute overflow-y-scroll ${
          !(isOpen && items.length && inputValue.length > 0) && 'd-none'
        }`}
        style={{ maxHeight: '25%', width: '20%' }}
        {...getMenuProps()}
      >
        {isOpen &&
          inputValue.length > 0 &&
          items.map((poke, index) => (
            <ListGroup.Item
              as='li'
              key={index}
              style={{
                backgroundColor: highlightedIndex === index && 'lightblue',
              }}
              {...getItemProps({ poke, index })}
            >
              <Image
                fluid
                src={getImage(poke)}
              />
              <span
                className='mx-2'
                style={{ fontWeight: '500' }}
              >
                {capitalizeFirstLetter(poke)}
              </span>
            </ListGroup.Item>
          ))}
      </ListGroup>
    </Container>
  )
}

export default PokemonInput
