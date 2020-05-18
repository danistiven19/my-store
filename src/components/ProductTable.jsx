import React from 'react';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';

const ProductTable = (props) => {
  const { products } = props;
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
        <th>TBD</th>
      </tr>
    </thead>
  </Table>
  );
}

export default ProductTable;
