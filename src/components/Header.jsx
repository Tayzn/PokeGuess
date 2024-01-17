import React from 'react'
import { Image, Navbar, Container } from 'react-bootstrap'

import github from '../assets/images/github.svg'
import logo from '../assets/images/logo.svg'

export const Header = () => {
  return (
    <Navbar
      style={{
        backgroundColor: '#FF355E',
        borderBottom: '3px solid rgba(0,0,0,0.2)',
        height: '6%',
      }}
    >
      <Container
        fluid
        className='h-100'
      >
        <Navbar.Brand className='h-100 p-0 m-0'>
          <Image
            fluid
            src={logo}
            className='h-100 p-0 m-0 ms-1 d-inline-block align-top'
          />
        </Navbar.Brand>
        <Navbar.Brand
          href='https://github.com/Tayzn/PokeGuess'
          className='h-100 p-0 m-0 me-2 d-flex align-items-center'
          style={{ color: 'white' }}
        >
          <Image
            fluid
            src={github}
            className='h-100 p-0 m-0 me-1 d-inline-block align-top'
          />
          <a>GitHub</a>
        </Navbar.Brand>
      </Container>
    </Navbar>
  )
}
