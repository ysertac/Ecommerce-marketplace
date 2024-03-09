import API from "../../api/api";
export const FETCH_PRODUCTS = "fetch products";
export const CHANGE_PAGE_PRODUCTS = "change page";

export const fetchProductsAction =
  (param, categoryParam, filterParam, sortParam) => (dispatch) => {
    API.get(
      `products/?limit=24&offset=${
        param * 24
      }&category=${categoryParam}&filter=${filterParam}&sort=${sortParam}`
    )
      .then((res) => {
        dispatch({ type: FETCH_PRODUCTS, payload: res.data });
      })
      .catch((error) => console.error(error));
  };

export const changePageAction = (param) => {
  return {
    type: CHANGE_PAGE_PRODUCTS,
    payload: param,
  };
};
