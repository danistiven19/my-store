import { fetchingProducts, fetchProductSuccess, fetchProductFailed } from "./product.action";
import { getProducts } from "../services/product.service";

export const fetchProducts = (dispatch) => {
  dispatch(fetchingProducts());
  getProducts()
  .then(products =>
    dispatch(fetchProductSuccess(products))
  )
  .catch(errMessage =>
    dispatch(fetchProductFailed(errMessage))
  );
};
