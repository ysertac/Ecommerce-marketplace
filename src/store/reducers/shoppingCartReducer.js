import { SET_CART } from "../actions/shoppingCartActions";

const initialState = {
  cart: [],
  payment: {},
  address: {},
};

const shoppingCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CART:
      return {
        ...action.payload,
      };
    default:
      return state;
  }
};
export default shoppingCartReducer;
