import axios from "axios";
import { api } from "../../api/api";
export const FETCH_ROLES = "fetch roles";

export const fetchRolesAction = () => (dispatch) => {
  axios
    .get(`${api}roles`)
    .then((res) => {
      dispatch({ type: FETCH_ROLES, payload: res.data });
    })
    .catch((error) => console.error(error));
};
