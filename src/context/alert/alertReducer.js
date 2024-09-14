import { CLEAR_ALERT, SET_ALERT } from "../type";

const reducer = (state, action) => {
  switch (action.type) {
    case SET_ALERT:
      return [action.payload, ...state];
    case CLEAR_ALERT:
      return state.filter((d) => d.id !== action.payload);
    default:
      return state;
  }
};

export default reducer;
