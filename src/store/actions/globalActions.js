import axios from "axios";
import { api } from "../../api/api";
export const FETCH_ROLES = "fetch roles";
export const FETCH_CATEGORIES = "fetch categories";

export const fetchRolesAction = () => (dispatch) => {
  axios
    .get(`${api}roles`)
    .then((res) => {
      dispatch({ type: FETCH_ROLES, payload: res.data });
    })
    .catch((error) => console.error(error));
};

export const fetchCategoriesAction = () => (dispatch) => {
  axios
    .get(`${api}categories`)
    .then((res) => {
      dispatch({ type: FETCH_CATEGORIES, payload: res.data });
    })
    .catch((error) => console.error(error));
};
