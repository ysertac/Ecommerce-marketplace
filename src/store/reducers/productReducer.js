import { SET_PRODUCTS } from "../actions/productActions";

const initialState = {
  producList: [],
  totalProductCount: 0,
  pageCount: 0,
  activePage: 0,
  fetchState: "",
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return { ...action.payload };
    default:
      return state;
  }
};
export default productReducer;
