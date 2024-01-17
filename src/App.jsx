import { Container } from 'react-bootstrap'
import { Header } from './components/Header'
import { Home } from './components/Home'

import './App.css'

function App() {
  return (
    <Container
      fluid
      className='m-0 p-0 vh-100 bg'
    >
      <Container
        fluid
        className='m-0 p-0 h-100 d-flex flex-column bg'
      >
        <Header />
        <Home />
      </Container>
    </Container>
  )
}

export default App
