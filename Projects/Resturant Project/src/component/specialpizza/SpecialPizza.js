import React from 'react'
import {Button,Card, Row, Col} from 'react-bootstrap';

const SpecialPizza = ({x}) => {
  return (
    <>
    <Card style={{ width: '18rem',  marginTop: '10%' }}>
      <Card.Img variant="top" src={x.image} />
      <Card.Body>
        <Card.Title>{x.name}</Card.Title>
        <Card.Text>
        <Row>
          <Col md={6}>
          <h6> Varients</h6>
            <select name="pizza">
              {x.varients.map((varient)=> (
                <option value={varient}>{varient}</option>
              ) )
              }
            </select>
          </Col>
          <Col md={6}>
            <h6>Quantity</h6>
            {[...Array(10).keys()].map((v,i) => 
               (
                <option value={i+1}>{i+1}</option>
               )
            )}
          </Col>
        </Row>
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
 
    </>
  )
}

export default SpecialPizza