import React from 'react';
import { useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';

import AddProduct from './AddProduct';
import {  selectFilteredProducts } from '../redux/product.selector';
import { groupBy } from '../utils/utilities';
import RowCategory from './RowCategory';
import RowProduct from './Row';

const ProductTable = (props) => {
  const renderProductTable = (products) => {
    const productByCategory = groupBy(products, 'category');
    const categories = Object.keys(productByCategory) || [];
    const rows = [];
    categories.forEach((category, indexCategory) => {
      const categoryId = 'category_'+indexCategory;
      rows.push(<RowCategory category={category} key={categoryId} />);
      productByCategory[category].forEach((product, index) => {
        rows.push(<RowProduct product={product} key={categoryId+'_product_'+index} />);
      });
    });

    return rows;
  };

  const renderProductSection = (props) => {
    const products = useSelector(selectFilteredProducts);

    if (!products || !products.length) {
      return (
        <Card className="text-center">
          <Card.Body>
            <Card.Text>
              No Products available
            </Card.Text>
          </Card.Body>
        </Card>
      );
    }


    return (
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Description</th>
            <th>In Stock</th>
          </tr>
        </thead>
        <tbody>
          {renderProductTable(products)}
        </tbody>
      </Table>
    );
  };

  return (
    <>
      {renderProductSection(props)}
      <Row className="text-center mt-2">
        <Col>
          <AddProduct />
        </Col>
      </Row>
    </>
  );
}

export default ProductTable;
