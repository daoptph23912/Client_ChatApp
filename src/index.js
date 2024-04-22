import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Signin_signup/Login";
import Signup from "./Signin_signup/Signup";
import LoginBkav from "./Signin_signup/LoginBkav";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/login" Component={Login} />
        <Route path="/signup" Component={Signup} />
        <Route path="/chat" Component={App} />
        <Route path="/loginBkav" Component={LoginBkav} />
        <Route path="/loginBkav" element={<LoginBkav />} />
        
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
