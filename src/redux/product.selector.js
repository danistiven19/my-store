const containsText = (product, searchText) => {
  const { name, description, price } = product;
  const textField = (searchText || '').toLowerCase();
  
  return (name || '').toLowerCase().includes(textField) ||
    (description || '').toLowerCase().includes(textField) ||
    (price || '').toLowerCase().includes(textField);
};

export const selectProducts = (state) => [...state && state.products];

export const selectSelectedProducts = (state) => [...state && state.selectedProductIds];

export const selectFilteredProducts = (state) => {
  const { products, filters } = state;
  
  return [...products].filter((product) => (
    (filters.includeStockedOnly ? product.stocked : !filters.includeStockedOnly) &&
    containsText(product, filters.text)
  )
  );
};
