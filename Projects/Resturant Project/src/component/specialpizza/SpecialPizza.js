import React, {useState} from 'react'
import {Button,Card, Row, Col} from 'react-bootstrap';
import '../specialpizza/SpecialPizza.css'

const SpecialPizza = ({x}) => {
  const [varient, setVarient] = useState('large')
  const [quantity, setQuantity] = useState(1)
  return (
    <>
    <Card style={{ width: '18rem',  marginTop: '10%', marginBottom:'5%' }}>
      <Card.Img variant="top" style={{height:'256px'}} src={x.image} />
      <Card.Body>
        <Card.Title>{x.name}</Card.Title>
        <Card.Text>
        <Row>
          <Col md={6} lg={6}>
          <h6> Varients</h6>
            <select name="pizza" value={varient} onChange={(e) => setVarient(e.target.value)} >
              {x.varients.map((varient)=> (
                <option >{varient}</option>
              ) )
              }
            </select>
          </Col>

          <Col md={6} lg={6}>
            <h6>Quantity</h6>
            <select value={quantity} onChange={(e) => setQuantity(e.target.value)} >
            {[...Array(10).keys()].map((v,i) => 
               (
                <option value={i+1} >{i+1}</option>
               )
            )}
            </select>
          </Col>
        </Row>
        </Card.Text>
        <Row>
          <Col md={6} lg={6}>
            <h5>Price:  {x.prices [0][varient] * quantity}  </h5>
          </Col>
          <Col md={6} lg={6}>
        <Button className='cart' >Add To Cart</Button>
        </Col>
        </Row>
      </Card.Body>
    </Card>
 
    </>
  )
}

export default SpecialPizza