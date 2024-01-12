import React from 'react'
import { Navbar } from 'react-bootstrap'

export const Header = () => {
  return (
    <Navbar
      style={{
        backgroundColor: '#FF355E',
        borderBottom: '3px solid rgba(0,0,0,0.2)',
        height: '5%',
      }}
    >
      PokeGuess
    </Navbar>
  )
}
