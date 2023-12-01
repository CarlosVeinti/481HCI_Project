const initialState = {
    items: [],
  };

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_ITEM_TO_CART':
        return {
          ...state,
          items: [...state.items, action.payload],
        };
  
      case 'REMOVE_ITEM_FROM_CART':
        return {
          ...state,
          items: state.items.filter(item => item.id !== action.payload.id),
        };
  
      case 'UPDATE_ITEM_QUANTITY':
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: action.payload.quantity }
              : item
          ),
        };
  
      case 'CLEAR_CART':
        return {
          ...state,
          items: [],
        };
  
      // Add other cases as needed (e.g., handle promotions, calculate total, etc.)
  
      default:
        return state;
    }
  };
  
  export default cartReducer;
  