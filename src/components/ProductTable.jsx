import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Table from 'react-bootstrap/Table';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';

import AddProduct from './AddProduct';
import {  selectFilteredProducts, selectSelectedProducts, selectProducts } from '../redux/product.selector';
import {  cleanCart, selectProduct } from '../redux/product.action';
import { groupBy } from '../utils/utilities';
import RowCategory from './RowCategory';
import RowProduct from './Row';

const ProductTable = (props) => {
  const allProducts = useSelector(selectProducts);
  const products = useSelector(selectFilteredProducts);
  const selectedProductIds = useSelector(selectSelectedProducts);
  const dispatch = useDispatch();

  const renderProductTable = () => {
    const productByCategory = groupBy(products, 'category');
    const categories = Object.keys(productByCategory) || [];
    const rows = [];
    categories.forEach((category, indexCategory) => {
      const categoryId = 'category_'+indexCategory;
      rows.push(<RowCategory category={category} key={categoryId} />);
      productByCategory[category].forEach((product, index) => {
        const currentProduct = { ...product };
        currentProduct.selected = selectedProductIds.indexOf(currentProduct.id) >= 0;
        rows.push(<RowProduct product={currentProduct} key={categoryId+'_product_'+index} />);
      });
    });

    return rows;
  };

  const renderProductSection = (props) => {
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

    const handleSelectAllChange = (event) => {
      if (!event.target.checked) {
        return dispatch(cleanCart());
      }

      dispatch(selectProduct(getStockedProducts().map(product => product.id)));
    };

    const getStockedProducts = () => {
      return allProducts.filter((product) => product.stocked);
    };

    return (
      <>
      <Form.Check checked={getStockedProducts().length === selectedProductIds.length} label="Select All" onChange={handleSelectAllChange} />
      <Table>
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Price</th>
            <th>Description</th>
            <th>In Stock</th>
          </tr>
        </thead>
        <tbody>
          {renderProductTable()}
        </tbody>
      </Table>
      </>
    );
  };

  return (
    <>
    <Row className="text-right mb-2">
        <Col>
          <AddProduct />
        </Col>
      </Row>
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
