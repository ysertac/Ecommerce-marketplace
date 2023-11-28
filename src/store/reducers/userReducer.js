import { FETCH_REGISTER, SET_USER, VERIFY_USER } from "../actions/userActions";

const initialState = {
  spinner: false,
  user: {},
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
        spinner: !state.spinner,
      };
    case FETCH_REGISTER:
      return {
        ...state,
        spinner: !state.spinner,
      };
    case VERIFY_USER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};
export default userReducer;
