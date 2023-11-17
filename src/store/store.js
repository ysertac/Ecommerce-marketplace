import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { reducer } from "./reducers";
import logger from "redux-logger";

export const store = createStore(reducer, applyMiddleware(thunk, logger));
