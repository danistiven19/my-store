import React from 'react';
import Nav from 'react-bootstrap/Nav';
import NavBar from 'react-bootstrap/NavBar';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

const Header = (props) => {
  const { selectedProducts } = props;
  return (
    <NavBar bg="dark" variant="dark" className="justify-content-between">
      <NavBar.Brand href="/">
        My Store 2.0
      </NavBar.Brand>
      <Nav>
        <Nav.Item >
          <Button variant="primary" disabled>
           Products in Cart <Badge variant="light">{selectedProducts || 0}</Badge>
          </Button>
          <Button style={{ marginLeft: '10px' }} variant="dark">
            CLEAN CART
          </Button>
        </Nav.Item>
      </Nav>
    </NavBar>
  );
};

export default Header;
