import { Container, Col } from 'react-bootstrap'
import { Header } from './components/Header'
import { Home } from './components/Home'

import './App.css'

function App() {
  return (
    <Container
      fluid
      className='m-0 p-0 vh-100'
    >
      <Col className='h-100 d-flex flex-column'>
        <Header />
        <Home />
      </Col>
    </Container>
  )
}

export default App
