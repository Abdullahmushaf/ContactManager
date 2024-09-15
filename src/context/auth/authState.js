import React, { useReducer } from "react";
import AuthContext from "./authContext";
import reducer from "./authReducer";
import axiosInstance from "../../dataProvider";
import { LOGIN_FAIL, LOGIN_SUCCESS, REGISTER_SUCCESS } from "../type";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: false,
  isLoading: true,
  user: null,
  error: null,
};

const AuthState = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const registerUserHandler = async (data) => {
    try {
      // const config = {
      //   headrers: {
      //     "Content-Type": "application/json",
      //   },
      // };

      const res = await axiosInstance.post("/users", data);
      dispatch({ type: REGISTER_SUCCESS, payload: res.data });
    } catch (err) {
      dispatch({
        type: LOGIN_FAIL,
        payload: err?.response?.data?.msg ?? err?.response?.data?.errors,
      });
      console.log(err);
    }
  };

  const loginUserHandler = async (data) => {
    try {
      const res = await axiosInstance.post("/auth", data);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    } catch (err) {
      dispatch({
        type: LOGIN_FAIL,
        payload: err.response.data?.msg ?? err.response.data?.errors,
      });
      console.log(err);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        registerUserHandler,
        loginUserHandler,
        error: state.error,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthState;
