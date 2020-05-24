import { FETCHING_PRODUCTS, ADD_PRODUCT, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILED, SELECT_PRODUCT, UNSELECT_PRODUCT, CLEAN_CART, SET_FILTER_TEXT, SET_FILTER_STOCK } from "./product.actionTypes";

const initialState = {
  filters: {
    text: '',
    includeStockedOnly: false
  },
  appData: {
    isLoading: false,
    errorMessage: ''
  },
  products: [],
  selectedProductIds: []
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_PRODUCTS:
      return {
        ...state,
        appData: { ...state.appData, isLoading: true }
      };


    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        appData: { ...state.appData, isLoading: false },
        products: action.payload
      };

    case FETCH_PRODUCTS_FAILED:
      return {
        ...state,
        appData: { ...state.appData, isLoading: false, errorMessage: action.payload }
      };

    case ADD_PRODUCT: 
      return {
        ...state,
        appData: { ...state.appData, isLoading: false },
        products: [...state.products, action.payload]
      };

    case SELECT_PRODUCT:
      const selectedProductId = action.payload;
      if (state.selectedProductIds.indexOf(selectedProductId) <= -1) {
        return {
          ...state,
          selectedProductIds: [ ...state.selectedProductIds, selectedProductId]
        };
      }

      return { ...state };

    case UNSELECT_PRODUCT:
      const unselectedProductPosition = state.selectedProductIds.indexOf(action.payload);
      if (unselectedProductPosition > -1) {
        return {
          ...state,
          selectedProductIds: [...state.selectedProductIds.splice(unselectedProductPosition, 1)]
        };
      }

      return { ...state };

    case CLEAN_CART:
      return {
        ...state,
        selectedProductIds: []
      };

    case SET_FILTER_TEXT:
      return {
        ...state,
        filters: {
          ...state.filters,
          text: action.payload
        }
      };

    case SET_FILTER_STOCK:
      return {
        ...state,
        filters: {
          ...state.filters,
          includeStockedOnly: action.payload
        }
      };

    default:
      return state;
  }
};
