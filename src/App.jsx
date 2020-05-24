import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Provider } from 'react-redux';

import Header from './components/Header';
import ProductScreen from './components/ProductScreen';
import {store} from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
    <Container>
      <Row>
        <Col>
          <Header />
        </Col>
      </Row>
      <Row>
        <Col>
          <ProductScreen />
        </Col>
      </Row>
    </Container>
    </Provider>
  );
}

export default App;
