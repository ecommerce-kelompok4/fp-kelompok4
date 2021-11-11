import { ActionTypes } from "../constants/action-types";
const intialState = {
  products: [],
  cartProducts: [],
  detailCart: []
};

export const productsReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const selectedProductsReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};

export const addToCartReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_TO_CART:
      state.cartProducts.push(payload[0])
      console.log(state)
      return { cartProducts: state.cartProducts };
    default:
      return state;
  }
};

export const detailCartReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.DETAIL_PRODUCT_CART:
      state.detailCart = payload
      return { detailCart: state.detailCart }
    default:
      return state;
  }
};

export const setCheckoutReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_CHECKOUT:
      return { ...state, ...payload };
    // case ActionTypes.REMOVE_SELECTED_PRODUCT:
    //   return {};
    default:
      return state;
  }
};