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
        
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
 
    </>
  )
}

export default SpecialPizza