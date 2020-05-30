import React from 'react';
import Nav from 'react-bootstrap/Nav';
import NavBar from 'react-bootstrap/NavBar';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

import { useSelector, useDispatch } from 'react-redux';
import { selectSelectedProducts } from '../redux/product.selector';
import { cleanCart } from '../redux/product.action';

const Header = (props) => {
  const dispatch = useDispatch();
  const selectedProducts = useSelector(selectSelectedProducts);

  const handleCleanCart = () => {
    dispatch(cleanCart())
  };

  return (
    <NavBar bg="dark" variant="dark" className="justify-content-between">
      <NavBar.Brand href="/">
        My Store 2.0
      </NavBar.Brand>
      <Nav>
        <Nav.Item >
          <Button variant="primary" disabled>
           Products in Cart <Badge variant="light">{selectedProducts.length || 0}</Badge>
          </Button>
          <Button style={{ marginLeft: '10px' }} onClick={handleCleanCart} variant="dark">
            CLEAN CART
          </Button>
        </Nav.Item>
      </Nav>
    </NavBar>
  );
};

export default Header;
