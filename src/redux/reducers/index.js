import { combineReducers } from "redux";
import { addToCartReducer, detailCartReducer, productsReducer, selectedProductsReducer, setCheckoutReducer } from "./productReducer";
const reducers = combineReducers({
  allProducts: productsReducer,
  product: selectedProductsReducer,
  cartProducts: addToCartReducer,
  detailCart: detailCartReducer,
  setCheckout: setCheckoutReducer
});
export default reducers;