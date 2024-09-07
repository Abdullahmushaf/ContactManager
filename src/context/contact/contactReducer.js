import {
  ADD_CONTACT,
  CLEAR_CURRENT_CONTACT,
  CURRENT_CONTACT,
  GET_CONTACTS,
  UPDATE_CONTACT,
} from "../type";

const contactReducer = (state, action) => {
  switch (action.type) {
    case GET_CONTACTS:
      return {
        ...state,
        contacts: action.payload,
      };
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [action.payload, ...state.contacts],
      };
    case CURRENT_CONTACT:
      return {
        ...state,
        currentContact: action.payload,
      };

    case UPDATE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map((d) => {
          if (action.payload.id === d.id) {
            return {
              ...action.payload,
            };
          }

          return d;
        }),
      };

    case CLEAR_CURRENT_CONTACT:
      return {
        ...state,
        currentContact: null,
      };

    default:
      return state;
  }
};

export default contactReducer;
