import { Row, Col, Image, Card, Button, ListGroup, Modal, Form } from 'react-bootstrap';
import homeVector from "../../assets/home.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';

import NavigationBar from '../NavigationBar';

const HomeComponent = (props: any) => {
  return (
    <>
      <Modal show={props?.showLogin} onHide={() => props?.toggleModal("showLogin")}>
        <Modal.Header closeButton>
          <Modal.Title>LOGIN</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Type your username here"
                name="username"
                onChange={(e: any) => props?.handleInputChange(e)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Type your password here"
                name="password"
                onChange={(e: any) => props?.handleInputChange(e)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="info" type="submit" onClick={(e: any) => props?.handleLogin(e)}>Submit</Button>
        </Modal.Footer>
      </Modal>
      <Modal show={props?.showError} onHide={() => props?.toggleModal("showError")}>
        <Modal.Header className="bg-danger" closeButton>
          <Modal.Title>ERROR</Modal.Title>
        </Modal.Header>
        <Modal.Body>Please login first!</Modal.Body>
      </Modal>
      <Modal show={props?.showSuccess} onHide={() => props?.toggleModal("showSuccess")}>
        <Modal.Header className="bg-success" closeButton>
          <Modal.Title>SUCCESS</Modal.Title>
        </Modal.Header>
        <Modal.Body>Package bought!</Modal.Body>
      </Modal>
      <NavigationBar toggleModal={props?.toggleModal} handleLogout={props?.handleLogout}/>
      <Row className="my-5 mx-0" id="home">
        <Col md={{span: 6, offset:5}} className="text-center my-5 fs-4">
          <p>Welcome to ERP Assistant, where seamless integration, efficiency, and growth converge 
            in our cutting-edge Enterprise Resource Planning solution.</p>
        </Col>
      </Row>
      <Row className="my-5 mx-0 ps-5">
        <Col xs={5} className="text-center fs-3 mt-5 px-5">
          <p><i>"Empowering business growth, harmoniously."</i></p>
          <Image src={homeVector} fluid />
        </Col>
      </Row>
      <Row id="about">
        <Col xs={12} xxl={6}>
          <h1 className="fw-bold text-center"><u>About Us</u></h1>
        </Col>
      </Row>
      <Row>
        <Col xs={{span: 8, offset: 2}} xxl={{span: 6, offset: 0}}>
          <p className="text-center px-5 my-5">At ERP Assistant, we're passionate about seamless ERP solutions 
          that empower your business's growth. Our cutting-edge software harmonizes operations, 
          enabling data-driven decisions for unparalleled productivity.</p>
        </Col>
      </Row>
      <Row className="p-5 line-decoration" id="pricing">
        <Col>
          <h1 className="fw-bold text-center my-5">Our Products</h1>
        </Col>
      </Row>
      <Row xs={1} md={3} className="mb-5">
        <Col className="p-3">
          <Card className="h-100">
            <Card.Body>
              <Card.Title className="fw-bold">Basic<br/><h1 className="my-3">Rp25.000/mo</h1></Card.Title>
              <Row>
                <Button variant="info fw-bold" size="lg" onClick={() => props?.handleBuyPackage()}>Choose Package</Button>
              </Row>
              <Card.Text className="mt-3">
                <p className="fw-bold text-muted">Features</p>
                <ListGroup>
                  <ListGroup.Item>Record incoming goods</ListGroup.Item>
                  <ListGroup.Item>Record outgoing goods</ListGroup.Item>
                  <ListGroup.Item>Record profit</ListGroup.Item>
                </ListGroup>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="p-3">
          <Card className="h-100">
            <Card.Body>
              <Card.Title className="fw-bold">Business<br/><h1 className="my-3">Rp55.000/mo</h1></Card.Title>
              <Row>
                <Button variant="info fw-bold" size="lg" onClick={() => props?.handleBuyPackage()}>Choose Package</Button>
              </Row>
              <Card.Text className="mt-3">
                <p className="fw-bold text-muted">Features</p>
                <ListGroup>
                  <ListGroup.Item>Record incoming goods</ListGroup.Item>
                  <ListGroup.Item>Record outgoing goods</ListGroup.Item>
                  <ListGroup.Item>Record profit</ListGroup.Item>
                  <ListGroup.Item>Analyze sales with chart</ListGroup.Item>
                  <ListGroup.Item>24/7 customer support</ListGroup.Item>
                </ListGroup>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="p-3">
          <Card className="h-100">
            <Card.Body>
              <Card.Title className="fw-bold">Entrepreneur<br/><h1 className="my-3">Rp150.000/mo</h1></Card.Title>
              <Row>
                <Button variant="info fw-bold" size="lg" onClick={() => props?.handleBuyPackage()}>Choose Package</Button>
              </Row>
              <Card.Text className="mt-3">
                <p className="fw-bold text-muted">Features</p>
                <ListGroup>
                  <ListGroup.Item>Record incoming goods</ListGroup.Item>
                  <ListGroup.Item>Record outgoing goods</ListGroup.Item>
                  <ListGroup.Item>Record profit</ListGroup.Item>
                  <ListGroup.Item>Analyze sales with chart</ListGroup.Item>
                  <ListGroup.Item>24/7 customer support</ListGroup.Item>
                  <ListGroup.Item>Export data to Excel</ListGroup.Item>
                  <ListGroup.Item>Predict profit with AI</ListGroup.Item>
                </ListGroup>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="bg-dark text-white bg-opacity-50" id="contact">
        <Col>
          <h1 className="fw-bold text-center my-5">Contact Us</h1>
        </Col>
      </Row>
      <Row>
        <Col className="text-center">
          <h3 className="my-5 fw-bold"><u>Let's get in touch!</u></h3>
          <p className="text-muted">For further information please contact:</p>
          <h1 className="fw-bold text-info">+6281234567890</h1>
          <h3 className="text-info d-flex align-items-center justify-content-center mt-5">
            <FontAwesomeIcon icon={faEnvelope} className="me-3" />
            customer-service@erpassistant.com
          </h3>
          <h3 className="text-info d-flex align-items-center justify-content-center mb-5">
            <FontAwesomeIcon icon={faLocationDot} className="me-3" />
            123 Anywhere St., Any City, ST 12345
          </h3>
        </Col>
      </Row>
    </>
  )
}

export default HomeComponent;