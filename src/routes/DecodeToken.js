import { jwtDecode } from "jwt-decode";
import { Navigate } from "react-router-dom";
import storageInstance from "../services/Storage";

//Decode JWT
function DecodeToken(token) {
  try {
    const decodedToken = jwtDecode(token);

    return decodedToken;
  } catch (error) {
    storageInstance.clearLocal();
    return <Navigate to="/" />;
  }
}

export default DecodeToken;
