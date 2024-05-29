import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const NavbarComponent = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#">JustTweet</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/moments">
            <Nav.Link>Moments</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/notifications">
            <Nav.Link>Notifications</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/messages">
            <Nav.Link>Messages</Nav.Link>
          </LinkContainer>
        </Nav>
        <div className="topnav-right">
          <Form className="d-flex">
            <FormControl type="search" placeholder="Search" className="mr-2" aria-label="Search" />
            <Button variant="primary">Tweet</Button>
          </Form>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarComponent;
