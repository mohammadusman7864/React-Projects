import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import farmhouse1 from "../assents/images/farmhouse1.jpg"
import img4 from '../assents/images/img4.jpg'
import img2 from '../assents/images/img2.jpg'
import img3 from '../assents/images/img3.jpg'
import img5 from '../assents/images/img5.jpg'
import img6 from '../assents/images/img6.jpg'

const About = () => {
  return (
    <>
      <Container style={{ marginTop: "50px" }}>
        <h1>About Us</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ipsam amet cum ad quidem! Impedit, aliquid!
          Harum deserunt rerum porro! Possimus harum, libero praesentium atque eveniet recusandae, voluptas voluptates
          at ipsum exercitationem minus nisi facere commodi sint neque consequuntur! Ipsum culpa expedita laborum nam
          doloribus assumenda enim officiis omnis, fugiat saepe ea quidem corrupti. Dignissimos pariatur quos sit
          tenetur et fugit repellendus minima aliquid quo consectetur, totam, sapiente sed adipisci, doloremque numquam
          facere molestias modi! Laudantium quia magnam qui aut, adipisci dolor quae quod, a aperiam dolorem aliquid.
          Perferendis iste nostrum libero? Unde, consequuntur dicta! Officia maiores autem, mollitia optio odio
          perferendis unde saepe voluptate nesciunt laborum consectetur fugit aperiam quaerat in recusandae
          accusamus dicta quam error esse eaque asperiores ab. Iure at recusandae porro id voluptatibus.
          Et quod molestias ullam enim consequatur facilis quo ipsum dolor quia. Mollitia, sapiente corporis
          exercitationem repudiandae dignissimos error ducimus illo in labore, consectetur tenetur ab,
          reprehenderit minima repellat. Recusandae, quasi id quaerat commodi minima alias deleniti, reiciendis
          officia magni temporibus impedit! Ipsam accusamus iste, fugiat enim aliquid a neque, laborum odit dolor
          explicabo rerum, ad eveniet tempore. Corporis vitae, facilis nostrum culpa dolor quibusdam
          aliquid, itaque atque voluptatum nesciunt inventore doloremque facere hic!</p>
        <h1>Our Speaciality</h1>
        <Row>
          <Col md={6}>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis, est facere ullam itaque id vitae
              quaerat doloremque quam impedit dolorum. Vero nesciunt eligendi cum, pariatur dolorum veniam omnis
              tenetur at? Libero at ab deleniti dignissimos a architecto fugiat, eligendi dolore, maxime aut alias
              id quae possimus voluptates! Ad eos eius assumenda id saepe? Reprehenderit, quibusdam illum officiis
              rerum ut commodi voluptatibus quos fugit? Placeat culpa ipsum omnis quidem a, impedit optio nobis quod
              rerum veniam. Earum cum eum hic laudantium error libero similique distinctio quae sint sit, eos incidunt id
              suscipit, perferendis voluptates magnam repellat fugiat sapiente quod doloribus corrupti!</p>
          </Col>
          <Col md={6}>
            <img src={farmhouse1} alt="pizza" />
          </Col>
        </Row>
        <Row style={{ marginTop: '12px' }}>
          <h1>Our Chief</h1>
          <Col md={6}>
            <img src={img4} alt="pizza" style={{ height: '50%', width: '53%' }} />
          </Col>
          <Col md={6}>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis, est facere ullam itaque id vitae
              quaerat doloremque quam impedit dolorum. Vero nesciunt eligendi cum, pariatur dolorum veniam omnis
              tenetur at? Libero at ab deleniti dignissimos a architecto fugiat, eligendi dolore, maxime aut alias
              id quae possimus voluptates! Ad eos eius assumenda id saepe? Reprehenderit, quibusdam illum officiis
              rerum ut commodi voluptatibus quos fugit? Placeat culpa ipsum omnis quidem a, impedit optio nobis quod
              rerum veniam. Earum cum eum hic laudantium error libero similique distinctio quae sint sit, eos incidunt id
              suscipit, perferendis voluptates magnam repellat fugiat sapiente quod doloribus corrupti!</p>
          </Col>
        </Row>
        <Row>

          <Col md={3}>
            <img src={img2} alt="pizza" style={{ height: '100%', width: '100%' }} />
          </Col>
          <Col md={3}>
            <img src={img3} alt="pizza" style={{ height: '100%', width: '100%' }} />
          </Col>
          <Col md={3}>
            <img src={img5} alt="pizza" style={{ height: '100%', width: '100%' }} />
          </Col>
          <Col md={3}>
            <img src={img6} alt="pizza" style={{ height: '100%', width: '100%' }} />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default About