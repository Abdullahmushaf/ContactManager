import {
  AUTH_FAIL,
  CLEAR_ERRORS,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
} from "../type";

const reducer = (state, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        token: localStorage.getItem("token"),
      };
    case LOGIN_FAIL:
    case REGISTER_FAIL:
    case AUTH_FAIL:
      return {
        ...state,
        isAuthenticated: false,
        isLoading: false,
        use: null,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        isAuthenticated: false,
        isLoading: true,
        user: null,
        error: null,
      };

    default:
      return state;
  }
};

export default reducer;
