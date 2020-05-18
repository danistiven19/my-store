import React from 'react';

import SearchSection from './SearchSection';
import ProductTable from './ProductTable';
import AddProduct from './AddProduct';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ProductScreen = () => (
  <Container>
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
    <Row className="text-center mt-2">
        <Col>
          <AddProduct />
        </Col>
      </Row>
  </Container>
);

export default ProductScreen;
