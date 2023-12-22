import axios from "axios";
import { api } from "../../api/api";

export const FETCH_PRODUCTS = "fetch products";

export const fetchProductsAction = () => (dispatch) => {
  axios
    .get(`${api}products`)
    .then((res) => {
      dispatch({ type: FETCH_PRODUCTS, payload: res.data });
    })
    .catch((error) => console.error(error));
};
