import React from 'react'
import { Container, Row, Col, Table } from 'react-bootstrap'
import usman from '../assents/images/usman.jfif' 

const Contact = () => {
  return (
    <>
    <Container style={{marginTop:"50px"}}>
        <Row>
            <Col md={6}>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore ipsum sit illum 
                cumque possimus magnam veritatis molestias temporibus nisi animi a sed aut pariatur 
                minima corrupti commodi distinctio beatae dignissimos praesentium explicabo, ut ducimus 
                iste dolore non? Libero excepturi similique ipsum ea numquam rerum itaque eveniet beatae 
                quidem quas, tempore unde esse minima dicta fuga dolores reprehenderit officia fugit voluptatem 
                quasi aperiam ratione? Quam similique, corporis neque natus hic earum. Nostrum dolorem totam 
                voluptates quos mollitia vitae placeat, tempora nihil repellat ex assumenda amet numquam modi
                 explicabo distinctio unde corrupti repellendus ea suscipit perferendis enim? Quos omnis tenetur
                  pariatur dolorum.</p>
            </Col>
            <Col md={6}>
               <img src={usman} alt="usman" className="A"/>
            </Col>
        </Row>

    </Container>
    </>
  )
}

export default Contact