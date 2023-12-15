import { FETCH_CATEGORIES, FETCH_ROLES } from "../actions/globalActions";

const initialState = {
  roles: [],
  categories: [],
  theme: "",
  language: "",
};

const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ROLES:
      return { ...state, roles: action.payload };
    case FETCH_CATEGORIES:
      return { ...state, categories: action.payload };
    default:
      return state;
  }
};
export default globalReducer;

//! DENEME!!!
