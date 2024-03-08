import axios from "axios";
import { api } from "../../api/api";
import { type } from "@testing-library/user-event/dist/type";

export const ADD_CART = "set cart";
export const PLUS_CART = "plus cart";
export const addItemCart = (item) => {
  return { type: ADD_CART, payload: item };
};

export const plusItemCart = (count) => {
  return { type: PLUS_CART, payload: count + 1 };
};
