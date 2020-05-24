import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import SearchSection from './SearchSection';
import ProductTable from './ProductTable';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { fetchProducts } from '../redux/product.effects';

const ProductScreen = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchProducts(dispatch)
  });

  return <Container>
      <Row className="mt-5">
        <Col>
          <SearchSection />
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          <ProductTable />
        </Col>
      </Row>
    </Container>;
}

export default ProductScreen;
