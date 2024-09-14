import React, { useReducer } from "react";
import AlertContext from "./alertContext";
import reducer from "./alertReducer";
import { CLEAR_ALERT, SET_ALERT } from "../type";

const initialState = [];
//   id: Math.floor(Math.random() * 9000000) + 1000000,

const AlertState = ({ children }) => {
  const id = Math.floor(Math.random() * 9000000) + 1000000;

  const [state, dispatch] = useReducer(reducer, initialState);

  const alertHandler = (msg, type, timeout = 5000) => {
    dispatch({
      type: SET_ALERT,
      payload: {
        id,
        msg,
        type,
      },
    });

    setTimeout(() => {
      dispatch({
        type: CLEAR_ALERT,
        payload: id,
      });
    }, timeout);
  };
  return (
    <AlertContext.Provider value={{ alert: state, alertHandler }}>
      {children}
    </AlertContext.Provider>
  );
};

export default AlertState;
