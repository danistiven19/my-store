const url = 'http://my-json-server.typicode.com/luribeto/reactjs-course-data/products';
const getProducts = () => {
  return fetch(url)
  .then((products) => products.json());
};

export {
  getProducts
};
