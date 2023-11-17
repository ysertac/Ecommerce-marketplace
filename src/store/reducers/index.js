import { combineReducers } from "redux";
import globalReducer from "./globalReducer";
import productReducer from "./productReducer";
import storeReducer from "./storeReducer";
import shoppingCartReducer from "./shoppingCartReducer";
import userReducer from "./userReducer";

export const reducer = combineReducers({
  global: globalReducer,
  product: productReducer,
  store: storeReducer,
  shopping: shoppingCartReducer,
  user: userReducer,
});
