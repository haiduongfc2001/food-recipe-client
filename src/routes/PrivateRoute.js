import React from "react";
import { Navigate } from "react-router-dom";
import storageInstance from "../services/Storage";
import DecodeToken from "./DecodeToken";

const PrivateRoute = ({ children }) => {
  const jwt = storageInstance.getLocalFoodRecipeToken();
  if (!jwt || jwt === "undefined") {
    return <Navigate to="/login" />;
  }

  const decodedToken = DecodeToken(jwt);

  let currentDate = new Date();

  // JWT exp is in seconds
  if (decodedToken.exp * 1000 < currentDate.getTime()) {
    storageInstance.clearLocal();
    return <Navigate to="/login" />;
  } else {
    return children;
  }
};

export default PrivateRoute;
