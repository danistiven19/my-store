import { FETCHING_PRODUCTS, ADD_PRODUCT, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILED, SELECT_PRODUCT, UNSELECT_PRODUCT, CLEAN_CART, SET_FILTER_TEXT, SET_FILTER_STOCK } from "./product.actionTypes";

const fetchingProducts = () => ({
  type: FETCHING_PRODUCTS
});

const addProduct = (product) => ({
  type: ADD_PRODUCT,
  payload: product
});

const fetchProductSuccess = (products) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: products
});

const fetchProductFailed = (errMessage) => ({
  type: FETCH_PRODUCTS_FAILED,
  payload: errMessage
});

const selectProduct = (selectedProductId) => ({
  type: SELECT_PRODUCT,
  payload: selectedProductId
});

const unselectProduct = (unselectedProductId) => ({
  type: UNSELECT_PRODUCT,
  payload: unselectedProductId
});

const cleanCart = () => ({
  type: CLEAN_CART
});

const setFilterText = (text) => ({
  type: SET_FILTER_TEXT,
  payload: text
});

const setFilterStock = (isStock) => ({
  type: SET_FILTER_STOCK,
  payload: isStock
});

export {
  fetchingProducts,
  addProduct,
  fetchProductSuccess,
  fetchProductFailed,
  selectProduct,
  unselectProduct,
  cleanCart,
  setFilterText,
  setFilterStock
};
