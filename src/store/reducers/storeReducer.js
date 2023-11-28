import { SET_STORE } from "../actions/storeActions";

const initialState = {};

const storeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_STORE:
      return { ...action.payload };
    default:
      return state;
  }
};
export default storeReducer;
