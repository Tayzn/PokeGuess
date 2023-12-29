import React from 'react'
import { pokemon } from '../data/pokemon'
import { useState } from 'react'
import { Form, FormControl, Button } from 'react-bootstrap'
import { useCombobox } from 'downshift'

const PokemonInput = () => {
  const [items, setItems] = useState(pokemon)

  const { isOpen, getMenuProps, getInputProps, getItemProps } = useCombobox({
    onInputValueChange({ inputValue }) {
      setItems(
        pokemon.filter((poke) => poke.includes(inputValue.toUpperCase()))
      )
    },
    items,
    itemToString(item) {
      return item ? item.toLowerCase() : ''
    },
  })

  return (
    <div>
      <div>
        <div>
          <input placeholder='Bulbasaur' {...getInputProps()} />
        </div>
      </div>
      <ul {...getMenuProps()}>
        {isOpen &&
          items.map((item, index) => {
            if (index > 10) {
              return
            }

            return (
              <li key={item.id} {...getItemProps({ item, index })}>
                <span>{item}</span>
              </li>
            )
          })}
      </ul>
    </div>
  )
}

export default PokemonInput
