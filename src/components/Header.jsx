import React from 'react'
import { Image, Navbar, Container } from 'react-bootstrap'

import github from '../assets/images/github.svg'

export const Header = () => {
  return (
    <Navbar
      style={{
        backgroundColor: '#FF355E',
        borderBottom: '3px solid rgba(0,0,0,0.2)',
        height: '5%',
      }}
    >
      <Container
        fluid
        className='h-100'
      >
        <Navbar.Brand>PokeGuess</Navbar.Brand>
        <Navbar.Brand
          href='https://github.com/Tayzn/PokeGuess'
          className='h-100 p-0 m-0 me-2'
          style={{ color: 'white' }}
        >
          <Image
            fluid
            src={github}
            className='h-100 p-0 m-0 me-1 d-inline-block align-top'
          />
          GitHub
        </Navbar.Brand>
      </Container>
    </Navbar>
  )
}
