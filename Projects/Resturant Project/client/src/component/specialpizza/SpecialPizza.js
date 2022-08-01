import React, {useState} from 'react'
import {Button,Card, Row, Col, Modal } from 'react-bootstrap';
import '../specialpizza/SpecialPizza.css'



const SpecialPizza = ({x}) => {
  const [varient, setVarient] = useState('large')
  const [quantity, setQuantity] = useState(1)

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <Card style={{ width: '18rem',  marginTop: '10%', marginBottom:'5%' }}>
      <Card.Img variant="top" 
      style={{height:'256px', cursor:'pointer'}} 
      src={x.image} 
      onClick={handleShow}
      />
      <Card.Body>
        <Card.Title style={{color: '#e06377'}} >{x.name}</Card.Title>
        <hr/>
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
            {[...Array(10).keys()].map((i) => 
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

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{x.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <div> 
      <Card.Img variant="top" 
      style={{height:'256px'}} 
      src={x.image} />
      </div>
      <div style={{marginTop:'2%', color: '#c83349'}} >
        <h2>Description:</h2>
      </div>
      <div>
        <h4>{x.description}</h4>
      </div>
      </Modal.Body>
       
      </Modal>
   
 
    </>
  )
}

export default SpecialPizza