import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import cake from '../img/macake.jpg'

const Home = () => {
  return (
      <Container>
           <Row>
                <Col>
                    <h1 className="pt-5">
                        Bienvenido a <span className="fw-bold">Happy Cake</span>
                    </h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h6> El lugar de los pasteles felices 😊</h6>
            </Col>
            </Row>
            <Row>
                <Col>
                    <img src={cake} alt="" width={200} className="m-4 rounded-5" />
                </Col>
            </Row>
      </Container>
  )
}

export default Home