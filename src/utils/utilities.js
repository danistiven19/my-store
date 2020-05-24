export const groupBy = (products, attribute) => {
  return products.reduce((products, product) => {
    const key = product[attribute];
    if (!products[key]) {
      products[key] = [];
    }
    products[key].push(product);
    return products;
  }, {})
};
