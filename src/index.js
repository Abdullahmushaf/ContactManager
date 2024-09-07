import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ContactState from "./context/contact/contactState";
import AuthState from "./context/auth/authState";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthState>
        <ContactState>
          <App />
        </ContactState>
      </AuthState>
    </BrowserRouter>
  </React.StrictMode>
);
