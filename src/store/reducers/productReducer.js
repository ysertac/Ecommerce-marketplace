import {
  CHANGE_PAGE_PRODUCTS,
  FETCH_PRODUCTS,
} from "../actions/productActions";

const initialState = {
  productList: [],
  totalProductCount: 0,
  pageCount: 0,
  activePage: 0,
  fetchState: "",
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        productList: action.payload.products,
        pageCount: Math.ceil(action.payload.total / 24),
      };
    case CHANGE_PAGE_PRODUCTS:
      return {
        ...state,
        activePage: action.payload,
      };
    default:
      return state;
  }
};
export default productReducer;
