import React from "react";
import AuthContext from "./authContext";

const AuthState = ({ children }) => {
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: true,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthState;
