import React from 'react';
import { useDispatch } from 'react-redux';
import Form from 'react-bootstrap/Form';
import { setFilterText, setFilterStock } from '../redux/product.action';

const SearchSection = () => {
  const dispatch = useDispatch();  

  const handleSearch = (event) => {
    const searchTerm = event && event.target ? event.target.value : '';
    dispatch(setFilterText(searchTerm));
  };

  const handleCheck = (event) => {
    const isStockOnly = event && event.target ? event.target.checked : false;
    dispatch(setFilterStock(isStockOnly));
  };

  return <Form>
    <Form.Control type="text" onChange={handleSearch} placeholder="Start typing to perform a search"></Form.Control>
    <Form.Check type="checkbox" onChange={handleCheck} label="Include products in stock only"></Form.Check>
  </Form>
};

export default SearchSection;
