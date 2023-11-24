import { FETCH_REGISTER, FETCH_USER } from "../actions/userActions";

const initialState = {
  message: "",
  spinner: false,
  user: {},
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER:
      return {
        ...state,
        user: action.payload,
        spinner: !state.spinner,
      };
    case FETCH_REGISTER:
      return {
        ...state,
        message: action.payload,
        spinner: !state.spinner,
      };
    default:
      return state;
  }
};
export default userReducer;
