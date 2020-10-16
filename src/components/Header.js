import React from 'react'
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";

const Header = () => {
  return (
    <Row>
      <Col className="text-center py-3">
        <header>
          <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
            <Container>
              <Navbar.Brand href="/">Brandi Bailey</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                  <Nav.Link href="/cart"><i className="fas fa-shopping-cart"></i>Contact</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </header>
      </Col>
    </Row>
  )
}

export default Header
