import axios from "axios";
import { api } from "../../api/api";

export const FETCH_PRODUCTS = "fetch products";
export const PAGINATE_PRODUCTS = "paginate products";
export const CHANGE_PAGE_PRODUCTS = "change page";
export const CATEGORY_PRODUCTS = "filter by category";

export const fetchProductsAction = (param, categoryParam) => (dispatch) => {
  axios
    .get(
      `${api}products/?limit=${24}&offset=${
        param * 24
      }&category=${categoryParam}`
    )
    .then((res) => {
      dispatch({ type: FETCH_PRODUCTS, payload: res.data.products });
    })
    .catch((error) => console.error(error));
};

export const paginateProductsAction = (param, categoryParam) => (dispatch) => {
  axios
    .get(`${api}products/?limit=${null}&category=${categoryParam}`)
    .then((res) => {
      dispatch({ type: PAGINATE_PRODUCTS, payload: res.data.products });
    })
    .catch((error) => console.error(error));
};

export const changePageAction = (param) => {
  return {
    type: CHANGE_PAGE_PRODUCTS,
    payload: param,
  };
};
