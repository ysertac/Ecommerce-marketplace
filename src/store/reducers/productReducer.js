import {
  CHANGE_PAGE_PRODUCTS,
  FETCH_PRODUCTS,
  PAGINATE_PRODUCTS,
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
        productList: action.payload,
      };
    case PAGINATE_PRODUCTS:
      return {
        ...state,
        totalProductCount: action.payload.length,
        pageCount: action.payload.length / 24,
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
