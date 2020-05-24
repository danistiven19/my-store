import React from 'react';

const RowProduct = (props) => {
  const {product} = props;
  return <>
  <tr>
    <td>{ product.name }</td>
    <td>{ product.price }</td>
      <td>
        <span>{ product.description } </span>
      </td>
    <td>{ product.stocked ? 'Yes' : 'No' }</td>
  </tr>
  </>;
};

export default RowProduct;
