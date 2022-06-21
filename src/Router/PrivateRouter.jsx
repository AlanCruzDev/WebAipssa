import React from "react";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  //const token = JSON.parse(localStorage.getItem("0"));
    const token = '1';
  return token === 'puto' ? children : <Navigate to="/*" />;
};
