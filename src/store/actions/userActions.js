import axios from "axios";
import { api } from "../../api/api";
import { toast } from "react-toastify";
export const FETCH_USER = "fetchUser";
export const FETCH_REGISTER = "fetchRegister";

export const fetchUser = (data, history) => (dispatch) => {
  axios
    .post(`${api}login`, data)
    .then((res) => {
      dispatch({ type: FETCH_USER, payload: res.data });
      localStorage.setItem("user", JSON.stringify(res.data));
      toast.success(`Welcome ${res.data.name}`);
      history.push("/");
    })
    .catch((error) => {
      dispatch({ type: FETCH_USER, payload: {} });
      toast.error(error.response.data.message);
    })
    .finally(dispatch({ type: FETCH_USER, payload: {} }));
};

export const fetchRegister = (data, history) => (dispatch) => {
  axios
    .post(`${api}signup`, data)
    .then((response) => {
      dispatch({ type: FETCH_REGISTER, payload: response.data.message });
      history.push("/");
      toast.success(response.data.message);
    })
    .catch((error) => {
      dispatch({ type: FETCH_REGISTER, payload: error.response.data.error });
      toast.error(error.response.data.error);
    })
    .finally(dispatch({ type: FETCH_REGISTER, payload: "" }));
};
