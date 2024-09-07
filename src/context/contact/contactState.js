import React, { useReducer } from "react";
import ContactContext from "./contactContext";
import contactReducer from "./contactReducer";
import {
  ADD_CONTACT,
  CLEAR_CURRENT_CONTACT,
  CURRENT_CONTACT,
  UPDATE_CONTACT,
} from "../type";

const initialState = {
  contacts: [
    {
      id: 1,
      firstName: "Basit",
      lastName: "Hussain",
      email: "basit@email.com",
      contact: "+92 333 333 3333",
    },
    {
      id: 2,
      firstName: "Basit",
      lastName: "Hussain",
      email: "basit@email.com",
      contact: "+92 333 333 3333",
    },
    {
      id: 3,
      firstName: "Basit",
      lastName: "Hussain",
      email: "basit@email.com",
      contact: "+92 333 333 3333",
    },
    {
      id: 4,
      firstName: "Basit",
      lastName: "Hussain",
      email: "basit@email.com",
      contact: "+92 333 333 3333",
    },
    {
      id: 5,
      firstName: "Basit",
      lastName: "Hussain",
      email: "basit@email.com",
      contact: "+92 333 333 3333",
    },
    {
      id: 6,
      firstName: "Basit",
      lastName: "Hussain",
      email: "basit@email.com",
      contact: "+92 333 333 3333",
    },
  ],
  currentContact: null,
  filteredContacts: [],
};

const ContactState = ({ children }) => {
  const [state, dispatch] = useReducer(contactReducer, initialState);

  const getAllContactsHandler = () => {
    console.log("get all Contacts");
  };

  const addContactHandler = (data) => {
    dispatch({
      type: ADD_CONTACT,
      payload: data,
    });
  };

  const currentContactHandler = (data) => {
    dispatch({
      type: CURRENT_CONTACT,
      payload: data,
    });
  };

  const updateContactHandler = (data) => {
    dispatch({
      type: UPDATE_CONTACT,
      payload: data,
    });
  };

  const clearCurrentContactHandler = () => {
    dispatch({
      type: CLEAR_CURRENT_CONTACT,
    });
  };

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        currentContact: state.currentContact,
        filteredContacts: state.filteredContacts,
        addContactHandler,
        currentContactHandler,
        updateContactHandler,
        clearCurrentContactHandler,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};

export default ContactState;
