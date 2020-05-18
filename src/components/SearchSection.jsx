import React from 'react';
import Form from 'react-bootstrap/Form';

const SearchSection = () => (
  <Form>
    <Form.Control type="text" placeholder="Start typing to perform a search"></Form.Control>
    <Form.Check type="checkbox" label="Include products in stock only"></Form.Check>
  </Form>
);

export default SearchSection;
