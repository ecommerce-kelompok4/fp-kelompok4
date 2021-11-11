import { ActionTypes } from "../constants/action-types";

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};

export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};

export const addToCart = (productsCart) => {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: productsCart,
  };
};

export const detailProductCart = (detailsCart) => {
  return {
    type: ActionTypes.DETAIL_PRODUCT_CART,
    payload: detailsCart,
  };
};

export const setCheckoutProduct = (item) => {
  return {
    type: ActionTypes.SET_CHECKOUT,
    payload: item,
  };
};