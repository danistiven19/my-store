const containsText = (product, searchText) => {
  const { name, description, price } = product;
  const textField = (searchText || '').toLowerCase();
  
  return (name || '').toLowerCase().includes(textField) ||
    (description || '').toLowerCase().includes(textField) ||
    (price || '').toLowerCase().includes(textField);
};

export const selectProducts = (state) => state && state.products;

export const selectFilteredProducts = (state) => {
  const { products, filters } = state;
  console.log(filters.text);
  
  return products.filter((product) => (
    (filters.includeStockedOnly ? product.stocked : !filters.includeStockedOnly) &&
    containsText(product, filters.text)
  )
  );
};
