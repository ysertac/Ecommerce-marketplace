import { ADD_CART, PLUS_CART } from "../actions/shoppingCartActions";

const initialState = {
  cart: [],
  payment: {},
  address: {},
};

const shoppingCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CART:
      const foundProduct = state.cart.find(
        (item) => item.product.id == action.payload.id
      );
      if (foundProduct != null) {
        const updatedCart = state.cart.map((item) =>
          item.product.id == action.payload.id
            ? { ...item, count: item.count + 1 }
            : { ...item }
        );
        return {
          ...state,
          cart: updatedCart,
        };
      } else {
        const newCart = [
          ...state.cart,
          {
            count: 1,
            product: action.payload,
          },
        ];
        return {
          ...state,
          cart: newCart,
        };
      }
    case PLUS_CART:
      return {};
    default:
      return state;
  }
};
export default shoppingCartReducer;
