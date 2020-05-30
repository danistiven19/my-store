import React from 'react';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { selectProduct, unselectProduct } from '../redux/product.action';


const RowProduct = (props) => {
  const {product} = props;
  const dispatch = useDispatch();
  const handleChange = (event) => {
    if (event.target.checked) {
      return dispatch(selectProduct(product.id));
    }

    return dispatch(unselectProduct(product.id));
  };

  return <>
  <tr>
    <td>
      <Form.Check id={`input_${product.id}`} disabled={!product.stocked} checked={product.selected} onChange={handleChange} />
    </td>
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
