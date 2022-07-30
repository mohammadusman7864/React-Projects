import React from 'react'
import { Container, Row, Col, } from 'react-bootstrap'
import { AiFillContacts } from 'react-icons/ai'
import { BiPhoneCall } from "react-icons/bi"
import { AiOutlineMail } from "react-icons/ai"
import usman from '../../assents/images/usman.jfif'

const Footer = () => {
  return (
    <>
      <Container fluid style={{ marginTop: "50px" }}>

        <Row style={{ backgroundColor: '#80ced6' }}>
          <h1>CONTACT:</h1>
          <Col md={3}>
            <AiFillContacts style={{ height: '45%', width: '50%' }} />
            <h3>Muhammad Usman</h3>

          </Col>
          <Col md={3} >
            <BiPhoneCall style={{ height: '45%', width: '50%' }} />
            <h2>Cell:+923067052683</h2>

          </Col>
          <Col md={3} >
            <AiOutlineMail style={{ height: '45%', width: '50%' }} />
            <h2>email:</h2><h3>mohammadusman7864@gmail.com</h3>
          </Col>
          <Col md={3} >
            <img src={usman} alt="usman" className="A" />
          </Col>
        </Row>

      </Container>
    </>
  )
}

export default Footer