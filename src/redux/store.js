import { createStore } from 'redux';
import { productReducer } from './product.reducer';

export const store = createStore(
  productReducer,
   /* preloadedState, */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
