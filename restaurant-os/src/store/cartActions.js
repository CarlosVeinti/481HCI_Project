// cartActions.js
export const addItemToCart = (item) => ({
    type: 'ADD_ITEM_TO_CART',
    payload: item,
  });

  export const removeItemFromCart = (item) => ({
    type: 'REMOVE_ITEM_FROM_CART',
    payload: item,
  });