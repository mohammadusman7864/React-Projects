import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import SpecialPizza from '../../component/specialpizza/SpecialPizza'
import pizzas from '../../pizzas-data'

const HomeScreen = () => {
  return (
    <>
    <Container>
        <Row>
            {pizzas.map(pizza => (
                <Col  md={4}>
             <SpecialPizza x={pizza} />
             </Col>   
            ) )}
        </Row>
    </Container>
    </>
  )
}

export default HomeScreen