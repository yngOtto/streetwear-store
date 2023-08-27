// Action Type
export const ADD_TO_CART = 'ADD_TO_CART';

// Action Creator
export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};
